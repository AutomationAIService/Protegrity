import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { ProtegrityShield } from "@/components/protegrity-shield"

const credentials = [
  "Insurance industry since 2012",
  "Licensed in 40 states",
  "Bachelor degree in Accounting",
  "Master degree in Finance",
  "Spanish and English service",
]

export function MeetRyan() {
  return (
    <section
      id="meet-ryan"
      aria-labelledby="ryan-heading"
      className="bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait column */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-2xl bg-secondary shadow-xl shadow-navy/15">
              <Image
                src="/ryan-portrait.jpg"
                alt="Portrait of Ryan Lorsch, Principal Advisor at Protegrity Insurance"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
              {/* Refined frame accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy/10" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-6 left-1/2 hidden w-[260px] -translate-x-1/2 rounded-xl border border-border bg-card p-4 shadow-lg shadow-navy/15 sm:block lg:left-auto lg:right-[-1.5rem] lg:translate-x-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary text-brand">
                  <ProtegrityShield className="h-5 w-5" filled />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-navy">
                    Principal Advisor
                  </p>
                  <p className="text-xs text-muted-foreground">Protegrity Insurance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials column */}
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Meet Your Advisor
            </p>
            <h2
              id="ryan-heading"
              className="text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[44px]"
            >
              Ryan Lorsch, Principal Advisor
            </h2>
            <p className="mt-5 max-w-[640px] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ryan has worked in the insurance industry since 2012. As Principal of Protegrity, he helps clients review coverage options with a focus on service, clarity, and long term value.
            </p>

            <ul
              className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
              role="list"
              aria-label="Credentials"
            >
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-navy"
                >
                  <ProtegrityShield className="h-4 w-4 flex-none text-brand" filled />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>

            {/* Contact card */}
            <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="tel:4803634160"
                  className="group flex items-center gap-3 rounded-xl bg-card px-4 py-3 transition-colors hover:bg-secondary"
                  aria-label="Call Ryan at 480.363.4160"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-display text-[15px] font-semibold text-navy group-hover:text-brand">
                      480.363.4160
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:ryan@protegrityinsurance.com"
                  className="group flex items-center gap-3 rounded-xl bg-card px-4 py-3 transition-colors hover:bg-secondary"
                  aria-label="Email Ryan at ryan@protegrityinsurance.com"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="truncate font-display text-[15px] font-semibold text-navy group-hover:text-brand">
                      ryan@protegrityinsurance.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
