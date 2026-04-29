"use client"

import { Home, Car, HeartPulse, Sparkles, ArrowRight } from "lucide-react"
import { openAvaWidget } from "@/lib/ava"
import { ProtegrityShield } from "@/components/protegrity-shield"

type Tile = {
  key: "home" | "auto" | "life" | "ava"
  label: string
  description: string
  icon: typeof Home
  action: "scroll" | "ava"
}

const tiles: Tile[] = [
  {
    key: "home",
    label: "Home Insurance",
    description: "Coverage for your home and belongings",
    icon: Home,
    action: "scroll",
  },
  {
    key: "auto",
    label: "Auto Insurance",
    description: "Cars, motorcycles, and recreational vehicles",
    icon: Car,
    action: "scroll",
  },
  {
    key: "life",
    label: "Life Insurance",
    description: "Term, whole life, and family planning",
    icon: HeartPulse,
    action: "scroll",
  },
  {
    key: "ava",
    label: "Start Coverage Review",
    description: "Guided step by step with Ava",
    icon: Sparkles,
    action: "ava",
  },
]

function emphasizeCoverage(key: Tile["key"]) {
  if (typeof window === "undefined") return
  // Dispatch a small custom event so the Coverage Cards section can briefly
  // highlight the matching card. Kept intentionally simple and decoupled.
  window.dispatchEvent(new CustomEvent("protegrity:emphasize-coverage", { detail: { key } }))
}

export function QuickStartStrip() {
  return (
    <div className="relative z-10 -mt-24 px-4 sm:px-6 lg:-mt-28 lg:px-8">
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="rounded-2xl border border-border bg-card p-3 shadow-[0_30px_60px_-25px_rgba(11,26,46,0.45)] sm:p-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => {
              const Icon = tile.icon
              const isAva = tile.action === "ava"

              const content = (
                <>
                  <span
                    className="relative flex h-12 w-12 flex-none items-center justify-center"
                    aria-hidden="true"
                  >
                    <ProtegrityShield
                      className={`h-12 w-12 transition-colors ${
                        isAva ? "text-brand" : "text-brand/15 group-hover:text-brand/30"
                      }`}
                      strokeWidth={1.1}
                      filled={isAva}
                    />
                    <Icon
                      className={`absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-[55%] ${
                        isAva ? "text-brand" : "text-brand"
                      }`}
                    />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col items-start text-left">
                    <span className="font-display text-[15px] font-semibold leading-tight text-navy">
                      {tile.label}
                    </span>
                    <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {tile.description}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </>
              )

              const baseClass =
                "group flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none ring-electric"

              if (isAva) {
                return (
                  <button
                    key={tile.key}
                    type="button"
                    onClick={() => openAvaWidget("start-coverage-review")}
                    aria-label="Start a guided coverage review with Ava"
                    className={baseClass}
                  >
                    {content}
                  </button>
                )
              }

              return (
                <a
                  key={tile.key}
                  href="#coverage-options"
                  onClick={() => emphasizeCoverage(tile.key)}
                  aria-label={`Scroll to ${tile.label} in coverage options`}
                  className={baseClass}
                >
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
