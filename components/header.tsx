"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Logo from "@/components/logo"

const navigation = [
  { name: "Home", href: "/#top" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle smooth scrolling for hash links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the current page
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault()
      const targetId = href.substring(2)

      if (targetId === "top") {
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        // Scroll to element
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for header
            behavior: "smooth",
          })
        }
      }

      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo className="-m-1.5" />
        </div>

        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button asChild className="w-full">
                      <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-teal-600 mr-2" />
            <span className="text-sm font-semibold">(954) 593-1735</span>
          </div>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
