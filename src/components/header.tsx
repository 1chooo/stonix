"use client"

import Link from "next/link"
import React from "react"
import Image from "next/image"
import { UserNav } from "./user-nav"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { VisitGitHub } from "@/components/visit-github"

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 shadow-sm saturate-100 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[60px] items-center px-8">
        <div className="flex-shrink-0 w-[200px]">
          <Link href="/" aria-label="Home" title="Home">
            <Image
              className="rounded-full"
              src="/favicon.ico"
              alt="Logo of Refinaid"
              quality={100}
              width={40}
              height={40}
              draggable={false}
            />
          </Link>
        </div>
        <nav className="flex-grow flex justify-center">
          <div className="gap-5 text-lg font-medium hidden sm:flex">
            <Link
              className="px-3 py-2 rounded-xl transition-colors hover:bg-primary/10"
              href="/#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              Guestbook
            </Link>
            <Link href="/pricing" className="px-3 py-2 rounded-xl transition-colors hover:bg-primary/10">
              Pricing
            </Link>
            <Link href="/#" className="px-3 py-2 rounded-xl transition-colors hover:bg-primary/10">
              Blog
            </Link>
          </div>
        </nav>
        <div className="flex-shrink-0 w-[200px] flex items-center justify-end space-x-4">
          <VisitGitHub />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}

export default Header
