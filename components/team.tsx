import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Note: Replace this with your actual bio from qualityinhometherapy.com
const parklandPTBio = `Parkland PT is a quality in-home therapy service dedicated to providing exceptional physical therapy care in the comfort of your own home. Our licensed therapists specialize in geriatric care, neurological rehabilitation, and LSVT BIG treatment for Parkinson's Disease.

With years of experience serving the Parkland community, we understand the unique challenges seniors face and are committed to helping our patients maintain their independence and improve their quality of life through personalized treatment plans.

Our in-home approach eliminates transportation barriers and allows us to create therapy programs tailored to your specific home environment, making recovery more comfortable and effective.`

export default function Team() {
  return (
    <div id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Parkland PT</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dedicated to providing exceptional in-home physical therapy care for seniors.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="text-center">
            <CardContent className="pt-10">
              <div className="flex justify-center mb-8">
                <Image src="/parkland-pt-logo.png" alt="Parkland PT" width={300} height={180} className="h-auto w-64" />
              </div>
              <div className="text-left space-y-4">
                {parklandPTBio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Serving the Parkland community with compassionate, professional care.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
