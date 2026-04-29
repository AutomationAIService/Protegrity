"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { openAvaWidget } from "@/lib/ava"

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Coverage Options", href: "#coverage-options" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "Meet Ryan", href: "#meet-ryan" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          aria-label="Protegrity Insurance home"
          className="flex items-center gap-2"
        >
          <Image
            src="/protegrity-shield.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-auto"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Protegrity
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/75 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => openAvaWidget("start-coverage-review")}
            aria-label="Open Ava chat to start a coverage review"
            className="hidden rounded-full bg-brand px-5 text-primary-foreground hover:bg-brand-2 sm:inline-flex"
          >
            Start Coverage Review
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col gap-6 px-2 pt-4">
                <Link
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/protegrity-shield.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-auto"
                  />
                  <span className="font-display text-lg font-bold tracking-tight text-navy">
                    Protegrity
                  </span>
                </Link>
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-2.5 text-base font-medium text-navy hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  onClick={() => {
                    setOpen(false)
                    openAvaWidget("start-coverage-review")
                  }}
                  aria-label="Open Ava chat to start a coverage review"
                  className="mt-auto h-11 rounded-full bg-brand text-primary-foreground hover:bg-brand-2"
                >
                  Start Coverage Review
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
