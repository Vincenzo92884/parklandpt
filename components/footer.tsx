"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Twitter, ExternalLink } from "lucide-react"
import Logo from "@/components/logo"

const navigation = {
  main: [
    { name: "Home", href: "/#top" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
  related: [
    { name: "Dr. Vincenzo Bombara", href: "https://vincenzobombara.com" },
    { name: "Quality In-Home Therapy", href: "https://qualityinhometherapy.com" },
  ],
}

export default function Footer() {
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
    }
  }

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <Logo />
          <p className="mt-2 text-sm font-medium text-teal-600">A Quality In Home Therapy Service</p>
        </div>
        <nav className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-4" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <h3 className="text-sm font-semibold text-center mb-4">Related Websites</h3>
          <div className="flex justify-center gap-6">
            {navigation.related.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-teal-600 hover:text-teal-800 flex items-center"
              >
                {item.name}
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Parkland Physical Therapy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
