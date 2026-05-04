import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export const metadata = {
  title: 'AiroPhone vs The Competition — Compare Business Phone Platforms',
  description: 'See how AiroPhone compares to Quo (OpenPhone), Google Voice, Grasshopper, RingCentral, and Dialpad. AI-powered calling and SMS starting at $9/mo.',
}

function Logo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

const comparisons = [
  {
    slug: 'quo',
    competitor: 'Quo (OpenPhone)',
    tagline: 'AiroPhone vs Quo',
    description: 'Quo starts at $15/user/mo. AiroPhone starts at $9 flat — with AI scenarios, bulk SMS, and no per-seat pricing.',
    badge: 'Most searched',
    theirPrice: '$15/user/mo',
    ourPrice: '$9/mo flat',
    wins: ['No per-user pricing', 'AI scenario automation', 'Bulk SMS campaigns'],
  },
  {
    slug: 'google-voice',
    competitor: 'Google Voice',
    tagline: 'AiroPhone vs Google Voice',
    description: "Google Voice requires a Google Workspace subscription and has no AI, no campaigns, and no automation. AiroPhone is built for business from day one.",
    badge: 'High volume',
    theirPrice: '$10/user + Workspace',
    ourPrice: '$9/mo flat',
    wins: ['No Google Workspace required', 'AI auto-replies', 'Bulk SMS & campaigns'],
  },
  {
    slug: 'grasshopper',
    competitor: 'Grasshopper',
    tagline: 'AiroPhone vs Grasshopper',
    description: "Grasshopper is old-school call forwarding. AiroPhone is an AI-native platform with unified inbox, automation, and real two-way messaging.",
    badge: 'Popular search',
    theirPrice: '$28–$80/mo',
    ourPrice: '$9/mo flat',
    wins: ['AI scenarios & auto-replies', 'Unified team inbox', 'Bulk SMS campaigns'],
  },
  {
    slug: 'ringcentral',
    competitor: 'RingCentral',
    tagline: 'AiroPhone vs RingCentral',
    description: "RingCentral is built for enterprise IT teams. AiroPhone is built for the businesses that want the features without the complexity or the price tag.",
    badge: 'Enterprise alternative',
    theirPrice: '$20/user/mo',
    ourPrice: '$9/mo flat',
    wins: ['Set up in minutes', 'No IT team required', 'AI-native from day one'],
  },
  {
    slug: 'dialpad',
    competitor: 'Dialpad',
    tagline: 'AiroPhone vs Dialpad',
    description: "Dialpad charges $27/user/mo minimum. AiroPhone delivers AI-powered calling and SMS for your whole team at $9 flat — no per-seat tax.",
    badge: 'AI alternative',
    theirPrice: '$27/user/mo',
    ourPrice: '$9/mo flat',
    wins: ['3x cheaper entry price', 'AI included on every plan', 'Credit-based, not seat-based'],
  },
]

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-bg font-sans">

      <Nav />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight leading-tight mb-5">
            AiroPhone vs the competition
          </h1>
          <p className="text-lg text-text2 leading-relaxed max-w-xl mx-auto">
            See how AiroPhone stacks up against the most popular business phone platforms. AI-powered, simpler, and starting at $9/mo.
          </p>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group bg-surface border border-border rounded-2xl p-6 flex flex-col hover:border-red hover:shadow-[0_0_0_1px_#D63B1F] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] text-red bg-red-bg border border-red-dim rounded-full px-2.5 py-1 uppercase tracking-wider">
                  {c.badge}
                </span>
              </div>

              <h2 className="text-base font-semibold text-text tracking-tight mb-2 group-hover:text-red transition-colors">
                {c.tagline}
              </h2>
              <p className="text-sm text-text2 leading-relaxed mb-5 flex-1">
                {c.description}
              </p>

              <div className="bg-bg rounded-xl p-4 mb-5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] font-mono text-text3 uppercase tracking-wider mb-1">AiroPhone</p>
                    <p className="text-sm font-semibold text-red">{c.ourPrice}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-text3 uppercase tracking-wider mb-1">{c.competitor}</p>
                    <p className="text-sm font-semibold text-text2">{c.theirPrice}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {c.wins.map((w) => (
                  <li key={w} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <circle cx="7" cy="7" r="6" fill="#D63B1F"/>
                      <path d="M4.5 7l1.75 1.75L9.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-text2">{w}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1.5 text-sm font-medium text-red">
                <span>See full comparison</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Get started</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-4">
            Try AiroPhone free for 7 days
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Set up in minutes. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://app.airophone.com/signup"
              className="w-full sm:w-auto bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity text-center"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-surface border border-border text-text rounded-lg px-6 py-3 text-sm font-medium hover:bg-bg transition-colors text-center"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
