import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parkland PT | In-Home Physical Therapy by Dr. Vincenzo Bombara",
  description:
    "Specialized in-home physical therapy services in Parkland by Dr. Vincenzo Bombara, DPT, GCS, MBA. Board-Certified Geriatric Specialist providing personalized treatment plans for seniors in the comfort of their home.",
  keywords: [
    "in-home physical therapy",
    "Parkland PT",
    "Dr. Vincenzo Bombara",
    "geriatric physical therapy",
    "senior physical therapy",
    "LSVT BIG",
    "Parkinson's therapy",
    "home therapy",
    "South Florida physical therapy",
    "Parkland physical therapist",
    "in-home rehabilitation",
    "mobility therapy",
    "balance therapy",
    "fall prevention",
    "orthopedic therapy",
    "neurological rehabilitation",
  ],
  authors: [{ name: "Dr. Vincenzo Bombara", url: "https://vincenzobombara.com" }],
  creator: "Dr. Vincenzo Bombara",
  publisher: "Quality In-Home Therapy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parklandpt.com",
    siteName: "Parkland PT",
    title: "Parkland PT | Quality In-Home Physical Therapy Services",
    description:
      "Expert in-home physical therapy services in Parkland. Specialized care for seniors, including geriatric therapy, LSVT BIG for Parkinson's, and neurological rehabilitation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parkland PT - Quality In-Home Therapy Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parkland PT | In-Home Physical Therapy",
    description:
      "Expert in-home physical therapy services in Parkland. Specialized care for seniors by Dr. Vincenzo Bombara, DPT, GCS, MBA.",
    images: ["/og-image.png"],
    creator: "@ParklandPT",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://parklandpt.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body id="top" className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
