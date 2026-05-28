import Link from 'next/link'

function Logo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

const COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Pricing',          href: '/pricing'  },
      { label: 'Referral Program', href: '/referral' },
      { label: 'Compare',          href: '/compare'  },
    ],
  },
  {
    heading: 'Features',
    links: [
      { label: 'VoIP Calling',       href: '/features/voip-calling'      },
      { label: 'Bulk SMS',           href: '/features/bulk-sms'          },
      { label: 'Ringless Voicemail', href: '/features/ringless-voicemail' },
      { label: 'AI Scenarios',       href: '/features/ai-scenarios'      },
      { label: 'Unified Inbox',      href: '/features/unified-inbox'     },
      { label: 'Phone Numbers',      href: '/features/phone-numbers'     },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'vs Quo',          href: '/compare/quo'           },
      { label: 'vs Google Voice', href: '/compare/google-voice'  },
      { label: 'vs Grasshopper',  href: '/compare/grasshopper'   },
      { label: 'vs RingCentral',  href: '/compare/ringcentral'   },
      { label: 'vs Dialpad',      href: '/compare/dialpad'       },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog',                   href: '/blog'                                },
      { label: 'SMS Marketing Guide',    href: '/blog/sms-marketing-guide'            },
      { label: 'Virtual Phone Numbers',  href: '/blog/virtual-phone-number-guide'     },
      { label: 'Business Phone Systems', href: '/blog/best-business-phone-systems'    },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms'    },
      { label: 'Privacy Policy',   href: '/privacy'  },
      { label: 'Fair Use Policy',  href: '/fair-use' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10">

          {/* Brand col */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <Logo size={26} />
              <span className="font-semibold text-[15px] text-text tracking-tight">AiroPhone</span>
            </Link>
            <p className="text-[13px] text-text3 leading-relaxed max-w-[240px] font-light">
              Business calls &amp; messaging, automated. Built for teams that move fast.
            </p>
            <Link
              href="https://app.airophone.com/signup"
              className="inline-flex items-center gap-1.5 mt-5 bg-red text-white text-[12px] font-medium px-4 py-2 rounded-lg no-underline hover:opacity-85 transition-opacity"
            >
              Try for free &rarr;
            </Link>
          </div>

          {/* Nav columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-text2 no-underline hover:text-text transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-text3">
            &copy; {new Date().getFullYear()} Airosofts LLC
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {[
              { label: 'Terms',    href: '/terms'    },
              { label: 'Privacy',  href: '/privacy'  },
              { label: 'Fair Use', href: '/fair-use' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] text-text3 no-underline hover:text-text2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
