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

export default function TermsPage() {
  const S = {
    h2: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210', marginTop: 40, marginBottom: 12 },
    h3: { fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: '#131210', marginTop: 28, marginBottom: 8 },
    p: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, marginBottom: 14, fontWeight: 300 },
    li: { fontSize: 14, color: '#5C5A55', lineHeight: 1.75, fontWeight: 300, marginBottom: 6 },
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
        <Link href="/login" style={{ padding: '7px 16px', borderRadius: 7, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: '#5C5A55', border: '1px solid #D4D1C9' }}>
          Log in
        </Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, letterSpacing: '-0.04em', color: '#131210', lineHeight: 1.1, marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 13, color: '#9B9890', fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>
          Last updated: April 10, 2026
        </p>

        <div>

          <p style={S.p}>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of AiroPhone, a product of Airosofts LLC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or using our services, you agree to be bound by these Terms.
          </p>

          <h2 style={S.h2}>1. Account Registration</h2>
          <p style={S.p}>
            You must provide accurate, complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use AiroPhone.
          </p>

          <h2 style={S.h2}>2. Services</h2>
          <p style={S.p}>
            AiroPhone provides a cloud-based business communication platform that includes VoIP calling, bulk SMS messaging, AI-powered auto-reply scenarios, contact management, and related services. We reserve the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice.
          </p>

          <h2 style={S.h2}>3. Acceptable Use</h2>
          <p style={S.p}>You agree not to use AiroPhone to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Send unsolicited messages (spam) or messages that violate the Telephone Consumer Protection Act (TCPA) or similar laws</li>
            <li style={S.li}>Transmit fraudulent, deceptive, misleading, or illegal content</li>
            <li style={S.li}>Harass, threaten, or abuse any person</li>
            <li style={S.li}>Interfere with or disrupt the integrity or performance of the service</li>
            <li style={S.li}>Attempt to gain unauthorized access to the service or its related systems</li>
            <li style={S.li}>Use the service for any purpose that violates applicable local, state, national, or international law</li>
          </ul>

          <h2 style={S.h2}>4. Messaging Compliance</h2>
          <p style={S.p}>
            You are solely responsible for obtaining proper consent from recipients before sending messages. You must comply with all applicable messaging regulations, including but not limited to the TCPA, CAN-SPAM Act, and carrier-specific guidelines. Violation of messaging compliance may result in immediate account suspension.
          </p>

          <h2 style={S.h2}>5. Credits &amp; Billing</h2>
          <p style={S.p}>
            AiroPhone operates on a credit-based billing system. Credits are purchased in advance and consumed as you send messages, make calls, or use other paid features. Credits are non-refundable unless required by applicable law. We reserve the right to adjust pricing with 30 days&apos; notice.
          </p>

          <h2 style={S.h2}>6. Phone Numbers</h2>
          <p style={S.p}>
            Phone numbers provisioned through AiroPhone are licensed, not owned, by you. We may reclaim inactive numbers after 90 days of non-use. You are responsible for complying with all regulatory requirements associated with the phone numbers you provision, including A2P 10DLC registration where applicable.
          </p>

          <h2 style={S.h2}>7. AI Features</h2>
          <p style={S.p}>
            AiroPhone offers AI-powered scenario and auto-reply features. While we strive for accuracy, AI-generated responses are provided &ldquo;as is&rdquo; and may not always be accurate or appropriate. You are responsible for reviewing and configuring AI scenarios. We are not liable for any consequences arising from AI-generated messages sent on your behalf.
          </p>

          <h2 style={S.h2}>8. Data &amp; Privacy</h2>
          <p style={S.p}>
            Your use of AiroPhone is also governed by our <Link href="/privacy" style={{ color: '#D63B1F', textDecoration: 'none' }}>Privacy Policy</Link>. You retain ownership of your data. We will not sell your data to third parties. We may use aggregated, anonymized data to improve our services.
          </p>

          <h2 style={S.h2}>9. Intellectual Property</h2>
          <p style={S.p}>
            The AiroPhone platform, including its design, code, features, and branding, is the property of Airosofts LLC and is protected by intellectual property laws. You may not copy, modify, distribute, or reverse-engineer any part of our service.
          </p>

          <h2 style={S.h2}>10. Termination</h2>
          <p style={S.p}>
            We may suspend or terminate your account at any time if you violate these Terms or engage in activity that is harmful to the service or other users. You may cancel your account at any time by contacting support. Upon termination, your right to access the service ceases immediately.
          </p>

          <h2 style={S.h2}>11. Limitation of Liability</h2>
          <p style={S.p}>
            To the maximum extent permitted by law, Airosofts LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, arising from your use of the service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2 style={S.h2}>12. Disclaimer</h2>
          <p style={S.p}>
            AiroPhone is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free operation of the service.
          </p>

          <h2 style={S.h2}>13. Changes to Terms</h2>
          <p style={S.p}>
            We may update these Terms from time to time. We will notify you of material changes via email or through the service. Continued use of AiroPhone after changes take effect constitutes acceptance of the updated Terms.
          </p>

          <h2 style={S.h2}>14. Governing Law</h2>
          <p style={S.p}>
            These Terms are governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law principles.
          </p>

          <h2 style={S.h2}>15. Contact</h2>
          <p style={S.p}>
            If you have questions about these Terms, please contact us at:
          </p>
          <p style={{ ...S.p, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
            Airosofts LLC<br />
            support@airosofts.com
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #E3E1DB', padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '13.5px', fontWeight: 500, color: '#5C5A55' }}>
          <Logo /> AiroPhone by airosofts
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/terms" style={{ fontSize: 13, color: '#9B9890', textDecoration: 'none' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 13, color: '#9B9890', textDecoration: 'none' }}>Privacy</Link>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#9B9890' }}>&copy; 2025 AIROSOFTS LLC</div>
      </footer>
    </div>
  )
}
