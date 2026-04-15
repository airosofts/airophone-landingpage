'use client'

import Link from 'next/link'

function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="78" height="78" rx="17" stroke="#D63B1F" strokeWidth="2.5"/>
      <path d="M22 58L40 22L58 58" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 45H51" stroke="#D63B1F" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="57" cy="21" r="5" fill="#D63B1F"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <div style={{
      width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
      background: 'rgba(214,59,31,0.07)', border: '1px solid rgba(214,59,31,0.14)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D63B1F" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  )
}

export default function SignupPage() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>

      {/* ═══ LEFT PANEL ═══ */}
      <div style={{
        flex: 1, background: '#EFEDE8',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'flex-start', padding: '72px 80px 72px 10%',
        position: 'relative', overflow: 'hidden',
        borderRight: '1px solid #E3E1DB',
      }} className="hidden lg:flex">
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(#E3E1DB 1px, transparent 1px), linear-gradient(90deg, #E3E1DB 1px, transparent 1px)',
          backgroundSize: '40px 40px', opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(160deg, transparent 40%, rgba(239,237,232,0.95) 100%)',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 52, position: 'relative', zIndex: 1 }}>
          <Logo size={34} />
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210' }}>AiroPhone</span>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: '#D63B1F',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14,
          }}>
            {'Start your free account'}
          </div>

          <h1 style={{
            fontSize: 'clamp(26px, 2.6vw, 40px)', fontWeight: 600,
            color: '#131210', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 14,
          }}>
            Everything you need<br />to communicate at <span style={{ color: '#D63B1F' }}>scale.</span>
          </h1>

          <p style={{
            fontSize: 14, color: '#5C5A55', lineHeight: 1.72,
            maxWidth: 340, fontWeight: 300, marginBottom: 32,
          }}>
            Get started in minutes. No credit card required. Full access to every feature on your free trial.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44 }}>
            {[
              'VoIP calling across multiple lines',
              'Bulk SMS campaigns & scheduling',
              'AI agent scenarios with auto-replies',
              'Unified inbox & contact management',
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '13.5px', color: '#5C5A55', fontWeight: 300 }}>
                <CheckIcon />
                {f}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 36, paddingTop: 28, borderTop: '1px solid #E3E1DB' }}>
            {[
              { val: '99.9', unit: '%', label: 'Uptime' },
              { val: '2', unit: 'M+', label: 'Messages' },
              { val: '24', unit: '/7', label: 'Support' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.04em', color: '#131210' }}>
                  {s.val}<span style={{ color: '#D63B1F' }}>{s.unit}</span>
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: '#9B9890',
                  letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: 3,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ RIGHT PANEL — SIGNUP ═══ */}
      <div style={{
        width: 540, flexShrink: 0, background: '#FFFFFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 60px',
      }} className="max-lg:!w-full max-lg:!p-8">

        <div style={{ width: '100%', maxWidth: 400 }}>

          {/* Mobile logo */}
          <div className="lg:hidden" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 40 }}>
            <Logo size={30} />
            <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210' }}>AiroPhone</span>
          </div>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.03em', color: '#131210', marginBottom: 6 }}>
              Welcome to AiroPhone!
            </div>
            <div style={{ fontSize: '13.5px', color: '#9B9890' }}>
              Create an account to start your free trial
            </div>
          </div>

          {/* Continue with Google */}
          <a
            href="https://app.airophone.com/auth/callback"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              width: '100%', height: 46,
              border: '1px solid #D4D1C9', borderRadius: 9,
              background: '#FFFFFF', cursor: 'pointer', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, color: '#131210',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#9B9890'; e.currentTarget.style.background = '#F7F6F3' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D4D1C9'; e.currentTarget.style.background = '#FFFFFF' }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Continue with Google
          </a>

          {/* Continue with Email */}
          <a
            href="https://app.airophone.com/signup"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              width: '100%', height: 46, marginTop: 12,
              border: '1px solid #D4D1C9', borderRadius: 9,
              background: '#FFFFFF', cursor: 'pointer', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, color: '#131210',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#9B9890'; e.currentTarget.style.background = '#F7F6F3' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D4D1C9'; e.currentTarget.style.background = '#FFFFFF' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#D63B1F" strokeWidth="1.5"/>
              <path d="M2 7l10 7 10-7" stroke="#D63B1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Continue with email
          </a>

          {/* Divider */}
          <div style={{ textAlign: 'center', margin: '28px 0', position: 'relative' }}>
            <div style={{ height: 1, background: '#E3E1DB' }} />
            <span style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              background: '#FFFFFF', padding: '0 12px',
              fontSize: 12, color: '#9B9890',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              or
            </span>
          </div>

          {/* Already have account */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: '#9B9890', marginBottom: 6 }}>
              Already have an account?
            </div>
            <Link
              href="https://app.airophone.com/login"
              style={{
                fontSize: 14, fontWeight: 500, color: '#D63B1F',
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
            >
              Log back in
            </Link>
          </div>

          {/* Terms */}
          <div style={{
            textAlign: 'center', marginTop: 48,
            fontSize: 12, color: '#9B9890', lineHeight: 1.6,
          }}>
            By continuing, you acknowledge and accept our{' '}
            <a href="/terms" style={{ color: '#5C5A55', textDecoration: 'underline' }}>Terms of Service</a>{' '}
            and{' '}
            <a href="/privacy" style={{ color: '#5C5A55', textDecoration: 'underline' }}>Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  )
}
