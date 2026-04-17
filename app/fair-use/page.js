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
  title: 'Fair Use Policy — AiroPhone',
  description: 'AiroPhone Fair Use Policy — rules for messaging and calling on the AiroPhone platform.',
}

export default function FairUsePage() {
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
          Fair Use Policy
        </h1>
        <p style={{ fontSize: 13, color: '#9B9890', fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>
          Revision Date: April 17, 2026
        </p>

        <div>

          {/* ── Introduction ── */}
          <h2 style={S.h2}>Introduction</h2>
          <p style={S.p}>
            Airosofts LLC (&ldquo;AiroPhone&rdquo;) is dedicated to providing a safe way for users to send and receive messages and make calls. In order to achieve that goal, we do not permit certain types of content or messaging on our platform.
          </p>
          <p style={S.p}>
            This Fair Use Policy is meant to ensure that our users stay protected. All capitalized terms used herein without definition will have the same meanings set forth in AiroPhone&apos;s <Link href="/terms" style={{ color: '#D63B1F', textDecoration: 'none' }}>Terms of Service</Link>, into which this Fair Use Policy is incorporated.
          </p>
          <p style={S.p}>
            AiroPhone reserves the right to impose limits and charge overages on your usage of the Services, or to terminate your use of the Services at any time in our discretion. AiroPhone will do so if we reasonably believe that your usage — including but not limited to the total number of text messages you send, the number of minutes you use, and/or the number of devices you use — is not consistent with normal, fair, and reasonable use of the Services, or breaches any rules in this Fair Use Policy.
          </p>
          <p style={S.p}>
            Whenever reasonably possible, we will give you written notice of your excess usage or breach of the rules contained herein before taking any such action, and allow a reasonable period to allow you to modify your use.
          </p>

          {/* ── Messaging Rules ── */}
          <h2 style={S.h2}>Rules for Messaging on AiroPhone</h2>
          <p style={S.p}>Customer shall not use the Service to send:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Messages which are obscene, defamatory, threatening, intimidating, harassing, hateful, exploitative, abusive, racially or ethnically offensive, or which instigate or encourage conduct that would be illegal or otherwise inappropriate, such as promoting violent crimes, endangering or exploiting children or others, or coordinating harm</li>
            <li style={S.li}>Fraudulent messages, including but not limited to impersonation, misrepresentation, scams, phishing, or any deceptive messages used to lure consumers into providing their or another person&apos;s personal information, including but not limited to medical, health, or financial information</li>
            <li style={S.li}>Cold calling and/or messaging, including but not limited to any messages without proper consent and opt-out language</li>
            <li style={S.li}>Malicious content, including but not limited to malware or viruses</li>
            <li style={S.li}>Messages relating to cannabis, CBD, or vape products</li>
            <li style={S.li}>Messages relating to kratom or other paraphernalia products</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of prescription medication</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of gambling, including but not limited to references or links to casino apps or gambling websites</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of sexual or adult services</li>
            <li style={S.li}>Messages relating to the promotion of hate speech</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of alcohol</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of firearms</li>
            <li style={S.li}>Messages relating to the offer, promotion, or sale of tobacco-related products</li>
            <li style={S.li}>Messages, including but not limited to new loan solicitation, relating to high-risk financial services, including but not limited to affiliate lending, payday loans, short-term high-interest loans, third-party loans, student loans, cryptocurrency, or stocks and other investment platforms</li>
            <li style={S.li}>Messages relating to third-party lead generation or marketing services that buy, sell, or share consumer information, including but not limited to affiliate marketing</li>
            <li style={S.li}>Messages related to third-party lead generation or marketing services that engage in deceptive marketing</li>
            <li style={S.li}>Messages relating to debt collection or forgiveness, including but not limited to third-party debt collection, debt consolidation, debt reduction, or credit repair programs</li>
            <li style={S.li}>Messages relating to &ldquo;get rich quick schemes&rdquo;, including but not limited to deceptive work-from-home programs, risk investment opportunities, pyramid schemes, mystery shopping, or multi-level marketing</li>
            <li style={S.li}>Messages relating to the sale of fireworks or explosives</li>
          </ul>

          {/* ── Calling Rules ── */}
          <h2 style={S.h2}>Rules for Calling on AiroPhone</h2>
          <p style={S.p}>Customer shall not use the Service to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Engage in traffic pumping or schemes designed to artificially inflate call volumes to high-cost or revenue-sharing numbers</li>
            <li style={S.li}>Generate excessive short-duration calls or abnormal spikes in call attempts</li>
            <li style={S.li}>Call large numbers of unique or sequential phone numbers in a manner inconsistent with normal business use</li>
            <li style={S.li}>Routinely call conference lines, chat lines, or similar services for non-business purposes</li>
            <li style={S.li}>Continue calling individuals after a complaint has been received or after being asked to stop</li>
            <li style={S.li}>Place calls without proper consent, including cold calls or prerecorded campaigns lacking a clear opt-out mechanism</li>
            <li style={S.li}>Call during prohibited or &ldquo;quiet&rdquo; hours where outreach is generally considered abusive or intrusive</li>
            <li style={S.li}>Attempt any other activity that is abusive, manipulative, or inconsistent with fair use of the Service</li>
            <li style={S.li}>Commit fraudulent or deceptive acts, including impersonation, misrepresentation, or other behavior intended to defraud recipients</li>
            <li style={S.li}>Send prerecorded voicemails (&ldquo;voicemail drops&rdquo;) in a fraudulent or harassing manner</li>
            <li style={S.li}>Use AiroPhone numbers as misleading or fraudulent callback numbers</li>
            <li style={S.li}>Spoof or manipulate caller ID information with the intent to deceive, harass, or commit fraud</li>
            <li style={S.li}>Use bots, auto-dialers, or any automated calling systems under any circumstances</li>
            <li style={S.li}>Engage in harassment, threats, or intimidation via calls</li>
            <li style={S.li}>Call recipients who have requested not to be contacted or who are on internal or external Do Not Call lists</li>
          </ul>

          {/* ── AI Rules ── */}
          <h2 style={S.h2}>Rules for AI Scenarios on AiroPhone</h2>
          <p style={S.p}>Customer shall not configure AI scenarios to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Generate responses that impersonate a real person, government entity, or organization without authorization</li>
            <li style={S.li}>Produce content that is misleading, deceptive, or designed to manipulate recipients into taking actions against their interest</li>
            <li style={S.li}>Auto-reply with content that violates any of the messaging rules listed above</li>
            <li style={S.li}>Bypass opt-out requests by using AI to re-engage recipients who have opted out</li>
            <li style={S.li}>Generate medical, legal, or financial advice without clear disclaimers that the response is AI-generated</li>
          </ul>

          {/* ── Enforcement ── */}
          <h2 style={S.h2}>Enforcement</h2>
          <p style={S.p}>
            AiroPhone monitors usage patterns and reserves the right to suspend or terminate accounts that violate this Fair Use Policy. Depending on the severity and nature of the violation, enforcement actions may include:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            <li style={S.li}>Written warning with a request to modify usage</li>
            <li style={S.li}>Temporary suspension of messaging or calling capabilities</li>
            <li style={S.li}>Permanent account termination without refund</li>
            <li style={S.li}>Reporting to law enforcement where required by law</li>
          </ul>
          <p style={S.p}>
            AiroPhone reserves the right to update this Fair Use Policy at any time. We will notify users of material changes via email or through the Service.
          </p>

          {/* ── Contact ── */}
          <h2 style={S.h2}>Contact</h2>
          <p style={S.p}>
            If you have questions about this Fair Use Policy or believe your account has been incorrectly flagged, please contact us at:
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
