import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Call Recording — Record, review, and improve every call | AiroPhone',
  description: 'Every call automatically recorded and stored. Review conversations, coach your team, and stay compliant — all from your dashboard.',
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
  { value: 'Auto', label: 'Recorded' },
  { value: 'Instant', label: 'Playback' },
  { value: '90-day', label: 'Storage' },
]

const STEPS = [
  { n: '01', title: 'Enable recording in settings', desc: 'Turn on call recording for your account or specific numbers in one click. No configuration required.' },
  { n: '02', title: 'All calls recorded automatically', desc: 'Every inbound and outbound call is captured at full quality. Nothing is missed, nothing is manual.' },
  { n: '03', title: 'Listen, download, or share any recording', desc: 'Find any call by date, number, or contact. Play it back instantly, download the file, or share a link with your team.' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Automatic Recording',
    desc: 'Enable once and every call is captured — inbound and outbound, across all your lines.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    title: 'Instant Playback',
    desc: 'Listen to any recording directly in your dashboard. No downloads needed, no waiting.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: 'Download & Share',
    desc: 'Download any recording as an audio file or share a secure link directly with teammates or clients.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Call Logs & Timestamps',
    desc: 'Every recording is paired with full call metadata — time, duration, direction, caller ID, and contact.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Team Coaching',
    desc: 'Share recordings with managers for call review. Add timestamps and notes directly to any recording.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Compliance Ready',
    desc: 'Automatic recording helps meet documentation requirements for regulated industries. 90-day retention included.',
  },
]

const USE_CASES = [
  {
    industry: 'Law Firms',
    icon: '⚖️',
    title: 'Documenting client calls',
    desc: 'Keep a full audio record of every client consultation. Share recordings with your team for case preparation and review.',
  },
  {
    industry: 'Real Estate',
    icon: '🏡',
    title: 'Reviewing pitches and offers',
    desc: 'Sales teams listen back to their own calls to improve negotiation tactics and coaching junior agents.',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    title: 'Maintaining accurate records',
    desc: 'Keep a verifiable record of patient communication for compliance, quality assurance, and staff training.',
  },
]

export default function CallRecordingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 pt-7 pb-2 text-[12.5px] text-text3 font-mono">
          <Link href="/features" className="hover:text-text2 transition-colors no-underline">Features</Link>
          <span>/</span>
          <span className="text-text2">Call Recording</span>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-16 sm:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">Call Recording</span>
          </div>
          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            Record, review, and improve<br className="hidden sm:block" /> every call
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            Every call automatically recorded and stored. Review conversations, coach your team, and stay compliant — all from your dashboard.
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Enable once, record everything</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Everything you need from call recording</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Built for industries where calls matter</h2>
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
            <div className="text-[13.5px] text-text2 font-light mt-1">90-day recording storage included. No add-ons needed.</div>
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
                Never lose a call again.<br />Every word, recorded.
              </div>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Enable call recording in one click and start building a searchable library of every business conversation.
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
