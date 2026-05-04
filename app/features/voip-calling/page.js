import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'VoIP Calling — Crystal-clear business calls, no carrier required | AiroPhone',
  description: 'Make and receive calls over data. Multiple lines, call transfer, voicemail, full call logs — no traditional carrier plan needed.',
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
  { value: 'Unlimited', label: 'Lines' },
  { value: '<1s', label: 'Connect time' },
  { value: '99%', label: 'Uptime' },
]

const STEPS = [
  { n: '01', title: 'Pick a number', desc: 'Search by area code or zip and claim a local or toll-free number in seconds.' },
  { n: '02', title: 'Add team members', desc: 'Invite your team and assign lines, extensions, and permissions from the dashboard.' },
  { n: '03', title: 'Start calling from any device', desc: 'Make and receive HD calls from your browser, desktop app, or mobile — no hardware needed.' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="6" x2="19" y2="6"/><line x1="5" y1="18" x2="19" y2="18"/>
      </svg>
    ),
    title: 'Multiple Lines',
    desc: 'Run separate numbers for sales, support, and different locations — all in one account.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
    title: 'Call Transfer',
    desc: 'Warm or cold transfer any call to a teammate in one tap. Keep callers happy, never on hold.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01 0 1.19 2 2 0 012 3H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17v-.08z"/>
        <path d="M15 7a4 4 0 010 5.657M18.5 3.5a9 9 0 010 12.728"/>
      </svg>
    ),
    title: 'Voicemail',
    desc: 'Missed calls go straight to voicemail. Get notified instantly and listen from any device.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Call Logs & History',
    desc: 'Full call history with timestamps, duration, direction, and contact info — searchable and exportable.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/>
      </svg>
    ),
    title: 'HD Voice Quality',
    desc: 'Wideband audio over data means calls sound better than a traditional carrier — even on mobile.',
  },
]

const USE_CASES = [
  {
    industry: 'Real Estate',
    icon: '🏡',
    title: 'Agents managing multiple properties',
    desc: 'Use separate lines per market, transfer buyer calls to the right agent instantly, and review call logs to track lead sources.',
  },
  {
    industry: 'Law Firms',
    icon: '⚖️',
    title: 'Handling client intake',
    desc: 'Route new client calls to intake specialists, record consultations for documentation, and never miss a call with voicemail-to-dashboard.',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    title: 'Routing patient calls',
    desc: 'Separate lines for billing, scheduling, and clinical. Transfer patients seamlessly and keep full call history per contact.',
  },
]

export default function VoipCallingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 pt-7 pb-2 text-[12.5px] text-text3 font-mono">
          <Link href="/features" className="hover:text-text2 transition-colors no-underline">Features</Link>
          <span>/</span>
          <span className="text-text2">VoIP Calling</span>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-16 sm:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">VoIP Calling</span>
          </div>
          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            Crystal-clear business calls,<br className="hidden sm:block" /> no carrier required
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            Make and receive calls over data. Multiple lines, call transfer, voicemail, full call logs — no traditional carrier plan needed.
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Up and running in minutes</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Everything your team needs to call</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Built for how your industry works</h2>
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
            <div className="text-[13.5px] text-text2 font-light mt-1">No setup fees. No per-line charges. Full VoIP on every plan.</div>
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
                Your business phone,<br />no carrier required.
              </div>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Set up VoIP calling in minutes. Add lines, invite your team, and start taking calls from any device.
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
