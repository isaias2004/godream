"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 rounded-md font-sans text-transform: uppercase">
              Quienes somos
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 rounded-md font-sans text-transform: uppercase"
            >
              Servicio
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 rounded-md font-sans text-transform: uppercase"
            >
              Contacto
            </Link>
          </nav>
          {/* Mobile menu button */}
          <div className="flex md:hidden justify-items-end">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-sans text-transform: uppercase"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-sans text-transform: uppercase"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-sans text-transform: uppercase"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-sans text-transform: uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
