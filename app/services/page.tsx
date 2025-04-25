import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CTASection from "@/components/cta-section"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Specialized In-Home Physical Therapy Services | Medicare Accepted",
  description:
    "Comprehensive physical therapy services for seniors and Parkinson's patients delivered in your home by a Board-Certified Geriatric Specialist. Medicare Part B accepted.",
  keywords: [
    "senior physical therapy",
    "Parkinson's Disease therapy",
    "in-home physical therapy",
    "geriatric physical therapy",
    "Medicare physical therapy",
    "balance training",
    "fall prevention",
    "post-surgery rehabilitation",
    "mobility training",
    "Parkland physical therapy",
    "LSVT BIG therapy",
    "vestibular rehabilitation",
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Specialized Physical Therapy Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert physical therapy services designed specifically for seniors and individuals with Parkinson's
              Disease, delivered in the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Geriatric Physical Therapy */}
      <section id="geriatric" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Geriatric Physical Therapy</h2>
              <p className="text-lg text-gray-600 mb-6">
                As a certified Geriatric Clinical Specialist (GCS), we provide expert physical therapy tailored
                specifically for adults 65 and older, addressing the unique challenges that come with aging.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive mobility assessments specific to older adults</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Personalized exercise programs to improve strength and flexibility
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategies to manage arthritis and joint pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Techniques to improve daily activities and maintain independence
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-teal-700 hover:bg-teal-800">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/gentle-therapy.png"
                  alt="Geriatric physical therapy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parkinson's Disease Therapy */}
      <section id="parkinsons" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/parkinsons-therapy-session.png"
                  alt="Parkinson's Disease physical therapy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Parkinson's Disease Therapy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized training in Parkinson's Disease therapy includes LSVT BIG® certification and advanced
                techniques specifically designed for the unique movement challenges of Parkinson's. We focus on
                amplitude training, rhythmic cueing, and functional mobility strategies that research has shown to be
                most effective for Parkinson's patients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive approach addresses freezing of gait, postural instability, rigidity, and bradykinesia
                through customized exercise programs that can slow disease progression and maintain independence longer.
                We work closely with your neurologist to ensure coordinated care.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">LSVT BIG® certified therapy for improved movement amplitude</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategies to reduce freezing of gait and improve walking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Balance training to reduce fall risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Exercises to maintain flexibility and reduce rigidity</span>
                </li>
              </ul>
              <Button asChild className="bg-teal-700 hover:bg-teal-800">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Additional Specialized Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive physical therapy services designed to address the specific needs of seniors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card id="balance" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Balance & Fall Prevention</CardTitle>
                <CardDescription>Reduce fall risk and improve confidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Comprehensive assessment and personalized exercises to improve balance, coordination, and reduce the
                  risk of falls. Our program includes:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Home safety evaluations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Vestibular rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proprioception training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="rehabilitation" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Post-Surgery Rehabilitation</CardTitle>
                <CardDescription>Recover in the comfort of home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Specialized rehabilitation programs for seniors recovering from joint replacements, fractures, and
                  other surgeries, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hip and knee replacement recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fracture rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Post-cardiac surgery recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="mobility" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Mobility Training</CardTitle>
                <CardDescription>Improve independence and confidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Personalized training to improve mobility and independence in daily activities, featuring:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Gait training and walking assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transfer training (bed, chair, car)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Assistive device training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="pain" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Pain Management</CardTitle>
                <CardDescription>Reduce chronic pain without medication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Non-pharmacological approaches to managing chronic pain in seniors, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Manual therapy techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Therapeutic exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Modalities and pain education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="strength" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Strength & Conditioning</CardTitle>
                <CardDescription>Age-appropriate fitness programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Customized exercise programs designed specifically for seniors to improve strength, endurance, and
                  overall fitness:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Resistance training for seniors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cardiovascular conditioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Flexibility and mobility exercises</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="neurological" className="border-2 border-teal-100 hover:border-teal-500 transition-all">
              <CardHeader>
                <CardTitle>Neurological Rehabilitation</CardTitle>
                <CardDescription>Recovery from stroke and neurological conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Specialized therapy for seniors recovering from stroke and other neurological conditions:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Post-stroke rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Neuropathy management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Functional neurological training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
              <p className="text-xl text-gray-600">We strive to make our services accessible to all seniors in need</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We Accept:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Medicare Part B</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Self-Pay Options</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-7 w-7 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Initial Consultation</p>
                      <p className="text-gray-600">
                        We'll verify your insurance coverage and explain any out-of-pocket costs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-7 w-7 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Treatment Plan</p>
                      <p className="text-gray-600">
                        We'll develop a personalized treatment plan based on your needs and coverage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-7 w-7 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Billing</p>
                      <p className="text-gray-600">
                        We handle all insurance billing for you, making the process hassle-free.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
