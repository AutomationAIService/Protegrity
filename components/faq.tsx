"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What are your business hours?",
      answer:
        "We're available Monday through Friday, 9:00 AM to 5:00 PM. Outside business hours, you can still reach us through the Chat With Ava feature for quick questions or to schedule a callback.",
    },
    {
      question: "Which states is Protegrity licensed in?",
      answer:
        "Protegrity Insurance Brokerage is licensed in 40 states across the U.S. A complete list of licensed states is coming soon. Contact us directly to confirm coverage in your state.",
    },
    {
      question: "How long has Protegrity been in business?",
      answer:
        "Protegrity has been serving clients for over 12 years. We've built our reputation on honest, independent guidance, helping families and businesses find the right coverage without pressure or bias toward any single carrier.",
    },
    {
      question: "Which insurance carriers do you work with?",
      answer: (
        <div className="space-y-4">
          <p>As an independent brokerage, we work with a wide network of top-rated carriers.</p>
          <div className="flex flex-wrap gap-2">
            {["Progressive", "Geico", "Safeco", "Farmers"].map((carrier) => (
              <span
                key={carrier}
                className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand border border-brand/30"
              >
                {carrier}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand border border-brand/30">
              + many more
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Carrier availability may vary by state and coverage type.
          </p>
        </div>
      ),
    },
    {
      question: "What types of insurance does Protegrity offer?",
      answer: (
        <div className="space-y-4">
          <CoverageBlock
            label="Auto Insurance"
            items={["Regular auto coverage", "Classic & collector vehicles", "SR-22 filings"]}
          />
          <CoverageBlock
            label="Home Insurance"
            items={["Primary residence", "Seasonal & vacation homes", "Rental properties"]}
          />
          <CoverageBlock
            label="Business Insurance"
            items={["General liability", "Property coverage", "Workers' compensation"]}
          />
          <CoverageBlock
            label="Commercial Auto"
            items={["Fleet coverage", "Cargo protection", "Business liability"]}
          />
          <CoverageBlock
            label="Mexico Travel Insurance"
            items={["Rental car coverage", "Trip cancellation", "Emergency medical", "Lost or stolen baggage", "Cancel for any reason"]}
          />
          <CoverageBlock
            label="Other Coverage"
            items={["Umbrella policies", "Flood & earthquake", "Valuable items protection"]}
          />
        </div>
      ),
    },
  ]

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
            <span className="h-px w-6 bg-brand-glow/70" aria-hidden="true" />
            Got Questions?
            <span className="h-px w-6 bg-brand-glow/70" aria-hidden="true" />
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Everything you need to know about working with Protegrity.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-12 max-w-[720px] space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-t border-white/8 ${index === faqs.length - 1 ? "border-b" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-display text-base font-semibold leading-tight text-navy">
                  {faq.question}
                </span>
                <span
                  className="relative flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand text-white transition-transform"
                  aria-hidden="true"
                >
                  {openIndex === index ? (
                    <X className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoverageBlock({
  label,
  items,
}: {
  label: string
  items: string[]
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">
        {label}
      </p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
