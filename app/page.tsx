import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import ContactCTA from "@/components/contact-cta"
import StructuredData from "@/components/structured-data"
import RelatedSites from "@/components/related-sites"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parkland PT | In-Home Physical Therapy by Dr. Vincenzo Bombara",
  description:
    "Expert in-home physical therapy in Parkland by Board-Certified Geriatric Specialist Dr. Vincenzo Bombara. Specialized care for seniors including LSVT BIG for Parkinson's Disease.",
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Services />
      <Testimonials />
      <Team />
      <RelatedSites />
      <ContactCTA />
    </>
  )
}
