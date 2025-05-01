import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <span className="rounded-full bg-teal-600/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-600 ring-1 ring-inset ring-teal-600/10">
                  Expert Physical Therapy
                </span>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Professional Therapy in the Comfort of Your Home
              </h1>
              <p className="mt-4 text-xl font-semibold text-teal-600">Parkland PT, a Quality In Home Therapy Service</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Parkland PT, we bring expert physical therapy directly to you. Our dedicated therapists provide
                personalized care and evidence-based treatments in your home environment, helping you regain mobility,
                reduce pain, and return to the activities you love.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/appointment">Book an Appointment</Link>
                </Button>
                <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                  Explore Our Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="relative overflow-hidden rounded-xl shadow-xl lg:right-0 lg:h-full">
            <Image
              src="/home-therapy-senior.png"
              alt="Physical therapist helping a senior patient at home"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
