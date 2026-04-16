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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: '#9B9890', fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>
          Last updated: April 10, 2026
        </p>

        <div>

          <p style={S.p}>
            This Privacy Policy explains how Airosofts LLC (&ldquo;AiroPhone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, stores, and protects your information when you use our platform. By using AiroPhone, you consent to the practices described below.
          </p>

          <h2 style={S.h2}>1. Information We Collect</h2>

          <h3 style={S.h3}>Account Information</h3>
          <p style={S.p}>
            When you create an account, we collect your name, email address, phone number, and business name. If you sign up via Google, we receive your basic profile information from Google.
          </p>

          <h3 style={S.h3}>Communication Data</h3>
          <p style={S.p}>
            We store SMS messages, call logs, and call recordings (when enabled) that you send and receive through the platform. This data is necessary to provide the core messaging and calling service.
          </p>

          <h3 style={S.h3}>Contact Data</h3>
          <p style={S.p}>
            You may upload or create contact lists, including names, phone numbers, email addresses, and custom fields. This data is stored securely and used solely to facilitate your communication.
          </p>

          <h3 style={S.h3}>Usage Data</h3>
          <p style={S.p}>
            We automatically collect information about how you interact with the platform, including pages visited, features used, IP address, browser type, and device information.
          </p>

          <h3 style={S.h3}>Payment Information</h3>
          <p style={S.p}>
            Payment processing is handled by Stripe. We do not store your full credit card number. Stripe&apos;s privacy policy governs the handling of your payment data.
          </p>

          <h2 style={S.h2}>2. How We Use Your Information</h2>
          <p style={S.p}>We use your information to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Provide, maintain, and improve the AiroPhone service</li>
            <li style={S.li}>Process and deliver SMS messages and phone calls</li>
            <li style={S.li}>Power AI scenario features (your message data may be processed by AI to generate auto-replies)</li>
            <li style={S.li}>Process billing and credit transactions</li>
            <li style={S.li}>Send service-related notifications (account updates, security alerts)</li>
            <li style={S.li}>Monitor for abuse, fraud, and violations of our Terms of Service</li>
            <li style={S.li}>Generate aggregated, anonymized analytics to improve the platform</li>
          </ul>

          <h2 style={S.h2}>3. AI Data Processing</h2>
          <p style={S.p}>
            When you enable AI scenarios, inbound messages may be processed by our AI systems to generate automated responses. AI processing happens in real-time and is scoped to your workspace. We do not use your message content to train AI models for other customers. You can disable AI features at any time.
          </p>

          <h2 style={S.h2}>4. Data Sharing</h2>
          <p style={S.p}>We do not sell your personal data. We may share data with:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}><strong>Telecom providers</strong> (e.g., Telnyx) to deliver SMS messages and phone calls</li>
            <li style={S.li}><strong>Payment processors</strong> (Stripe) to handle billing</li>
            <li style={S.li}><strong>Infrastructure providers</strong> (hosting, databases) who process data on our behalf under strict data processing agreements</li>
            <li style={S.li}><strong>Law enforcement</strong> when required by valid legal process</li>
          </ul>

          <h2 style={S.h2}>5. Data Retention</h2>
          <p style={S.p}>
            We retain your data for as long as your account is active. Message content and call logs are retained for 24 months by default. You may request deletion of your data at any time by contacting support. Upon account deletion, we will remove your data within 30 days, except where retention is required by law.
          </p>

          <h2 style={S.h2}>6. Data Security</h2>
          <p style={S.p}>
            We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest, access controls, and regular security audits. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 style={S.h2}>7. Your Rights</h2>
          <p style={S.p}>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Access the personal data we hold about you</li>
            <li style={S.li}>Request correction of inaccurate data</li>
            <li style={S.li}>Request deletion of your data</li>
            <li style={S.li}>Export your data in a portable format</li>
            <li style={S.li}>Opt out of non-essential data processing</li>
          </ul>
          <p style={S.p}>
            To exercise any of these rights, contact us at support@airosofts.com. We will respond within 30 days.
          </p>

          <h2 style={S.h2}>8. Cookies</h2>
          <p style={S.p}>
            We use essential cookies to maintain your session and preferences. We do not use third-party advertising cookies. Analytics cookies (if used) are anonymized and can be disabled in your browser settings.
          </p>

          <h2 style={S.h2}>9. Children&apos;s Privacy</h2>
          <p style={S.p}>
            AiroPhone is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we discover that a child has provided us with personal data, we will delete it promptly.
          </p>

          <h2 style={S.h2}>10. International Data Transfers</h2>
          <p style={S.p}>
            Your data may be processed in the United States. By using AiroPhone, you consent to the transfer of your data to the US. We ensure appropriate safeguards are in place for international transfers.
          </p>

          <h2 style={S.h2}>11. Changes to This Policy</h2>
          <p style={S.p}>
            We may update this Privacy Policy from time to time. We will notify you of material changes via email or an in-app notification. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision.
          </p>

          <h2 style={S.h2}>12. Contact</h2>
          <p style={S.p}>
            For privacy-related inquiries:
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
