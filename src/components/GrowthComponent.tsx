'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GrowthComponent() {
  const [content] = useState({
    hero: {
      title: "BnR360 Welcomes New Customer Growth: Zernam and Contract Community OnBoard",
      date: "Ottawa, ON – April 30, 2024",
      description: "BnR360, a leading provider of AI-driven solutions for bid management and resource optimization, is pleased to announce significant customer growth with two notable additions. Both Zernam and Contract Community have successfully integrated our Sphere ATS (Applicant Tracking System) into their operations, each utilizing the platform with 20 active users."
    },
    sections: [
      {
        title: "Customer Growth",
        content: "This increase in customer volumes demonstrates the value and scalability of BnR360's product suite, specifically tailored to meet the dynamic needs of government contractors and consulting agencies. Sphere's capabilities streamline recruitment, proposal preparation, and resource management, all while cutting operational costs by up to 50%."
      },
      {
        title: "Quote",
        content: "\"Our focus is on delivering tailored solutions that not only meet our clients' immediate needs but also allow them to expand and improve their operational efficiency,\" said Aashaz Syed, BnR360's CIO.",
        isQuote: true
      },
      {
        title: "Continued Commitment",
        content: "As BnR360 continues its growth trajectory, the company remains committed to supporting its clients with cutting-edge tools and services, helping them achieve measurable success in the sectors they serve.\n\nFor more information about BnR360's product offerings and how we help clients enhance their bid management and recruitment processes, visit www.bnr360.com.",
        hasLink: true
      },
      {
        title: "About BnR360",
        content: "BnR360 offers turn-key solutions that combine AI-powered tools like Sphere and GenRapide, designed to optimize resource management, recruitment, and RFP responses for recruiting and bidding agencies. With a focus on government contractors and consulting agencies, BnR360 helps businesses reduce costs while ensuring privacy and confidentiality."
      }
    ]
  })

  return (
    <main className="min-h-screen bg-gradient-to-l from-[rgba(78,84,200,0.1)] to-transparent">
      <div className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <div className=" mx-auto p-6 rounded-lg py-20">
            <h1 className="text-3xl font-bold mb-4">{content.hero.title}</h1>
            <div className="w-16 h-1 bg-blue-600 mb-4"></div>
            <p className="text-gray-500 italic mb-4">{content.hero.date}</p>
            <p className="text-base">{content.hero.description}</p>
          </div>
        </section>

        {content.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <div className=" mx-auto p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              {section.isQuote ? (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-lg p-4 rounded">
                  <p>{section.content}</p>
                </blockquote>
              ) : (
                <div>
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base mb-4">
                      {section.hasLink && pIndex === 1 ? (
                        <>
                          {paragraph.split('www.bnr360.com')[0]}
                          <Link href="https://www.bnr360.com" className="text-blue-500 hover:underline">
                            www.bnr360.com
                          </Link>
                          {paragraph.split('www.bnr360.com')[1]}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

