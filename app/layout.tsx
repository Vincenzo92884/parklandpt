import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  variable: "--font-inter", // Allow usage as a CSS variable
})

export const metadata: Metadata = {
  title: {
    default: "Parkland PT | In-Home Physical Therapy for Seniors & Parkinson's Disease",
    template: "%s | Parkland PT - Quality In Home Therapy",
  },
  description:
    "Board-Certified Geriatric Clinical Specialist providing Medicare-covered in-home physical therapy for seniors 65+ and Parkinson's Disease patients in Parkland, FL and surrounding areas.",
  keywords: [
    "physical therapy",
    "senior physical therapy",
    "geriatric clinical specialist",
    "board certified GCS",
    "Parkinson's Disease therapy",
    "in-home physical therapy",
    "Medicare physical therapy",
    "Parkland physical therapy",
    "South Florida senior care",
    "fall prevention",
    "balance therapy",
    "mobility training",
    "post-surgery rehabilitation",
    "Dr. Vincenzo Bombara",
    "Quality In Home Therapy",
    "vestibular rehabilitation",
    "arthritis management",
    "elderly rehabilitation",
    "senior strength training",
    "home health physical therapy",
  ],
  authors: [{ name: "Dr. Vincenzo Bombara, DPT, GCS, MBA" }],
  creator: "Dr. Vincenzo Bombara, DPT, GCS, MBA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parklandpt.com",
    siteName: "Parkland PT - Quality In Home Therapy",
    title: "In-Home Physical Therapy for Seniors & Parkinson's Disease | Medicare Accepted",
    description:
      "Board-Certified Geriatric Specialist providing expert physical therapy in the comfort of your home. Serving Parkland, Coral Springs, Deerfield Beach, and surrounding areas.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parkland PT - Specialized In-Home Physical Therapy for Seniors",
      },
    ],
  },
  alternates: {
    canonical: "https://parklandpt.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Physical Therapy for Seniors & Parkinson's Disease | Parkland PT",
    description: "Board-Certified Geriatric Specialist providing expert physical therapy in the comfort of your home.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "verification_token",
  },
  category: "Healthcare",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#14b8a6" },
  ],
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parkland-PTTt-1-CGBMoeogRsCTefiHkZTQWY5qP1ePCy.png"
          as="image"
        />
      </head>
      <body className={inter.className}>
        {/* Skip to content link for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script id="schema-structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PhysicalTherapist",
              "name": "Parkland PT - Quality In Home Therapy",
              "image": "https://parklandpt.com/images/parkland-pt-logo.png",
              "url": "https://parklandpt.com",
              "telephone": "(954) 593-1735",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Parkland",
                "addressRegion": "FL",
                "postalCode": "33076",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.3128,
                "longitude": -80.2497
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://qualityinhometherapy.com",
                "https://vincenzobombara.com"
              ],
              "priceRange": "Medicare and Self-Pay Accepted",
              "servesCuisine": "Physical Therapy Services",
              "areaServed": ["Parkland", "Coral Springs", "Deerfield Beach", "Coconut Creek", "Boca Raton", "Pompano Beach"],
              "description": "Board-Certified Geriatric Clinical Specialist providing Medicare-covered in-home physical therapy for seniors 65+ and Parkinson's Disease patients.",
              "founder": {
                "@type": "Person",
                "name": "Dr. Vincenzo Bombara",
                "jobTitle": "Doctor of Physical Therapy, Geriatric Clinical Specialist",
                "description": "Board-Certified Geriatric Clinical Specialist with expertise in Parkinson's Disease therapy"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Physical Therapy Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Geriatric Physical Therapy",
                    "description": "Specialized physical therapy for adults 65 and older"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Parkinson's Disease Therapy",
                    "description": "Specialized movement strategies for Parkinson's Disease patients"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Balance & Fall Prevention",
                    "description": "Assessment and exercises to improve balance and reduce fall risk"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Post-Surgery Rehabilitation",
                    "description": "Recovery programs for seniors after surgery"
                  }
                ]
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Robert M."
                  },
                  "reviewBody": "Dr. Bombara's expertise in Parkinson's therapy has made a tremendous difference in my mobility. I'm more confident and stable than I've been in years."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Eleanor S."
                  },
                  "reviewBody": "Having therapy in my home has been a game-changer. No more stressful trips to the clinic, and the quality of care is exceptional."
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47"
              }
            }
          `}
        </Script>
        {/* Google Analytics or Tag Manager would go here */}
      </body>
    </html>
  )
}
