import { openAvaWidget } from "@/lib/ava"
import { Button } from "@/components/ui/button"
import { ProtegrityShield } from "@/components/protegrity-shield"

export function AvaGuidedReview() {
  return (
    <section className="relative bg-background px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8 lg:gap-12">
            {/* Left: Shield icon */}
            <div className="flex flex-none items-center justify-center sm:justify-start">
              <span
                aria-hidden="true"
                className="relative flex h-16 w-16 items-center justify-center flex-none"
              >
                <span
                  className="absolute inset-0 rounded-lg opacity-60 blur-lg"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(56,189,248,0.3), transparent 70%)",
                  }}
                />
                <ProtegrityShield
                  className="relative h-16 w-16 text-brand drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                  strokeWidth={1.1}
                  filled
                />
              </span>
            </div>

            {/* Center: Copy */}
            <div className="flex-1 text-center sm:text-left">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Guided Coverage Review
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-[28px]">
                Start With Ava For A Faster First Step
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Ava can guide you through a few simple questions, help identify the right coverage path, and
                connect you with the next step.
              </p>
              <p className="mt-3 text-[13px] text-muted-foreground">
                Prefer to speak directly?{" "}
                <a
                  href="tel:4803634160"
                  className="font-medium text-brand transition-colors hover:text-brand-glow"
                >
                  Ryan is available at 480.363.4160
                </a>
              </p>
            </div>

            {/* Right: Button */}
            <div className="flex flex-none items-center">
              <Button
                onClick={() => openAvaWidget("start-coverage-review")}
                className="h-12 px-8 rounded-full bg-brand text-white font-medium hover:bg-brand-hover transition-all hover:-translate-y-0.5"
              >
                Start With Ava
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
