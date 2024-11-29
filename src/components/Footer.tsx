import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>343 Preston Street, Ottawa, Canada</p>
            <p>Email: <a href="mailto:info@bnr360.com" className="hover:text-indigo-400">info@bnr360.com</a></p>
            <p>Phone: <a href="tel:1-844-267-3601" className="hover:text-indigo-400">1-844-267-3601</a></p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul>
              <li><Link href="/pages/genrapide.html" className="hover:text-indigo-400">GeneRapide</Link></li>
              <li><Link href="/pages/sphere.html" className="hover:text-indigo-400">Sphere</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li><Link href="/pages/service.html" className="hover:text-indigo-400">TurnKey Solutions</Link></li>
              <li><Link href="/pages/service.html" className="hover:text-indigo-400">Enterprise</Link></li>
              <li><Link href="/pages/service.html" className="hover:text-indigo-400">Pay Per Need</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li><Link href="/pages/contact.html" className="hover:text-indigo-400">Contact</Link></li>
              <li><Link href="/pages/blogs.html" className="hover:text-indigo-400">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 BnR360. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/people/BnR360/100093720805116/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/BnR360" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaTwitter />
            </a>
            <a href="https://ca.linkedin.com/company/bnr360" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/bnr360.official/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

