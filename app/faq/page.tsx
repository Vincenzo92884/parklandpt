import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Frequently Asked Questions - Parkland PT",
  description:
    "Find answers to common questions about our in-home physical therapy services for seniors and Parkinson's Disease patients.",
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our in-home physical therapy services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">General Questions</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>What is a Geriatric Clinical Specialist (GCS)?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        A Geriatric Clinical Specialist (GCS) is a physical therapist who has advanced knowledge,
                        experience, and skills in treating older adults. This board certification from the American
                        Board of Physical Therapy Specialties demonstrates expertise in managing complex conditions
                        affecting seniors and optimizing their physical function and quality of life.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>How is in-home physical therapy different from therapy at a clinic?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        In-home physical therapy brings all the benefits of outpatient therapy to the comfort and
                        convenience of your home. This eliminates transportation challenges, reduces exposure to illness
                        in crowded waiting rooms, and allows for personalized treatment in your actual living
                        environment. We can assess and address real-world challenges in your home and tailor exercises
                        to your specific living space.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Do I need a doctor's referral for physical therapy?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        For Medicare patients, a doctor's referral or prescription is typically required for physical
                        therapy services to be covered. However, we can help coordinate with your physician to obtain
                        the necessary referral. If you're self-paying, a referral may not be required, but we still
                        recommend consulting with your doctor about your physical therapy needs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services & Treatment</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>What specialized services do you offer for Parkinson's Disease?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our Parkinson's Disease therapy includes LSVT BIG® certified treatment, which focuses on
                        amplitude training to address the movement challenges associated with Parkinson's. We also
                        provide specific strategies for freezing of gait, balance training to reduce fall risk,
                        exercises to maintain flexibility and reduce rigidity, and functional mobility training to
                        improve daily activities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>How often will I need physical therapy sessions?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        The frequency of sessions depends on your specific condition, goals, and progress. Initially, we
                        typically recommend 2-3 sessions per week for most conditions. As you progress, this may
                        decrease to once a week or less. Each treatment plan is personalized based on your individual
                        needs and response to therapy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Will I need to do exercises between sessions?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Yes, a home exercise program is a crucial part of physical therapy success. We'll provide you
                        with specific exercises to perform between sessions, which will help reinforce your progress and
                        achieve your goals more quickly. These exercises will be tailored to your abilities and can be
                        adjusted as you improve.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance & Payment</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Does Medicare cover in-home physical therapy?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Yes, Medicare Part B typically covers in-home physical therapy when it's deemed medically
                        necessary and prescribed by a doctor. Medicare generally covers 80% of the approved amount after
                        you've met your annual deductible. We accept Medicare assignment and will handle all the billing
                        paperwork for you.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What are your self-pay rates?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our self-pay rates are competitive and transparent. Please contact us directly for current
                        pricing information. We offer various payment options and can discuss packages for multiple
                        sessions if needed. We're committed to making quality physical therapy accessible to all seniors
                        in our community.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Do you offer any discounts or payment plans?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We understand that healthcare costs can be a concern. For self-pay patients, we offer package
                        discounts for multiple sessions paid in advance. We can also discuss payment plans to help make
                        your therapy more affordable. Please contact us to discuss your specific situation and how we
                        can help.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Scheduling & Logistics</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>What areas do you serve?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We proudly serve Parkland, Coral Springs, Deerfield Beach, Coconut Creek, Boca Raton, and
                        Pompano Beach. If you're located just outside these areas, please contact us to discuss your
                        situation, as we may be able to accommodate you depending on our schedule and your location.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What are your hours of operation?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We offer flexible scheduling to accommodate our patients' needs. Our standard hours are Monday
                        through Friday from 8:00 AM to 6:00 PM. Weekend appointments may be available by special
                        arrangement. We strive to work around your schedule and preferences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>How do I cancel or reschedule an appointment?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We understand that circumstances change. To cancel or reschedule an appointment, please give us
                        at least 24 hours' notice by calling (954) 593-1735 or emailing
                        v.bombara@qualityinhometherapy.com. This allows us to offer the time slot to another patient who
                        may need it.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help. Contact us directly for any questions not answered above.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:9545931735"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-teal-700 px-8 text-sm font-medium text-white shadow hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Call (954) 593-1735
                </a>
                <a
                  href="mailto:v.bombara@qualityinhometherapy.com"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Email Us
                </a>
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
