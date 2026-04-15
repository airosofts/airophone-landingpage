'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ── SVG LOGO ── */
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

/* ── CHEVRON ICON ── */
function ChevronDown({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M4 6l4 4 4-4" stroke="#9B9890" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── CHECK ICON ── */
function Check({ color = '#131210' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <path d="M3 8l3.5 3.5L13 5" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── X ICON ── */
function X() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <path d="M5 5l6 6M11 5l-6 6" stroke="#9B9890" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  )
}

/* ── PLAN DATA ── */
const plans = [
  {
    name: 'Starter',
    price: 9,
    credits: 200,
    extraRate: 0.04,
    popular: false,
    description: 'Perfect for small teams just getting started with AI-powered messaging.',
    features: [
      { label: 'All features included', included: true },
      { label: 'Unified inbox & AI scenarios', included: true },
      { label: 'Phone number provisioning', included: true },
      { label: '24/7 support & analytics', included: true },
      { label: 'Unlimited calling', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Growth',
    price: 29,
    credits: 500,
    extraRate: 0.03,
    popular: true,
    description: 'The sweet spot for growing businesses handling real conversation volume.',
    features: [
      { label: 'All features included', included: true },
      { label: 'Unified inbox & AI scenarios', included: true },
      { label: 'Phone number provisioning', included: true },
      { label: '24/7 support & analytics', included: true },
      { label: 'Unlimited calling', included: true },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 59,
    credits: 1000,
    extraRate: 0.02,
    popular: false,
    description: 'Full power for high-volume operations that need maximum reliability.',
    features: [
      { label: 'All features included', included: true },
      { label: 'Unified inbox & AI scenarios', included: true },
      { label: 'Phone number provisioning', included: true },
      { label: '24/7 support & analytics', included: true },
      { label: 'Unlimited calling', included: true },
      { label: 'Priority support', included: true },
    ],
  },
]

/* ── FAQ DATA ── */
const faqs = [
  {
    q: 'What happens when I run out of credits?',
    a: "You can keep sending — additional credits are billed at your plan's per-credit rate at the end of the month. There's no hard stop on your account. You'll receive a usage alert by email when you reach 80% of your included credits.",
  },
  {
    q: 'How does the 7-day free trial work?',
    a: 'Sign up and get full access to your chosen plan for 7 days at no cost. No credit card is required to start. At the end of the trial you can add a payment method to continue, or your account simply pauses with no charges.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes, you can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle, and any unused credits are prorated.',
  },
  {
    q: 'What counts as one credit?',
    a: '1 SMS segment = 1 credit. 1 minute of a phone call = 1 credit. 1 AI-generated reply = 2 credits. MMS messages count as 3 credits. Credits are consumed as activity happens, and your dashboard shows real-time usage.',
  },
  {
    q: 'Is there a contract or cancellation fee?',
    a: "No contracts, no cancellation fees. AiroPhone is month-to-month. Cancel any time from your billing settings and you won't be charged again. You retain access until the end of the period you've paid for.",
  },
]

/* ── COMPARISON TABLE DATA ── */
const comparisonFeatures = [
  { label: 'AI scenarios & auto-replies', airo: true, simple: false, ez: false },
  { label: 'Unified inbox', airo: true, simple: true, ez: false },
  { label: 'Phone number provisioning', airo: true, simple: true, ez: true },
  { label: 'Two-way SMS', airo: true, simple: true, ez: true },
  { label: 'Unlimited calling', airo: true, simple: false, ez: false },
  { label: '7-day free trial', airo: true, simple: false, ez: false },
  { label: 'No setup fees', airo: true, simple: false, ez: false },
  { label: '24/7 live support', airo: true, simple: true, ez: false },
  { label: 'Starting price', airo: '$9/mo', simple: '$39/mo', ez: '$24/mo' },
]

/* ── FAQ ITEM ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-surface hover:bg-bg transition-colors"
      >
        <span className="text-sm font-medium text-text">{q}</span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-surface border-t border-border">
          <p className="text-sm text-text2 leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ── COST ESTIMATOR ── */
function CostEstimator() {
  const [volume, setVolume] = useState(500)

  // Estimate credit usage: assume 60% SMS, 20% calls, 20% AI replies
  const smsCredits = Math.round(volume * 0.6)
  const callCredits = Math.round(volume * 0.2)
  const aiCredits = Math.round(volume * 0.2 * 2) // AI replies = 2 credits each
  const totalCredits = smsCredits + callCredits + aiCredits

  function calcCost(plan) {
    const extra = Math.max(0, totalCredits - plan.credits)
    return plan.price + extra * plan.extraRate
  }

  const starterCost = calcCost(plans[0])
  const growthCost = calcCost(plans[1])
  const enterpriseCost = calcCost(plans[2])

  let recommended = plans[0]
  let recommendedCost = starterCost
  if (totalCredits > plans[1].credits) {
    recommended = plans[2]
    recommendedCost = enterpriseCost
  } else if (totalCredits > plans[0].credits) {
    recommended = plans[1]
    recommendedCost = growthCost
  }

  const formatCost = (n) => `$${n.toFixed(2)}`

  return (
    <div className="bg-surface border border-border rounded-2xl p-8">
      <div className="mb-8">
        <label className="block text-sm font-medium text-text mb-1">
          Monthly message volume
        </label>
        <p className="text-text3 text-xs mb-5">
          Drag to set how many conversations you handle per month
        </p>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={5000}
            step={50}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="flex-1 accent-[#D63B1F] h-1.5 cursor-pointer"
          />
          <span className="font-mono text-sm text-text w-20 text-right shrink-0">
            {volume.toLocaleString()} msgs
          </span>
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[11px] text-text3 font-mono">0</span>
          <span className="text-[11px] text-text3 font-mono">5,000</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'SMS credits', value: smsCredits },
          { label: 'Call credits', value: callCredits },
          { label: 'AI reply credits', value: aiCredits },
        ].map(item => (
          <div key={item.label} className="bg-bg rounded-xl px-4 py-3 text-center">
            <p className="font-mono text-lg font-semibold text-text">{item.value.toLocaleString()}</p>
            <p className="text-[11px] text-text3 mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-xl overflow-hidden mb-6">
        <div className="grid grid-cols-3 divide-x divide-border">
          {[
            { plan: plans[0], cost: starterCost },
            { plan: plans[1], cost: growthCost },
            { plan: plans[2], cost: enterpriseCost },
          ].map(({ plan, cost }) => {
            const isRec = plan.name === recommended.name
            return (
              <div
                key={plan.name}
                className={`px-4 py-4 text-center ${isRec ? 'bg-red-bg' : 'bg-surface'}`}
              >
                {isRec && (
                  <span className="inline-block bg-red text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full mb-2">
                    Best fit
                  </span>
                )}
                {!isRec && <div className="h-[22px] mb-2" />}
                <p className={`text-xs font-medium mb-1 ${isRec ? 'text-red' : 'text-text2'}`}>{plan.name}</p>
                <p className={`font-mono text-base font-semibold ${isRec ? 'text-text' : 'text-text2'}`}>
                  {formatCost(cost)}
                  <span className="text-[11px] font-normal text-text3">/mo</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-bg rounded-xl px-5 py-4 flex items-start gap-3">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
          <circle cx="9" cy="9" r="8" stroke="#D63B1F" strokeWidth="1.5"/>
          <path d="M9 8v4M9 6h.01" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <p className="text-xs text-text2 leading-relaxed">
          Estimate based on 60% SMS, 20% calls, 20% AI replies. Actual usage varies.{' '}
          <span className="font-medium text-text">
            At {volume.toLocaleString()} messages/mo, the {recommended.name} plan is your best value
            at around {formatCost(recommendedCost)}/mo.
          </span>
        </p>
      </div>
    </div>
  )
}

/* ── MAIN PAGE ── */
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg font-sans">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-semibold text-[15px] text-text tracking-tight">AiroPhone</span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-text2">
            <Link href="/#features" className="hover:text-text transition-colors">Features</Link>
            <Link href="/pricing" className="text-text font-medium">Pricing</Link>
            <Link href="/#how-it-works" className="hover:text-text transition-colors">How it works</Link>
          </div>
          <Link
            href="/signup"
            className="bg-text text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight leading-tight mb-5">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-text2 leading-relaxed">
            One monthly price. All features included. No hidden fees.
          </p>
        </div>
      </section>

      {/* TRIAL BANNER */}
      <div className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl px-6 py-4 flex items-center justify-center gap-3 text-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
              <circle cx="9" cy="9" r="8" stroke="#16a34a" strokeWidth="1.5"/>
              <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm font-medium text-[#15803d]">
              7-day free trial on all plans — no credit card required to start
            </p>
          </div>
        </div>
      </div>

      {/* PLAN CARDS */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface rounded-2xl border p-7 flex flex-col ${
                plan.popular
                  ? 'border-red shadow-[0_0_0_1px_#D63B1F]'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-red text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-mono font-medium uppercase tracking-wider mb-3 ${plan.popular ? 'text-red' : 'text-text3'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-semibold text-text tracking-tight">${plan.price}</span>
                  <span className="text-text3 text-sm mb-1.5">/mo</span>
                </div>
                <p className="text-xs text-text2 leading-relaxed">{plan.description}</p>
              </div>

              <div className="bg-bg rounded-xl px-4 py-3 mb-6">
                <p className="text-xs font-medium text-text mb-0.5">
                  {plan.credits.toLocaleString()} credits included
                </p>
                <p className="text-[11px] text-text3">
                  then ${plan.extraRate.toFixed(2)} per extra credit
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5">
                    {f.included
                      ? <Check color={plan.popular ? '#D63B1F' : '#131210'} />
                      : <X />
                    }
                    <span className={`text-sm leading-snug ${f.included ? 'text-text' : 'text-text3'}`}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`block text-center rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity ${
                  plan.popular
                    ? 'bg-red text-white hover:opacity-85'
                    : 'bg-text text-white hover:opacity-85'
                }`}
              >
                Start free trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HOW CREDITS WORK */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Credits</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-3">How credits work</h2>
            <p className="text-text2 text-sm max-w-md mx-auto leading-relaxed">
              Credits are a simple, unified unit. Every action across SMS, calls, and AI costs the same predictable amount.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: '1 SMS message',
                value: '1 credit',
                detail: 'Per SMS segment sent or received (160 chars). MMS counts as 3 credits.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="11" rx="3" stroke="#D63B1F" strokeWidth="1.5"/>
                    <path d="M6 14l2 3h4l2-3" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9h8M6 12h5" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: '1 minute of calling',
                value: '1 credit',
                detail: 'Inbound and outbound calls billed per minute. Partial minutes rounded up.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6.5 3C6.5 3 5 5 5 7.5C5 12.5 8.5 16 13.5 16C16 16 18 14.5 18 14.5L15.5 12L13.5 13.5C12 12.5 8.5 9 9.5 7.5L11 5.5L8.5 3H6.5Z" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: '1 AI reply',
                value: '2 credits',
                detail: 'Each AI-generated response costs 2 credits due to the processing involved.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7.5" stroke="#D63B1F" strokeWidth="1.5"/>
                    <path d="M7 10l2 2 4-4" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="4" r="1" fill="#D63B1F"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="bg-surface border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-red-bg rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-text mb-1">{item.label}</p>
                <p className="font-mono text-xl font-semibold text-red mb-2">{item.value}</p>
                <p className="text-[12px] text-text2 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-bg border border-border rounded-xl px-6 py-4 text-center">
            <p className="text-sm text-text2">
              Credits reset at the start of each billing cycle. Unused credits do not roll over.
            </p>
          </div>
        </div>
      </section>

      {/* COST ESTIMATOR */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Estimator</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-3">Find your plan</h2>
            <p className="text-text2 text-sm max-w-md mx-auto leading-relaxed">
              Drag the slider to your expected monthly volume and we will show you the most cost-effective plan.
            </p>
          </div>
          <CostEstimator />
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Comparison</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-3">How we stack up</h2>
            <p className="text-text2 text-sm max-w-md mx-auto leading-relaxed">
              AiroPhone delivers more for less. AI features and unlimited calling at a fraction of competitor prices.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 border-b border-border">
              <div className="px-6 py-4" />
              {[
                { name: 'AiroPhone', highlight: true },
                { name: 'SimpleTexting', highlight: false },
                { name: 'EZTexting', highlight: false },
              ].map((col) => (
                <div
                  key={col.name}
                  className={`px-4 py-4 text-center border-l border-border ${col.highlight ? 'bg-red-bg' : ''}`}
                >
                  {col.highlight && (
                    <Logo size={20} />
                  )}
                  <p className={`text-sm font-semibold mt-1 ${col.highlight ? 'text-red' : 'text-text2'}`}>
                    {col.name}
                  </p>
                </div>
              ))}
            </div>

            {comparisonFeatures.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-bg/40'}`}
              >
                <div className="px-6 py-3.5 flex items-center">
                  <span className="text-sm text-text2">{row.label}</span>
                </div>
                {[row.airo, row.simple, row.ez].map((val, j) => (
                  <div key={j} className={`px-4 py-3.5 flex items-center justify-center border-l border-border ${j === 0 ? 'bg-red-bg' : ''}`}>
                    {typeof val === 'boolean'
                      ? val
                        ? <Check color={j === 0 ? '#D63B1F' : '#131210'} />
                        : <X />
                      : <span className={`text-sm font-mono font-medium ${j === 0 ? 'text-red' : 'text-text2'}`}>{val}</span>
                    }
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-text3 text-center mt-4">
            Competitor pricing as of April 2026. Subject to change.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-3">Common questions</h2>
            <p className="text-text2 text-sm leading-relaxed">
              Everything you need to know about billing, credits, and getting started.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Get started</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-4">
            Start your free trial today
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            No credit card required. Full access for 7 days. Set up in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="bg-text text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Start free trial
            </Link>
            <Link
              href="/#features"
              className="bg-surface border border-border text-text rounded-lg px-6 py-3 text-sm font-medium hover:bg-bg transition-colors"
            >
              See all features
            </Link>
          </div>
          <p className="text-[11px] text-text3 mt-5 font-mono">
            No credit card required — cancel anytime
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={22} />
            <span className="text-sm font-semibold text-text">AiroPhone</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-text3">
            <Link href="/privacy" className="hover:text-text2 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-text2 transition-colors">Terms</Link>
            <Link href="/pricing" className="hover:text-text2 transition-colors">Pricing</Link>
          </div>
          <p className="text-xs text-text3 font-mono">
            &copy; {new Date().getFullYear()} AiroPhone
          </p>
        </div>
      </footer>

    </div>
  )
}
