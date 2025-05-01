import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, Brain, Users, Stethoscope, Sparkles } from "lucide-react"

const services = [
  {
    name: "Orthopedic Therapy",
    description: "Treatment for musculoskeletal injuries, joint pain, and post-surgical rehabilitation.",
    icon: Activity,
  },
  {
    name: "LSVT PD Specialist",
    description: "Specialized treatment for Parkinson's Disease patients to improve movement and quality of life.",
    icon: Sparkles,
  },
  {
    name: "Neurological Rehabilitation",
    description: "Therapy for patients with neurological conditions like stroke, MS, or Parkinson's.",
    icon: Brain,
  },
  {
    name: "Geriatric Physical Therapy",
    description: "Focused care for age-related conditions to improve mobility and quality of life.",
    icon: Users,
  },
  {
    name: "Cardiovascular Rehabilitation",
    description: "Programs to improve cardiovascular health and endurance after cardiac events.",
    icon: Heart,
  },
  {
    name: "Preventive Care",
    description: "Assessments and programs designed to prevent injuries and promote wellness.",
    icon: Stethoscope,
  },
]

export default function Services() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of physical therapy services tailored to your specific needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 rounded-full bg-teal-600/10 p-2 w-10 h-10 flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                </div>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
