import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions or ready to start your recovery journey? Reach out to our team today.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to answer your questions and help you schedule an appointment. Reach out to us using any of the
              methods below.
            </p>

            <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-teal-600" aria-hidden="true" />
                </dt>
                <dd>
                  We come to you
                  <br />
                  In-home therapy service
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-teal-600" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-teal-600" href="tel:+19545931735">
                    (954) 593-1735
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-teal-600" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-teal-600" href="mailto:v.bombara@qualityinhometherapy.com">
                    v.bombara@qualityinhometherapy.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <Clock className="h-7 w-6 text-teal-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p>Monday - Friday: 7am - 7pm</p>
                  <p>Saturday: 8am - 2pm</p>
                  <p>Sunday: Closed</p>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">In-Home Therapy Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-teal-700">
                  <li>Convenient therapy in the comfort of your own home</li>
                  <li>No transportation concerns or waiting rooms</li>
                  <li>Personalized treatment in your actual living environment</li>
                  <li>Reduced risk of exposure to illness</li>
                  <li>Greater flexibility in scheduling</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
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
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" required />
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
    </div>
  )
}
