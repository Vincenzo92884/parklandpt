import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RelatedSites() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Related Websites</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn more about Dr. Vincenzo Bombara and Quality In-Home Therapy services.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Dr. Vincenzo Bombara</CardTitle>
              <CardDescription>
                Learn more about Dr. Bombara's credentials, experience, and professional background.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/dr-bombara-headshot.png"
                    alt="Dr. Vincenzo Bombara"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dr. Vincenzo Bombara, DPT, GCS, MBA</h3>
                  <p className="text-sm text-gray-500">Board-Certified Geriatric Specialist</p>
                </div>
              </div>
              <p className="text-gray-600">
                Visit Dr. Bombara's personal website to learn about his qualifications, professional experience, and
                specialized training in geriatric physical therapy.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href="https://vincenzobombara.com" target="_blank" rel="noopener noreferrer">
                  Visit vincenzobombara.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Quality In-Home Therapy</CardTitle>
              <CardDescription>
                Explore the full range of in-home therapy services offered throughout South Florida.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/quality-therapy-logo.png"
                    alt="Quality In-Home Therapy"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quality In-Home Therapy</h3>
                  <p className="text-sm text-gray-500">Professional In-Home Therapy Services</p>
                </div>
              </div>
              <p className="text-gray-600">
                Quality In-Home Therapy provides exceptional physical therapy services in the comfort of your own home
                throughout South Florida. Visit the main website to learn about all available services.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href="https://qualityinhometherapy.com" target="_blank" rel="noopener noreferrer">
                  Visit qualityinhometherapy.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
