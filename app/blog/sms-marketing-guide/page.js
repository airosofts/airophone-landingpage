import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'The Complete SMS Marketing Guide for Small Businesses — AiroPhone',
  description: 'Everything you need to know about SMS marketing: compliance, best practices, campaign ideas, and how to get started.',
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
    slug: 'virtual-phone-number-guide',
    category: 'Virtual Phone',
    title: 'How to Get a Virtual Business Phone Number',
    description: 'What they are, how they work, and how to set one up in minutes.',
  },
]

export default function SmsMarketingGuidePage() {
  return (
    <div className="min-h-screen bg-bg font-sans">

      <Nav />

      {/* BREADCRUMB */}
      <div className="max-w-[720px] mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-[13px] text-text3 font-mono">
          <Link href="/blog" className="hover:text-text2 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text2">SMS Marketing Guide</span>
        </nav>
      </div>

      {/* ARTICLE HEADER */}
      <header className="max-w-[720px] mx-auto px-6 pt-8 pb-10">
        <div className="mb-4">
          <span className="font-mono text-[10px] text-red bg-red-bg uppercase tracking-wider px-2.5 py-1 rounded-full">
            SMS Marketing
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-tight mb-5">
          The Complete SMS Marketing Guide for Small Businesses
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-text3 font-mono border-b border-border pb-6">
          <span>By AiroPhone Team</span>
          <span>&middot;</span>
          <span>April 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="max-w-[720px] mx-auto px-6 pb-16">

        {/* Why SMS works */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Why SMS marketing works</h2>
        <p className="text-[17px] text-text2 leading-relaxed mb-6">
          Email open rates hover around 20%. Social media posts reach maybe 5% of your followers. SMS? It's read 98% of the time — usually within 90 seconds of delivery. No other marketing channel comes close to that level of attention.
        </p>
        <p className="text-[17px] text-text2 leading-relaxed mb-6">
          SMS marketing works because it's personal, immediate, and frictionless. A text lands directly in someone's pocket. There's no algorithm deciding whether to show it, no spam folder to escape, no app to open first. For small businesses, this makes SMS one of the highest-ROI marketing tools available — and it's still dramatically underused compared to email and social.
        </p>

        {/* Stats callout */}
        <div className="bg-red-bg border border-red rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold text-red mb-1">98%</p>
              <p className="text-[13px] text-text2">Open rate</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-red mb-1">90s</p>
              <p className="text-[13px] text-text2">Avg. response time</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-red mb-1">6×</p>
              <p className="text-[13px] text-text2">Higher CTR than email</p>
            </div>
          </div>
        </div>

        <p className="text-[16px] text-text2 leading-relaxed mb-10">
          The caveat: SMS marketing done poorly can feel intrusive. Done well — with the right consent, timing, and message — it feels like a genuine, helpful communication from a business that respects the customer's time. This guide will show you how to do it right.
        </p>

        {/* Compliance */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Compliance basics: what you need to know</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-5">
          Before sending your first campaign, you need to understand the legal framework. In the US, SMS marketing is governed primarily by the Telephone Consumer Protection Act (TCPA) and enforced by the FCC. The rules are straightforward once you know them.
        </p>

        <div className="space-y-4 mb-8">
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Opt-in is required</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              You must have explicit written consent before texting someone for marketing purposes. This can be a form submission, a keyword reply (e.g., "Text DEALS to 555-123"), or a checkbox at checkout. You cannot text someone just because they gave you their phone number for another purpose.
            </p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Opt-out must be easy</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              Every message must include a clear way to stop receiving texts. The standard is "Reply STOP to unsubscribe." Once someone opts out, you must honor it immediately and never text them again for marketing purposes. Platforms like AiroPhone handle this automatically.
            </p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Identify yourself</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              Your messages must clearly identify who they're from. Don't assume recipients will recognize your number — include your business name in the first message and in any promotional content.
            </p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Timing matters legally and practically</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              The TCPA restricts unsolicited calls and messages to between 8 AM and 9 PM in the recipient's local time zone. Beyond the legal requirement, respect your customers' time — don't blast campaigns at 6 AM on a Sunday.
            </p>
          </div>
          <div className="border-l-2 border-red pl-5">
            <h3 className="text-base font-semibold text-text mb-1">Message frequency disclosure</h3>
            <p className="text-[15px] text-text2 leading-relaxed">
              When someone opts in, you should disclose how often they can expect to hear from you. "Msg frequency varies" or "Up to 4 messages/month" sets clear expectations and reduces opt-outs.
            </p>
          </div>
        </div>

        {/* Campaign types */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">5 SMS campaign types that drive results</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-6">
          Not all SMS campaigns are created equal. Here are the five types that consistently produce the best results for small businesses:
        </p>

        <div className="space-y-5 mb-10">
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-red bg-red-bg px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shrink-0">01</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Promotions and flash sales</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  A time-limited offer sent to your opt-in list is one of the highest-converting SMS formats. "Hi [Name], our summer sale is live — 20% off all services today only. Book at [link]" can drive immediate bookings. Keep it short, make the offer clear, and include a direct link or call to action.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-red bg-red-bg px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shrink-0">02</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Appointment reminders</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  For service businesses, no-shows are expensive. Automated appointment reminders sent 24 hours and 2 hours before a booking can cut no-shows by 50% or more. Include the date, time, and a link to reschedule if needed. This is one of the easiest wins in SMS marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-red bg-red-bg px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shrink-0">03</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Follow-up sequences</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  After a customer inquiry or purchase, a well-timed follow-up text can convert fence-sitters and build loyalty. "Hi [Name], just checking in — did you get a chance to look at the quote we sent? Happy to answer any questions." feels personal even when it's automated.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-red bg-red-bg px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shrink-0">04</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Re-engagement campaigns</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  Customers who haven't bought in 90+ days are worth a targeted message. "We miss you, [Name] — here's 15% off your next visit. Offer expires Friday." Re-engagement campaigns typically see 3–5x the conversion rate of cold outreach because these people already know and trust your business.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-red bg-red-bg px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shrink-0">05</span>
              <div>
                <h3 className="text-base font-semibold text-text mb-1.5">Announcements and updates</h3>
                <p className="text-[15px] text-text2 leading-relaxed">
                  New service launch, hours change, new location, or important update? SMS gets your message seen instantly. This works especially well for time-sensitive information where you can't rely on customers checking email or social media quickly enough.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-article CTA */}
        <div className="bg-red-bg border border-red rounded-2xl p-6 mb-8">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-2">Bulk SMS, built in</p>
          <h3 className="text-lg font-semibold text-text mb-2 tracking-tight">Send SMS campaigns with AiroPhone</h3>
          <p className="text-[14px] text-text2 leading-relaxed mb-4">
            AiroPhone includes bulk SMS on all plans. Send campaigns, track delivery, and manage opt-outs automatically — starting at $9/month flat.
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

        {/* Best practices */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">SMS best practices</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-6">
          Even with a great list and solid campaign types, execution makes the difference. These four principles separate effective SMS marketing from the kind that drives opt-outs:
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Keep it short</h3>
              <p className="text-[15px] text-text2 leading-relaxed">The ideal SMS is under 160 characters. Say one thing, make it actionable, and stop. You can include a link for more detail. Long texts feel like reading a terms of service — people scroll past them.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Personalize wherever possible</h3>
              <p className="text-[15px] text-text2 leading-relaxed">A message that starts with "Hi Sarah" performs measurably better than one that starts with "Hi there" or no greeting at all. First name personalization is the minimum. If you can reference their last purchase or appointment, even better.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Time it right</h3>
              <p className="text-[15px] text-text2 leading-relaxed">Tuesday through Thursday, between 10 AM and 7 PM local time, consistently outperforms other send windows. Avoid Monday mornings (people are overwhelmed) and Friday afternoons (mentally checked out). Never send after 8 PM.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-base font-semibold text-text mb-1">Include a clear CTA</h3>
              <p className="text-[15px] text-text2 leading-relaxed">Every message should have one job: get the reader to do one specific thing. "Book now at [link]", "Reply YES to confirm", "Call us at [number]" — pick one action and make it obvious. Multiple CTAs in a single message reduce conversions.</p>
            </div>
          </div>
        </div>

        {/* Measuring success */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Measuring SMS marketing success</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-5">
          SMS is one of the most measurable marketing channels you can use. Track these three metrics to understand what's working:
        </p>

        <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
              <div>
                <h3 className="text-base font-semibold text-text mb-1">Delivery rate</h3>
                <p className="text-[14px] text-text2 leading-relaxed">Percentage of messages successfully delivered. Anything below 95% suggests list quality issues — invalid numbers, disconnected phones, or carrier filtering. Clean your list regularly.</p>
              </div>
              <span className="font-mono text-[13px] text-red bg-red-bg px-3 py-1 rounded-lg shrink-0">Target: 95%+</span>
            </div>
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
              <div>
                <h3 className="text-base font-semibold text-text mb-1">Reply rate</h3>
                <p className="text-[14px] text-text2 leading-relaxed">For two-way SMS campaigns and follow-ups, reply rate measures engagement. A 10–15% reply rate on a follow-up sequence is strong. Low reply rates often mean the message isn't personal or timely enough.</p>
              </div>
              <span className="font-mono text-[13px] text-red bg-red-bg px-3 py-1 rounded-lg shrink-0">Target: 10%+</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-text mb-1">Opt-out rate</h3>
                <p className="text-[14px] text-text2 leading-relaxed">The percentage of recipients who unsubscribe after each campaign. Under 1% is healthy. If you're seeing 2–5%, you're sending too often, the content isn't relevant, or you have list quality issues. Investigate immediately.</p>
              </div>
              <span className="font-mono text-[13px] text-red bg-red-bg px-3 py-1 rounded-lg shrink-0">Target: &lt;1%</span>
            </div>
          </div>
        </div>

        {/* Getting started with AiroPhone */}
        <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">Getting started with AiroPhone bulk SMS</h2>
        <p className="text-[16px] text-text2 leading-relaxed mb-5">
          AiroPhone is built to make SMS marketing accessible for small businesses — without needing a marketing team or a complex tech stack. Here's how it works:
        </p>
        <p className="text-[16px] text-text2 leading-relaxed mb-4">
          Every AiroPhone plan includes bulk SMS at no extra charge. You get a dedicated business number (or can port your existing number), a contact list manager, and a campaign builder where you can write, schedule, and send text campaigns to your list in minutes.
        </p>
        <p className="text-[16px] text-text2 leading-relaxed mb-4">
          Opt-out management is automatic — when someone replies STOP, they're immediately removed from your list and future campaigns. Delivery tracking shows you what was sent, delivered, and replied to. And if you want to automate follow-ups after a call or inquiry, AiroPhone's AI scenario engine can trigger SMS sequences without any manual work.
        </p>
        <p className="text-[16px] text-text2 leading-relaxed mb-10">
          The result: professional SMS marketing that would have cost thousands of dollars in software and agency fees a few years ago, now available for $9/month flat.
        </p>

        {/* Final CTA */}
        <div className="bg-surface border border-border rounded-2xl p-8 text-center mb-10">
          <p className="font-mono text-[11px] text-red tracking-widest uppercase mb-3">Start sending</p>
          <h3 className="text-xl font-semibold text-text tracking-tight mb-2">Launch your first SMS campaign today</h3>
          <p className="text-[14px] text-text2 leading-relaxed mb-5 max-w-sm mx-auto">
            AiroPhone includes bulk SMS, opt-out management, and AI automation — all for $9/month flat. Free 7-day trial.
          </p>
          <Link
            href="https://app.airophone.com/signup"
            className="inline-flex items-center gap-2 bg-red text-white rounded-lg px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Start free trial
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
            Start texting like a pro
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Bulk SMS, AI call handling, and a dedicated business number — $9/month flat.
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
