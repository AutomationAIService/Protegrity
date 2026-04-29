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
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* Crop the portrait to remove the teal background box */}
              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary shadow-xl shadow-navy/20">
                <Image
                  src="/ryan-portrait.png"
                  alt="Portrait of Ryan Lorsch, Principal Advisor at Protegrity Insurance"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating credential badge - positioned below the portrait */}
              <div className="mx-auto mt-6 w-[280px] rounded-xl border border-border bg-card p-4 shadow-xl shadow-navy/20 sm:absolute sm:-bottom-4 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 lg:left-auto lg:right-[-1rem] lg:translate-x-0">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-11 w-11 flex-none items-center justify-center">
                    <ProtegrityShield
                      className="h-11 w-11 text-brand"
                      strokeWidth={1.2}
                      filled
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[15px] font-semibold leading-tight text-navy">
                      Principal Advisor
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Protegrity Insurance Brokerage
                    </p>
                  </div>
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

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Background And Credentials
            </p>
            <ul
              className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
              role="list"
              aria-label="Credentials"
            >
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-[14px] font-medium text-navy shadow-sm shadow-navy/5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md hover:shadow-navy/10"
                >
                  <span className="relative flex h-7 w-7 flex-none items-center justify-center">
                    <ProtegrityShield
                      className="h-7 w-7 text-brand/15 transition-colors group-hover:text-brand/25"
                      strokeWidth={1.2}
                      filled
                    />
                    <ProtegrityShield
                      className="absolute h-3.5 w-3.5 text-brand"
                      strokeWidth={1.6}
                    />
                  </span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>

            {/* Contact card */}
            <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-navy/10">
              <div className="flex items-center gap-2.5 border-b border-border bg-secondary/60 px-5 py-3">
                <ProtegrityShield className="h-4 w-4 flex-none text-brand" filled />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/80">
                  Direct Line
                </p>
              </div>
              <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <a
                  href="tel:4803634160"
                  className="group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-secondary/60"
                  aria-label="Call Ryan at 480.363.4160"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <p className="mt-0.5 font-display text-[15px] font-semibold text-navy group-hover:text-brand">
                      480.363.4160
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:ryan@protegrityinsurance.com"
                  className="group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-secondary/60"
                  aria-label="Email Ryan at ryan@protegrityinsurance.com"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-0.5 truncate font-display text-[15px] font-semibold text-navy group-hover:text-brand">
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
