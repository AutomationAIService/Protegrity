"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { openAvaWidget } from "@/lib/ava"

/**
 * Global floating Ava entry point.
 *
 * Visible on every section of the homepage. Click calls openAvaWidget,
 * which is the single trigger function that the future Voiceflow embed
 * will hook into. No chat state, memory, or messages live here.
 */
export function FloatingAvaButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reveal = () => setVisible(true)
    // Reveal calmly after first interaction or short delay so the entry
    // point never jumps in aggressively.
    const timeout = window.setTimeout(reveal, 700)
    window.addEventListener("scroll", reveal, { passive: true, once: true })
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-4 z-50 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {/* Mobile: compact circular button */}
      <button
        type="button"
        onClick={() => openAvaWidget("floating")}
        aria-label="Open Ava chat"
        className="pointer-events-auto group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/40 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-navy-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow sm:hidden"
      >
        <span
          className="absolute -inset-1 rounded-full opacity-70 blur-md"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.5), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <Image
          src="/protegrity-shield.png"
          alt=""
          width={36}
          height={36}
          className="relative h-9 w-9 drop-shadow-[0_0_6px_rgba(56,189,248,0.45)]"
        />
      </button>

      {/* Desktop: navy pill with label */}
      <button
        type="button"
        onClick={() => openAvaWidget("floating")}
        aria-label="Open Ava chat"
        className="pointer-events-auto group relative hidden items-center gap-3 rounded-full bg-navy py-3 pl-3 pr-5 text-white shadow-xl shadow-navy/40 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-navy-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow sm:inline-flex"
      >
        <span
          className="absolute -inset-1 rounded-full opacity-60 blur-md"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.4), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
          <Image
            src="/protegrity-shield.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 drop-shadow-[0_0_4px_rgba(56,189,248,0.5)]"
          />
        </span>
        <span className="relative text-[15px] font-medium tracking-tight">Chat With Ava</span>
      </button>
    </div>
  )
}
