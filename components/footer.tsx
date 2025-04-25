import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-16 w-16 bg-white rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parkland-PTTt-1-CGBMoeogRsCTefiHkZTQWY5qP1ePCy.png"
                  alt="Parkland PT Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-2xl font-bold">Parkland PT</span>
            </div>
            <p className="text-gray-300 text-sm">
              A division of Quality In Home Therapy, providing specialized physical therapy services for seniors and
              Parkinson's Disease patients.
            </p>
            <div className="flex space-x-4" aria-label="Social media">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2" aria-label="Quick links navigation">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white hover-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white hover-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white hover-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white hover-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white hover-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2" aria-label="Services navigation">
              <li>
                <Link href="/services#geriatric" className="text-gray-300 hover:text-white hover-underline">
                  Geriatric Physical Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#parkinsons" className="text-gray-300 hover:text-white hover-underline">
                  Parkinson's Disease Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#balance" className="text-gray-300 hover:text-white hover-underline">
                  Balance & Fall Prevention
                </Link>
              </li>
              <li>
                <Link href="/services#rehabilitation" className="text-gray-300 hover:text-white hover-underline">
                  Post-Surgery Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/services#mobility" className="text-gray-300 hover:text-white hover-underline">
                  Mobility Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3" aria-label="Contact information">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5" aria-hidden="true" />
                <span>
                  <a href="tel:9545931735" className="hover:text-teal-400 transition-colors">
                    (954) 593-1735
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5" aria-hidden="true" />
                <span>
                  <a href="mailto:v.bombara@qualityinhometherapy.com" className="hover:text-teal-400 transition-colors">
                    v.bombara@qualityinhometherapy.com
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">
                  Serving Parkland, Coral Springs, Deerfield Beach, Coconut Creek, Boca Raton, and Pompano Beach
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="https://qualityinhometherapy.com"
              className="text-gray-300 hover:text-white text-sm hover-underline"
            >
              Visit Quality In Home Therapy
            </Link>
            <div className="relative h-14 w-14">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCOC-Logo-Member-300x300-1-3sBxB72RDcrqFnM35QXKaRqpkQ3XaY.png"
                alt="Parkland Chamber of Commerce Member"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Parkland PT. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <Link href="/privacy" className="hover:text-white hover-underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white hover-underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
