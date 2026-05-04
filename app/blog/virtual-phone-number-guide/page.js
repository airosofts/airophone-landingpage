import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'How to Get a Virtual Business Phone Number — AiroPhone',
  description: 'A step-by-step guide to getting a virtual business phone number. What they are, how they work, and why every small business needs one.',
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

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="#D63B1F"/>
      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const relatedPosts = [
  {
    slug: 'best-business-phone-systems',
    category: 'Business Phone',
    title: 'Best Business Phone Systems for Small Businesses in 2026',
    description: 'Compare the top platforms on pricing, AI features, and ease of setup.',
  },
  {
    slug: 'sms-marketing-guide',
    category: 'SMS Marketing',
    title: 'The Complete SMS Marketing Guide for Small Businesses',
    description: 'Compliance, campaign types, best practices, and how to measure results.',
  },
]

const faqs = [
  {
    q: 'Can I keep my existing business number?',
    a: 'Yes. Number porting lets you transfer your current number to a new provider without losing it. AiroPhone supports number porting on all plans. The process typically takes 2–7 business days and is handled by our support team.',
  },
  {
    q: 'Will a virtual number work for SMS?',
    a: 'It depends on the provider. Not all virtual numbers support two-way SMS — some only support voice. AiroPhone numbers support full two-way SMS, MMS, and bulk campaigns. Always confirm SMS support before signing up.',
  },
  {
    q: 'Can customers tell it\'s a virtual number?',
    a: 'No. A virtual number looks identical to any other phone number. Customers see a normal local or toll-free number when you call or text them. There\'s no way to tell from the number itself whether it\'s virtual or tied to a physical phone line.',
  },
  {
    q: 'What happens if I cancel my plan?',
    a: 'If you cancel, you can port your number out to another provider before your plan ends. This preserves your number and your business\'s continuity. Most providers, including AiroPhone, will assist with the port-out process.',
  },
  {
    q: 'Do I need a smartphone or special hardware?',
    a: 'No hardware required. AiroPhone works in your browser and has a mobile app for iOS and Android. You can make and receive calls on your existing computer, tablet, or phone — no new devices or equipment needed.',
  },
  {
    q: 'Can multiple team members share one number?',
    a: 'Yes. AiroPhone\'s unified inbox lets your whole team see and respond to calls and messages from a single business number. You can assign conversations, leave internal notes, and see who handled what — without everyone needing separate numbers.',
  },
]

export default function VirtualPhoneNumberGuidePage() {
  return (
    <div className="min-h-screen bg-bg font-sans">

      <Nav />

      {/* BREADCRUMB */}
      <div className="max-w-[720px] mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-[13px] text-text3 font-mono">
          <Link href="/blog" className="hover:text-text2 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text2">Virtual Phone Number Guide</span>
        </nav>
      </div>

      {/* ARTICLE HEADER */}
      <header className="max-w-[720px] mx-auto px-6 pt-8 pb-10">
        <div className="mb-4">
          <span className="font-mono text-[10px] text-red bg-red-bg uppercase tracking-wider px-2.5 py-1 rounded-full">
            Virtual Phone
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-5">
          How to Get a Virtual Business Phone Number
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-text3 font-mono border-b border-border pb-6">
          <span>By AiroPhone Team</span>
          <span>&middot;</span>
          <span>April 2026</span>
          <span>&middot;</span>
          <span>6 min read</span>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="max-w-[720px] mx-auto px-6 pb-16">

        {/* What is a virtual phone number */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">What is a virtual phone number?</h2>
        <p className="text-[17px] text-text2 leading-relaxed mb-6">
          A virtual phone number is a phone number that isn't tied to a physical phone line or SIM card. Instead, calls and texts are routed over the internet to any device you choose — your laptop, tablet, or smartphone. To callers, it looks and works exactly like a regular phone number. The difference is entirely on the back end.
        </p>
        <p className="text-[17px] text-text2 leading-relaxed mb-6">
          Virtual numbers have been around for years, but they've become dramatically more powerful recently. Modern virtual phone platforms don't just route calls — they offer AI-powered call handling, two-way SMS, bulk messaging, voicemail transcription, and shared team inboxes, all managed from a browser or app.
        </p>
        <p className="text-[17px] text-text2 leading-relaxed mb-10">
          For small businesses, this means you can have a dedicated, professional business number with all the features of an enterprise phone system — without buying any hardware or signing up for a business phone plan with a carrier.
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Why every small business needs a virtual phone number</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-6">
          If you're currently using your personal cell number for business, you're creating problems you may not have noticed yet. Here's what changes when you switch to a dedicated virtual business number:
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Local presence, anywhere</h3>
              <p className="text-[15px] text-text2 leading-relaxed">Pick a local area code in any city or region, even if your business is remote or you operate nationally. Studies consistently show customers are more likely to answer calls from local numbers — a 718 or 312 number converts better than an unknown out-of-state area code.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">No hardware, no contracts</h3>
              <p className="text-[15px] text-text2 leading-relaxed">There's no desk phone to buy, no installation appointment to schedule, and no carrier contract to sign. A virtual number works on the devices you already own, from wherever you are. You can be up and running in under five minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Works anywhere with internet</h3>
              <p className="text-[15px] text-text2 leading-relaxed">Whether you're at the office, at home, traveling, or at a client site, your business number goes with you. Calls and texts route to your device automatically. You're never "unavailable" just because you stepped away from your desk.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Separation from your personal number</h3>
              <p className="text-[15px] text-text2 leading-relaxed">Your personal cell number is yours — don't put it on business cards, your website, or Google Maps. When you leave a role, change businesses, or simply want to set business hours, a separate number gives you control. Business calls stop when you decide they stop.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Team-friendly by design</h3>
              <p className="text-[15px] text-text2 leading-relaxed">A virtual number can be shared across multiple team members with no extra cost per user (depending on the platform). Everyone sees incoming calls and texts, conversations can be assigned, and nothing falls through the cracks because one person was out sick.</p>
            </div>
          </div>
        </div>

        {/* Types */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Types of virtual phone numbers</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-5">
          When you sign up for a virtual phone service, you'll typically choose between three number types:
        </p>

        <div className="space-y-4 mb-10">
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="text-base font-semibold text-text mb-1.5">Local numbers</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              A number with a specific area code, like 212 (New York), 310 (Los Angeles), or 312 (Chicago). Local numbers are best for businesses that serve a specific geographic area and want to appear rooted in that community. They tend to have higher answer rates for outbound calls compared to toll-free numbers.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="text-base font-semibold text-text mb-1.5">Toll-free numbers</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              Numbers starting with 800, 888, 877, 866, 855, or 844. Toll-free numbers signal a national or larger brand presence, and callers pay nothing to reach you. They're a good choice if you serve customers across multiple regions or want to project a more established image.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="text-base font-semibold text-text mb-1.5">Vanity numbers</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              Custom toll-free numbers where the digits spell something memorable, like 1-800-FLOWERS or 1-888-NEW-ROOF. Vanity numbers are powerful for brand recall in advertising but require availability and often cost more. They work best for businesses running radio, TV, or billboard campaigns.
            </p>
          </div>
        </div>

        {/* Mid-article CTA */}
        <div className="bg-red-bg border border-red rounded-2xl p-6 mb-8">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-2">Get your number today</p>
          <h3 className="text-lg font-semibold text-text mb-2 tracking-tight">Virtual numbers from AiroPhone — $9/mo flat</h3>
          <p className="text-[14px] text-text2 leading-relaxed mb-4">
            Local and toll-free numbers available. Includes SMS, AI call handling, and a shared team inbox. No hardware, no contracts.
          </p>
          <Link
            href="https://app.airophone.com/signup"
            className="inline-flex items-center gap-2 bg-red text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Start your free trial
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* What to look for */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">What to look for when choosing a provider</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-6">
          Not all virtual phone providers are equal. These four criteria will help you separate the options worth considering from the ones you should skip:
        </p>

        <div className="space-y-4 mb-10">
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Number porting support</h3>
            <p className="text-[15px] text-text2 leading-relaxed">If you already have a business number, you need to be able to bring it with you. Confirm the provider supports number porting before signing up — and check whether it's included in the base price or costs extra.</p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">SMS support</h3>
            <p className="text-[15px] text-text2 leading-relaxed">Two-way SMS is now expected, but bulk SMS and MMS support varies significantly by provider. If you want to send marketing campaigns or appointment reminders via text, verify that the provider supports it on the plan you're considering — not just on a premium tier.</p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">AI features</h3>
            <p className="text-[15px] text-text2 leading-relaxed">The best virtual phone platforms in 2026 offer AI that goes beyond basic voicemail transcription. Look for AI-powered auto-replies, scenario-based call routing, and automated follow-up sequences. These features save significant time and ensure no customer inquiry falls through the cracks.</p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Pricing model</h3>
            <p className="text-[15px] text-text2 leading-relaxed">Per-user pricing penalizes growth. A flat monthly price is more predictable and usually more affordable as your team expands. Confirm what's included in the base price — some providers charge extra for voicemail transcription, call recording, or analytics that should be standard.</p>
          </div>
        </div>

        {/* How to get one with AiroPhone */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">How to get a virtual number with AiroPhone</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-6">
          Getting set up with AiroPhone takes less time than reading this article. Here's how it works:
        </p>

        <div className="space-y-4 mb-10">
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-semibold text-red font-mono leading-none shrink-0">1</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Create your account</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  Sign up at app.airophone.com. Start your 7-day free trial. You'll set up your account with a business name and the email address you want to use.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-semibold text-red font-mono leading-none shrink-0">2</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Choose your number</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  Search for available numbers by area code, city, or number pattern. Pick a local number for regional presence or a toll-free number for a national feel. If you have an existing number, start a port request during setup — our team handles the rest.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-semibold text-red font-mono leading-none shrink-0">3</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Configure and start using it</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  Set up your AI scenarios, voicemail greeting, and business hours. Download the mobile app or use the browser interface. Your business number is live immediately — start calling, texting, and running campaigns the same day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-6">Common questions</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-surface border border-border rounded-xl p-5">
              <h3 className="text-[15px] font-semibold text-text mb-2">{faq.q}</h3>
              <p className="text-[14px] text-text2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-surface border border-border rounded-2xl p-8 text-center mb-10">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Get your number</p>
          <h3 className="text-xl font-semibold text-text tracking-tight mb-2">Start with a free 7-day trial</h3>
          <p className="text-[14px] text-text2 leading-relaxed mb-5 max-w-sm mx-auto">
            Get a dedicated virtual business number with AI call handling, two-way SMS, and bulk messaging — all for $9/month flat.
          </p>
          <Link
            href="https://app.airophone.com/signup"
            className="inline-flex items-center gap-2 bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Try AiroPhone free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Related articles */}
        <div>
          <h2 className="text-xl font-semibold text-text tracking-tight mb-5">Related articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-border rounded-xl p-5 hover:border-red hover:shadow-[0_0_0_1px_#D63B1F] transition-all group block"
              >
                <span className="font-mono text-[10px] text-red bg-red-bg uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-[14px] font-semibold text-text leading-snug mb-2 group-hover:text-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] text-text2 leading-relaxed">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* FOOTER CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-4">AiroPhone</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-4">
            Get your business number today
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Virtual numbers with AI calling, bulk SMS, and a shared team inbox. $9/month flat, no hardware needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://app.airophone.com/signup"
              className="w-full sm:w-auto bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity text-center"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-surface border border-border text-text rounded-lg px-6 py-3 text-sm font-medium hover:bg-bg transition-colors text-center"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
