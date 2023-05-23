import '../../globals.scss'

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col items-center p-8">
      {children}
    </div>
  )
}
