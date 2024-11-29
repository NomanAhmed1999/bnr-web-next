'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className=" top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-auto">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/BnR360.webp" alt="BnR360 Logo" width={120} height={68} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavDropdown
              title="Product"
              links={[
                { href: "#", label: "Sphere" },
                { href: "#", label: "GenRapide" },
              ]}
              isActive={activeDropdown === 'Product'}
              onToggle={() => setActiveDropdown(activeDropdown === 'Product' ? null : 'Product')}
            />
            <NavDropdown
              title="Services"
              links={[
                {
                  href: "#",
                  label: "Consulting",
                  description: "Tailored advice and strategies to achieve your business goals.",
                },
                {
                  href: "#",
                  label: "Support",
                  description: "24/7 assistance to ensure seamless operations.",
                },
              ]}
              isActive={activeDropdown === 'Services'}
              onToggle={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
            />
            <NavDropdown
              title="Pricing"
              links={[
                { href: "/pricing", label: "Solutions" },
                { href: "/pricing", label: "Services" },
                { href: "/pricing", label: "Pay Per Need" },
                { href: "/pricing", label: "Supporting Product" },
                { href: "/pricing", label: "GenRapide" },
                { href: "/pricing", label: "Sphere" },
              ]}
              isActive={activeDropdown === 'Pricing'}
              onToggle={() => setActiveDropdown(activeDropdown === 'Pricing' ? null : 'Pricing')}
            />
            <NavDropdown
              title="Resources"
              links={[
                { href: "#", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/growth", label: "Press Release" },
                { href: "/case-study", label: "Case Study" },
              ]}
              isActive={activeDropdown === 'Resources'}
              onToggle={() => setActiveDropdown(activeDropdown === 'Resources' ? null : 'Resources')}
            />
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center">
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
              Sign in
            </button>
            <Link href="/contact" className="ml-4 bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link href="https://sphere.bnr360.com/signup-trial" className="ml-4 border border-black text-black px-4 py-2 rounded-md text-sm font-medium">
              Start for free
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full bg-black bg-opacity-50 z-40`}
        onClick={() => setIsMenuOpen(false)} 
      >
        <div className="flex flex-col space-y-4 p-4 bg-white shadow-md z-50" onClick={(e) => e.stopPropagation()}>
          <NavDropdown
            title="Product"
            links={[
              { href: "#", label: "Sphere" },
              { href: "#", label: "GenRapide" },
            ]}
            isActive={activeDropdown === 'Product'}
            onToggle={() => setActiveDropdown(activeDropdown === 'Product' ? null : 'Product')}
          />
          <NavDropdown
            title="Services"
            links={[
              { href: "#", label: "Consulting" },
              { href: "#", label: "Support" },
            ]}
            isActive={activeDropdown === 'Services'}
            onToggle={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
          />
          <NavDropdown
            title="Pricing"
            links={[
              { href: "/pricing", label: "Solutions" },
              { href: "/pricing", label: "Services" },
              { href: "/pricing", label: "Pay Per Need" },
            ]}
            isActive={activeDropdown === 'Pricing'}
            onToggle={() => setActiveDropdown(activeDropdown === 'Pricing' ? null : 'Pricing')}
          />
          <NavDropdown
            title="Resources"
            links={[
              { href: "#", label: "Blog" },
              { href: "/contact", label: "Contact" },
              { href: "/growth", label: "Press Release" },
            ]}
            isActive={activeDropdown === 'Resources'}
            onToggle={() => setActiveDropdown(activeDropdown === 'Resources' ? null : 'Resources')}
          />

          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
              Sign in
            </button>
            <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link href="https://sphere.bnr360.com/signup-trial" className="border border-black text-black px-4 py-2 rounded-md text-sm font-medium">
              Start for free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavDropdown({
  title,
  links,
  isActive,
  onToggle,
}: {
  title: string;
  links: { href: string; label: string; description?: string }[];
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative group">
      {/* Dropdown Toggle Button */}
      <button
        onClick={onToggle}
        className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        {title}
      </button>

      {/* Full-Width Dropdown */}
      {isActive && (
        <div className="fixed top-16 left-0 w-screen bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex justify-center px-4 py-6">
            <div className="flex space-x-8 w-full max-w-6xl">
              {/* Links Section */}
              <div className="flex w-full flex-col md:flex-row">
                {links.map((link, index) => (
                  <div key={index} className="w-full md:w-1/2 mb-4">
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                    >
                      <span className="font-medium">{link.label}</span>
                      {link.description && (
                        <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

