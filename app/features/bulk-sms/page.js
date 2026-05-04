import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Bulk SMS — Send thousands of messages in seconds | AiroPhone',
  description: 'Build contact lists, schedule campaigns, personalize at scale, track replies, manage opt-outs — all from one dashboard.',
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

const STATS = [
  { value: '50k+', label: 'Messages / day' },
  { value: '99%', label: 'Delivery rate' },
  { value: 'Real-time', label: 'Analytics' },
]

const STEPS = [
  { n: '01', title: 'Upload contacts or build a list', desc: 'Import a CSV, connect an integration, or build your list manually with tags and segments.' },
  { n: '02', title: 'Write your message with merge fields', desc: 'Personalize at scale using first name, custom fields, and dynamic content — one message, thousands of variations.' },
  { n: '03', title: 'Schedule or send immediately', desc: 'Send now or schedule for the perfect time. AiroPhone handles delivery, retries, and real-time tracking.' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Contact Management',
    desc: 'Organize contacts with tags, segments, and custom fields. Import via CSV or sync from your CRM.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Message Scheduling',
    desc: 'Schedule campaigns days in advance. Set the exact send time and let AiroPhone handle the rest.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Personalization',
    desc: 'Use merge fields like {first_name} and dynamic blocks to make every message feel 1:1.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
      </svg>
    ),
    title: 'Opt-out Management',
    desc: 'STOP and UNSUBSCRIBE handled automatically. Stay compliant without any manual effort.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Delivery Analytics',
    desc: 'Track delivered, failed, replied, and opted-out in real time. Drill into any campaign for full detail.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Two-way SMS',
    desc: 'Replies land in your unified inbox. Respond manually or let AI Scenarios handle them automatically.',
  },
]

const USE_CASES = [
  {
    industry: 'Real Estate',
    icon: '🏡',
    title: 'Listing alerts at scale',
    desc: 'Send personalized new listing alerts to thousands of buyers the moment a property hits the market. Track who replies and who opts out.',
  },
  {
    industry: 'Law Firms',
    icon: '⚖️',
    title: 'Appointment reminders',
    desc: 'Reduce no-shows with automated appointment reminder texts to clients. Follow up with a confirmation request automatically.',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    title: 'Patient outreach',
    desc: 'Reach patients with appointment reminders, follow-up care instructions, or seasonal wellness campaigns — all HIPAA-mindfully.',
  },
]

export default function BulkSmsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 pt-7 pb-2 text-[12.5px] text-text3 font-mono">
          <Link href="/features" className="hover:text-text2 transition-colors no-underline">Features</Link>
          <span>/</span>
          <span className="text-text2">Bulk SMS</span>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-16 sm:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">Bulk SMS</span>
          </div>
          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            Send thousands of messages<br className="hidden sm:block" /> in seconds
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            Build contact lists, schedule campaigns, personalize at scale, track replies, manage opt-outs — all from one dashboard.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://app.airophone.com/signup" className="inline-flex items-center gap-2 bg-red text-white px-6 py-3 rounded-lg text-[14px] font-medium no-underline hover:opacity-90 transition-opacity">
              Try for free →
            </a>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-border bg-surface text-text2 px-6 py-3 rounded-lg text-[14px] no-underline hover:text-text hover:bg-bg transition-colors">
              See pricing
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-3 gap-4 pb-20 border-b border-border">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface border border-border rounded-xl px-6 py-6 sm:py-8 text-center">
              <div className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.04em] text-text">{s.value}</div>
              <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mt-1.5">{s.label}</div>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 border-b border-border">
          <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">How it works</div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">From list to delivery in three steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-red-bg border border-red/20 flex items-center justify-center font-mono text-[12px] text-red font-semibold">
                  {step.n}
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-text tracking-tight mb-2">{step.title}</div>
                  <div className="text-[14px] text-text2 leading-[1.65] font-light">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="py-20 border-b border-border">
          <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Key capabilities</div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Everything you need to run SMS at scale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="bg-surface border border-border rounded-xl p-6 hover:border-red/30 transition-colors group">
                <div className="w-10 h-10 rounded-[9px] border border-border flex items-center justify-center text-text2 mb-4 group-hover:border-red group-hover:text-red transition-colors">
                  {cap.icon}
                </div>
                <div className="text-[15px] font-semibold text-text tracking-tight mb-2">{cap.title}</div>
                <div className="text-[13.5px] text-text2 leading-[1.65] font-light">{cap.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 border-b border-border">
          <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Use cases</div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Built for how your industry communicates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {USE_CASES.map((uc) => (
              <div key={uc.industry} className="bg-surface border border-border rounded-xl p-6">
                <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-4">{uc.industry}</div>
                <div className="text-[15px] font-semibold text-text tracking-tight mb-2">{uc.title}</div>
                <div className="text-[13.5px] text-text2 leading-[1.65] font-light">{uc.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING TEASER */}
        <section className="py-16 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-2">Pricing</div>
            <div className="text-[18px] font-semibold text-text tracking-tight">Included on all plans from <span className="text-red">$9/mo</span></div>
            <div className="text-[13.5px] text-text2 font-light mt-1">Bulk SMS included. Pay only for credits used beyond your plan.</div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 border border-border bg-surface text-text2 px-5 py-2.5 rounded-lg text-[13.5px] no-underline hover:text-text hover:bg-bg transition-colors whitespace-nowrap">
            View pricing →
          </Link>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="bg-surface border border-border rounded-2xl px-8 sm:px-14 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Get started</div>
              <div className="text-[clamp(22px,2.5vw,34px)] font-semibold tracking-[-0.03em] text-text leading-[1.15]">
                Reach thousands.<br />Start with one message.
              </div>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Import your list, write your first campaign, and send in minutes. No setup fees, no contracts.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="https://app.airophone.com/signup" className="inline-flex items-center gap-2 bg-red text-white px-6 py-3.5 rounded-lg text-[14px] font-medium no-underline hover:opacity-90 transition-opacity">
                Try for free →
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center text-[13px] text-text3 no-underline hover:text-text2 transition-colors">
                See all plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
