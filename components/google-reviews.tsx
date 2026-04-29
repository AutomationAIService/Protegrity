import { Star, Quote } from "lucide-react"

const reviews = [
  {
    title: "Constant Protection From Rate Hikes",
    body: "I know this company to be a watch dog for my insurance needs and rates. I feel comfortable with their evaluation of the companies they obtain quotes from and know that I am protected well. They notify me, not the other way around, when rates have increased and have already investigated other options.",
    name: "Kat Palmer",
    rating: 5,
  },
  {
    title: "Solved My Insurance Concerns Immediately",
    body: "Asked for assistance when hit with an enormous, surprise increase in home insurance rates. Ryan's team at Protegrity immediately solved my concerns with a solution that surpassed my expectations.",
    name: "Layton Holcombe",
    rating: 5,
  },
  {
    title: "A Seamless Process And Incredible Deal",
    body: "Michael made the entire process of getting insurance seamless and got me an incredible deal. Amazing group of people to work with, highly recommend.",
    name: "Sarah Pelton",
    rating: 5,
  },
]

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-secondary/50 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Verified Google Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[44px]"
          >
            Rated 5.0 Stars By Protegrity Clients
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real feedback from Protegrity Insurance Brokerage clients
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        >
          {reviews.map((review) => (
            <li
              key={review.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
            >
              <Quote
                className="absolute right-6 top-6 h-7 w-7 text-brand/15"
                aria-hidden="true"
              />

              <h3 className="pr-10 font-display text-xl font-bold leading-snug tracking-tight text-navy">
                {review.title}
              </h3>

              <div
                className="mt-3 flex items-center gap-0.5"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-brand-glow text-brand-glow"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/80">
                {review.body}
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display text-[15px] font-semibold text-navy">
                  {review.name}
                </p>
                <p className="mt-0.5 text-xs font-medium text-brand">
                  Verified Google Review
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Reviews sourced from Protegrity Insurance Brokerage Google Business Profile
        </p>
      </div>
    </section>
  )
}
