'use client'

import { useState, useEffect, useRef } from 'react'

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

/* ── SCROLL REVEAL HOOK ── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('on') },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`rv ${className}`}>{children}</div>
}

/* ── CONTACT FORM MODAL ── */
function ContactModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    businessName: '', firstName: '', lastName: '', email: '', phone: '', volume: '', needs: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-[300] flex items-center justify-center p-4" onClick={() => { onClose(); setSubmitted(false) }}>
      <div className="bg-surface rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-text tracking-tight mb-2">Request received</h3>
              <p className="text-text2 text-sm mb-6">We&apos;ll review your application and be in touch soon.</p>
              <button onClick={() => { onClose(); setSubmitted(false); setFormData({ businessName:'', firstName:'', lastName:'', email:'', phone:'', volume:'', needs:'' }) }}
                className="px-5 py-2.5 bg-text text-white rounded-lg text-sm font-medium hover:bg-[#2a2928] transition-all">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-2">Get Started</p>
                  <h2 className="text-2xl font-semibold text-text tracking-tight">Request access</h2>
                  <p className="text-text2 text-sm mt-1">Tell us about your business and we&apos;ll get you set up.</p>
                </div>
                <button onClick={onClose} className="text-text3 hover:text-text2 text-xl leading-none">&times;</button>
              </div>
              <form onSubmit={async (e) => {
                e.preventDefault(); setSubmitting(true)
                try {
                  const res = await fetch('/api/submit-request', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(formData) })
                  const data = await res.json()
                  if (!res.ok) throw new Error(data.error || 'Failed')
                  setSubmitted(true)
                } catch { alert('Failed to submit. Please try again.') }
                finally { setSubmitting(false) }
              }} className="space-y-4">
                {[
                  { label:'Business Name', key:'businessName', type:'text', required:true, placeholder:'Your company name' },
                  { label:'First Name', key:'firstName', type:'text', required:true, placeholder:'John' },
                  { label:'Last Name', key:'lastName', type:'text', required:true, placeholder:'Doe' },
                  { label:'Business Email', key:'email', type:'email', required:true, placeholder:'you@company.com' },
                  { label:'Phone Number', key:'phone', type:'tel', required:false, placeholder:'+1 (555) 123-4567' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-sm font-medium text-text mb-1.5">{f.label} {f.required && <span className="text-red">*</span>}</label>
                    <input type={f.type} required={f.required} value={formData[f.key]}
                      onChange={e => setFormData({...formData, [f.key]: e.target.value})}
                      className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm text-text focus:outline-none focus:border-red transition-colors"
                      placeholder={f.placeholder} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">Monthly Volume <span className="text-red">*</span></label>
                  <select required value={formData.volume} onChange={e => setFormData({...formData, volume: e.target.value})}
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm text-text focus:outline-none focus:border-red transition-colors">
                    <option value="">Select volume range</option>
                    <option value="0-5000">0 - 5,000 messages</option>
                    <option value="5001-10000">5,001 - 10,000 messages</option>
                    <option value="10001-50000">10,001 - 50,000 messages</option>
                    <option value="50001+">50,000+ messages</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">Tell us about your needs</label>
                  <textarea rows={3} value={formData.needs} onChange={e => setFormData({...formData, needs: e.target.value})}
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm text-text focus:outline-none focus:border-red transition-colors resize-none"
                    placeholder="What are you looking to achieve with Airophone?" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={onClose} disabled={submitting}
                    className="flex-1 px-5 py-2.5 border border-border2 rounded-lg text-sm text-text2 hover:bg-bg2 transition-all">Cancel</button>
                  <button type="submit" disabled={submitting}
                    className="flex-1 px-5 py-2.5 bg-text text-white rounded-lg text-sm font-medium hover:bg-[#2a2928] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    {submitting ? <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting...</> : 'Submit application \u2192'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════ */
export default function LandingPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen">
      <ContactModal open={showForm} onClose={() => setShowForm(false)} />

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-[200] h-14 flex items-center justify-between px-6 sm:px-10 bg-bg/[0.88] backdrop-blur-lg border-b border-border">
        <a href="#" className="flex items-center gap-2.5 no-underline text-text text-[15px] font-semibold tracking-tight">
          <Logo size={24} />
          AiroPhone
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {['Features','Pricing'].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="no-underline text-text2 text-[13.5px] hover:text-text transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <a href="https://app.airophone.com/login"
            className="px-4 py-[7px] rounded-[7px] text-[13px] font-medium no-underline text-text2 border border-border2 hover:bg-bg2 hover:text-text transition-all">
            Log in
          </a>
          <a href="https://app.airophone.com/signup"
            className="px-4 py-[7px] rounded-[7px] text-[13px] font-medium bg-red text-white no-underline cursor-pointer hover:opacity-90 transition-all">
            Try for free &rarr;
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-0">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[calc(100vh-56px)]">
          {/* Left */}
          <div className="anim-up">
            <h1 className="text-[clamp(38px,4.2vw,60px)] font-semibold leading-[1.06] tracking-[-0.04em] text-text mb-5">
              Business calls &amp;<br/>messaging, <span className="inline-block bg-gradient-to-br from-red to-[#F06040] bg-clip-text text-transparent">automated.</span>
            </h1>

            <p className="text-base leading-[1.7] text-text2 max-w-[420px] mb-9 font-light">
              Airophone gives your team a smart phone system &mdash; bulk SMS, VoIP calling, AI scenarios, a unified inbox, and campaign management. All in one platform.
            </p>

            <div className="flex gap-2.5 flex-wrap">
              <a href="https://app.airophone.com/signup"
                className="inline-flex items-center gap-2 bg-text text-white px-[22px] py-3 rounded-lg text-sm font-medium no-underline tracking-tight hover:bg-[#2a2928] hover:-translate-y-px hover:shadow-lg transition-all">
                Try for free
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://app.airophone.com/login"
                className="inline-flex items-center gap-2 border border-border2 bg-transparent text-text2 px-[22px] py-3 rounded-lg text-sm no-underline hover:bg-bg2 hover:text-text hover:border-text3 transition-all">
                Log in
              </a>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              {[
                { n:'50k+', l:'Messages / day' },
                { n:'99%', l:'Delivery rate' },
                { n:'<1s', l:'AI response' },
              ].map((s,i) => (
                <div key={i}>
                  <div className="text-[26px] font-semibold tracking-[-0.04em]">
                    {s.n.replace(/[%+s]/g, '')}<span className="text-red">{s.n.match(/[%+s]$/)?.[0] || ''}</span>
                  </div>
                  <div className="font-mono text-[11px] text-text3 tracking-widest uppercase mt-[3px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="anim-up-delay relative flex justify-center">
            <div className="w-[260px] h-[520px] bg-surface border border-border rounded-[40px] overflow-hidden shadow-[0_2px_60px_rgba(19,18,16,0.08),0_1px_4px_rgba(19,18,16,0.04)] relative flex-shrink-0">
              {/* Notch */}
              <div className="h-7 bg-bg flex items-center justify-center border-b border-border">
                <div className="w-[60px] h-[5px] bg-border2 rounded-[3px]" />
              </div>
              {/* Screen */}
              <div className="bg-bg h-[calc(100%-28px)] flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 pt-3 pb-2 bg-surface border-b border-border">
                  <span className="text-[13px] font-semibold tracking-tight">AiroPhone</span>
                  <span className="font-mono text-[9px] text-text3">&bull; ACTIVE &middot; 3 LINES</span>
                </div>
                {/* Call card */}
                <div className="bg-surface border-b border-border px-4 py-3.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-dim flex items-center justify-center text-xs font-semibold text-red flex-shrink-0">JH</div>
                  <div>
                    <div className="text-[13px] font-medium tracking-tight">James Harrington</div>
                    <div className="font-mono text-[9.5px] text-text3 mt-0.5">+1 (214) 559 3820 &middot; 01:47</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1 font-mono text-[9px] text-green-600 bg-green-50 px-2 py-[3px] rounded">
                    <div className="w-1 h-1 rounded-full bg-green-500 blink" />Live
                  </div>
                </div>
                {/* SMS preview */}
                <div className="flex-1 overflow-hidden px-3 py-2.5 flex flex-col gap-2">
                  <div className="font-mono text-[9px] text-text3 tracking-widest uppercase mb-1">Bulk SMS &middot; New listing alert</div>
                  <div className="self-end bg-red text-white px-2.5 py-2 rounded-[10px] rounded-br-[3px] text-[11px] leading-[1.5]">3BR/2BA &middot; 4821 Maple Ave, Dallas &middot; $389k</div>
                  <div className="self-start bg-surface text-text border border-border px-2.5 py-2 rounded-[10px] rounded-bl-[3px] text-[11px] leading-[1.5]">When can I take a look?</div>
                  <div>
                    <div className="font-mono text-[8px] text-text3 tracking-wide mb-0.5">AI Agent &middot; Auto-reply</div>
                    <div className="self-start bg-bg2 text-text2 border border-dashed border-border2 px-2.5 py-2 rounded-[10px] rounded-bl-[3px] text-[11px] leading-[1.5] italic">Sat &amp; Sun work. What time is best?</div>
                  </div>
                  <div className="self-start bg-surface text-text border border-border px-2.5 py-2 rounded-[10px] rounded-bl-[3px] text-[11px] leading-[1.5]">Saturday morning.</div>
                  <div>
                    <div className="font-mono text-[8px] text-text3 tracking-wide mb-0.5">AI Agent &middot; Scheduled</div>
                    <div className="self-start bg-bg2 text-text2 border border-dashed border-border2 px-2.5 py-2 rounded-[10px] rounded-bl-[3px] text-[11px] leading-[1.5] italic">Confirmed &mdash; Sat 10am. See you then!</div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="px-4 py-2.5 border-t border-border bg-surface grid grid-cols-3 gap-1">
                  {[
                    { label:'Calls', active:true, icon:<svg className={`w-4 h-4 ${true ? 'text-red' : 'text-text3'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/></svg> },
                    { label:'SMS', active:false, icon:<svg className="w-4 h-4 text-text3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
                    { label:'AI Agent', active:false, icon:<svg className="w-4 h-4 text-text3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
                  ].map((b,i) => (
                    <div key={i} className={`flex flex-col items-center gap-[3px] py-1.5 px-1 rounded-lg ${b.active ? 'bg-red-bg' : ''}`}>
                      {b.icon}
                      <span className={`text-[8px] font-mono ${b.active ? 'text-red' : 'text-text3'}`}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute right-0 lg:-right-[30px] top-[60px] bg-surface border border-border rounded-xl px-4 py-3.5 min-w-[160px] shadow-[0_8px_32px_rgba(19,18,16,0.10)] float hidden sm:block">
              <div className="font-mono text-[9px] text-text3 tracking-widest uppercase mb-1.5">Delivered today</div>
              <div className="text-xl font-semibold tracking-tight text-text">12,840</div>
              <div className="text-[11px] text-text3 mt-0.5">SMS across 4 campaigns</div>
              <div className="h-[3px] bg-border rounded-sm mt-2.5 overflow-hidden">
                <div className="h-full bg-red rounded-sm bar-fill" />
              </div>
            </div>

            <div className="absolute left-0 lg:-left-[20px] bottom-[80px] bg-surface border border-border rounded-xl px-3.5 py-3 min-w-[150px] shadow-[0_8px_32px_rgba(19,18,16,0.08)] float-delay hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-[7px] h-[7px] rounded-full bg-green-500 flex-shrink-0" />
                <span className="font-mono text-[10px] text-text2">AI agent active</span>
              </div>
              <div className="text-[11px] text-text3 pl-[15px]">83 replies handled &middot; 0 missed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
        <RevealSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3.5">Features</div>
              <h2 className="text-[clamp(28px,3.2vw,44px)] font-semibold tracking-[-0.035em] leading-[1.1] text-text">Three tools.<br/>One smart app.</h2>
            </div>
            <p className="text-[15px] text-text2 leading-[1.65] max-w-[340px] font-light sm:text-right">
              Everything a modern business needs to communicate at scale &mdash; without the enterprise price tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
            {[
              {
                num:'01', label:'VOICE', name:'VoIP Calling',
                desc:'Crystal-clear calls over data. Manage multiple lines, transfer calls, record conversations, and access a full call log — all without a traditional carrier plan.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3H5a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 17v-.08z"/></svg>,
              },
              {
                num:'02', label:'SMS', name:'Bulk SMS',
                desc:'Send thousands of personalized messages in seconds. Build contact lists, schedule campaigns, track open and reply rates, and manage opt-outs — all from one clean dashboard.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 9h8M8 13h5"/></svg>,
              },
              {
                num:'03', label:'AI', name:'AI Agent Replies',
                desc:'Train a custom AI agent on your business data. It handles inbound messages 24/7 — answering FAQs, routing requests, booking appointments, and escalating when needed.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
              },
            ].map((f,i) => (
              <div key={i} className="bg-surface px-8 py-9 relative overflow-hidden group cursor-default hover:bg-bg transition-colors">
                <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-6">{f.num}</div>
                <div className="w-10 h-10 rounded-[9px] border border-border flex items-center justify-center text-text2 mb-5 group-hover:border-red group-hover:text-red transition-colors">{f.icon}</div>
                <div className="text-[17px] font-semibold tracking-tight mb-2.5">{f.name}</div>
                <div className="text-[13.5px] text-text2 leading-[1.65] font-light">{f.desc}</div>
                <div className="absolute bottom-5 right-5 font-mono text-[9px] text-border2 tracking-widest group-hover:text-text3 transition-colors">{f.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-24">
        <RevealSection>
          <div className="grid grid-cols-12 gap-3">
            {/* Messages stat */}
            <div className="col-span-12 sm:col-span-4 bg-surface border border-border rounded-xl p-8">
              <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-3">Messages delivered</div>
              <div className="text-4xl font-semibold tracking-[-0.04em] text-text">50<span className="text-red">k+</span></div>
              <div className="text-[13px] text-text3 mt-1.5 font-light">Per day across all clients</div>
              <div className="flex items-end gap-[3px] h-9 mt-4">
                {[40,55,48,70,62,85,100].map((h,i) => (
                  <div key={i} className={`flex-1 rounded-t-[3px] ${i === 6 ? 'bg-red' : 'bg-red-dim'}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* AI accuracy */}
            <div className="col-span-12 sm:col-span-4 bg-surface border border-border rounded-xl p-8">
              <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-3">AI scenario accuracy</div>
              <div className="text-4xl font-semibold tracking-[-0.04em] text-text">94<span className="text-red">%</span></div>
              <div className="text-[13px] text-text3 mt-1.5 font-light">Correct auto-replies, no edits</div>
              <div className="flex flex-col gap-2 mt-4">
                {[
                  { label:'FAQ response', badge:'auto', color:'bg-green-500' },
                  { label:'Appointment booking', badge:'auto', color:'bg-green-500' },
                  { label:'Complex complaint', badge:'escalated', color:'bg-amber-500' },
                ].map((r,i) => (
                  <div key={i} className="flex items-center gap-2 px-2.5 py-2 bg-bg border border-border rounded-lg">
                    <div className={`w-1.5 h-1.5 rounded-full ${r.color} flex-shrink-0`} />
                    <span className="font-mono text-[10px] text-text2 flex-1">{r.label}</span>
                    <span className="font-mono text-[9px] text-text3 bg-bg2 px-1.5 py-0.5 rounded">{r.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark CTA */}
            <div className="col-span-12 sm:col-span-4 bg-text border border-border rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-3">Ready to launch?</div>
                <div className="text-[26px] font-semibold leading-[1.2] text-white">Start free.<br/>Scale later.</div>
                <div className="text-[11px] text-white/40 mt-2">No setup fees. No contracts.<br/>Full features on every plan.</div>
              </div>
              <a href="https://app.airophone.com/signup"
                className="inline-flex items-center gap-2 bg-red text-white px-[18px] py-[11px] rounded-[7px] text-[13px] font-medium mt-6 no-underline hover:opacity-90 transition-opacity self-start">
                Try for free &rarr;
              </a>
            </div>

            {/* Code block — real API */}
            <div className="col-span-12 sm:col-span-8 bg-[#0F0E0C] border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-7 pt-5 pb-0">
                <div className="font-mono text-[10px] text-[#82aaff] bg-[#82aaff]/10 px-2 py-0.5 rounded">POST</div>
                <span className="font-mono text-[11px] text-[#8b9eb7]">Send SMS via API</span>
              </div>
              <pre className="font-mono text-xs leading-[1.9] px-7 pt-3 pb-7 text-[#8b9eb7] overflow-x-auto">
<span className="text-[#c792ea]">POST</span> <span className="text-[#c3e88d]">https://app.airophone.com/api/external/sms/send</span>{'\n'}
<span className="text-[#89ddff]">Authorization:</span> <span className="text-[#e8e6e0]">Bearer airo_live_&lt;your-key&gt;</span>{'\n'}
<span className="text-[#89ddff]">Content-Type:</span> <span className="text-[#e8e6e0]">application/json</span>{'\n'}
{'\n'}
<span className="text-[#89ddff]">{'{'}</span>{'\n'}
{'  '}<span className="text-[#c3e88d]">&quot;from&quot;</span><span className="text-[#89ddff]">:</span>    <span className="text-[#c3e88d]">&quot;+13203158316&quot;</span><span className="text-[#89ddff]">,</span>{'\n'}
{'  '}<span className="text-[#c3e88d]">&quot;to&quot;</span><span className="text-[#89ddff]">:</span>      <span className="text-[#c3e88d]">&quot;+1XXXXXXXXXX&quot;</span><span className="text-[#89ddff]">,</span>{'\n'}
{'  '}<span className="text-[#c3e88d]">&quot;message&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Hello from your app!&quot;</span>{'\n'}
<span className="text-[#89ddff]">{'}'}</span>{'\n'}
{'\n'}
<span className="text-[#546e7a] italic">{'// 200 OK'}</span>{'\n'}
<span className="text-[#89ddff]">{'{'}</span> <span className="text-[#c3e88d]">&quot;success&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#f78c6c]">true</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;messageId&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;msg_xxx&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;creditsRemaining&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#f78c6c]">248</span> <span className="text-[#89ddff]">{'}'}</span>{'\n'}
{'\n'}
<span className="text-[#546e7a] italic">{'// 402 Insufficient Credits'}</span>{'\n'}
<span className="text-[#89ddff]">{'{'}</span> <span className="text-[#c3e88d]">&quot;error&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Insufficient credits&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;currentCredits&quot;</span><span className="text-[#89ddff]">:</span> <span className="text-[#f78c6c]">0</span> <span className="text-[#89ddff]">{'}'}</span>
              </pre>
            </div>

            {/* Delivery rate */}
            <div className="col-span-12 sm:col-span-4 bg-surface border border-border rounded-xl p-8">
              <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-3">Delivery rate</div>
              <div className="text-4xl font-semibold tracking-[-0.04em] text-text">99<span className="text-red">%</span></div>
              <div className="text-[13px] text-text3 mt-1.5 font-light">Carrier-grade routing</div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-24">
        <RevealSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3.5">Pricing</div>
              <h2 className="text-[clamp(28px,3.2vw,44px)] font-semibold tracking-[-0.035em] leading-[1.1] text-text">Simple, transparent<br/>pricing.</h2>
            </div>
            <p className="text-[15px] text-text2 leading-[1.65] max-w-[340px] font-light sm:text-right">
              Start free for 7 days. No setup fees. No contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tier: 'Starter', price: 9, credits: '200', overage: '$0.04',
                desc: 'Perfect for small teams just getting started.',
                features: ['200 credits / month', 'All features included', 'Unified inbox & AI scenarios', 'Phone number provisioning', '24/7 support & analytics'],
                highlight: false,
              },
              {
                tier: 'Growth', price: 29, credits: '500', overage: '$0.03',
                desc: 'The sweet spot for growing businesses.',
                features: ['500 credits / month', 'Unlimited calling', 'All features included', 'Unified inbox & AI scenarios', 'Phone number provisioning', '24/7 support & analytics'],
                highlight: true,
              },
              {
                tier: 'Enterprise', price: 59, credits: '1,000', overage: '$0.02',
                desc: 'Full power for high-volume operations.',
                features: ['1,000 credits / month', 'Unlimited calling', 'All features included', 'Unified inbox & AI scenarios', 'Phone number provisioning', '24/7 support & analytics'],
                highlight: false,
              },
            ].map((p, i) => (
              <div key={i} className={`rounded-[14px] p-7 border relative flex flex-col ${p.highlight ? 'bg-text text-white border-text' : 'bg-surface border-border'}`}>
                {p.highlight && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-red text-white text-center py-1 px-3 text-[9px] font-mono font-semibold tracking-widest uppercase rounded-b-lg">Most popular</div>
                )}
                <div className={p.highlight ? 'pt-4' : ''}>
                  {/* Plan name */}
                  <div className={`text-base font-semibold tracking-[-0.02em] mb-4 ${p.highlight ? 'text-white' : 'text-text'}`}>{p.tier}</div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-[36px] font-semibold tracking-[-0.04em] leading-none ${p.highlight ? 'text-white' : 'text-text'}`}>${p.price}</span>
                    <span className={`text-[13px] ${p.highlight ? 'text-white/50' : 'text-text3'}`}>/month</span>
                  </div>
                  <div className={`text-xs mb-4 ${p.highlight ? 'text-white/40' : 'text-text3'}`}>
                    {p.credits} credits included
                  </div>

                  {/* Description */}
                  <div className={`text-[13px] font-light mb-5 ${p.highlight ? 'text-white/50' : 'text-text2'}`}>{p.desc}</div>

                  {/* Divider */}
                  <div className={`h-px mb-5 ${p.highlight ? 'bg-white/10' : 'bg-border'}`} />

                  {/* Features */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    {p.features.map((f, j) => (
                      <div key={j} className={`flex items-start gap-2 text-[12.5px] font-light leading-[1.4] ${p.highlight ? 'text-white/70' : 'text-text2'}`}>
                        <div className={`w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center ${p.highlight ? 'bg-white/20' : 'bg-bg2'}`}>
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke={p.highlight ? '#fff' : '#9B9890'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* Overage */}
                  <div className={`font-mono text-[11px] mt-4 ${p.highlight ? 'text-white/30' : 'text-text3'}`}>
                    {p.overage}/extra credit
                  </div>

                  {/* CTA */}
                  <a href="https://app.airophone.com/signup"
                    className={`w-full mt-5 px-5 py-3 rounded-[9px] text-sm font-medium no-underline text-center block transition-all ${
                      p.highlight
                        ? 'bg-red text-white hover:opacity-90'
                        : 'bg-bg hover:bg-bg2 text-text border border-border'
                    }`}>
                    Start 7-day free trial &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trial note */}
          <div className="mt-6 text-center">
            <p className="text-[13px] text-text3 font-light">
              7-day free trial on all plans. Your card will not be charged until the trial ends.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="mx-6 sm:mx-10 mb-24">
        <RevealSection>
          <div className="bg-surface border border-border rounded-2xl px-8 sm:px-[60px] py-[60px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <div className="font-mono text-[11px] text-red tracking-[0.12em] uppercase mb-3.5">Get Started</div>
              <div className="text-[clamp(24px,2.8vw,38px)] font-semibold tracking-[-0.03em] leading-[1.15] text-text">Your business phone,<br/>finally automated.</div>
              <p className="text-sm text-text2 leading-[1.7] mt-3 max-w-[380px] font-light">
                Join thousands of teams using Airophone to call smarter, message faster, and let AI handle the rest.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 flex-shrink-0">
              <a href="https://app.airophone.com/signup"
                className="inline-flex items-center gap-2 bg-text text-white px-6 py-3.5 rounded-[9px] text-sm font-medium no-underline hover:bg-[#2a2928] hover:-translate-y-px hover:shadow-lg transition-all">
                Try for free
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://app.airophone.com/login"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-text2 border border-border2 px-6 py-3.5 rounded-[9px] text-sm no-underline cursor-pointer hover:bg-bg2 hover:text-text hover:-translate-y-px transition-all">
                Sign in to dashboard
              </a>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[13.5px] font-medium text-text2">
          <Logo size={22} />
          AiroPhone by Airosofts
        </div>
        <ul className="flex gap-6 list-none">
          <li><a href="#features" className="text-[13px] text-text3 no-underline hover:text-text2 transition-colors">Features</a></li>
          <li><a href="#pricing" className="text-[13px] text-text3 no-underline hover:text-text2 transition-colors">Pricing</a></li>
          <li><a href="/terms" className="text-[13px] text-text3 no-underline hover:text-text2 transition-colors">Terms</a></li>
          <li><a href="/privacy" className="text-[13px] text-text3 no-underline hover:text-text2 transition-colors">Privacy</a></li>
        </ul>
        <div className="font-mono text-[11px] text-text3 tracking-wide">&copy; 2025 AIROSOFTS LLC</div>
      </footer>
    </div>
  )
}
