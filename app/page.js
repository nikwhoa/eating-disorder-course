import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col items-center justify-between p-24">
      <Link href='/test'>Тест з РПП</Link>
    </main>
  )
}
