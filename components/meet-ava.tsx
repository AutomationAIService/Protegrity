"use client"

import Image from "next/image"
import { Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProtegrityShield } from "@/components/protegrity-shield"
import { openAvaWidget } from "@/lib/ava"

/**
 * Meet Ava section.
 *
 * The chat preview on the left is purely decorative. It is not interactive
 * and contains no chat state or message logic. The real Ava experience will
 * be powered by a Voiceflow widget, triggered through openAvaWidget.
 */
export function MeetAva() {
  return (
    <section
      aria-labelledby="ava-heading"
      className="relative overflow-hidden bg-navy-radial py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Ambient shield glow */}
      <ProtegrityShield
        className="pointer-events-none absolute -left-32 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 text-brand-glow/[0.06] lg:block"
        strokeWidth={0.6}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Decorative chat preview */}
          <div className="lg:col-span-6" aria-hidden="true">
            <div className="relative mx-auto max-w-[480px]">
              {/* Outer glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(56,189,248,0.35), transparent 70%)",
                }}
              />

              <div className="relative rounded-2xl border border-white/10 bg-navy-2/80 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20 text-brand-glow">
                    <Image
                      src="/protegrity-shield.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                    />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-white">
                      Ava
                    </p>
                    <p className="text-xs text-white/60">
                      Protegrity coverage assistant
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-brand-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
                    Online
                  </span>
                </div>

                {/* Message thread */}
                <div className="mt-5 space-y-3.5">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-white/90">
                    Hi, I am Ava. I can help you explore coverage and connect with the next step.
                  </div>
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-brand px-4 py-3 text-sm leading-relaxed text-white">
                    I want to review my home and auto coverage.
                  </div>
                  <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-white/90">
                    Got it. I can start a coverage review or share home and auto options. Which would you prefer?
                  </div>

                  {/* Suggested replies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85">
                      Start coverage review
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85">
                      See home options
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85">
                      Talk to an advisor
                    </span>
                  </div>
                </div>

                {/* Input (decorative only) */}
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-navy-3/60 px-3 py-2.5">
                  <span className="flex-1 text-sm text-white/45">
                    Ask Ava about coverage
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                    <Send className="h-3.5 w-3.5" />
                  </span>
                </div>

                <p className="mt-3 text-[11px] leading-relaxed text-white/50">
                  Ava helps you explore coverage and connect with a Protegrity advisor. Ava does not provide final insurance recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div className="lg:col-span-6">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Meet Ava
            </p>
            <h2
              id="ava-heading"
              className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]"
            >
              Your Virtual Coverage Assistant
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Ava can help visitors get quick answers, choose the right coverage path, and connect with the next step.
            </p>

            <ul className="mt-8 space-y-3" role="list">
              {[
                "Quick answers about coverage options",
                "A guided path to start a review",
                "A simple way to reach a Protegrity advisor",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-[15px] text-white/85">
                  <ProtegrityShield className="mt-0.5 h-4 w-4 flex-none text-brand-glow" filled />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                size="lg"
                onClick={() => openAvaWidget("chat-with-ava")}
                aria-label="Open Ava chat"
                className="h-12 rounded-full bg-brand px-7 text-base font-medium text-primary-foreground shadow-lg shadow-brand/30 hover:bg-brand-2"
              >
                Chat With Ava
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
