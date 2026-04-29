import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { QuickStartStrip } from "@/components/quick-start-strip"
import { AvaGuidedReview } from "@/components/ava-guided-review"
import { CoverageCards } from "@/components/coverage-cards"
import { WhyChoose } from "@/components/why-choose"
import { MeetRyan } from "@/components/meet-ryan"
import { CarrierStrip } from "@/components/carrier-strip"
import { GoogleReviews } from "@/components/google-reviews"
import { MeetAva } from "@/components/meet-ava"
import { CoverageForm } from "@/components/coverage-form"
import { FinalCTA } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { FloatingAvaButton } from "@/components/floating-ava-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <QuickStartStrip />
        <AvaGuidedReview />
        <CoverageCards />
        <WhyChoose />
        <MeetRyan />
        <CarrierStrip />
        <GoogleReviews />
        <MeetAva />
        <CoverageForm />
        <FinalCTA />
      </main>
      <SiteFooter />
      <FloatingAvaButton />
    </div>
  )
}
