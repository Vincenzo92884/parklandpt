import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    body: "After my hip replacement, I was worried about regaining my independence. The Parkland PT team came to my home and created a personalized recovery plan. Now I can walk without pain and enjoy my garden again!",
    author: {
      name: "Margaret Johnson",
      role: "78 years old, Hip Replacement Patient",
      imageUrl: "/senior-woman-testimonial.png",
    },
    rating: 5,
  },
  {
    body: "I've dealt with chronic back pain for years. The therapists at Parkland not only helped reduce my pain but taught me techniques to prevent future issues. I can finally play with my grandkids again!",
    author: {
      name: "Robert Chen",
      role: "72 years old, Chronic Back Pain Patient",
      imageUrl: "/senior-man-testimonial.png",
    },
    rating: 5,
  },
  {
    body: "As someone with Parkinson's, the LSVT BIG therapy has been life-changing. My movements are more controlled, and I've regained confidence in my daily activities. The convenience of in-home therapy made all the difference.",
    author: {
      name: "Eleanor Williams",
      role: "69 years old, Parkinson's Disease Patient",
      imageUrl: "/senior-woman-testimonial-2.png",
    },
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Patient Success Stories</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our senior patients about their recovery journeys and experiences with our care.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-gray-600">{testimonial.body}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-x-4">
                  <Image
                    src={testimonial.author.imageUrl || "/placeholder.svg"}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.author.role}</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
