"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { openAvaWidget } from "@/lib/ava"
import { ProtegrityShield } from "@/components/protegrity-shield"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Navy gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,26,46,0.55) 0%, rgba(11,26,46,0.7) 55%, rgba(11,26,46,0.92) 100%)",
          }}
        />
        {/* Subtle electric blue rim glow at top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-64"
          style={{
            background:
              "radial-gradient(700px 220px at 50% 0%, rgba(56,189,248,0.18), transparent 70%)",
          }}
        />
        {/* Ambient shield watermark */}
        <ProtegrityShield
          className="pointer-events-none absolute right-[-3rem] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 text-brand-glow/[0.07] md:block"
          strokeWidth={0.6}
        />
      </div>

      <div className="mx-auto flex min-h-[640px] max-w-[1280px] flex-col items-center justify-center px-4 pb-32 pt-24 text-center sm:px-6 sm:pb-40 sm:pt-32 lg:min-h-[680px] lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
            <span className="h-px w-6 bg-brand-glow/70" aria-hidden="true" />
            Independent Insurance Guidance
            <span className="h-px w-6 bg-brand-glow/70" aria-hidden="true" />
          </p>

          <h1
            id="hero-heading"
            className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]"
          >
            Protection With Integrity For What Matters Most
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Personal guidance for home, auto, and life insurance from an experienced independent advisor.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              onClick={() => openAvaWidget("start-coverage-review")}
              aria-label="Open Ava chat to start a coverage review"
              className="h-12 rounded-full bg-brand px-7 text-base font-medium text-primary-foreground shadow-lg shadow-brand/25 transition hover:bg-brand-2 hover:shadow-brand/40"
            >
              Start Coverage Review
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/0 px-7 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
            >
              <a href="#coverage-options" aria-label="Scroll to coverage options">
                Explore Coverage Options
              </a>
            </Button>
          </div>

          <p className="mx-auto mt-10 max-w-[640px] text-sm text-white/70">
            Rated 5.0 stars by Protegrity clients. Independent brokerage. Licensed in 40 states.
          </p>
        </div>
      </div>
    </section>
  )
}
