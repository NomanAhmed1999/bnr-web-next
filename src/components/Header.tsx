'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('home_tab1')

  return (
    <nav className="shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ms-xl-5 ms-sm-5 ms-md-5 me-md-5 me-lg-5">
            <Link href="/">
              <Image src="/images/BnR360.webp" alt="BnR360 Logo" width={120} height={68} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm">Product</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="hidden group-hover:block absolute left-0 mt-2 w-[1200px] -ml-[400px] bg-white rounded-lg shadow-lg">
                <div className="flex p-4">
                  {/* Left Sidebar */}
                  <div className="w-1/4 border-r pr-8">
                    <Link href="/sphere" className="block p-4 hover:bg-gray-50 rounded-lg group">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Sphere</span>
                        <svg className="w-4 h-4 text-[#37376b]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">All-in-one platform for recruitment, CRM, and ERP</p>
                    </Link>

                    <Link href="/genrapide" className="block p-4 hover:bg-gray-50 rounded-lg group">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">GenRapide</span>
                        <svg className="w-4 h-4 text-[#37376b]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">AI tools for bid prep, resume tailoring, and RFP management</p>
                    </Link>

                    <Link href="/supporting-products" className="block p-4 hover:bg-gray-50 rounded-lg group">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Supporting Products</span>
                        <svg className="w-4 h-4 text-[#37376b]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">AI chatbots and parsers for recruitment and bids</p>
                    </Link>
                  </div>

                  {/* Right Content */}
                  <div className="w-3/4 pl-8">
                    <div className="grid grid-cols-3 gap-8">
                      {/* CRM Column */}
                      <div className="text-center">
                        <h3 className="text-base font-medium mb-4">CRM</h3>
                        <ul className="space-y-2">
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Applicant Tracking</Link></li>
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Partner and Client Tracking</Link></li>
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Security Management</Link></li>
                        </ul>
                      </div>

                      {/* ERP Column */}
                      <div className="text-center">
                        <h3 className="text-base font-medium mb-4">ERP</h3>
                        <ul className="space-y-2">
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Job Tracking</Link></li>
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Corporate Reference</Link></li>
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">ProWin Prep</Link></li>
                        </ul>
                      </div>

                      {/* Data Analytics Column */}
                      <div className="text-center">
                        <h3 className="text-base font-medium mb-4">Data Analytics</h3>
                        <ul className="space-y-2">
                          <li><Link href="/sphere" className="text-sm hover:text-blue-600">Reporting and Dashboard</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm">Services</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Pricing */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm">Pricing</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm">Resources</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm">Sign in</button>
            <Link 
              href="/contact"
              className="px-4 py-2 text-sm text-white bg-black rounded hover:bg-gray-800"
            >
              Contact Us
            </Link>
            <Link 
              href="https://sphere.bnr360.com/signup-trial"
              className="px-4 py-2 text-sm text-black border border-black rounded hover:bg-gray-50"
            >
              Start for free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-3 space-y-1 bg-white">
          <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">
            Product
          </button>
          <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">
            Services
          </button>
          <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">
            Pricing
          </button>
          <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">
            Resources
          </button>
          <div className="pt-4 border-t border-gray-200">
            <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md">
              Sign in
            </button>
            <Link
              href="/contact"
              className="block w-full mt-2 px-3 py-2 text-base text-white bg-black rounded-md hover:bg-gray-800 text-center"
            >
              Contact Us
            </Link>
            <Link
              href="https://sphere.bnr360.com/signup-trial"
              className="block w-full mt-2 px-3 py-2 text-base text-black border border-black rounded-md hover:bg-gray-50 text-center"
            >
              Start for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

