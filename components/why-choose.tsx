import { Building2, UserRoundCheck, Handshake } from "lucide-react"
import { ProtegrityShield } from "@/components/protegrity-shield"

const benefits = [
  {
    icon: Building2,
    title: "Multiple Carrier Options",
    body: "Protegrity helps clients explore coverage choices across trusted insurance companies.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal Guidance",
    body: "Clients work directly with an experienced advisor who helps make insurance decisions easier to understand.",
  },
  {
    icon: Handshake,
    title: "Long Term Service",
    body: "The focus is responsive communication, honest guidance, and lasting relationships.",
  },
]

export function WhyChoose() {
  return (
    <section
      id="our-approach"
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-navy-radial py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Subtle shield watermark */}
      <ProtegrityShield
        className="pointer-events-none absolute -left-20 top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 text-brand-glow/[0.05] lg:block"
        strokeWidth={0.6}
      />
      <ProtegrityShield
        className="pointer-events-none absolute -right-24 bottom-0 hidden h-[400px] w-[400px] text-brand-glow/[0.05] lg:block"
        strokeWidth={0.6}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
            Our Approach
          </p>
          <h2
            id="why-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]"
          >
            Why Clients Choose Protegrity
          </h2>
          <p className="mx-auto mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Clear guidance, responsive service, and coverage conversations built around real life needs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.06] sm:p-8"
              >
                {/* Shield style icon container */}
                <div className="relative mb-6 inline-flex">
                  <ProtegrityShield
                    className="h-14 w-14 text-brand-glow/30"
                    strokeWidth={1.2}
                  />
                  <Icon
                    className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-[55%] text-brand-glow"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                  {benefit.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
