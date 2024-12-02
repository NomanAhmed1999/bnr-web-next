'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuRadioGroupDemo } from './SignInDropdown'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [menu, setMenu] = useState([
    {
      name: 'Sphere',
      description: 'All-in-one platform for recruitment, CRM, and ERP',
      link: '/sphere',
      menuItems: [
        {
          name: 'CRM',
          list: [
            { name: 'Applicant Tracking', link: '/sphere' },
            { name: 'Partner and Client Tracking', link: '/sphere' },
            { name: 'Security Clearances', link: '/sphere' }
          ]
        },
        {
          name: 'ERP',
          list: [
            { name: 'Job Tracking', link: '/sphere' },
            { name: 'Corporate Reference', link: '/sphere' },
            { name: 'ProWin Prep', link: '/sphere' }
          ]
        },
        {
          name: 'Data Analytics',
          list: [
            { name: 'Reporting and Dashboard', link: '/sphere' }
          ]
        },
      ]
    },
    {
      name: 'GenRapide',
      description: 'AI tools for bid prep, resume tailoring, and RFP management',
      link: '/genrapide',
      menuItems: [
        {
          name: 'ProReshape',
          list: [
            { name: 'AI-enhanced resume tailoring', link: '/genrapide' }
          ]
        },
        {
          name: 'RFP Decoder',
          list: [
            { name: 'Automated RFP data extraction', link: '/genrapide' }
          ]
        },
        {
          name: 'RFP List',
          list: [
            { name: 'Organized RFP tracking', link: '/genrapide' }
          ]
        },
        {
          name: 'Dashboard',
          list: [
            { name: 'Real-time insights for bids and proposals', link: '/genrapide' }
          ]
        }
      ]
    },
    {
      name: 'Supporting Products',
      description: 'AI chatbots and parsers for recruitment and bids',
      link: '/prowin',
      menuItems: [
        {
          name: 'AI Recruitment Chatbot',
          list: [
            { name: 'Automated candidate engagement', link: '/prowin' }
          ]
        },
        {
          name: 'Resume Parser',
          list: [
            { name: 'Extracts and organizes resume data', link: '/prowin' }
          ]
        },
        {
          name: 'ProWin Prep',
          list: [
            { name: 'Bid prep with partner seamless collaboration', link: '/prowin' }
          ]
        },
        {
          name: 'Exclusive Bundle',
          list: [
            { name: 'Combo of all supporting products', link: '/prowin' }
          ]
        }
      ]
    }
  ])

  const [menuSecond, setMenuSecond] = useState([
    {
      name: 'Services',
      description: 'Flexible plans with dedicated resources for Recruitment Process Outsourcing and bid management',
      link: '/service',
      menuItems: [
        {
          name: 'Bid and RFP Management',
          list: [
            { name: 'Outsource bid prep, prioritization, and tracking.', link: '/service' }
          ]
        },
        {
          name: 'Recruitment and Resource Management',
          list: [
            { name: 'Experts help with hiring, contracts, and HR.', link: '/service' }
          ]
        },
        {
          name: 'Operational and Back Office Support',
          list: [
            { name: 'Experts handle your finances, reporting, and IT.', link: '/service' }
          ]
        },
      ]
    },
    {
      name: 'Solution',
      description: 'Turnkey packages for launching and scaling',
      link: '/solution',
      menuItems: [
        {
          name: 'Agency Launch',
          list: [
            { name: 'Setup for new recruitment agencies', link: '/solution' }
          ]
        },
        {
          name: 'Expansion & Scale',
          list: [
            { name: 'Grow with advanced tools.', link: '/solution' }
          ]
        },
        {
          name: 'Government RFP Mastery',
          list: [
            { name: 'Win complex government bids', link: '/solution' }
          ]
        }
      ]
    }
  ])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const renderDesktopDropdown = (items: any[], isSecondMenu: boolean = false) => (
    <div className="hidden group-hover:block fixed left-5 w-[calc(100vw-40px)] max-w-[1300px] pb-20 bg-white rounded-lg shadow-xl">
      <div className="flex p-4">
        <div className="w-1/4">
          {items.map((item, index) => (
            <Link href={item.link}
              key={index}
              onMouseOver={() => setActiveMenuIndex(index)}
              className={`block p-4 m-4 ${activeMenuIndex === index ? 'bg-gray-100' : 'hover:bg-gray-100'} rounded-lg group`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{item.name}</span>
                <svg className="w-4 h-4 text-[#37376b]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[10px] mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
        <div className="w-3/4 pl-8 bg-gray-50 p-4 rounded-md border border-gray-200">
          <div className={`grid ${isSecondMenu ? 'grid-cols-3' : 'grid-cols-4'} gap-8`}>
            {items[activeMenuIndex > items.length - 1 ? items.length - 1 : activeMenuIndex].menuItems.map((item: any) => (
              <div key={item.name} className="text-center">
                <h3 className="text-xs font-extrabold mb-4">{item.name}</h3>
                <div className='border-b border-gray-300 mb-2'></div>
                <ul className="space-y-2">
                  {item.list.map((subItem: any) => (
                    <li key={subItem.name}>
                      <Link href={subItem.link} className="text-xs hover:text-blue-600">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderMobileDropdown = (items: any[]) => (
    <div className="pl-4 space-y-2">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold text-sm">{item.name}</h3>
          <p className="text-xs text-gray-600 mb-2">{item.description}</p>
          {item.menuItems.map((menuItem: any, menuIndex: number) => (
            <div key={menuIndex} className="mb-2">
              <h4 className="font-semibold text-xs">{menuItem.name}</h4>
              <ul className="pl-2">
                {menuItem.list.map((subItem: any, listIndex: number) => (
                  <li key={listIndex}>
                    <Link href={subItem.link} className="text-xs hover:text-blue-600">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <nav className="shadow-sm fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/BnR360.webp" alt="BnR360 Logo" width={120} height={68} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ms-20">
            {['Product', 'Services', 'Pricing', 'Resources'].map((item) => (
              <div key={item} className="relative group">
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center space-x-2 text-gray-700 p-4"
                >
                  <span className="text-sm">{item}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {item === 'Product' && renderDesktopDropdown(menu)}
                {item === 'Services' && renderDesktopDropdown(menuSecond, true)}
                {item === 'Pricing' && (
                  <div className="hidden group-hover:block fixed left-5 w-[calc(100vw-40px)] max-w-[1300px] pb-20 bg-white rounded-lg shadow-xl">
                    <div className="flex pt-10 justify-center items-center gap-10 flex-wrap">
                      {['Sphere', 'GenRapide', 'Solution', 'Services', 'Supporting Products', 'Pay Per Need'].map((pricingItem) => (
                        <Link key={pricingItem} href="/pricing" className='bg-gray-200 text-black rounded-md text-lg px-8 py-5 hover:bg-gradient-to-b hover:from-[#439cd9] hover:to-[#37376b] hover:text-white transition-all duration-500'>
                          {pricingItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {item === 'Resources' && (
                  <div className="hidden group-hover:block fixed left-5 w-[calc(100vw-40px)] max-w-[1300px] pb-20 bg-white rounded-lg shadow-xl">
                    <div className="flex pt-10 justify-center items-center gap-10 flex-wrap">
                      {[{name: 'Blogs', link: '/blog'}, {name: 'Customer Stories', link: '/case-study'}, {name: 'Press Release', link: '/growth'}, {name: 'Contact Us', link: '/contact'}].map((resourceItem) => (
                        <Link key={resourceItem.name} href={resourceItem.link} className='bg-gray-200 text-black rounded-md text-lg px-8 py-5 hover:bg-gradient-to-b hover:from-[#439cd9] hover:to-[#37376b] hover:text-white transition-all duration-500'>
                          {resourceItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenuRadioGroupDemo />
            {/* <button className="text-sm">Sign in</button> */}
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
          {['Product', 'Services', 'Pricing', 'Resources'].map((item) => (
            <div key={item}>
              <button
                onClick={() => toggleDropdown(item)}
                className="flex items-center justify-between w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <span>{item}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === item ? 'transform rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === item && (
                <div className="mt-2">
                  {item === 'Product' && renderMobileDropdown(menu)}
                  {item === 'Services' && renderMobileDropdown(menuSecond)}
                  {item === 'Pricing' && (
                    <div className="pl-4 space-y-2">
                      {['Sphere', 'GenRapide', 'Solution', 'Services', 'Supporting Products', 'Pay Per Need'].map((pricingItem) => (
                        <Link key={pricingItem} href="/" className="block text-sm hover:text-blue-600">
                          {pricingItem}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item === 'Resources' && (
                    <div className="pl-4 space-y-2">
                      {['Blogs', 'Customer Stories', 'Press Release', 'Contact Us'].map((resourceItem) => (
                        <Link key={resourceItem} href="/" className="block text-sm hover:text-blue-600">
                          {resourceItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
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

