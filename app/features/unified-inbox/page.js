import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Unified Inbox — One inbox for every call, text, and team member | AiroPhone',
  description: 'All your conversations in one place. See every message, call note, and contact history — without switching between apps.',
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
  { value: 'All', label: 'Channels' },
  { value: 'Full', label: 'Team access' },
  { value: '100%', label: 'Contact history' },
]

const STEPS = [
  { n: '01', title: 'Connect your number', desc: 'Link your AiroPhone number and all calls, texts, and voicemails flow into the unified inbox automatically.' },
  { n: '02', title: 'Invite team members', desc: 'Add your team and set roles. Everyone sees the full conversation thread — no duplicated effort.' },
  { n: '03', title: 'Handle conversations together', desc: 'Assign threads, leave internal notes, tag conversations, and collaborate in real time without leaving the inbox.' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Multi-channel View',
    desc: 'Calls, SMS, voicemails, and AI replies — all in one feed. No more app switching or context collapse.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Team Collaboration',
    desc: 'Assign threads to teammates, set status, and leave internal notes visible only to your team.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Contact Profiles',
    desc: 'Every contact has a full profile with call history, SMS threads, notes, and tags — all in one sidebar.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Conversation Notes',
    desc: 'Add private notes to any thread. Great for logging what was said on a call or flagging a follow-up.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'Tagging & Filtering',
    desc: 'Tag conversations by status, priority, or topic. Filter your inbox to see exactly what matters right now.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Search',
    desc: 'Full-text search across every call note, SMS thread, and contact. Find any conversation instantly.',
  },
]

const USE_CASES = [
  {
    industry: 'Real Estate',
    icon: '🏡',
    title: 'Sales teams managing pipelines',
    desc: 'Every agent sees every lead conversation. Assign hot leads, tag by stage, and never let a contact fall through the cracks.',
  },
  {
    industry: 'Law Firms',
    icon: '⚖️',
    title: 'Service teams handling support',
    desc: 'Intake staff and attorneys share one inbox. Notes and call history follow the client — not the individual rep.',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    title: 'Distributed teams staying aligned',
    desc: 'Multiple locations, one inbox. Scheduling, billing, and clinical teams collaborate on patient conversations without overlap.',
  },
]

export default function UnifiedInboxPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 pt-7 pb-2 text-[12.5px] text-text3 font-mono">
          <Link href="/features" className="hover:text-text2 transition-colors no-underline">Features</Link>
          <span>/</span>
          <span className="text-text2">Unified Inbox</span>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-16 sm:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">Unified Inbox</span>
          </div>
          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            One inbox for every call,<br className="hidden sm:block" /> text, and team member
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            All your conversations in one place. See every message, call note, and contact history — without switching between apps.
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">One place for every conversation</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Built for teams who move fast</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">One inbox, every team size</h2>
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
            <div className="text-[13.5px] text-text2 font-light mt-1">Full team access and unified inbox on every plan.</div>
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
                Stop juggling apps.<br />Work from one inbox.
              </div>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Connect your number, invite your team, and handle every conversation from a single unified dashboard.
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
