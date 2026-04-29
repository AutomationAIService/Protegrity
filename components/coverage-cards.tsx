"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProtegrityShield } from "@/components/protegrity-shield"
import { cn } from "@/lib/utils"

type CoverageKey = "home" | "auto" | "life"

type Coverage = {
  key: CoverageKey
  title: string
  image: string
  description: string
  bullets: string[]
  cta: string
}

const coverages: Coverage[] = [
  {
    key: "home",
    title: "Home Insurance",
    image: "/coverage-home.jpg",
    description:
      "Protection for your home, belongings, liability, and living expenses when the unexpected happens.",
    bullets: [
      "Replacement cost coverage",
      "Personal possessions",
      "Living expenses",
      "Liability protection",
      "Optional umbrella coverage",
    ],
    cta: "Explore Home Insurance",
  },
  {
    key: "auto",
    title: "Auto Insurance",
    image: "/coverage-auto.jpg",
    description:
      "Coverage options for everyday drivers, motorcycles, classic cars, recreational vehicles, and watercraft.",
    bullets: [
      "Personal auto coverage",
      "Motorcycle coverage",
      "Classic car coverage",
      "RV and mobile home coverage",
      "Boat and watercraft coverage",
    ],
    cta: "Explore Auto Insurance",
  },
  {
    key: "life",
    title: "Life Insurance",
    image: "/coverage-life.jpg",
    description:
      "Life insurance options designed to help protect the people and plans that matter most.",
    bullets: [
      "Term life insurance",
      "Whole life insurance",
      "Universal life insurance",
      "Flexible coverage conversations",
      "Family protection planning",
    ],
    cta: "Explore Life Insurance",
  },
]

export function CoverageCards() {
  const [emphasized, setEmphasized] = useState<CoverageKey | null>(null)

  useEffect(() => {
    function handler(event: Event) {
      const detail = (event as CustomEvent<{ key: CoverageKey }>).detail
      if (!detail) return
      setEmphasized(detail.key)
      const timeout = window.setTimeout(() => setEmphasized(null), 1800)
      return () => window.clearTimeout(timeout)
    }
    window.addEventListener("protegrity:emphasize-coverage", handler)
    return () => window.removeEventListener("protegrity:emphasize-coverage", handler)
  }, [])

  return (
    <section
      id="coverage-options"
      aria-labelledby="coverage-heading"
      className="relative bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Coverage Options
          </p>
          <h2
            id="coverage-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[44px]"
          >
            Coverage Designed Around What Matters Most
          </h2>
          <p className="mx-auto mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore insurance options built around your home, your vehicle, your family, and your future.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {coverages.map((coverage) => (
            <article
              key={coverage.key}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500",
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10",
                emphasized === coverage.key &&
                  "ring-2 ring-brand-glow shadow-xl shadow-brand/20 -translate-y-1",
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                <Image
                  src={coverage.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                  {coverage.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {coverage.description}
                </p>

                <ul className="mt-5 space-y-2.5" role="list">
                  {coverage.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-navy/85">
                      <ProtegrityShield
                        className="mt-0.5 h-4 w-4 flex-none text-brand"
                        filled
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-1">
                  <Button
                    variant="outline"
                    className="group/btn h-11 w-full justify-between rounded-full border-border bg-background px-5 text-navy hover:border-brand hover:bg-secondary hover:text-brand"
                  >
                    {coverage.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
