'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('sphere')
  const [isYearly, setIsYearly] = useState(false)

  const content = {
    hero: {
      title: "Plans that fit your need",
      description: "No matter the size of your business, we have a plan to streamline your bidding and resourcing processes. Choose from core features to advanced capabilities – find the perfect fit for your company with BnR360.",
      image: "/images/Pricing Monitor.webp"
    },
    intro: {
      title: "Discover Plans For You",
      description: "BnR360 offers flexible pricing that puts AI-powered efficiency within reach. Pay only for what you need. Discover our plans and unlock your business's full potential."
    },
    tabs: ['sphere', 'genrapid', 'solution', 'services', 'payPerNeed'],
    sphere: {
      logo: "/images/spheres.webp",
      plans: [
        {
          name: "14 days free trial",
          price: "$0.00",
          description: "14 days free trial",
          cta: { text: "Start Now", link: "https://sphere.bnr360.com/signup" },
          features: [
            { name: "Applicants", value: "✔ 1000" },
            { name: "Jobs", value: "✔ 2000" },
            { name: "Companies", value: "✘" },
            { name: "Corporate References", value: "✘" },
            { name: "Security Clearances", value: "✘" },
            { name: "Contracts", value: "✘" },
            { name: "File Storage", value: "✔ 2GB" }
          ]
        },
        {
          name: "Standard",
          price: { monthly: "$29.99/mo", yearly: "$26.99/mo" },
          description: "Affordable for small teams",
          cta: { text: "Buy Now", link: "https://sphere.bnr360.com/signup" },
          features: [
            { name: "Applicants", value: "✔ 2000" },
            { name: "Jobs", value: "✔ 500" },
            { name: "Companies", value: "✔ 50" },
            { name: "Corporate References", value: "✔ 100" },
            { name: "Security Clearances", value: "✔ 100" },
            { name: "Contracts", value: "✔ 100" },
            { name: "File Storage", value: "✔ 1GB" }
          ]
        },
        {
          name: "Pro",
          price: { monthly: "$99.99/mo", yearly: "$89.99/mo" },
          description: "Advanced features for large teams",
          cta: { text: "Buy Now", link: "https://sphere.bnr360.com/signup" },
          features: [
            { name: "Applicants", value: "✔ Unlimited" },
            { name: "Jobs", value: "✔ Unlimited" },
            { name: "Companies", value: "✔ 500" },
            { name: "Corporate References", value: "✔ 50" },
            { name: "Security Clearances", value: "✔ 500" },
            { name: "Contracts", value: "✔ 50" },
            { name: "File Storage", value: "✔ 5TB" }
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Contact sales for pricing",
          cta: { text: "Talk sales", link: "/contact" },
          features: [
            { name: "Applicants", value: "✔ Unlimited" },
            { name: "Jobs", value: "✔ Unlimited" },
            { name: "Companies", value: "✔ Unlimited" },
            { name: "Corporate References", value: "✔ Unlimited" },
            { name: "Security Clearances", value: "✔ Unlimited" },
            { name: "Contracts", value: "✔ Unlimited" },
            { name: "File Storage", value: "✔ As per requirement" }
          ]
        }
      ]
    },
    genrapid: {
      logo: "/images/GenRapide Logo-new.webp",
      plans: [
        {
          name: "Basic",
          cta: { text: "Talk to sales", link: "/contact" },
          features: [
            { name: "Tokens", value: "✔ 1,000,000 Tokens" },
            { name: "Documents", value: "✔ 15 Documents" },
            { name: "Storage", value: "✔ 9.3 GB Storage" },
            { name: "Users", value: "✔ 10 Users" }
          ]
        },
        {
          name: "Standard",
          cta: { text: "Talk to sales", link: "/contact" },
          features: [
            { name: "Tokens", value: "✔ 1,000,000 Tokens" },
            { name: "Documents", value: "✔ 30 Documents" },
            { name: "Storage", value: "✔ 977 MB Storage" },
            { name: "Users", value: "✔ 20 Users" }
          ]
        },
        {
          name: "Premium",
          cta: { text: "Talk to sales", link: "/contact" },
          features: [
            { name: "Tokens", value: "✔ Unlimited Tokens" },
            { name: "Documents", value: "✔ Unlimited Documents" },
            { name: "Storage", value: "✔ 5 TB Storage" },
            { name: "Users", value: "✔ Unlimited Users" }
          ]
        }
      ]
    },
    solution: {
      title: "BnR360 Specialized solution packages",
      plans: [
        {
          name: "Agency Launch",
          price: "$2,599/month",
          setupFee: "$4,999",
          description: "Start your agency strong",
          cta: { text: "Get Started", link: "/contact" },
          features: [
            { name: "Recruiters (Full-Time)", value: "✔ 1" },
            { name: "Bid Writers (Full-Time)", value: "✔ 1" },
            { name: "Admin Support", value: "✔ Part-Time" },
            { name: "GenRapide AI Access", value: "✔ Basic" },
            { name: "Sphere ERP/CRM Access", value: "✔ Basic" },
            { name: "Monthly Strategy Calls", value: "✔ 1 Call" },
            { name: "Custom Integration", value: "✘" },
            { name: "Priority Support", value: "✘" },
            { name: "Compliance Setup", value: "✘" }
          ]
        },
        {
          name: "Expansion & Scale",
          price: "$5,699/month",
          setupFee: "$7,499",
          description: "Grow your operations",
          cta: { text: "Get Started", link: "/contact" },
          features: [
            { name: "Recruiters (Full-Time)", value: "✔ 2" },
            { name: "Bid Writers (Full-Time)", value: "✔ 2" },
            { name: "Admin Support", value: "✔ Expanded Full-Time" },
            { name: "GenRapide AI Access", value: "✔ Full Access" },
            { name: "Sphere ERP/CRM Access", value: "✔ Full ERP Integration" },
            { name: "Monthly Strategy Calls", value: "✔ Monthly Sessions" },
            { name: "Custom Integration", value: "✔ Advanced" },
            { name: "Priority Support", value: "✔" },
            { name: "Compliance Setup", value: "✘" }
          ]
        },
        {
          name: "Government RFP Mastery",
          price: "$2,999/month",
          setupFee: "$9,999",
          description: "Master government contracts",
          cta: { text: "Get Started", link: "/contact" },
          features: [
            { name: "Recruiters (Full-Time)", value: "✔ 1 (Govt Specialist)" },
            { name: "Bid Writers (Full-Time)", value: "✔ 1 (Govt Proposals/RFP Writer)" },
            { name: "Admin Support", value: "✔ Full-Time Admin" },
            { name: "GenRapide AI Access", value: "✔ Full Access (Govt Focus)" },
            { name: "Sphere ERP/CRM Access", value: "✔ Full ERP Integration" },
            { name: "Monthly Strategy Calls", value: "✔ Priority Strategy Support" },
            { name: "Custom Integration", value: "✔ Custom Integration" },
            { name: "Priority Support", value: "✔ Priority Support" },
            { name: "Compliance Setup", value: "✔ Government Compliance" }
          ]
        }
      ]
    },
    services: {
      title: "BnR 360 Services Subscription Plans",
      subtitle: "Steal Deal: 10% off on Free Trial for the first 3 months if converted within 30 days.",
      plans: [
        {
          name: "Free Trial",
          price: "Free",
          description: "Looking for the perfect",
          cta: { text: "Free Trial", link: "/contact" },
          features: [
            { name: "Recruiter", value: "✔ 1 (10 hours total)" },
            { name: "Bid/Resume Writer", value: "✔ 1 (5 hours total)" },
            { name: "Admin Support", value: "✔ 5 Hours" },
            { name: "Consultation Call", value: "✔ 1 Free" },
            { name: "Reports", value: "✔ Basic Progress Report" },
            { name: "GenRapide AI Access", value: "✔ 1 AI-generated bid (Optional)" },
            { name: "Sphere ERP/CRM Access", value: "✘" },
            { name: "Priority Support", value: "✘" },
            { name: "Customer Success Manager", value: "✘" },
            { name: "Add-ons/ Premiums", value: "✘" }
          ]
        },
        {
          name: "Basic Plan",
          price: "$2,499/month",
          description: "Perfect for Small Agencies",
          cta: { text: "$2,499/mo", link: "/contact" },
          features: [
            { name: "Recruiter", value: "✔ 1 Full-Time" },
            { name: "Bid/Resume Writer", value: "✔ 1 Full-Time" },
            { name: "Admin Support", value: "✔ 20 Hours" },
            { name: "Consultation Call", value: "✔ Monthly Strategy Call" },
            { name: "Reports", value: "✔ Basic Reports" },
            { name: "GenRapide AI Access", value: "✘" },
            { name: "Sphere ERP/CRM Access", value: "✘" },
            { name: "Priority Support", value: "✘" },
            { name: "Customer Success Manager", value: "✔" },
            { name: "Add-ons/ Premiums", value: "✔" }
          ]
        },
        {
          name: "Professional Plan",
          price: "$5,499/month",
          description: "Ideal for Growing Businesses",
          cta: { text: "$5,499/mo", link: "/contact" },
          features: [
            { name: "Recruiter", value: "✔ 1 Full-Time" },
            { name: "Bid/Resume Writer", value: "✔ 2 Full-Time" },
            { name: "Admin Support", value: "✔ 50 Hours" },
            { name: "Consultation Call", value: "✔ Weekly Strategy Call" },
            { name: "Reports", value: "✔ Priority Reports" },
            { name: "GenRapide AI Access", value: "✔ Basic Access" },
            { name: "Sphere ERP/CRM Access", value: "✔" },
            { name: "Priority Support", value: "✔ (for Bids/Resumes)" },
            { name: "Customer Success Manager", value: "✔" },
            { name: "Add-ons/ Premiums", value: "✔" }
          ]
        },
        {
          name: "Enterprise Plan",
          price: "Custom Pricing",
          description: "Tailored for Large Agencies",
          cta: { text: "Talk Sales", link: "/contact" },
          features: [
            { name: "Recruiter", value: "✔ 3+ Full-Time" },
            { name: "Bid/Resume Writer", value: "✔ 3+ Full-Time" },
            { name: "Admin Support", value: "✔ Dedicated Admin Team (Unlimited)" },
            { name: "Consultation Call", value: "✔ Weekly/Custom as required" },
            { name: "Reports", value: "✔ Advanced Reports" },
            { name: "GenRapide AI Access", value: "✔ Full Access" },
            { name: "Sphere ERP/CRM Access", value: "✔ Full Access" },
            { name: "Priority Support", value: "✔ 24/7 Priority Support" },
            { name: "Customer Success Manager", value: "✔" },
            { name: "Add-ons/ Premiums", value: "✔ Customizable based on needs" }
          ]
        }
      ]
    },
    payPerNeed: {
      title: "Pay Per Need",
      subtitle: "Add on to your basic and professional plan",
      plans: [
        {
          name: "Recruiter",
          price: "$1,499/month",
          image: "/images/recruiment.png",
          cta: { text: "Contact Sales", link: "/contact" }
        },
        {
          name: "Bid/Resume Writer",
          price: "$1,299/month",
          image: "/images/resume.png",
          cta: { text: "Contact Sales", link: "/contact" }
        },
        {
          name: "Admin Support",
          price: "$999/month",
          image: "/images/support.png",
          cta: { text: "Contact Sales", link: "/contact" }
        }
      ]
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 
className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
              <p className="text-lg mb-8">{content.hero.description}</p>
              <Link href="#checkpricing" className="border-2 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Check pricing
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={content.hero.image}
                alt="Pricing Monitor"
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="checkpricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{content.intro.title}</h2>
          <p className="text-xl text-center mb-12">{content.intro.description}</p>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {content.tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 m-2 rounded-md ${activeTab === tab ? 'gradient-bg text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Pricing Toggle (only for Sphere) */}
          {activeTab === 'sphere' && (
            <div className="flex justify-center items-center mb-8">
              <span className={`mr-2 ${!isYearly ? 'font-bold' : ''}`}>Monthly</span>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <span className={`ml-2 ${isYearly ? 'font-bold' : ''}`}>Yearly</span>
            </div>
          )}

          {/* Pricing Cards */}
          {(activeTab === 'sphere' || activeTab === 'genrapid' || activeTab === 'solution' || activeTab === 'services') && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[activeTab].plans.map((plan: any, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  {typeof plan.price === 'object' ? (
                    <p className="text-3xl font-bold mb-4">
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </p>
                  ) : (
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  )}
                  {plan.setupFee && <p className="mb-4">+ {plan.setupFee} Setup Fee</p>}
                  <p className="mb-6">{plan.description}</p>
                  <Link
                    href={plan.cta.link}
                    className="block w-full text-center gradient-bg text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    {plan.cta.text}
                  </Link>
                  <ul className="mt-6 space-y-2">
                    {plan.features && plan.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center">
                      <span className="mr-2">
                        {feature.value.startsWith('✔') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </span>
                      {feature.name}: {feature.value.replace(/^[✔✘]\s/, '')}
                    </li>
                    
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Pay Per Need Section */}
          {activeTab === 'payPerNeed' && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-center mb-4">{content.payPerNeed.title}</h2>
              <p className="text-xl text-center mb-8">{content.payPerNeed.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.payPerNeed.plans.map((plan, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      width={200}
                      height={200}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-4">{plan.price}</p>
                    <Link
                      href={plan.cta.link}
                      className="gradient-bg text-white px-6 py-2 rounded-md transition duration-300"
                    >
                      {plan.cta.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

