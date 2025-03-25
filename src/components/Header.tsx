'use client'

import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { SelectAppChain } from './SelectAppChain'
import { LiveSwitcher } from './LiveSwitcher'


export function Header() {

  return (
    <header className="container flex items-center py-3.5 border-b border-zinc-200">
      <div className="text-xl font-semibold">Azuro Betting App</div>
      <div className="flex ml-10">
        <Link
          className="text-zinc-500 hover:text-black transition"
          href="/events/top"
        >
          Events
        </Link>
        <Link
          className="text-zinc-500 hover:text-black transition ml-4"
          href="/bets"
        >
          Bets History
        </Link>
      </div>
      <div className="ml-auto flex items-center">
        <LiveSwitcher />
        <SelectAppChain />
        <ConnectButton chainStatus="none" />
      </div>
    </header>
  )
}
