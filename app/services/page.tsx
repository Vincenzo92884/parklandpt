import { Activity, Heart, Brain, Users, Stethoscope, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    name: "Orthopedic Therapy",
    description: "Treatment for musculoskeletal injuries, joint pain, and post-surgical rehabilitation.",
    longDescription:
      "Our orthopedic physical therapy services focus on treating conditions affecting the musculoskeletal system, including joints, muscles, bones, ligaments, and tendons. Whether you're recovering from surgery, dealing with chronic pain, or healing from an injury, our therapists will develop a personalized treatment plan to help you regain function and mobility.",
    icon: Activity,
    image: "/service-orthopedic.jpg",
  },
  {
    name: "LSVT PD Specialist",
    description: "Specialized treatment for Parkinson's Disease patients to improve movement and quality of life.",
    longDescription:
      "Our LSVT BIG certified therapists provide specialized treatment for individuals with Parkinson's Disease. This research-backed approach focuses on improving amplitude of movement to address the unique movement challenges associated with Parkinson's. The program helps patients improve their walking, balance, and overall functional mobility, leading to greater independence and quality of life.",
    icon: Sparkles,
    image: "/service-parkinsons.jpg",
  },
  {
    name: "Neurological Rehabilitation",
    description: "Therapy for patients with neurological conditions like stroke, MS, or Parkinson's.",
    longDescription:
      "Our neurological rehabilitation services help patients with conditions such as stroke, multiple sclerosis, Parkinson's disease, and traumatic brain injuries. We focus on improving movement, balance, coordination, and daily function through specialized exercises and techniques tailored to each patient's specific neurological condition.",
    icon: Brain,
    image: "/service-neurological.jpg",
  },
  {
    name: "Geriatric Physical Therapy",
    description: "Focused care for age-related conditions to improve mobility and quality of life.",
    longDescription:
      "Our geriatric physical therapy program addresses the unique needs of older adults. We help manage conditions like arthritis, osteoporosis, balance disorders, and general deconditioning that can occur with aging. Our goal is to improve mobility, reduce pain, prevent falls, and help seniors maintain their independence and quality of life.",
    icon: Users,
    image: "/service-geriatric.jpg",
  },
  {
    name: "Cardiovascular Rehabilitation",
    description: "Programs to improve cardiovascular health and endurance after cardiac events.",
    longDescription:
      "Our cardiovascular rehabilitation program is designed for patients recovering from heart attacks, heart surgery, or those managing heart disease. We provide monitored exercise programs, education on heart-healthy living, and strategies to reduce risk factors. Our goal is to improve your cardiovascular function, increase endurance, and enhance your overall quality of life.",
    icon: Heart,
    image: "/service-cardiovascular.jpg",
  },
  {
    name: "Preventive Care",
    description: "Assessments and programs designed to prevent injuries and promote wellness.",
    longDescription:
      "Our preventive care services focus on identifying potential issues before they become problems. We offer comprehensive assessments of posture, movement patterns, and home environment ergonomics. Based on these assessments, we develop personalized programs to address weaknesses, improve strength and flexibility, and teach proper body mechanics to prevent injuries.",
    icon: Stethoscope,
    image: "/service-preventive.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive physical therapy services tailored to your specific needs and goals.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-24 py-12 sm:py-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`lg:flex lg:items-center lg:gap-x-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                  <div className="mb-4 rounded-full bg-teal-600/10 p-2 w-10 h-10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">{service.name}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">{service.longDescription}</p>
                  <div className="mt-8">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="/appointment">
                        Book an Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
