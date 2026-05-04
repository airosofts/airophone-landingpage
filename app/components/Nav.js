'use client'

import { useState } from 'react'
import Link from 'next/link'

function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

const FEATURES = [
  { label: 'VoIP Calling', href: '/features/voip-calling', desc: 'Crystal-clear business calls' },
  { label: 'Bulk SMS', href: '/features/bulk-sms', desc: 'Send thousands of messages' },
  { label: 'AI Scenarios', href: '/features/ai-scenarios', desc: 'Automated message handling' },
  { label: 'Unified Inbox', href: '/features/unified-inbox', desc: 'All conversations in one place' },
  { label: 'Phone Numbers', href: '/features/phone-numbers', desc: 'Get a number in 60 seconds' },
]

const RESOURCES = [
  { label: 'Blog', href: '/blog', desc: 'Guides and resources' },
  { label: 'Best Business Phone Systems', href: '/blog/best-business-phone-systems', desc: '2026 comparison guide' },
  { label: 'SMS Marketing Guide', href: '/blog/sms-marketing-guide', desc: 'Complete guide for teams' },
  { label: 'Virtual Phone Number Guide', href: '/blog/virtual-phone-number-guide', desc: 'Get a number in minutes' },
]

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileFeatures, setMobileFeatures] = useState(false)
  const [mobileResources, setMobileResources] = useState(false)

  return (
    <nav className="sticky top-0 z-[200] bg-bg/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline text-text text-[15px] font-semibold tracking-tight shrink-0">
          <Logo size={24} />
          AiroPhone
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">

          {/* Features dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-[13.5px] text-text2 hover:text-text transition-colors rounded-lg hover:bg-surface cursor-pointer">
              Features <ChevronDown />
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-surface border border-border rounded-xl shadow-lg overflow-hidden w-[260px]">
                <div className="px-3 pt-3 pb-1">
                  <p className="font-mono text-[10px] text-text3 tracking-widest uppercase px-1 mb-1">Features</p>
                </div>
                {FEATURES.map((f) => (
                  <Link key={f.href} href={f.href} className="flex flex-col px-4 py-2.5 hover:bg-bg transition-colors no-underline group/item">
                    <span className="text-[13px] font-medium text-text group-hover/item:text-red transition-colors">{f.label}</span>
                    <span className="text-[11px] text-text3 mt-0.5">{f.desc}</span>
                  </Link>
                ))}
                <div className="border-t border-border mx-3 my-1" />
                <Link href="/pricing" className="flex items-center justify-between px-4 py-2.5 mb-1 hover:bg-bg transition-colors no-underline">
                  <span className="text-[13px] font-medium text-red">See pricing →</span>
                </Link>
              </div>
            </div>
          </li>

          {/* Pricing */}
          <li>
            <Link href="/pricing" className="px-3 py-2 text-[13.5px] text-text2 hover:text-text transition-colors no-underline rounded-lg hover:bg-surface block">
              Pricing
            </Link>
          </li>

          {/* Compare */}
          <li>
            <Link href="/compare" className="px-3 py-2 text-[13.5px] text-text2 hover:text-text transition-colors no-underline rounded-lg hover:bg-surface block">
              Compare
            </Link>
          </li>

          {/* Resources dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-[13.5px] text-text2 hover:text-text transition-colors rounded-lg hover:bg-surface cursor-pointer">
              Resources <ChevronDown />
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-surface border border-border rounded-xl shadow-lg overflow-hidden w-[280px]">
                <div className="px-3 pt-3 pb-1">
                  <p className="font-mono text-[10px] text-text3 tracking-widest uppercase px-1 mb-1">Resources</p>
                </div>
                {RESOURCES.map((r) => (
                  <Link key={r.href} href={r.href} className="flex flex-col px-4 py-2.5 hover:bg-bg transition-colors no-underline group/item">
                    <span className="text-[13px] font-medium text-text group-hover/item:text-red transition-colors">{r.label}</span>
                    <span className="text-[11px] text-text3 mt-0.5">{r.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          <a href="https://app.airophone.com/login"
            className="hidden sm:inline-flex px-4 py-[7px] rounded-[7px] text-[13px] font-medium no-underline text-text2 border border-border hover:bg-surface hover:text-text transition-all">
            Log in
          </a>
          <a href="https://app.airophone.com/signup"
            className="px-3 sm:px-4 py-[7px] rounded-[7px] text-[12px] sm:text-[13px] font-medium bg-red text-white no-underline hover:opacity-90 transition-opacity">
            Try for free →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text2 hover:text-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 space-y-1">
          {/* Features section */}
          <button
            onClick={() => setMobileFeatures(!mobileFeatures)}
            className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-text"
          >
            Features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform ${mobileFeatures ? 'rotate-180' : ''}`}>
              <path d="M3.5 5.25l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileFeatures && (
            <div className="pl-3 space-y-0.5">
              {FEATURES.map((f) => (
                <Link key={f.href} href={f.href} onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[13px] text-text2 no-underline hover:text-text transition-colors">
                  {f.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/pricing" onClick={() => setMobileOpen(false)}
            className="block py-2 text-[14px] font-medium text-text no-underline">
            Pricing
          </Link>

          <Link href="/compare" onClick={() => setMobileOpen(false)}
            className="block py-2 text-[14px] font-medium text-text no-underline">
            Compare
          </Link>

          {/* Resources section */}
          <button
            onClick={() => setMobileResources(!mobileResources)}
            className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-text"
          >
            Resources
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform ${mobileResources ? 'rotate-180' : ''}`}>
              <path d="M3.5 5.25l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileResources && (
            <div className="pl-3 space-y-0.5">
              {RESOURCES.map((r) => (
                <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[13px] text-text2 no-underline hover:text-text transition-colors">
                  {r.label}
                </Link>
              ))}
            </div>
          )}

          <div className="pt-3 border-t border-border">
            <a href="https://app.airophone.com/login"
              className="block py-2 text-[14px] font-medium text-text2 no-underline">
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
