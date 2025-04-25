import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CTASection from "@/components/cta-section"
import { Award, GraduationCap, Briefcase, Heart } from "lucide-react"

export const metadata = {
  title: "About Dr. Vincenzo Bombara - Board-Certified Geriatric Clinical Specialist",
  description:
    "Dr. Vincenzo Bombara is a Board-Certified Geriatric Clinical Specialist (GCS) with advanced training in Parkinson's Disease therapy and over 10 years of experience in senior rehabilitation.",
  keywords: [
    "Dr. Vincenzo Bombara",
    "Geriatric Clinical Specialist",
    "Board-Certified GCS",
    "Parkinson's Disease specialist",
    "physical therapist Parkland",
    "senior care specialist",
    "in-home physical therapy",
    "Quality In Home Therapy",
    "DPT GCS MBA",
    "LSVT BIG certified",
    "vestibular rehabilitation",
  ],
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Dr. Vincenzo Bombara</h1>
              <p className="text-xl text-gray-600 mb-4">DPT, GCS, MBA</p>
              <p className="text-lg text-gray-600 mb-8">
                As a Geriatric Clinical Specialist with advanced training in Parkinson's Disease therapy, I'm dedicated
                to providing the highest quality physical therapy care to seniors in our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5" />
                  <span>Geriatric Clinical Specialist</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
                  <Heart className="h-5 w-5" />
                  <span>Parkinson's Specialist</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/elderly-therapy-session.png"
                alt="Dr. Vincenzo Bombara providing physical therapy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Education & Credentials</h2>
              <p className="text-xl text-gray-600">
                Dedicated to excellence in geriatric physical therapy through continuous education and specialized
                training
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Doctor of Physical Therapy (DPT)</h3>
                      <p className="text-gray-600">University of Miami, School of Medicine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Geriatric Clinical Specialist (GCS)</h3>
                      <p className="text-gray-600">American Board of Physical Therapy Specialties</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Master of Business Administration (MBA)
                      </h3>
                      <p className="text-gray-600">University of Florida</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Parkinson's Disease Specialist Training
                      </h3>
                      <p className="text-gray-600">LSVT BIG® Certified Clinician</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/gentle-home-therapy.png"
                  alt="In-home physical therapy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of specialized experience in geriatric rehabilitation, I founded Quality In Home
                Therapy to address the unique challenges seniors face in accessing quality physical therapy. My approach
                combines the latest evidence-based techniques with a deep understanding of the aging process and
                age-related conditions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My Board Certification as a Geriatric Clinical Specialist (GCS) represents the highest level of
                expertise in senior care, requiring extensive clinical experience, continuing education, and passing a
                rigorous national examination. Only about 1% of all physical therapists achieve this specialized
                certification in geriatric care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I believe that physical therapy should be accessible, personalized, and focused on improving quality of
                life. As your neighbor and your clinician, I'm committed to bringing high-quality care directly to your
                home.
              </p>
              <Button asChild className="bg-teal-700 hover:bg-teal-800">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Community Involvement</h2>
            <p className="text-xl text-gray-600 mb-12">
              Proud to be an active member of the Parkland community, supporting seniors and those with Parkinson's
              Disease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCOC-Logo-Member-300x300-1-3sBxB72RDcrqFnM35QXKaRqpkQ3XaY.png"
                    alt="Parkland Chamber of Commerce Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Parkland Chamber of Commerce</h3>
                <p className="text-gray-600">
                  Proud member supporting local businesses and community initiatives in Parkland.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Parkinson's Foundation</h3>
                <p className="text-gray-600">
                  Active supporter and volunteer, helping to improve the lives of those living with Parkinson's Disease.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-teal-100 text-teal-800 p-3 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Wellness Programs</h3>
                <p className="text-gray-600">
                  Regular contributor to local senior centers, providing education on fall prevention and mobility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
