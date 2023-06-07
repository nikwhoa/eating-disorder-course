import  '@/app/test/styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <div className='justify-center flex'>
      {children}
    </div>
  )
}
