import Footer from './Footer'
import type React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-[100dvh] min-h-[100dvh] w-full flex-col items-center overflow-hidden pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:pb-4">
      {children}
      <Footer />
    </main>
  )
}
