'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initAnalytics, captureAttribution, trackPageview } from '../lib/analytics'

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initAnalytics()
    captureAttribution()
  }, [])

  useEffect(() => {
    trackPageview(pathname)
  }, [pathname, searchParams])

  return children
}
