"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <CardTitle className="text-center">Appointment Request Received</CardTitle>
            <CardDescription className="text-center">
              Thank you for scheduling with Parkland Physical Therapy. We'll contact you shortly to confirm your
              appointment.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="/">Return to Home</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book an Appointment</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Fill out the form below to request an appointment with one of our physical therapists.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Request</CardTitle>
            <CardDescription>Please provide your information and preferred appointment details.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Appointment Details</h3>
                <div className="space-y-2">
                  <Label>Service Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orthopedic">Orthopedic Therapy</SelectItem>
                      <SelectItem value="sports">Sports Rehabilitation</SelectItem>
                      <SelectItem value="neurological">Neurological Rehabilitation</SelectItem>
                      <SelectItem value="geriatric">Geriatric Physical Therapy</SelectItem>
                      <SelectItem value="cardiovascular">Cardiovascular Rehabilitation</SelectItem>
                      <SelectItem value="preventive">Preventive Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (7am - 11am)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                      <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Is this your first visit?</Label>
                  <RadioGroup defaultValue="no" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="first-visit-yes" />
                      <Label htmlFor="first-visit-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="first-visit-no" />
                      <Label htmlFor="first-visit-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for visit</Label>
                  <Textarea
                    id="reason"
                    placeholder="Please describe your condition or reason for seeking physical therapy"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Submit Request
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
