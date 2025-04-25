import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MapPin, Award, Activity } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-emerald-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Specialized Physical Therapy for Seniors
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Expert care brought to your home by a Geriatric Clinical Specialist who specializes in Parkinson's
                Disease
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-800 hover:bg-gray-100 border-2 border-teal-800 font-medium button-hover"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/20 font-medium button-hover"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span>Medicare Part B Accepted</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/gentle-strength-rehab.png"
                alt="Senior receiving physical therapy at home"
                fill
                className="object-cover image-hover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Care for Seniors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a Geriatric Clinical Specialist (GCS), we provide expert physical therapy tailored specifically for
              adults 65 and older
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-teal-100 hover:border-teal-500 transition-all card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  Geriatric Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Geriatric Clinical Specialist certification represents advanced training in addressing the unique
                  physical therapy needs of older adults.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-100 hover:border-teal-500 transition-all card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  Parkinson's Specialization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized training in Parkinson's Disease therapy, focusing on movement strategies, balance
                  training, and functional mobility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-100 hover:border-teal-500 transition-all card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  In-Home Convenience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We bring outpatient-quality therapy services directly to your home, eliminating transportation
                  challenges and enhancing comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/elderly-therapy-session.png"
                alt="Dr. Vincenzo Bombara providing physical therapy"
                fill
                className="object-cover image-hover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Your Therapist</h2>
              <h3 className="text-2xl font-semibold text-teal-700">Dr. Vincenzo Bombara, DPT, GCS, MBA</h3>
              <p className="text-lg text-gray-600">
                As a Board-Certified Geriatric Clinical Specialist with advanced training in Parkinson's Disease
                therapy, I bring over 10 years of specialized experience in senior care. My expertise includes
                vestibular rehabilitation, fall prevention, and post-surgical recovery specifically tailored for adults
                65 and older.
              </p>
              <p className="text-lg text-gray-600">
                I founded Quality In Home Therapy with a mission to make professional physical therapy accessible to
                seniors who face transportation challenges or prefer the comfort of their own environment. My
                personalized approach focuses on functional improvement, pain reduction, and enhancing quality of life
                through evidence-based techniques.
              </p>
              <p className="text-lg text-gray-600">
                As both your neighbor in Parkland and your dedicated clinician, I'm committed to providing the same
                high-quality care you'd receive in an outpatient clinic, but with the convenience and comfort of
                home-based treatment.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-teal-700 hover:bg-teal-800 button-hover">
                  <Link href="/about">Learn More About Dr. Bombara</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physical therapy services designed specifically for seniors and those with Parkinson's
              Disease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Balance & Fall Prevention</CardTitle>
                <CardDescription>Reduce fall risk and improve confidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive assessment and personalized exercises to improve balance, coordination, and reduce the
                  risk of falls.
                </p>
                <Button asChild variant="outline" className="w-full button-hover">
                  <Link href="/services#balance">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Parkinson's Disease Therapy</CardTitle>
                <CardDescription>Specialized movement strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Evidence-based interventions specifically designed to address the movement challenges associated with
                  Parkinson's Disease.
                </p>
                <Button asChild variant="outline" className="w-full button-hover">
                  <Link href="/services#parkinsons">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Post-Surgery Rehabilitation</CardTitle>
                <CardDescription>Recover in the comfort of home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized rehabilitation programs for seniors recovering from joint replacements, fractures, and
                  other surgeries.
                </p>
                <Button asChild variant="outline" className="w-full button-hover">
                  <Link href="/services#rehabilitation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 button-hover">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve seniors throughout these South Florida communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {["Parkland", "Coral Springs", "Deerfield Beach", "Coconut Creek", "Boca Raton", "Pompano Beach"].map(
              (area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <p className="font-medium text-teal-700">{area}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
