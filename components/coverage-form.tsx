"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProtegrityShield } from "@/components/protegrity-shield"

const coverageTypes = [
  "Home Insurance",
  "Auto Insurance",
  "Life Insurance",
  "Multiple Coverages",
  "Not Sure Yet",
]

const states = [
  "Arizona",
  "California",
  "Colorado",
  "Florida",
  "Nevada",
  "New Mexico",
  "Oregon",
  "Texas",
  "Utah",
  "Washington",
  "Other State",
]

export function CoverageForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Frontend only confirmation. Real backend wiring will be added later.
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="form-heading"
      className="bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[720px]">
          <div className="text-center">
            <p className="mb-4 inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <ProtegrityShield className="h-3.5 w-3.5" filled />
              Coverage Review
            </p>
            <h2
              id="form-heading"
              className="text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[44px]"
            >
              Start Your Coverage Review
            </h2>
            <p className="mx-auto mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share a few details and Protegrity can help guide the next step.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-1 sm:p-2">
            <div className="rounded-[20px] bg-card p-6 shadow-sm sm:p-10">
              {submitted ? (
                <div
                  className="flex flex-col items-center gap-4 py-8 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <ProtegrityShield className="h-6 w-6" filled />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Request Received
                  </h3>
                  <p className="max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">
                    Thank you. A member of the Protegrity team will reach out shortly to start your coverage review.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-navy">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="h-11 rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-navy">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className="h-11 rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-navy">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="h-11 rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-navy">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="h-11 rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="coverageType" className="text-sm font-medium text-navy">
                      Coverage Type
                    </Label>
                    <Select name="coverageType">
                      <SelectTrigger
                        id="coverageType"
                        className="h-11 w-full rounded-lg border-border bg-background"
                      >
                        <SelectValue placeholder="Select a coverage type" />
                      </SelectTrigger>
                      <SelectContent>
                        {coverageTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="state" className="text-sm font-medium text-navy">
                      State
                    </Label>
                    <Select name="state">
                      <SelectTrigger
                        id="state"
                        className="h-11 w-full rounded-lg border-border bg-background"
                      >
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <Label htmlFor="message" className="text-sm font-medium text-navy">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share anything that might help us prepare for your review."
                      className="rounded-lg border-border bg-background"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 w-full rounded-full bg-brand text-base font-medium text-primary-foreground shadow-lg shadow-brand/25 hover:bg-brand-2"
                    >
                      Submit Request
                    </Button>
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Submitting this form connects you with the Protegrity team. No coverage decisions are made until a full conversation has taken place.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
