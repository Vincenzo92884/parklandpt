import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactCTA() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or ready to start your recovery journey? Reach out to our team today.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Location</h3>
                  <p className="mt-2 text-gray-600">
                    We come to you
                    <br />
                    In-home therapy service
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                  <p className="mt-2 text-gray-600">(954) 593-1735</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">v.bombara@qualityinhometherapy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Hours</h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Friday: 7am - 7pm
                    <br />
                    Saturday: 8am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" name="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" name="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
