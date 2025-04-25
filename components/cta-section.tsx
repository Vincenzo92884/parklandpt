import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-teal-800 to-emerald-700 text-white py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Mobility and Quality of Life?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Schedule a consultation today and take the first step toward better health and independence with our
          specialized physical therapy services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-800 hover:bg-gray-100 border-2 border-teal-100 font-medium"
          >
            <a href="tel:9545931735" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>Call (954) 593-1735</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/20 font-medium"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Online</span>
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-teal-100">
          Medicare Part B and self-pay accepted. Serving Parkland, Coral Springs, Deerfield Beach, Coconut Creek, Boca
          Raton, and Pompano Beach.
        </p>
      </div>
    </section>
  )
}
