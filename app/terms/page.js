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
  title: 'Terms of Service — AiroPhone',
  description: 'AiroPhone Terms of Service — read our terms and conditions for using AiroPhone services.',
}

export default function TermsPage() {
  const S = {
    h2: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210', marginTop: 40, marginBottom: 12 },
    h3: { fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: '#131210', marginTop: 28, marginBottom: 8 },
    p: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, marginBottom: 14, fontWeight: 300 },
    li: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, fontWeight: 300, marginBottom: 6 },
    caps: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, marginBottom: 14, fontWeight: 300, textTransform: 'uppercase' },
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 13, color: '#9B9890', fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>
          Revision Date: April 17, 2026
        </p>

        <div>

          <p style={S.p}>
            PLEASE READ THESE TERMS OF SERVICE (&ldquo;TERMS&rdquo;) CAREFULLY BEFORE USING THE SERVICES OFFERED BY AIROSOFTS LLC (&ldquo;AiroPhone&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). BY CREATING AN ACCOUNT, SUBSCRIBING TO A PLAN, OR OTHERWISE USING THE SERVICES, YOU (&ldquo;CUSTOMER&rdquo;, &ldquo;you&rdquo;) AGREE TO BE BOUND BY THESE TERMS. IF THE TERMS OF THIS AGREEMENT ARE CONSIDERED AN OFFER, ACCEPTANCE IS EXPRESSLY LIMITED TO SUCH TERMS.
          </p>

          {/* ── 1. Access to the Service ── */}
          <h2 style={S.h2}>1. Access to the Service; Free Trial</h2>
          <p style={S.p}>
            Subject to your compliance with the terms and conditions of this Agreement, AiroPhone grants you a nonexclusive, limited, personal, nonsublicensable, nontransferable right and license to access and use the AiroPhone platform and related services (collectively, the &ldquo;Service&rdquo;) during the applicable subscription term, only for your internal business purposes, and only in accordance with user documentation provided by AiroPhone.
          </p>

          <h3 style={S.h3}>Free Trial</h3>
          <p style={S.p}>
            AiroPhone may make the Service available to you on a trial basis free of charge (&ldquo;Free Trial&rdquo;), which will commence upon the date of your first use of the Service and shall continue for seven (7) days or such other period as communicated to you in writing. During the Free Trial: (i) the Service is provided &ldquo;AS-IS&rdquo;, without warranty of any kind; (ii) your access to the Service may be limited; (iii) AiroPhone shall not have any obligation to provide support; and (iv) AiroPhone shall have no liability of any kind with respect to the Service (unless such exclusion is not enforceable under applicable law, in which case AiroPhone&apos;s liability shall not exceed $100.00). AiroPhone will notify you before any Services you are using begin carrying a fee. If you do not cancel your account prior to the end of the Trial Period, you shall be responsible for all applicable fees. Either party may terminate during the Trial Period immediately upon notice to the other party.
          </p>

          {/* ── 2. Support & Maintenance ── */}
          <h2 style={S.h2}>2. Support &amp; Maintenance</h2>
          <p style={S.p}>
            Subject to your payment of all applicable fees, AiroPhone will use commercially reasonable efforts to provide support and maintenance for the Services. Support is available 24/7 via the AiroPhone dashboard and email.
          </p>

          {/* ── 3. Service Updates ── */}
          <h2 style={S.h2}>3. Service Updates</h2>
          <p style={S.p}>
            From time to time, AiroPhone may provide upgrades, patches, enhancements, or fixes for the Services to its customers generally without additional charge (&ldquo;Updates&rdquo;), and such Updates will become part of the Services and subject to this Agreement; provided that AiroPhone shall have no obligation to provide any such Updates. AiroPhone may cease supporting old versions or releases of the Services at any time in its sole discretion; provided that AiroPhone shall use commercially reasonable efforts to give you reasonable prior notice of any major changes.
          </p>

          {/* ── 4. Ownership; Feedback ── */}
          <h2 style={S.h2}>4. Ownership; Feedback</h2>
          <p style={S.p}>
            As between the parties, AiroPhone retains all right, title, and interest in and to the Services, and all software, products, works, and other intellectual property and moral rights related thereto or created, used, or provided by AiroPhone. No rights or licenses are granted except as expressly set forth in this Agreement.
          </p>
          <p style={S.p}>
            You may provide suggestions, comments, or other feedback to AiroPhone with respect to the Service (&ldquo;Feedback&rdquo;). Feedback, even if designated as confidential, shall not create any confidentiality obligation for AiroPhone. You hereby grant to AiroPhone a nonexclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, royalty-free, fully paid up license to use and exploit the Feedback for any purpose.
          </p>

          {/* ── 5. Fees; Payment ── */}
          <h2 style={S.h2}>5. Fees; Payment</h2>
          <p style={S.p}>
            You shall pay AiroPhone the fees for the Service as set forth in your selected plan (&ldquo;Fees&rdquo;). AiroPhone operates on a credit-based billing system with monthly subscription plans. Unless otherwise specified, all Fees are invoiced monthly in advance and payable in U.S. dollars. You shall pay a late fee on past due invoices at the lesser of 1.5% per month or the maximum amount permitted by applicable law. You are responsible for all taxes associated with the Service (excluding taxes based on AiroPhone&apos;s net income). All Fees paid are non-refundable unless otherwise required by applicable law. If you exceed any usage limitations set forth in your plan, AiroPhone shall invoice you for such additional usage at the overage rates specified in your plan.
          </p>

          {/* ── 6. Restrictions ── */}
          <h2 style={S.h2}>6. Restrictions</h2>
          <p style={S.p}>Except as expressly set forth in this Agreement, you shall not (and shall not permit any third party to), directly or indirectly:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure, ideas, or algorithms of the Service;</li>
            <li style={S.li}>Modify, translate, or create derivative works based on the Service;</li>
            <li style={S.li}>Copy, rent, lease, distribute, pledge, assign, or otherwise transfer or encumber rights to the Service;</li>
            <li style={S.li}>Use the Service for the benefit of a third party or to build a competitive product or service;</li>
            <li style={S.li}>Remove or alter any proprietary notices or labels from the Service;</li>
            <li style={S.li}>Interfere with the proper working of the Service or bypass any security measures;</li>
            <li style={S.li}>Crawl, scrape, or spider any page, data, or portion of the Service;</li>
            <li style={S.li}>Use the Service in a manner that is dangerous, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;</li>
            <li style={S.li}>Jeopardize the security of your account or anyone else&apos;s account;</li>
            <li style={S.li}>Run any form of auto-responder or spam on the Service, or any processes that run while you are not logged in, or that place an unreasonable load on the Service&apos;s infrastructure.</li>
          </ul>
          <p style={S.p}>
            You are responsible for all activity under your account and shall use the Service in compliance with all applicable laws, including those related to data privacy, international communications, export laws, and the transmission of technical or personal data.
          </p>

          {/* ── 7. Business Verification ── */}
          <h2 style={S.h2}>7. Business Verification</h2>
          <p style={S.p}>
            AiroPhone reserves the right to request business verification documents from you at any time, including but not limited to identity verification, business owner verification, and proof of opt-in consent for data processing purposes. Compliance with verification requests is essential for using the Services. If you are unable to comply in a reasonable timeframe, AiroPhone reserves the right to suspend or terminate your access to the Services.
          </p>

          {/* ── 8. Messaging Policy ── */}
          <h2 style={S.h2}>8. Messaging Policy</h2>
          <p style={S.p}>
            AiroPhone treats all messaging transmitted via the Service as Application-to-Person (&ldquo;A2P&rdquo;) messaging. You are responsible for any person to which you provide the ability to send messages through AiroPhone.
          </p>

          <h3 style={S.h3}>Consent / Opt-in Requirements</h3>
          <p style={S.p}>
            Prior to sending the first message to each recipient, you must obtain consent from the recipient to communicate with them. You must make clear to the recipient that they are agreeing to receive the type of messages you plan to send. Consent is limited to the specific use or campaign consented to. You must keep a record of each consent, such as a copy of the form signed, or a timestamp of when the customer completed a sign-up flow.
          </p>

          <h3 style={S.h3}>Periodic Messages and Ongoing Consent</h3>
          <p style={S.p}>
            If you intend to send messages on an ongoing basis, you must confirm the recipient&apos;s consent by offering a clear reminder of how to unsubscribe using standard opt-out language. You must comply with the recipient&apos;s preferences on frequency of contact.
          </p>

          <h3 style={S.h3}>Identifying Sender</h3>
          <p style={S.p}>
            Every message you send must clearly identify the party that obtained the consent from the recipient, except in follow-up messages of an ongoing conversation.
          </p>

          <h3 style={S.h3}>Opt-out Requirements</h3>
          <p style={S.p}>
            The initial message you send to a recipient must include the following language: &ldquo;Reply STOP to unsubscribe&rdquo; or the equivalent using another standard opt-out keyword (STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT). You must provide recipients with the ability to revoke consent at any time. When an individual opts out, you may deliver one final confirmation message, but any subsequent messages are prohibited.
          </p>

          {/* ── 9. Customer Data; Privacy ── */}
          <h2 style={S.h2}>9. Customer Data; Privacy; Phone Number Retention</h2>
          <p style={S.p}>
            &ldquo;Customer Data&rdquo; means any data, information, or material provided, uploaded, or submitted by you to the Service. You retain all right, title, and interest in Customer Data, including all intellectual property rights therein. You, not AiroPhone, are solely responsible for the accuracy, quality, integrity, legality, reliability, and appropriateness of all Customer Data.
          </p>
          <p style={S.p}>
            AiroPhone shall use commercially reasonable efforts to maintain the security and integrity of the Service and Customer Data. AiroPhone is not responsible for unauthorized access to Customer Data unless such access is due to AiroPhone&apos;s gross negligence or willful misconduct. Customer Data may be irretrievably deleted ninety (90) days after this Agreement is terminated or your account is delinquent.
          </p>
          <p style={S.p}>
            You acknowledge and agree that AiroPhone may (i) internally use Customer Data for providing the Service and generating Aggregated Anonymous Data, and (ii) freely use Aggregated Anonymous Data for AiroPhone&apos;s business purposes. &ldquo;Aggregated Anonymous Data&rdquo; means data collected or generated in connection with your use of the Service, only in aggregate, anonymized form which cannot be linked specifically to you.
          </p>
          <p style={S.p}>
            AiroPhone also collects information from individual users in accordance with AiroPhone&apos;s <Link href="/privacy" style={{ color: '#D63B1F', textDecoration: 'none' }}>Privacy Policy</Link>, which is incorporated herein by reference.
          </p>
          <p style={S.p}>
            AiroPhone will retain each phone number under your account for no more than forty-five (45) days after this Agreement is terminated or your account is delinquent. If any user&apos;s access is suspended or terminated due to a violation, AiroPhone reserves the right to release such user&apos;s phone number and delete all associated data after seven (7) days.
          </p>

          {/* ── 10. Third Party Services ── */}
          <h2 style={S.h2}>10. Third Party Services</h2>
          <p style={S.p}>
            You acknowledge that the Service may operate on, with, or using APIs and services operated by third parties (&ldquo;Third Party Services&rdquo;), including but not limited to Telnyx for telecommunications, Stripe for payments, and third-party app stores (Apple App Store, Google Play). AiroPhone is not responsible for the operation of any Third Party Services. You are solely responsible for procuring any rights necessary to access Third Party Services and for complying with their applicable terms, including Telnyx&apos;s Messaging Policy and Forbidden Messages Policy.
          </p>
          <p style={S.p}>
            Through AiroPhone&apos;s mobile application, you may make In-App Purchases through Apple iTunes or Google Play. You are agreeing to their respective Terms and Conditions. AiroPhone is not a party to any In-App Purchase.
          </p>

          {/* ── 11. Term; Termination ── */}
          <h2 style={S.h2}>11. Term; Termination</h2>
          <p style={S.p}>
            This Agreement shall commence upon account creation and, unless earlier terminated, shall continue for the duration of your subscription. Your subscription will automatically renew for successive periods unless either party notifies the other of non-renewal no later than thirty (30) days prior to the end of the then-current term.
          </p>
          <p style={S.p}>
            You may cancel your account at any time from the AiroPhone dashboard or by contacting support. AiroPhone may terminate or suspend your access at any time for any reason, including breach of these Terms. All provisions which by their nature should survive termination shall survive, including accrued payment obligations, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          <p style={S.p}>
            Upon request made within thirty (30) days after termination, AiroPhone may make available a download of your Customer Data in a format at AiroPhone&apos;s discretion. Any data export assistance shall be billable at AiroPhone&apos;s standard rates.
          </p>

          {/* ── 12. Indemnification ── */}
          <h2 style={S.h2}>12. Indemnification</h2>
          <p style={S.p}>
            Each party shall defend, indemnify, and hold harmless the other party, its affiliates, and each of their employees, contractors, directors, suppliers, and representatives from all liabilities, claims, and expenses (including reasonable attorneys&apos; fees) that arise from or relate to any claim that (i) in the case of Customer, the Customer Data or Customer&apos;s use of the Service infringes or violates any third party intellectual property or proprietary right or violates applicable law, or (ii) in the case of AiroPhone, the Service infringes or violates any third party intellectual property or proprietary right.
          </p>

          {/* ── 13. Disclaimer ── */}
          <h2 style={S.h2}>13. Disclaimer</h2>
          <p style={{ ...S.p, textTransform: 'uppercase', fontSize: 13 }}>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE, USAGE OF TRADE, OR COURSE OF DEALING, ALL OF WHICH ARE EXPRESSLY DISCLAIMED.
          </p>

          {/* ── 14. Limitation of Liability ── */}
          <h2 style={S.h2}>14. Limitation of Liability</h2>
          <p style={{ ...S.p, textTransform: 'uppercase', fontSize: 13 }}>
            EXCEPT FOR THE PARTIES&apos; INDEMNIFICATION OBLIGATIONS AND FOR CUSTOMER&apos;S BREACH OF SECTION 6 (RESTRICTIONS), IN NO EVENT SHALL EITHER PARTY BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) THE FEES PAID BY CUSTOMER TO AIROPHONE IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO A CLAIM.
          </p>

          {/* ── 15. AI Features ── */}
          <h2 style={S.h2}>15. AI Features</h2>
          <p style={S.p}>
            AiroPhone offers AI-powered scenario and auto-reply features. While we strive for accuracy, AI-generated responses are provided &ldquo;as is&rdquo; and may not always be accurate or appropriate. You are responsible for reviewing and configuring AI scenarios. AiroPhone is not liable for any consequences arising from AI-generated messages sent on your behalf.
          </p>

          {/* ── 16. Miscellaneous ── */}
          <h2 style={S.h2}>16. Miscellaneous</h2>
          <p style={S.p}>
            This Agreement represents the entire agreement between you and AiroPhone with respect to the subject matter hereof. This Agreement shall be governed by and construed in accordance with the laws of the State of Texas, United States, excluding its conflicts of law rules. Any controversy or claim arising out of or relating to this Agreement shall be settled by arbitration in Dallas, Texas, in English, and in accordance with the JAMS Streamlined Arbitration Rules &amp; Procedures then in effect.
          </p>
          <p style={S.p}>
            In any action or proceeding to enforce rights under this Agreement, the prevailing party shall be entitled to recover costs and attorneys&apos; fees. No modification or amendment of any provision shall be effective unless agreed by both parties in writing. Except for payment obligations, neither party shall be liable for any failure to perform where such failure results from any cause beyond such party&apos;s reasonable control, including but not limited to acts of God, fire, flood, severe weather, denial of service attacks, pandemics, or government actions.
          </p>
          <p style={S.p}>
            Neither party may assign any of its rights or obligations without the other party&apos;s consent, provided that either party may assign all rights and obligations to a successor in connection with a sale of substantially all of such party&apos;s business. No agency, partnership, joint venture, or employment relationship is created by this Agreement. If any provision is held to be unenforceable, it shall be limited or eliminated to the minimum extent necessary so that this Agreement otherwise remains in full force.
          </p>

          {/* ── 17. Contact ── */}
          <h2 style={S.h2}>17. Contact</h2>
          <p style={S.p}>
            If you have questions about these Terms, please contact us at:
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
