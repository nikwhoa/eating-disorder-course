import '../globals.scss'

export const metadata = {
  title: 'Розбираємося з РПП: Онлайн Тест',
  description: 'Розберіться в проблемі РХП, дізнайтеся про стратегії подолання і почніть свій шлях до здоров&apos;я.',
}

export default function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {children}
    </main>
  )
}
