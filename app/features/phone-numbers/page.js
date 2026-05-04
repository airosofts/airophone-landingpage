import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Phone Numbers — Get a business number in 60 seconds | AiroPhone',
  description: 'Search local or toll-free numbers, provision instantly, and port your existing number — no waiting, no paperwork.',
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
  { value: 'Instant', label: 'Setup' },
  { value: 'Local &', label: 'Toll-free' },
  { value: 'Free', label: 'Number porting' },
]

const STEPS = [
  { n: '01', title: 'Search by area code or zip', desc: 'Type in any area code, city, or zip code and see available numbers instantly. Filter by local or toll-free.' },
  { n: '02', title: 'Pick your number', desc: 'Choose from the list — including vanity options. Your number is reserved the moment you select it.' },
  { n: '03', title: 'Start using it immediately', desc: 'No waiting period. Your number is active and ready to make calls, send texts, and receive messages right away.' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Local Numbers',
    desc: 'Get a number with any area code in the US. Build trust with a local presence in any market.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/>
      </svg>
    ),
    title: 'Toll-free Numbers',
    desc: 'Project a national brand image with 800, 833, 844, 855, 866, 877, or 888 numbers.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
    title: 'Number Porting',
    desc: 'Bring your existing business number to AiroPhone. We handle the transfer — no downtime, no hassle.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="6" x2="19" y2="6"/><line x1="5" y1="18" x2="19" y2="18"/>
      </svg>
    ),
    title: 'Multiple Numbers per Account',
    desc: 'Add as many numbers as you need — one per department, location, or campaign. All managed in one place.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Vanity Numbers',
    desc: 'Search for memorable numbers that spell out your brand or service. Stand out before the first call.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Instant Provisioning',
    desc: 'Numbers go live in seconds. No approval wait times, no carrier delays, no setup calls required.',
  },
]

const USE_CASES = [
  {
    industry: 'Real Estate',
    icon: '🏡',
    title: 'Local businesses, local presence',
    desc: 'Use area-code-matched numbers for each market you serve. Buyers and sellers are more likely to answer a local number.',
  },
  {
    industry: 'Law Firms',
    icon: '⚖️',
    title: 'National brands, toll-free reach',
    desc: 'A toll-free number signals scale and professionalism. Route calls to the right office, anywhere in the country.',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    title: 'Moving from a legacy carrier',
    desc: 'Port your existing practice number to AiroPhone without any downtime. Patients keep calling the same number — you get all the new features.',
  },
]

export default function PhoneNumbersPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 pt-7 pb-2 text-[12.5px] text-text3 font-mono">
          <Link href="/features" className="hover:text-text2 transition-colors no-underline">Features</Link>
          <span>/</span>
          <span className="text-text2">Phone Numbers</span>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-16 sm:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">Phone Numbers</span>
          </div>
          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            Get a business number<br className="hidden sm:block" /> in 60 seconds
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            Search local or toll-free numbers, provision instantly, and port your existing number — no waiting, no paperwork.
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
              <div className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.04em] text-text leading-tight">{s.value}</div>
              <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mt-1.5">{s.label}</div>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 border-b border-border">
          <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">How it works</div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Your number, live in under a minute</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Every number type, managed in one place</h2>
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
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">The right number for every business</h2>
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
            <div className="text-[13.5px] text-text2 font-light mt-1">Your first number included. Additional numbers available on all plans.</div>
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
                Your business number<br />is waiting. Go get it.
              </div>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Search available numbers, pick the one you want, and start calling — all in under 60 seconds.
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
