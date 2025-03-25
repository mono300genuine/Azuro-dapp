import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Providers, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azuro Betting App',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const cookieStore = cookies()

  const initialChainId = cookieStore.get('appChainId')?.value
  const initialLiveState = JSON.parse(cookieStore.get('live')?.value || 'false')

  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers initialChainId={initialChainId} initialLiveState={initialLiveState}>
        <Header />
        <main className="container pt-5 pb-10">
          {children}
        </main>
      </Providers>
      </body>
    </html>
  )
}
