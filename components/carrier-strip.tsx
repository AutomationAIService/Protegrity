const carriers = [
  "Progressive",
  "Safeco Insurance",
  "NatGen Premier",
  "Stillwater Insurance Group",
]

export function CarrierStrip() {
  return (
    <section
      aria-labelledby="carrier-heading"
      className="border-y border-border bg-secondary/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="carrier-heading"
            className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
          >
            Access To Trusted Carrier Options
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:gap-8 md:grid-cols-4">
          {carriers.map((carrier) => (
            <div
              key={carrier}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-4 transition-colors hover:border-brand/40 hover:text-brand"
            >
              <span className="font-display text-base font-semibold tracking-tight text-navy/70 transition-colors hover:text-brand sm:text-[17px]">
                {carrier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
