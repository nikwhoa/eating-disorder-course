import './globals.scss'
import localFont from 'next/font/local'

const Raleway = localFont({
  src: [
    {
      path: './fonts/Raleway-Regular.ttf',
      format: 'truetype',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Raleway-SemiBold.ttf',
      format: 'truetype',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Raleway-Medium.ttf',
      format: 'truetype',
      weight: '500',
      style: 'normal',
    }
  ],
})

const Playfair = localFont({
  src: [
    {
      path: './fonts/PlayfairDisplaySC-Regular.ttf',
      format: 'truetype',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PlayfairDisplaySC-BoldItalic.ttf',
      format: 'truetype',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PlayfairDisplaySC-Italic.ttf',
      format: 'truetype',
      weight: '400',
      style: 'italic',
    }
  ]
})

export const metadata = {
  title: 'Розбираємося з РПП: Онлайн Курс',
  description: 'Розберіться в проблемі РХП, дізнайтеся про стратегії подолання і почніть свій шлях до здоров&apos;я.',
  favicon: './favicons/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#707070" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={Playfair.className + ' ' + 'no-transition'}>
        {children}
      </body>

    </html>

  )
}
