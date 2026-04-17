import Link from 'next/link'

function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

export const metadata = {
  title: 'Privacy Policy — AiroPhone',
  description: 'AiroPhone Privacy Policy — learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  const S = {
    h2: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210', marginTop: 40, marginBottom: 12 },
    h3: { fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: '#131210', marginTop: 28, marginBottom: 8 },
    p: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, marginBottom: 14, fontWeight: 300 },
    li: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, fontWeight: 300, marginBottom: 6 },
    strong: { fontWeight: 500, color: '#131210' },
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F7F6F3', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 200, height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', background: 'rgba(247,246,243,0.88)',
        backdropFilter: 'blur(16px)', borderBottom: '1px solid #E3E1DB',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#131210', fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em' }}>
          <Logo /> AiroPhone
        </Link>
        <Link href="https://app.airophone.com/login" style={{ padding: '7px 16px', borderRadius: 7, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: '#5C5A55', border: '1px solid #D4D1C9' }}>
          Log in
        </Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#D63B1F', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
          Legal
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, letterSpacing: '-0.04em', color: '#131210', lineHeight: 1.1, marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: '#9B9890', fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>
          Revision Date: April 17, 2026
        </p>

        <div>
          <p style={S.p}>
            At AiroPhone, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use, and share your information as described in this Privacy Policy.
          </p>
          <p style={S.p}>
            Your use of AiroPhone&apos;s Services is at all times subject to our <Link href="/terms" style={{ color: '#D63B1F', textDecoration: 'none' }}>Terms of Service</Link>, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Service.
          </p>

          {/* ── TOC ── */}
          <div style={{ background: '#EFEDE8', border: '1px solid #E3E1DB', borderRadius: 12, padding: '20px 24px', marginTop: 32, marginBottom: 8 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#9B9890', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>Table of contents</div>
            <ol style={{ paddingLeft: 18, margin: 0 }}>
              {[
                'What This Privacy Policy Covers',
                'Categories of Personal Data We Collect',
                'Categories of Sources of Personal Data',
                'Our Purposes for Collecting Personal Data',
                'How We Share Your Personal Data',
                'Legal Obligations',
                'Business Transfers',
                'Data That Is Not Personal Data',
                'Tracking Tools, Cookies, and Opt-Out',
                'Interest-Based Advertisements',
                'Data Security and Retention',
                'Personal Data of Children',
                'AI Data Processing',
                'State Law Privacy Rights',
                'European Union and United Kingdom Data Subject Rights',
                'Transfers of Personal Data',
                'Changes to This Privacy Policy',
                'Contact Information',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: '#5C5A55', lineHeight: 1.9, fontWeight: 300 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* ── 1. What This Covers ── */}
          <h2 style={S.h2}>1. What This Privacy Policy Covers</h2>
          <p style={S.p}>
            This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. &ldquo;Personal Data&rdquo; means any information that identifies or relates to a particular individual and also includes information referred to as &ldquo;personally identifiable information&rdquo; or &ldquo;personal information&rdquo; under applicable data privacy laws, rules, or regulations. This Privacy Policy does not cover the practices of companies we don&apos;t own or control or people we don&apos;t manage.
          </p>

          {/* ── 2. Categories of Personal Data ── */}
          <h2 style={S.h2}>2. Categories of Personal Data We Collect</h2>
          <p style={S.p}>This chart details the categories of Personal Data that we collect and have collected over the past 12 months:</p>

          <h3 style={S.h3}>Profile or Contact Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>First and last name</li>
            <li style={S.li}>Email address</li>
            <li style={S.li}>Phone number</li>
            <li style={S.li}>Business name and size</li>
            <li style={S.li}>Unique identifiers such as passwords</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers</p>

          <h3 style={S.h3}>Contact List Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Contact names, phone numbers, email addresses, and custom fields uploaded by you</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers (telecom providers for message delivery)</p>

          <h3 style={S.h3}>Communication Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>SMS messages sent and received through the platform</li>
            <li style={S.li}>Call logs and call recordings (when enabled)</li>
            <li style={S.li}>AI scenario configurations and auto-reply content</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers (Telnyx for telecommunications)</p>

          <h3 style={S.h3}>Usage Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Number of outgoing calls and messages</li>
            <li style={S.li}>Number of missed calls</li>
            <li style={S.li}>Call minutes and message counts</li>
            <li style={S.li}>Feature usage patterns</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers, Analytics Partners</p>

          <h3 style={S.h3}>Payment Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Payment card type</li>
            <li style={S.li}>Last 4 digits of the payment card</li>
            <li style={S.li}>Billing address</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers (Stripe, Inc. for payment processing)</p>

          <h3 style={S.h3}>Device / IP Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>IP address</li>
            <li style={S.li}>Device ID and type</li>
            <li style={S.li}>Operating system and browser type</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers, Analytics Partners</p>

          <h3 style={S.h3}>Professional or Employment-Related Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Job title, employer name, and size of employer (when provided during onboarding)</li>
            <li style={S.li}>Industry</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers, Analytics Partners</p>

          <h3 style={S.h3}>Recordings</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Recordings of phone calls (when call recording is enabled by you)</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers</p>

          <h3 style={S.h3}>Geolocation Data</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>IP-address-based location information</li>
          </ul>
          <p style={S.p}><em>Shared with:</em> Service Providers, Analytics Partners</p>

          {/* ── 3. Sources ── */}
          <h2 style={S.h2}>3. Categories of Sources of Personal Data</h2>
          <p style={S.p}>We collect Personal Data from the following sources:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong style={S.strong}>You</strong> — when you create an account, use interactive tools, provide information in forms, contact us, or use the Services (automatically via cookies and device information)</li>
            <li style={S.li}><strong style={S.strong}>Third-Party Vendors</strong> — analytics providers, customer support tools</li>
            <li style={S.li}><strong style={S.strong}>Social Networks</strong> — if you sign in via Google, we receive your basic profile information</li>
          </ul>

          {/* ── 4. Purposes ── */}
          <h2 style={S.h2}>4. Our Purposes for Collecting Personal Data</h2>

          <h3 style={S.h3}>Providing, Customizing, and Improving the Services</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Creating and managing your account</li>
            <li style={S.li}>Processing transactions and billing</li>
            <li style={S.li}>Providing the communication services you request (SMS, calls, AI replies)</li>
            <li style={S.li}>Providing support and assistance</li>
            <li style={S.li}>Improving the Services, including testing, research, internal analytics, and product development</li>
            <li style={S.li}>Personalizing the Services and communications based on your preferences</li>
            <li style={S.li}>Fraud protection, security, and debugging</li>
          </ul>

          <h3 style={S.h3}>Marketing the Services</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Marketing and promoting AiroPhone</li>
            <li style={S.li}>Sending emails and communications according to your preferences</li>
          </ul>

          <h3 style={S.h3}>Meeting Legal Requirements</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Fulfilling legal obligations under applicable law or regulation</li>
            <li style={S.li}>Protecting the rights, property, or safety of you, AiroPhone, or another party</li>
            <li style={S.li}>Enforcing agreements with you and resolving disputes</li>
          </ul>

          <p style={S.p}>We will not collect additional categories of Personal Data or use collected data for materially different, unrelated, or incompatible purposes without providing you notice.</p>

          {/* ── 5. How We Share ── */}
          <h2 style={S.h2}>5. How We Share Your Personal Data</h2>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong style={S.strong}>Service Providers</strong> — security and fraud prevention, hosting and technology providers, customer service vendors, telecom providers (Telnyx), payment processors (Stripe)</li>
            <li style={S.li}><strong style={S.strong}>Analytics Partners</strong> — companies that track how users interact with the Services and how users found the Services</li>
            <li style={S.li}><strong style={S.strong}>Business Partners</strong> — businesses you have a relationship with, or companies we partner with for joint offers</li>
            <li style={S.li}><strong style={S.strong}>Parties You Authorize</strong> — third parties you access through the Services, social media services, other users in your workspace</li>
          </ul>
          <p style={S.p}>
            We do not sell your Personal Data to third parties for their direct marketing purposes.
          </p>

          {/* ── 6. Legal Obligations ── */}
          <h2 style={S.h2}>6. Legal Obligations</h2>
          <p style={S.p}>
            We may share any Personal Data with third parties in conjunction with meeting legal requirements and enforcing legal terms, as described in Section 4.
          </p>

          {/* ── 7. Business Transfers ── */}
          <h2 style={S.h2}>7. Business Transfers</h2>
          <p style={S.p}>
            All Personal Data we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy, or other transaction in which that third party assumes control of our business. Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies.
          </p>

          {/* ── 8. Aggregated Data ── */}
          <h2 style={S.h2}>8. Data That Is Not Personal Data</h2>
          <p style={S.p}>
            We may create aggregated, de-identified, or anonymized data from the Personal Data we collect. We may use such data and share it with third parties for our lawful business purposes, including to analyze, build, and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.
          </p>

          {/* ── 9. Cookies ── */}
          <h2 style={S.h2}>9. Tracking Tools, Cookies, and Opt-Out</h2>
          <p style={S.p}>
            The Services use cookies and similar technologies such as pixel tags, web beacons, and JavaScript (collectively, &ldquo;Cookies&rdquo;) to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, and operate and improve our Services.
          </p>
          <p style={S.p}>We use the following types of Cookies:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong style={S.strong}>Essential Cookies</strong> — required for providing features or services you have requested (e.g., logging into secure areas). Disabling these may make certain features unavailable.</li>
            <li style={S.li}><strong style={S.strong}>Functional Cookies</strong> — used to record your choices and settings, maintain preferences, and recognize you when you return.</li>
            <li style={S.li}><strong style={S.strong}>Performance / Analytical Cookies</strong> — allow us to understand how visitors use the Services by collecting information about page views, visitor counts, and time on page.</li>
          </ul>
          <p style={S.p}>
            You can manage Cookie preferences through your browser settings. Disabling cookies may affect the functionality of the Services. Please note that the Services do not currently support &ldquo;Do Not Track&rdquo; requests sent from a browser.
          </p>

          {/* ── 10. Interest-Based Ads ── */}
          <h2 style={S.h2}>10. Interest-Based Advertisements</h2>
          <p style={S.p}>
            We may serve advertisements and allow third-party ad networks to serve advertisements through the Services. These advertisements may be targeted to users who fit certain general profile categories or display certain preferences (&ldquo;Interest-Based Ads&rdquo;). Information for Interest-Based Ads may be gathered through tracking users&apos; activities across time and unaffiliated properties. We do not currently run retargeting or advertising cookies on the AiroPhone platform.
          </p>

          {/* ── 11. Data Security ── */}
          <h2 style={S.h2}>11. Data Security and Retention</h2>
          <p style={S.p}>
            We seek to protect your Personal Data from unauthorized access, use, and disclosure using appropriate physical, technical, organizational, and administrative security measures, including encryption in transit (TLS) and at rest, access controls, and regular security audits. You should also help protect your data by selecting a strong password and limiting access to your devices.
          </p>
          <p style={S.p}>
            Although we work to protect the security of your account, please be aware that no method of transmitting data over the internet or storing data is completely secure.
          </p>
          <p style={S.p}>
            We retain Personal Data for as long as you have an active account with us or as otherwise necessary to provide the Services. In some cases we retain data longer to comply with legal obligations, resolve disputes, or as otherwise permitted by applicable law. Communication data (messages and call logs) are retained for 24 months by default. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.
          </p>

          {/* ── 12. Children ── */}
          <h2 style={S.h2}>12. Personal Data of Children</h2>
          <p style={S.p}>
            We do not knowingly collect or solicit Personal Data about children under 16 years of age. If you are a child under the age of 16, please do not attempt to register for or otherwise use the Services. If we learn we have collected Personal Data from a child under 16, we will delete that information as quickly as possible. If you believe that a child under 16 may have provided Personal Data to us, please contact us at contact@airosofts.com.
          </p>

          {/* ── 13. AI Processing ── */}
          <h2 style={S.h2}>13. AI Data Processing</h2>
          <p style={S.p}>
            When you enable AI scenarios, inbound messages may be processed by our AI systems to generate automated responses. AI processing happens in real-time and is scoped to your workspace. We do not use your message content to train AI models for other customers. AI-generated responses are provided &ldquo;as is&rdquo; and may not always be accurate or appropriate. You can disable AI features at any time from the AiroPhone dashboard.
          </p>

          {/* ── 14. State Laws ── */}
          <h2 style={S.h2}>14. State Law Privacy Rights</h2>

          <h3 style={S.h3}>California Resident Rights</h3>
          <p style={S.p}>
            Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties&apos; direct marketing purposes. To submit such a request, please contact us at contact@airosofts.com.
          </p>

          <h3 style={S.h3}>Nevada Resident Rights</h3>
          <p style={S.p}>
            If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties. You can exercise this right by contacting us at contact@airosofts.com with the subject line &ldquo;Nevada Do Not Sell Request&rdquo;. Please note that we do not currently sell your Personal Data as defined under Nevada Revised Statutes Chapter 603A.
          </p>

          {/* ── 15. EU/UK ── */}
          <h2 style={S.h2}>15. European Union and United Kingdom Data Subject Rights</h2>
          <p style={S.p}>
            If you are a resident of the European Union (&ldquo;EU&rdquo;), United Kingdom (&ldquo;UK&rdquo;), Liechtenstein, Norway, or Iceland, you may have additional rights under the EU or UK General Data Protection Regulation (the &ldquo;GDPR&rdquo;) with respect to your Personal Data. AiroPhone (Airosofts LLC) will be the controller of your Personal Data processed in connection with the Services.
          </p>
          <p style={S.p}>You have the following rights:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong style={S.strong}>Access</strong> — request information about and a copy of the Personal Data we hold about you</li>
            <li style={S.li}><strong style={S.strong}>Rectification</strong> — request correction of incorrect or incomplete data</li>
            <li style={S.li}><strong style={S.strong}>Erasure</strong> — request that we erase some or all of your Personal Data</li>
            <li style={S.li}><strong style={S.strong}>Withdrawal of Consent</strong> — withdraw consent at any time where processing is based on consent</li>
            <li style={S.li}><strong style={S.strong}>Portability</strong> — request a copy of your Personal Data in a machine-readable format</li>
            <li style={S.li}><strong style={S.strong}>Objection</strong> — object to further use or disclosure of your data for certain purposes, such as direct marketing</li>
            <li style={S.li}><strong style={S.strong}>Restriction of Processing</strong> — request that we restrict further processing of your data</li>
            <li style={S.li}><strong style={S.strong}>Right to File Complaint</strong> — lodge a complaint with the supervisory authority of your country or EU Member State</li>
          </ul>

          <h3 style={S.h3}>Processing Grounds</h3>
          <p style={S.p}>We will only process your Personal Data if we have a lawful basis for doing so:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong style={S.strong}>Contractual Necessity</strong> — we process Profile/Contact Data and Payment Data to perform under our Terms of Service with you</li>
            <li style={S.li}><strong style={S.strong}>Legitimate Interest</strong> — we process Usage Data, Device/IP Data, Professional Data, and Geolocation Data to provide, customize, and improve the Services</li>
            <li style={S.li}><strong style={S.strong}>Consent</strong> — in some cases we process data based on consent expressly granted at the time of collection</li>
            <li style={S.li}><strong style={S.strong}>Legal Obligation</strong> — we may process data to comply with a legal obligation or to protect vital interests</li>
          </ul>

          {/* ── 16. Transfers ── */}
          <h2 style={S.h2}>16. Transfers of Personal Data</h2>
          <p style={S.p}>
            The Services are hosted and operated in the United States through AiroPhone and its service providers. If you do not reside in the U.S., laws in the U.S. may differ from the laws where you reside. By using the Services, you acknowledge that any Personal Data about you is being provided to AiroPhone in the U.S. and will be hosted on U.S. servers. We ensure appropriate safeguards are in place for international transfers.
          </p>

          {/* ── 17. Changes ── */}
          <h2 style={S.h2}>17. Changes to This Privacy Policy</h2>
          <p style={S.p}>
            We may need to change this Privacy Policy from time to time. We will alert you to material changes by placing a notice on the AiroPhone website, by sending you an email, and/or by other means. If you use the Services after any changes have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.
          </p>

          {/* ── 18. Contact ── */}
          <h2 style={S.h2}>18. Contact Information</h2>
          <p style={S.p}>
            If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data, or your choices and rights regarding such collection and use, please do not hesitate to contact us at:
          </p>
          <p style={{ ...S.p, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
            Airosofts LLC<br />
            contact@airosofts.com<br />
            airophone.com
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #E3E1DB', padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '13.5px', fontWeight: 500, color: '#5C5A55' }}>
          <Logo /> AiroPhone by Airosofts
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/terms" style={{ fontSize: 13, color: '#9B9890', textDecoration: 'none' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 13, color: '#9B9890', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/fair-use" style={{ fontSize: 13, color: '#9B9890', textDecoration: 'none' }}>Fair Use</Link>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#9B9890' }}>&copy; 2025 AIROSOFTS LLC</div>
      </footer>
    </div>
  )
}
