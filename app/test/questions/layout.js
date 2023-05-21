import '../../globals.scss'

export default function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {children}
    </main>
  )
}
