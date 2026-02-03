import './globals.css'

export const metadata = {
  title: 'AiroPhone - Powerful SMS & Voice Campaign Platform',
  description: 'Reach thousands of customers instantly with bulk SMS campaigns, manage conversations, and track engagement - all from one intuitive platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
