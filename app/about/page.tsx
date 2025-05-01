import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dedicated to providing exceptional physical therapy care in the Parkland community since 2020.
            </p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Parkland Physical Therapy, our mission is to provide personalized, evidence-based physical therapy
              services that help our patients recover from injury, manage chronic conditions, and achieve optimal health
              and wellness.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are committed to creating a supportive and compassionate environment where patients feel valued and
              empowered to take an active role in their recovery journey.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image
              src="/about-mission-image.jpg"
              alt="Physical therapist working with senior patient in home living room"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These principles guide everything we do at Parkland Physical Therapy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Patient-Centered Care",
                  description:
                    "We put our patients' needs first, creating individualized treatment plans that address their unique goals and challenges.",
                },
                {
                  name: "Clinical Excellence",
                  description:
                    "We are committed to providing the highest quality care based on the latest research and best practices in physical therapy.",
                },
                {
                  name: "Compassion & Respect",
                  description:
                    "We treat every patient with dignity, empathy, and respect, creating a supportive environment for healing.",
                },
                {
                  name: "Education & Empowerment",
                  description:
                    "We educate our patients about their conditions and provide them with the tools to take control of their health.",
                },
                {
                  name: "Integrity & Trust",
                  description:
                    "We maintain the highest ethical standards in all our interactions, building trust with our patients and community.",
                },
                {
                  name: "Continuous Improvement",
                  description:
                    "We are dedicated to ongoing professional development and constantly improving our services and patient outcomes.",
                },
              ].map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <CheckCircle className="h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* History section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 lg:items-center">
          <div className="lg:col-start-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Parkland Physical Therapy was founded in 2020 by Dr. Vincenzo Bombara, who had a vision of creating a
              clinic that combined clinical excellence with compassionate care.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              What started as a small practice with just two therapists has grown into a comprehensive physical therapy
              center serving the Parkland community and surrounding areas. Throughout our growth, we've maintained our
              commitment to personalized care and positive patient outcomes.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Today, our team of expert therapists continues to uphold Dr. Bombara's vision, helping thousands of
              patients recover from injuries, manage chronic conditions, and improve their quality of life.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <Image
              src="/about-history-image.jpg"
              alt="Physical therapist helping senior patient with balance exercises at home"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-teal-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your recovery journey?
            <br />
            Book an appointment today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button asChild className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
