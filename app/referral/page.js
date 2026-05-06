import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const revalidate = 300 // refresh commission data every 5 min

export const metadata = {
  title: 'Referral Program — Earn cash for every referral | AiroPhone',
  description: 'Refer a business to AiroPhone and earn a cash commission for every person who starts a paid subscription. No limits on how much you can earn.',
}

async function getCommissionSettings() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/referral_settings?select=*&limit=1`,
      {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
        next: { revalidate: 300 },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch {
    return null
  }
}

function formatCommission(settings) {
  if (!settings || !settings.enabled) return null
  if (settings.commission_type === 'percent') {
    return { value: `${Number(settings.commission_value)}%`, label: 'per qualified referral', type: 'percent' }
  }
  return { value: `$${Number(settings.commission_value).toFixed(0)}`, label: 'cash per qualified referral', type: 'flat' }
}

const PLANS = [
  { name: 'Starter',    price: 9,  popular: false },
  { name: 'Growth',     price: 29, popular: true  },
  { name: 'Enterprise', price: 59, popular: false },
]

function calcEarning(settings, price) {
  if (!settings || !settings.enabled) return null
  const val = Number(settings.commission_value)
  if (settings.commission_type === 'percent') {
    return (price * val) / 100
  }
  return val
}

function fmtEarn(n) {
  if (n === null) return '—'
  return `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`
}

const STEPS = [
  {
    n: '01',
    title: 'Get your link',
    desc: 'Sign in to AiroPhone, go to Settings → Referrals, and copy your unique referral link.',
  },
  {
    n: '02',
    title: 'Share it',
    desc: 'Send your link to anyone who could use a smart business phone system — teams, freelancers, agencies.',
  },
  {
    n: '03',
    title: 'They subscribe, you earn',
    desc: 'When they start a paid plan your commission is credited to your account automatically.',
  },
  {
    n: '04',
    title: 'Request payout',
    desc: 'Withdraw your earnings via PayPal or bank transfer whenever you\'re ready. No minimum threshold.',
  },
]

const FAQS = [
  {
    q: 'When does commission get credited?',
    a: 'Commission is credited the moment the person you referred activates a paid subscription — not when they sign up or start a trial.',
  },
  {
    q: 'Is there a limit to how many people I can refer?',
    a: 'No limit at all. Refer as many people as you want and earn a commission for each one who becomes a paying customer.',
  },
  {
    q: 'How do I get paid?',
    a: 'From your Settings → Referrals page, request a payout via PayPal email or bank transfer. Payouts are processed manually within 3–5 business days.',
  },
  {
    q: 'How long does the referral link stay valid?',
    a: 'Your referral link works indefinitely. The referral is tracked when someone clicks your link and signs up, and stays attributed to you until they subscribe.',
  },
  {
    q: 'Do I need to be a paying customer to refer?',
    a: 'No. Any AiroPhone account — free trial or paid — gets a referral link and can start earning.',
  },
]

export default async function ReferralPage() {
  const settings = await getCommissionSettings()
  const commission = formatCommission(settings)
  const programEnabled = settings?.enabled !== false

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* HERO */}
        <section className="pt-16 pb-20 sm:pb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-bg border border-red/20 rounded-full px-3.5 py-1.5 mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            <span className="font-mono text-[11px] text-red tracking-widest uppercase">Referral Program</span>
          </div>

          <h1 className="text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em] text-text mb-5">
            Refer a business.<br className="hidden sm:block" /> Earn real cash.
          </h1>
          <p className="text-[16px] sm:text-[17px] text-text2 leading-[1.7] font-light max-w-2xl mb-8">
            Share AiroPhone with businesses that need a smarter phone system. Every time someone you refer starts a paid plan, you earn a cash commission — directly to your PayPal or bank account.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://app.airophone.com/settings?tab=referrals"
              className="inline-flex items-center gap-2 bg-red text-white px-6 py-3 rounded-lg text-[14px] font-medium no-underline hover:opacity-90 transition-opacity"
            >
              Get your referral link →
            </a>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 border border-border bg-surface text-text2 px-6 py-3 rounded-lg text-[14px] no-underline hover:text-text hover:bg-bg transition-colors"
            >
              Create free account
            </Link>
          </div>
        </section>

        {/* COMMISSION CALLOUT */}
        {programEnabled && commission && (
          <section className="pb-20 border-b border-border">
            <div className="bg-surface border border-border rounded-2xl px-8 sm:px-14 py-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="flex-1">
                <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Current Commission Rate</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[clamp(48px,6vw,72px)] font-semibold tracking-[-0.05em] text-red leading-none">
                    {commission.value}
                  </span>
                  <span className="text-[16px] text-text2 font-light">{commission.label}</span>
                </div>
                <p className="text-[14px] text-text2 font-light leading-relaxed max-w-md">
                  Commission is credited automatically when your referred user activates a paid subscription. No manual tracking needed.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start sm:items-end gap-2">
                <p className="text-[12px] text-text3 font-mono uppercase tracking-widest">Paid via</p>
                <div className="flex gap-2">
                  {['PayPal', 'Bank Transfer'].map(m => (
                    <span key={m} className="inline-flex items-center px-3 py-1.5 rounded-lg border border-border bg-bg text-[12.5px] text-text2 font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EARNINGS EXAMPLES */}
        {programEnabled && commission && (
          <section className="py-20 border-b border-border">
            <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">What you earn</p>
            <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-3">
              Real numbers, per plan
            </h2>
            <p className="text-[15px] text-text2 font-light mb-10 max-w-xl">
              Commission is {commission.type === 'percent'
                ? `${commission.value} of the first payment — so the plan your referral picks determines what you earn.`
                : `a flat ${commission.value} per qualified referral, regardless of which plan they choose.`}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {PLANS.map(plan => {
                const earn = calcEarning(settings, plan.price)
                return (
                  <div key={plan.name} className={`relative bg-surface border rounded-2xl p-6 ${plan.popular ? 'border-red/40 ring-1 ring-red/20' : 'border-border'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-5 bg-red text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full tracking-widest uppercase">
                        Most popular
                      </span>
                    )}
                    <p className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-4">{plan.name} plan</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-[15px] text-text2 font-light">Plan costs</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-[28px] font-semibold tracking-[-0.04em] text-text">${plan.price}</span>
                      <span className="text-[13px] text-text3">/mo</span>
                    </div>
                    <div className="border-t border-border pt-5">
                      <p className="text-[12px] text-text3 mb-1.5">You earn</p>
                      <p className="text-[clamp(32px,4vw,44px)] font-semibold tracking-[-0.05em] text-red leading-none">
                        {fmtEarn(earn)}
                      </p>
                      <p className="text-[12px] text-text3 mt-1.5">per qualified referral</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Projection row */}
            <div className="bg-surface border border-border rounded-xl px-6 py-5">
              <p className="text-[12px] font-mono text-text3 uppercase tracking-widest mb-4">Refer 5 people who each subscribe → you earn</p>
              <div className="grid grid-cols-3 gap-4">
                {PLANS.map(plan => {
                  const earn = calcEarning(settings, plan.price)
                  return (
                    <div key={plan.name}>
                      <p className="text-[12px] text-text3 mb-1">{plan.name}</p>
                      <p className="text-[20px] font-semibold tracking-[-0.03em] text-text">
                        {earn !== null ? fmtEarn(earn * 5) : '—'}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* HOW IT WORKS */}
        <section className="py-20 border-b border-border">
          <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">How it works</p>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Four steps to your first payout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-red-bg border border-red/20 flex items-center justify-center font-mono text-[12px] text-red font-semibold">
                  {step.n}
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-text tracking-tight mb-2">{step.title}</p>
                  <p className="text-[13.5px] text-text2 leading-[1.65] font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY REFER */}
        <section className="py-20 border-b border-border">
          <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Why refer</p>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-12">Built to reward you fairly</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                ),
                title: 'Cash, not credits',
                desc: 'Your earnings go to your PayPal or bank account — not locked inside the app as store credit.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                ),
                title: 'No earning cap',
                desc: 'Refer one person or a hundred — every qualified referral earns the same commission with no ceiling.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: 'Fully automatic',
                desc: 'No forms to fill out, no chasing payments. Commission is tracked and credited the moment it qualifies.',
              },
            ].map(card => (
              <div key={card.title} className="bg-surface border border-border rounded-xl p-6 hover:border-red/30 transition-colors group">
                <div className="w-10 h-10 rounded-[9px] border border-border flex items-center justify-center text-text2 mb-4 group-hover:border-red group-hover:text-red transition-colors">
                  {card.icon}
                </div>
                <p className="text-[15px] font-semibold text-text tracking-tight mb-2">{card.title}</p>
                <p className="text-[13.5px] text-text2 leading-[1.65] font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-b border-border">
          <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">FAQ</p>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.035em] text-text mb-10">Common questions</h2>
          <div className="max-w-2xl space-y-0 divide-y divide-border">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-5">
                <p className="text-[15px] font-semibold text-text tracking-tight mb-2">{faq.q}</p>
                <p className="text-[13.5px] text-text2 leading-[1.7] font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="bg-surface border border-border rounded-2xl px-8 sm:px-14 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <p className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3">Ready to earn?</p>
              <p className="text-[clamp(22px,2.5vw,34px)] font-semibold tracking-[-0.03em] text-text leading-[1.15]">
                Your referral link is<br />waiting in your dashboard.
              </p>
              <p className="text-[14px] text-text2 leading-[1.7] mt-3 max-w-sm font-light">
                Already have an account? Go to Settings → Referrals. New here? Sign up free — your referral link is created automatically.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="https://app.airophone.com/settings?tab=referrals"
                className="inline-flex items-center gap-2 bg-red text-white px-6 py-3.5 rounded-lg text-[14px] font-medium no-underline hover:opacity-90 transition-opacity"
              >
                Go to my referrals →
              </a>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center text-[13px] text-text3 no-underline hover:text-text2 transition-colors"
              >
                Create free account
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
