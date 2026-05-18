// Auto-served at https://airophone.com/sitemap.xml
// Edit BASE_URL below if the canonical host ever changes.

const BASE_URL = 'https://airophone.com'

// All public routes. Grouped by intent so future edits are obvious.
const ROUTES = [
  // Core
  { path: '',          changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/pricing',  changeFrequency: 'monthly', priority: 0.9 },
  { path: '/signup',   changeFrequency: 'monthly', priority: 0.9 },
  { path: '/referral', changeFrequency: 'monthly', priority: 0.5 },

  // Features
  { path: '/features/voip-calling',    changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features/bulk-sms',        changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features/ai-scenarios',    changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features/unified-inbox',   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features/phone-numbers',   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features/call-recording',  changeFrequency: 'monthly', priority: 0.7 },

  // Compare
  { path: '/compare',                   changeFrequency: 'monthly', priority: 0.7 },
  { path: '/compare/quo',               changeFrequency: 'monthly', priority: 0.6 },
  { path: '/compare/google-voice',      changeFrequency: 'monthly', priority: 0.6 },
  { path: '/compare/grasshopper',       changeFrequency: 'monthly', priority: 0.6 },
  { path: '/compare/ringcentral',       changeFrequency: 'monthly', priority: 0.6 },
  { path: '/compare/dialpad',           changeFrequency: 'monthly', priority: 0.6 },

  // Blog
  { path: '/blog',                                       changeFrequency: 'weekly',  priority: 0.7 },
  { path: '/blog/best-business-phone-systems',           changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog/sms-marketing-guide',                   changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog/virtual-phone-number-guide',            changeFrequency: 'monthly', priority: 0.6 },

  // Legal
  { path: '/terms',    changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy',  changeFrequency: 'yearly', priority: 0.3 },
  { path: '/fair-use', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const lastModified = new Date()
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
