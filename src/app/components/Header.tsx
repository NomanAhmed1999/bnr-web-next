'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/BnR360.webp" alt="BnR360 Logo" width={120} height={68} />
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <NavLink href="#" title="Product" />
            <NavLink href="#" title="Services" />
            <NavLink href="#" title="Pricing" />
            <NavLink href="#" title="Resources" />
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-white text-black border border-black px-4 py-2 rounded-md text-sm font-medium">
              Sign in
            </button>
            <Link href="/contact" className="ml-4 bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link href="https://sphere.bnr360.com/signup-trial" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Start for free
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#" title="Product" />
            <MobileNavLink href="#" title="Services" />
            <MobileNavLink href="#" title="Pricing" />
            <MobileNavLink href="#" title="Resources" />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="bg-white text-black border border-black px-4 py-2 rounded-md text-sm font-medium w-full mb-2">
                Sign in
              </button>
            </div>
            <div className="flex items-center px-5">
              <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium w-full mb-2">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center px-5">
              <Link href="https://sphere.bnr360.com/signup-trial" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
      {title}
    </Link>
  )
}

function MobileNavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
      {title}
    </Link>
  )
}

