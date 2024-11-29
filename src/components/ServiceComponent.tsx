'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceComponent() {
  const [content, setContent] = useState({
    hero: {
      title: "BnR360 as a Service",
      description: "Supercharge your bidding and hiring success with BnR360. We handle everything from crafting winning bids to finding the perfect candidates – all under one roof. Experience the power of a streamlined process driven by expert strategies.",
      image: "/images/Mobile.webp"
    },
    coreServices: [
      {
        title: "Bid and RFP Management",
        description: "We offer comprehensive support to enhance your success in public and private sector bids:",
        points: [
          "Bid and RFP Preparation: Our expert team helps prepare compelling, accurate responses to bids and RFPs.",
          "Bid Screening & Prioritization: Screening your daily intake of RFPs and prioritizing based on existing workload and your company's strength.",
          "Quality Assurance: We conduct thorough reviews to ensure accuracy and alignment with client requirements.",
          "Custom Reporting: Stay informed with detailed bid submission status reports and performance metrics."
        ],
        image: "/images/Bid and RFP Management (GIF).gif"
      },
      {
        title: "Recruitment and Resource Management",
        description: "Our recruitment services provide qualified candidates and resource management support:",
        points: [
          "Talent Sourcing: Find the best candidates suited to your project needs.",
          "Resume Writing and Resource Management: We manage resumes, contracts, and the placement of resources.",
          "Administrative Support: Let us handle key HR tasks like timesheet follow-ups, employee pay management, and contract administration."
        ],
        image: "/images/Talent Sourcing (GIF).gif"
      },
      {
        title: "Operational and Back Office Support",
        description: "We manage your back-office functions, so you can focus on growing your business:",
        points: [
          "Accounts Receivable: Timely follow-ups on receivables to improve cash flow.",
          "Financial and Corporate Reporting: Transparent financial and operational reporting ensures clarity across all functions.",
          "IT and Communication Infrastructure: No need to worry about hardware or software costs for resources we provide—we cover it all."
        ],
        image: "/images/Operational and Back Office Support(GIF).gif"
      }
    ],
    flexiblePricing: {
      title: "Flexible Pricing Plans",
      description: "At BnR360, we offer flexible subscription plans that fit agencies of any size. Whether you're just starting or managing a large team, our plans provide the tools and support to help your business grow.",
      image: "/images/serv ices 1.png"
    },
    payPerNeed: [
      { title: "Recruiter", price: "$1,499/month", image: "/images/recruiment.png" },
      { title: "Bid/Resume Writer", price: "$1,299/month", image: "/images/resume.png" },
      { title: "Admin Support", price: "$999/month", image: "/images/support.png" }
    ],
    whyChooseBnR360: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/244/244171.png",
        title: "Proven Cost Savings",
        description: "By outsourcing your recruitment, bid preparation, and administrative tasks to BnR360, you can reduce operational costs by up to 50%, allowing you to focus on strategic growth."
      },
      {
        icon: "https://cdn-icons-png.freepik.com/256/8183/8183320.png?semt=ais_hybrid",
        title: "Expertise in Bid Management and Recruitment",
        description: "With decades of experience, our team helps businesses stay competitive by streamlining processes and ensuring compliance across government and private sector bids."
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1934/1934026.png",
        title: "Full-Service Operational Support",
        description: "From resource management to corporate reporting, we provide end-to-end support that enhances business efficiency while maintaining the highest standards of security and confidentiality."
      }
    ],
    specialization: [
      { title: "Government & Public Sector", image: "/images/Government and public sector.png", description: "Ensure compliance and maximize success in government bids." },
      { title: "Professional Services", image: "/images/professional services.png", description: "Full-service recruitment and bid management for consulting firms and agencies." },
      { title: "Healthcare", image: "/images/health care.png", description: "Simplify recruitment and bidding for specialized sectors like healthcare and executive search." },
      { title: "Nonprofit & Light Industrial", image: "/images/Nonprofit & Light Industrial.png", description: "Streamline your back-office functions to focus on growth and efficiency." },
      { title: "IT", image: "/images/IT.png", description: "Solutions tailored to IT industry needs." },
      { title: "Construction & Facility Management", image: "/images/Construction & Facility Management.png", description: "Support construction projects and facility management services." }
    ]
  })

  const myLoader=({src}: any)=>{
    return src;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
              <p className="text-lg mb-8">{content.hero.description}</p>
              <div className="space-x-4">
                <Link href="/solution" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                  Solutions
                </Link>
                <Link href="#payPerNeed" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition duration-300">
                  Add Ons
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={content.hero.image}
                alt="BnR360 Service Image"
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core <span className="text-blue-600">Services</span></h2>
          
          {content.coreServices.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}>
              <div className="md:w-1/2 mb-10 md:mb-0 md:px-10">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flexible Pricing Plans Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{content.flexiblePricing.title}</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            {content.flexiblePricing.description}
          </p>
          <div className="flex justify-center">
            <Image 
              src={content.flexiblePricing.image}
              alt="Pricing Plans"
              width={800}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Pay Per Need Section */}
      <section id="payPerNeed" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pay Per Need</h2>
          <p className="text-center mb-12">Add on to your basic and professional plan</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.payPerNeed.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BnR360 Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose <span className="text-blue-600">BnR360</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyChooseBnR360.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6">
                <Image
                 loader={myLoader} 
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our <span className="text-blue-600">Specialization</span></h2>
          <p className="text-center mb-12">If your business is serving these industries, our services are well trained and tailor made to support you:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.specialization.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

