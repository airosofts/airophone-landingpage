import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export const metadata = {
  title: 'AiroPhone Blog — Guides, Tips & Resources',
  description: 'Practical guides on SMS marketing, virtual phone numbers, and business phone systems for small businesses. Learn how to grow with AiroPhone.',
}

function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

const posts = [
  {
    slug: 'best-business-phone-systems',
    category: 'Business Phone',
    title: 'Best Business Phone Systems for Small Businesses in 2026',
    description: 'Compare the top business phone systems on pricing, AI features, and ease of setup — with a clear recommendation for growing teams.',
    readTime: '7 min read',
    date: 'April 2026',
  },
  {
    slug: 'sms-marketing-guide',
    category: 'SMS Marketing',
    title: 'The Complete SMS Marketing Guide for Small Businesses',
    description: 'Everything you need to know about SMS marketing: compliance, campaign types, best practices, and how to measure results.',
    readTime: '8 min read',
    date: 'April 2026',
  },
  {
    slug: 'virtual-phone-number-guide',
    category: 'Virtual Phone',
    title: 'How to Get a Virtual Business Phone Number',
    description: 'What virtual phone numbers are, the types available, what to look for, and how to get one set up in minutes with AiroPhone.',
    readTime: '6 min read',
    date: 'April 2026',
  },
]

const categoryColors = {
  'Business Phone': 'text-red bg-red-bg',
  'SMS Marketing': 'text-red bg-red-bg',
  'Virtual Phone': 'text-red bg-red-bg',
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-bg font-sans">

      <Nav />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight leading-tight mb-5">
            Guides, tips &amp; resources
          </h1>
          <p className="text-lg text-text2 leading-relaxed max-w-xl mx-auto">
            Practical advice on SMS marketing, virtual phone numbers, and building a modern business phone setup — without the enterprise price tag.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-surface border border-border rounded-2xl p-6 flex flex-col hover:border-red hover:shadow-[0_0_0_1px_#D63B1F] transition-all group">
              <div className="mb-4">
                <span className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-transparent ${categoryColors[post.category] || 'text-red bg-red-bg'}`}>
                  {post.category}
                </span>
              </div>
              <h2 className="text-base font-semibold text-text tracking-tight leading-snug mb-3 group-hover:text-red transition-colors flex-1">
                {post.title}
              </h2>
              <p className="text-sm text-text2 leading-relaxed mb-5">
                {post.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="font-mono text-[11px] text-text3">{post.date} &middot; {post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm font-medium text-red hover:opacity-75 transition-opacity"
                >
                  Read article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Get started</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-4">
            Ready to put it into practice?
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            AiroPhone gives you AI-powered calling, bulk SMS, and a dedicated business number — starting at $9/mo.
          </p>
          <Link
            href="https://app.airophone.com/signup"
            className="inline-flex items-center gap-2 bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Try AiroPhone free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
