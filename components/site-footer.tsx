import Image from "next/image"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { ProtegrityShield } from "@/components/protegrity-shield"

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Coverage Options", href: "#coverage-options" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "Meet Ryan", href: "#meet-ryan" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

const coverageLinks = [
  { label: "Home Insurance", href: "#coverage-options" },
  { label: "Auto Insurance", href: "#coverage-options" },
  { label: "Life Insurance", href: "#coverage-options" },
  { label: "Umbrella Coverage", href: "#coverage-options" },
  { label: "Family Protection", href: "#coverage-options" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-white text-[#0d1b2e]">
      <ProtegrityShield
        className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] text-[#0d1b2e]/[0.04]"
        strokeWidth={0.6}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="#top" className="flex items-center" aria-label="Protegrity home">
              <Image
                src="/Protegrity%20Updated%20Logo%20Transparent.png"
                alt=""
                width={320}
                height={80}
                className="h-16 w-auto max-w-[min(320px,100%)] object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#4a9eff]">
              Protection With Integrity
            </p>
            <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-[#0d1b2e]">
              Independent insurance guidance for home, auto, and life. Personal advisory service from Protegrity Insurance Brokerage.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="tel:4803634160"
                className="group inline-flex items-center gap-2.5 text-sm text-[#4a9eff] transition-colors hover:text-[#4a9eff]/90"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0d1b2e]/[0.06] text-[#4a9eff] group-hover:bg-[#0d1b2e]/10">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                480.363.4160
              </a>
              <a
                href="mailto:ryan@protegrityinsurance.com"
                className="group inline-flex items-center gap-2.5 text-sm text-[#4a9eff] transition-colors hover:text-[#4a9eff]/90"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0d1b2e]/[0.06] text-[#4a9eff] group-hover:bg-[#0d1b2e]/10">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                ryan@protegrityinsurance.com
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#0d1b2e]">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#4a9eff] transition-colors hover:text-[#4a9eff]/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#0d1b2e]">
              Coverage
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {coverageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#4a9eff] transition-colors hover:text-[#4a9eff]/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#0d1b2e]">
              Office
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#0d1b2e]">
              Independent brokerage
              <br />
              Licensed in 40 states
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#0d1b2e]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#0d1b2e]/60">
            {`\u00A9 ${year} Protegrity Insurance Brokerage. All rights reserved.`}
          </p>
          <p className="text-xs text-[#0d1b2e]/60">
            Insurance products are offered through licensed carriers.
          </p>
        </div>
      </div>
    </footer>
  )
}
