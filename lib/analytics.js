// Analytics + first-touch attribution for the landing site.
// Loads PostHog if NEXT_PUBLIC_POSTHOG_KEY is set; otherwise no-ops.

import posthog from 'posthog-js'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const ATTRIBUTION_STORAGE_KEY = 'airo_attribution'

let initialized = false

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  if (POSTHOG_KEY) {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false, // we'll call manually after attribution capture
      person_profiles: 'identified_only',
    })
  }
  initialized = true
}

// Records first-touch UTM + referrer in localStorage. Only writes if no
// existing record — first touch wins for attribution purposes.
export function captureAttribution() {
  if (typeof window === 'undefined') return null

  let existing = null
  try {
    existing = JSON.parse(localStorage.getItem(ATTRIBUTION_STORAGE_KEY) || 'null')
  } catch { /* ignore corrupt */ }

  if (existing) return existing

  const params = new URLSearchParams(window.location.search)
  const utm = {}
  for (const k of UTM_KEYS) {
    const v = params.get(k)
    if (v) utm[k] = v
  }

  // Heuristic source detection when no UTM is set (e.g. organic Reddit click)
  const referrer = document.referrer || ''
  let inferredSource = null
  if (referrer) {
    try {
      const host = new URL(referrer).hostname.replace(/^www\./, '')
      if (host.includes('reddit.com')) inferredSource = 'reddit'
      else if (host.includes('google.')) inferredSource = 'google'
      else if (host.includes('twitter.com') || host.includes('x.com')) inferredSource = 'twitter'
      else if (host.includes('facebook.com')) inferredSource = 'facebook'
      else if (host.includes('linkedin.com')) inferredSource = 'linkedin'
      else if (host) inferredSource = host
    } catch { /* ignore bad referrer */ }
  }

  // Don't write a record if there's nothing useful — keeps first-touch capture
  // open for a later visit that does have a source.
  if (!Object.keys(utm).length && !inferredSource) return null

  const record = {
    ...utm,
    referrer,
    inferred_source: inferredSource,
    landing_page: window.location.pathname,
    captured_at: new Date().toISOString(),
  }

  try { localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(record)) } catch {}

  if (POSTHOG_KEY) {
    posthog.register(record) // attach to every subsequent event
  }

  return record
}

export function trackPageview(pathname) {
  if (!POSTHOG_KEY) return
  posthog.capture('$pageview', { $current_url: typeof window !== 'undefined' ? window.location.href : pathname })
}

export function trackEvent(name, props = {}) {
  if (!POSTHOG_KEY) return
  posthog.capture(name, props)
}

export function getStoredAttribution() {
  if (typeof window === 'undefined') return null
  try { return JSON.parse(localStorage.getItem(ATTRIBUTION_STORAGE_KEY) || 'null') }
  catch { return null }
}
