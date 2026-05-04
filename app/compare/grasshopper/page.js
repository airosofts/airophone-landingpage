'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

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

function CheckIcon({ color = '#D63B1F' }) {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function XIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M5 5l6 6M11 5l-6 6" stroke="#9B9890" strokeWidth="1.75" strokeLinecap="round"/></svg>
}

export default function VsGrasshopper() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-bg font-sans">

      <Nav />

      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-[12px] text-text3 font-mono">
          <Link href="/compare" className="hover:text-text2 transition-colors">Compare</Link>
          <span>/</span>
          <span className="text-text2">AiroPhone vs Grasshopper</span>
        </div>
      </div>

      {/* HERO */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">AiroPhone vs Grasshopper</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight leading-[1.1] mb-5">
              Grasshopper is call forwarding.<br className="hidden sm:block" /> AiroPhone is a platform.
            </h1>
            <p className="text-lg text-text2 leading-relaxed mb-8 max-w-xl">
              Grasshopper was built in 2003 for call forwarding and basic voicemail. AiroPhone was built for modern teams — with AI auto-replies, bulk SMS campaigns, and a shared inbox — starting at $9/mo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="https://app.airophone.com/signup" className="w-full sm:w-auto bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity text-center">
                Start your 7-day free trial
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto bg-surface border border-border text-text rounded-lg px-6 py-3 text-sm font-medium hover:bg-bg transition-colors text-center">
                See pricing
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { label: 'AiroPhone starting price', value: '$9/mo' },
              { label: 'Grasshopper starting price', value: '$28/mo' },
              { label: 'AI features on AiroPhone', value: 'Included' },
            ].map((s) => (
              <div key={s.label} className="bg-surface border border-border rounded-xl px-4 py-3">
                <p className="font-mono text-[10px] text-text3 uppercase tracking-wider mb-0.5">{s.label}</p>
                <p className="text-sm font-semibold text-text">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-bg border border-red-dim rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 bg-red rounded-xl flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9l3.5 3.5 6.5-7" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-text mb-1">The bottom line</p>
              <p className="text-sm text-text2 leading-relaxed">
                Grasshopper charges up to $80/mo for something that just forwards your calls. There&rsquo;s no AI, no inbox, no campaigns, no two-way SMS at scale. AiroPhone starts at $9/mo and includes all of that out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Feature comparison</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight">Side by side</h2>
          </div>

          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="px-6 py-4" />
              <div className="px-4 py-4 text-center border-l border-border bg-red-bg">
                <Logo size={20} />
                <p className="text-sm font-semibold text-red mt-1">AiroPhone</p>
              </div>
              <div className="px-4 py-4 text-center border-l border-border">
                <div className="w-5 h-5 bg-[#6DBD4B] rounded-full mx-auto mb-1" />
                <p className="text-sm font-semibold text-text2">Grasshopper</p>
              </div>
            </div>

            {[
              { feature: 'AI scenarios & auto-replies', airo: true, them: false },
              { feature: 'Bulk SMS campaigns', airo: true, them: false },
              { feature: 'Unified team inbox', airo: true, them: false },
              { feature: 'Two-way SMS', airo: true, them: true },
              { feature: 'Unlimited calling', airo: true, them: true },
              { feature: 'Phone number provisioning', airo: true, them: true },
              { feature: 'Web & desktop app', airo: true, them: true },
              { feature: 'Analytics & reporting', airo: true, them: false },
              { feature: 'No per-user pricing', airo: true, them: false },
              { feature: '7-day free trial', airo: true, them: false },
              { feature: 'Starting price', airo: '$9/mo', them: '$28/mo' },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-bg/40'}`}>
                <div className="px-6 py-3.5 flex items-center">
                  <span className="text-sm text-text2">{row.feature}</span>
                </div>
                <div className="px-4 py-3.5 flex items-center justify-center border-l border-border bg-red-bg">
                  {typeof row.airo === 'boolean' ? (row.airo ? <CheckIcon /> : <XIcon />) : <span className="text-sm font-mono font-medium text-red">{row.airo}</span>}
                </div>
                <div className="px-4 py-3.5 flex items-center justify-center border-l border-border">
                  {typeof row.them === 'boolean' ? (row.them ? <CheckIcon color="#131210" /> : <XIcon />) : <span className="text-sm font-mono font-medium text-text2">{row.them}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-text3 text-center mt-4 font-mono">Grasshopper pricing as of May 2026. Subject to change.</p>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Why AiroPhone wins</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight">Built for 2026, not 2003</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: 'A real team inbox.',
                body: 'Grasshopper routes calls to individual extensions. AiroPhone gives your team a shared inbox — every message, call, and reply in one place. Anyone can pick up a conversation, hand it off, or leave internal notes.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="11" rx="2.5" stroke="#D63B1F" strokeWidth="1.5"/><path d="M2 8l8 5 8-5" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: 'AI handles the basics.',
                body: "Grasshopper has no AI features at all. AiroPhone lets you build automated reply flows triggered by keywords or contact data — so common questions get answered instantly, even at 2am, without lifting a finger.",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#D63B1F" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="4" r="1" fill="#D63B1F"/></svg>,
              },
              {
                title: 'Cheaper — and more.',
                body: "Grasshopper's Solo plan is $28/mo for 1 number and basic SMS. AiroPhone's Starter is $9/mo with AI, campaigns, a unified inbox, analytics — and unlimited team members.",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v16M6 5h6a2 2 0 010 4H8a2 2 0 000 4h7" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((d) => (
              <div key={d.title} className="bg-surface border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-red-bg rounded-xl flex items-center justify-center mb-4">{d.icon}</div>
                <h3 className="text-sm font-semibold text-text mb-2">{d.title}</h3>
                <p className="text-sm text-text2 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight">Pay less, get more</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-red-bg border border-red-dim rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4"><Logo size={20} /><span className="text-sm font-semibold text-red">AiroPhone</span></div>
              <p className="text-4xl font-semibold text-text tracking-tight mb-1">$9<span className="text-lg font-normal text-text3">/mo</span></p>
              <p className="text-sm text-text2 mb-5">Everything included, all plans</p>
              <ul className="space-y-2.5">
                {['AI scenarios & auto-replies', 'Bulk SMS campaigns', 'Unified team inbox', 'Analytics & reporting', '7-day free trial'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0"><circle cx="7" cy="7" r="6" fill="#D63B1F"/><path d="M4.5 7l1.75 1.75L9.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-[#6DBD4B] rounded-full shrink-0" />
                <span className="text-sm font-semibold text-text2">Grasshopper</span>
              </div>
              <p className="text-4xl font-semibold text-text2 tracking-tight mb-1">$28<span className="text-lg font-normal text-text3">/mo</span></p>
              <p className="text-sm text-text3 mb-5">Solo plan — 1 number, 3 extensions</p>
              <ul className="space-y-2.5">
                {['Call forwarding only', 'No AI or automation', 'No bulk SMS campaigns', 'No team inbox', 'No free trial (7-day money back)'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0"><circle cx="7" cy="7" r="6" stroke="#D4D1C9" strokeWidth="1.5"/><path d="M9.5 4.5l-5 5M4.5 4.5l5 5" stroke="#9B9890" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 bg-bg border border-border rounded-xl px-6 py-4 text-center">
            <p className="text-sm text-text2">
              Grasshopper&rsquo;s Small Business plan is <span className="font-semibold text-text">$80/mo</span>. AiroPhone&rsquo;s most powerful plan is <span className="font-semibold text-text">$59/mo</span> — with AI, campaigns, and real analytics.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold text-text tracking-tight">Common questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Can I keep my Grasshopper number?', a: "Yes. You can port your Grasshopper number to AiroPhone. The process takes 1–3 business days. We'll give you a temporary number to use while the port completes, so there's zero downtime." },
              { q: 'Does AiroPhone work on mobile?', a: 'Yes — AiroPhone has a full mobile experience. Make and receive calls, send SMS, manage your inbox, and run campaigns all from your phone. No separate app needed for each function.' },
              { q: 'Can my whole team use the same number?', a: "Yes, and this is a core AiroPhone feature. Your team shares a number and a unified inbox. Anyone can respond to messages, take calls, or hand off conversations — all in one place, unlike Grasshopper's extension-per-person model." },
              { q: "What if I don't need AI features right away?", a: "That's fine — AI scenarios are included on every plan but they're optional. You can use AiroPhone purely for calls and SMS and enable AI flows whenever you're ready. There's no extra charge." },
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-surface hover:bg-bg transition-colors">
                  <span className="text-sm font-medium text-text">{faq.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <path d="M4 6l4 4 4-4" stroke="#9B9890" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-surface border-t border-border">
                    <p className="text-sm text-text2 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">Switch today</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-4">
            Time to upgrade from Grasshopper?
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            7-day free trial. Set up in under 5 minutes. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://app.airophone.com/signup" className="w-full sm:w-auto bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity text-center">
              Start free trial
            </Link>
            <Link href="/compare" className="w-full sm:w-auto bg-surface border border-border text-text rounded-lg px-6 py-3 text-sm font-medium hover:bg-bg transition-colors text-center">
              See all comparisons
            </Link>
          </div>
          <p className="text-[11px] text-text3 mt-5 font-mono">Cancel anytime</p>
        </div>
      </section>

      <Footer />

    </div>
  )
}
