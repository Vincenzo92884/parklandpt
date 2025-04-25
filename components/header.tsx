"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Parkland PT Home">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parkland-PTTt-1-CGBMoeogRsCTefiHkZTQWY5qP1ePCy.png"
                alt="Parkland PT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <span className="text-2xl font-bold text-teal-800">Parkland PT</span>
              <span className="text-sm block text-gray-600">A Quality In Home Therapy Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
            <Link href="/" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              FAQ
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-700 font-medium hover-underline">
              Contact
            </Link>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-teal-700 hover:bg-teal-800 button-hover">
              <a href="tel:9545931735" className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(954) 593-1735</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t" aria-label="Mobile Navigation">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-teal-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-teal-700 hover:bg-teal-800 w-full">
              <a href="tel:9545931735" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(954) 593-1735</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
