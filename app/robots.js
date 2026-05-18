// Auto-served at https://airophone.com/robots.txt

const BASE_URL = 'https://airophone.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Anything you don't want indexed goes here. The signup page is debatable —
        // leaving it crawlable so brand searches surface a clear conversion path.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
