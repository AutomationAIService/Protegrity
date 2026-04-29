"use client"

import { Button } from "@/components/ui/button"
import { ProtegrityShield } from "@/components/protegrity-shield"
import { openAvaWidget } from "@/lib/ava"

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-navy-cta py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Shield watermark */}
      <ProtegrityShield
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 text-brand-glow/[0.05]"
        strokeWidth={0.5}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mb-7 flex justify-center" aria-hidden="true">
            <span className="relative inline-flex h-14 w-14 items-center justify-center">
              <span
                className="absolute inset-0 rounded-full opacity-60 blur-xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(56,189,248,0.4), transparent 70%)",
                }}
              />
              <ProtegrityShield
                className="relative h-14 w-14 text-brand-glow drop-shadow-[0_0_8px_rgba(56,189,248,0.55)]"
                strokeWidth={1.2}
              />
            </span>
          </div>
          <h2
            id="cta-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[52px]"
          >
            Ready To Explore Your Options?
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Start with a simple coverage review and get connected with the right next step.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              onClick={() => openAvaWidget("start-coverage-review")}
              aria-label="Open Ava chat to start a coverage review"
              className="h-12 w-full rounded-full bg-brand px-7 text-base font-medium text-primary-foreground shadow-lg shadow-brand/30 hover:bg-brand-2 sm:w-auto"
            >
              Start Coverage Review
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => openAvaWidget("chat-with-ava")}
              aria-label="Open Ava chat"
              className="h-12 w-full rounded-full border-white/40 bg-white/0 px-7 text-base font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Chat With Ava
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
