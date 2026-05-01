import { Quote, Star } from "lucide-react"

const reviews = [
  {
    title: "Constant Protection From Rate Hikes",
    body: "I know this company to be a watch dog for my insurance needs and rates. I feel comfortable with their evaluation of the companies they obtain quotes from and know that I am protected well. They notify me, not the other way around, when rates have increased and have already investigated other options.",
    name: "Kat Palmer",
  },
  {
    title: "Solved My Insurance Concerns Immediately",
    body: "Asked for assistance when hit with an enormous, surprise increase in home insurance rates. Ryan's team at Protegrity immediately solved my concerns with a solution that surpassed my expectations!",
    name: "Layton Holcombe",
  },
  {
    title: "A Seamless Process And Incredible Deal",
    body: "Michael made the entire process of getting insurance seamless and got me an incredible deal. Amazing group of people to work with, highly recommend!",
    name: "Sarah Pelton",
  },
]

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[44px]"
          >
            Rated 5.0 Stars From 465+ Google Reviews
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real feedback from Protegrity Insurance Brokerage clients
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
            >
              <Quote
                className="h-12 w-12 shrink-0 text-brand/20"
                aria-hidden="true"
                strokeWidth={1.25}
              />
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy">
                {review.title}
              </h3>
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {review.body}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display font-bold text-navy">{review.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Verified Google Review</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[640px] text-center text-xs leading-relaxed text-muted-foreground">
          All reviews sourced from Protegrity Insurance Brokerage&apos;s Google Business Profile
        </p>
      </div>
    </section>
  )
}
