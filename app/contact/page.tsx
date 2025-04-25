import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact Us - Schedule Your Physical Therapy Consultation",
  description:
    "Contact Parkland PT to schedule your in-home physical therapy consultation. Specialized care for seniors and Parkinson's Disease patients.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to improve your mobility and quality of life? Get in touch to schedule your consultation or ask any
              questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-teal-600" />
                  Phone
                </CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">
                  <a href="tel:9545931735" className="text-teal-700 hover:underline">
                    (954) 593-1735
                  </a>
                </p>
                <p className="text-gray-600 mt-2">
                  We're available to take your call Monday through Friday, 8am to 6pm.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  Email
                </CardTitle>
                <CardDescription>Send us a message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">
                  <a href="mailto:v.bombara@qualityinhometherapy.com" className="text-teal-700 hover:underline">
                    v.bombara@qualityinhometherapy.com
                  </a>
                </p>
                <p className="text-gray-600 mt-2">
                  We typically respond to emails within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  Service Area
                </CardTitle>
                <CardDescription>Areas we serve</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We proudly serve the following communities:</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Parkland</li>
                  <li>• Coral Springs</li>
                  <li>• Deerfield Beach</li>
                  <li>• Coconut Creek</li>
                  <li>• Boca Raton</li>
                  <li>• Pompano Beach</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Common questions about our in-home physical therapy services</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I schedule my first appointment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can schedule your first appointment by calling us at (954) 593-1735, sending an email to
                    v.bombara@qualityinhometherapy.com, or filling out the contact form on this page. We'll get back to
                    you promptly to arrange a convenient time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Does Medicare cover in-home physical therapy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, Medicare Part B typically covers in-home physical therapy when it's deemed medically necessary
                    and prescribed by a doctor. We accept Medicare Part B and will handle all the billing paperwork for
                    you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What should I expect during my first session?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your first session will include a comprehensive evaluation of your mobility, strength, balance, and
                    specific concerns. We'll discuss your medical history, goals, and develop a personalized treatment
                    plan. The initial session typically lasts about 60-90 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long will I need physical therapy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The duration of therapy varies based on your specific condition, goals, and progress. Some patients
                    benefit from short-term therapy (4-6 weeks), while others with chronic conditions may benefit from
                    longer-term care. We'll provide recommendations based on your individual needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="text-teal-700 hover:underline font-medium">
                View all FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
