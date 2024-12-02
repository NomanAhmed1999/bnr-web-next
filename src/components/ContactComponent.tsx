'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactComponent() {
  const [content, setContent] = useState({
    hero: {
      title: "Want to learn how we can help you out?",
      subtitle: "Contact Us 1-844-267-3601 (BNR-360-1)",
      description: "OR Fill the form below to Book a Demo"
    },
    contactBoxes: [
      {
        title: "Talk to sales",
        description: "Want more info or a custom solution? Contact our sales team to see how we can help.",
        email: "sales@bnr360.com",
        phone: "1-844-267-3601"
      },
      {
        title: "Need help?",
        description: "Need assistance? Submit a support request or reach out to our team—we're here to help.",
        email: "support@bnr360.com",
        phone: "1-844-267-3601"
      }
    ],
    formFields: [
      { id: 'firstName', label: 'First Name*', type: 'text', required: true },
      { id: 'lastName', label: 'Last Name*', type: 'text', required: true },
      { id: 'email', label: 'Email*', type: 'email', required: true },
      { id: 'phoneNumber', label: 'Phone Number', type: 'tel', required: false },
      { id: 'companyName', label: 'Company Name', type: 'text', required: false },
      { id: 'organizationType', label: 'Organization Type*', type: 'select', required: true, options: [
        { value: '1', label: 'Bidding and Recruiting' },
        { value: '2', label: 'Talent Acquisition' },
        { value: '3', label: 'Corporate HR' },
        { value: '4', label: 'Proposal Writing Firm' },
        { value: '5', label: 'Other' }
      ]},
      { id: 'requestType', label: 'Request Type*', type: 'select', required: true, options: [
        { value: 'Products', label: 'Products' },
        { value: 'Services', label: 'Services' },
        { value: 'Solutions', label: 'Solutions (Products & Services)' },
        { value: 'Customer Support', label: 'Customer Support' }
      ]},
      { id: 'country', label: 'Country', type: 'select', required: false, options: [] },
      { id: 'numUsers', label: 'Number of Users', type: 'number', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ],
    locations: [
      {
        country: "Canada",
        address: "343 Preston Street, Ottawa, Canada",
        phone: ["+1 613-691-8396", "+1 613-567-1875"],
        email: ["sales@bnr360.com", "support@bnr360.com"]
      },
      {
        country: "United States",
        address: "5539 Carrollton Court, Oakland Twp, MI, USA 48306",
        phone: ["+1 586-215-6282"],
        email: ["sales@bnr360.com", "support@bnr360.com"]
      },
      {
        country: "United Kingdom",
        address: "Unit 4, Smith House, Elmwood Avenue, Feltham, London, UK",
        phone: ["+44 7440132278"],
        email: ["sales@bnr360.com", "support@bnr360.com"]
      },
      {
        country: "Australia",
        address: "Suite 207, Level 2/45 Leakes Road, Laverton North VIC 3026, Australia",
        phone: ["+61 415 574 545"],
        email: ["sales@bnr360.com", "support@bnr360.com"]
      },
      {
        country: "New Zealand",
        address: "46 John Gray Street, Takanini, Auckland, New Zealand",
        phone: ["+64 22 400 6349"],
        email: ["sales@bnr360.com", "support@bnr360.com"]
      }
    ],
    faqs: [
      {
        question: "How can I get in touch with customer support?",
        answer: "You can reach our customer support team via email at support@bnr360.com or by using the contact form on this page. We're here to help with any inquiries or issues you may encounter."
      },
      {
        question: "What are your customer service hours?",
        answer: "Our customer service team is available from 9:00 AM to 04:30 PM EST, Monday through Friday. We strive to respond to all inquiries within 24 business hours."
      },
      {
        question: "Where is your company located?",
        answer: "We operate in multiple locations. For specific inquiries about our different offices, please use the contact form."
      },
      {
        question: "How do I provide feedback or a complaint?",
        answer: "Your feedback is important to us. Please use the contact form on this page to send us your thoughts or concerns. If you have a complaint, we will ensure it's addressed promptly and effectively."
      },
      {
        question: "Is there an FAQ section for product/service-related questions?",
        answer: "Yes, for more specific questions about our products/services, please visit our FAQ section of the relevant product page. There you'll find detailed answers to common queries."
      }
    ]
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    organizationType: '',
    requestType: '',
    country: '',
    numUsers: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // Fetch countries and update formFields
    const fetchCountries = async () => {
      // This is a placeholder. In a real application, you'd fetch this from an API
      const countries = ["Afghanistan", "Albania", "Algeria", /* ... other countries ... */ "Zimbabwe"]
      setContent(prevContent => ({
        ...prevContent,
        formFields: prevContent.formFields.map(field => 
          field.id === 'country' 
            ? {...field, options: countries.map(country => ({ value: country, label: country }))}
            : field
        )
      }))
    }

    fetchCountries()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)
    setIsSuccess(false)

    try {
      // This is where you'd normally send the data to your API
      // For now, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Simulating a successful submission
      setIsSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        organizationType: '',
        requestType: '',
        country: '',
        numUsers: '',
        description: ''
      })
    } catch (error) {
      setIsError(true)
      setErrorMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
  <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-start gap-8">
    {/* Hero Section */}
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-12">{content.hero.title}</h1>
      <p className="text-xl mb-2">{content.hero.subtitle}</p>
      <p className="text-lg">{content.hero.description}</p>
    </div>

    {/* Contact Boxes */}
    <div className="md:w-1/2">
    <div className="grid md:grid-cols-2">
  {content.contactBoxes.map((box, index) => (
    <div
      key={index}
      className={`bg-gray-100 text-black p-6 rounded-lg shadow-md transform transition duration-300 ${
        index % 2 === 0
          ? '[transform:perspective(50em)_rotateY(25deg)]'
          : '[transform:perspective(50em)_rotateY(-25deg)]'
      } hover:[transform:perspective(50em)_rotateY(0deg)]`}
    >
      <h3 className="text-2xl font-semibold mb-4">{box.title}</h3>
      <p className="mb-4">{box.description}</p>
      <p className="mb-2">
        <i className="fas fa-envelope mr-2"></i>
        <a
          href={`mailto:${box.email}`}
          className="text-blue-600 hover:underline"
        >
          {box.email}
        </a>
      </p>
      <p>
        <i className="fas fa-phone mr-2"></i>
        <a
          href={`tel:${box.phone}`}
          className="text-blue-600 hover:underline"
        >
          {box.phone}
        </a>
      </p>
    </div>
  ))}
</div>

    </div>
  </div>
</section>


      {/* Contact Form */}
      <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Let's Connect!</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block font-medium mb-1">
                First Name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block font-medium mb-1">
                Last Name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email*
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block font-medium mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organizationType" className="block font-medium mb-1">
                Organization Type*
              </label>
              <select
                id="organizationType"
                name="organizationType"
                value={formData.organizationType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              >
                <option value="">Select organization type</option>
                <option value="1">Bidding and Recruiting</option>
                <option value="2">Talent Acquisition</option>
                <option value="3">Corporate HR</option>
                <option value="4">Proposal Writing Firm</option>
                <option value="5">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="requestType" className="block font-medium mb-1">
                Request Type*
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              >
                <option value="">Select request type</option>
                <option value="Products">Products</option>
                <option value="Services">Services</option>
                <option value="Solutions">Solutions (Products & Services)</option>
                <option value="Customer Support">Customer Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="country" className="block font-medium mb-1">
                Country*
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              >
                <option value="">Select your country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="numUsers" className="block font-medium mb-1">
                Number of Users
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="numUsers"
                  name="numUsers"
                  value={formData.numUsers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter number of users"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Describe your request"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
      {/* <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Let's Connect!</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {content.formFields.map((field) => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                )}
              </div>
            ))}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {isSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for contacting us. We will get back to you soon.
            </div>
          )}
          {isError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Head Office!</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.3456616598014!2d-75.7094199!3d45.402368800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04345684397f%3A0x898d8588c7e60960!2s343%20Preston%20St%2C%20Ottawa%2C%20ON%20K1S%201N4%2C%20Canada!5e0!3m2!1sen!2s!4v1729014874881!5m2!1sen!2s"
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8
">
            {content.locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{location.country}</h3>
                <p className="mb-2">{location.address}</p>
                {location.phone.map((phone, phoneIndex) => (
                  <p key={phoneIndex} className="mb-1">{phone}</p>
                ))}
                {location.email.map((email, emailIndex) => (
                  <a key={emailIndex} href={`mailto:${email}`} className="block text-blue-600 hover:underline">{email}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}

