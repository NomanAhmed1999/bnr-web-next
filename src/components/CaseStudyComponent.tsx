'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudyComponent() {
  const [content, setContent] = useState({
    hero: {
      title: "Optimizing Operational Efficiency BnR360's Strategic Partnership with",
      subtitle: "Discover how AI-powered solutions streamlined operations and reduced costs for Zernam, a leading staffing firm in Canada."
    },
    introduction: {
      title: "Transforming Recruitment with AI-Powered Efficiency",
      paragraphs: [
        "BnR360 is revolutionizing the staffing industry with its AI-powered solutions, Sphere and GenRapide. These tools significantly enhance operational efficiency and deliver measurable results.",
        "Zernam, a leading IT staffing firm in Canada, used BnR360's technology to reduce costs by 60% and streamline recruitment and bidding processes."
      ]
    },
    challenges: {
      title: "Challenges Faced",
      description: "Zernam encountered several operational challenges, which were hindering their efficiency:",
      list: [
        "High costs due to maintaining extensive staffing resources.",
        "Absence of customized software solutions tailored to their unique needs.",
        "Inefficiencies caused by unorganized data management systems."
      ]
    },
    approach: {
      title: "BnR360's Approach",
      operationalSupport: {
        title: "Operational Support",
        description: "BnR360 deployed expert resources to boost Zernam's capabilities in:",
        list: [
          "Recruiters: Enhancing talent acquisition",
          "Bid Writers: Streamlining bid preparation",
          "Managers: Optimizing overall operations management"
        ]
      },
      processImprovement: {
        title: "Process Improvement",
        description: "BnR360 introduced key improvements such as:",
        list: [
          "Customized RACI matrix tailored to Zernam's operational needs",
          "Sphere for data organization and tracking across modules",
          "GenRapide for streamlined bid processing, reducing time to access resources"
        ]
      }
    },
    results: {
      title: "Results Achieved",
      description: "The collaboration between BnR360 and Zernam resulted in impressive outcomes:",
      items: [
        {
          title: "Cost Efficiency",
          description: "Achieved a 60% reduction in operational costs through streamlined processes and efficient resource management."
        },
        {
          title: "Enhanced Recruitment Turnaround",
          description: "Significantly reduced the recruitment cycle, enabling quicker staff deployment."
        },
        {
          title: "Improved Process Visibility",
          description: "Sphere provided insights into procedural errors for timely corrections, enhancing real-time data visibility and organized storage to improve decision-making and operational transparency."
        }
      ]
    },
    testimonial: {
      quote: "Sphere makes it so much easier to organize and track information across different categories in one unified system. Everything related to a bid is in one place, and it's much simpler to track client and professional contacts. Compared to Bullhorn, Sphere fills those gaps better—it's easier to use, has a more intuitive interface, a stronger search engine, and offers more customization.",
      author: "Kyle Bentley, Proposal Writer"
    },
    conclusion: {
      text: "The partnership between BnR360 and Zernam exemplifies the transformative potential of integrating AI-driven solutions in the staffing and recruitment industry. The substantial improvements in operational efficiency and cost-effectiveness set a benchmark for future collaborations."
    }
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{background: 'linear-gradient(180deg, #439cd9, #37376b)'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mx-auto py-10 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold">{content.hero.title}</h1>
            <p className="text-xl">{content.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{content.introduction.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            {content.introduction.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src="/images/challenge-faced.jpg" alt="Challenges Faced" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">{content.challenges.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">{content.challenges.description}</p>
              <ul className="list-disc pl-5 text-gray-700 list-none">
                {content.challenges.list.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16  bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{content.approach.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">{content.approach.operationalSupport.title}</h3>
              <p className="text-gray-600 mb-4">{content.approach.operationalSupport.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 list-none">
                {content.approach.operationalSupport.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">{content.approach.processImprovement.title}</h3>
              <p className="text-gray-600 mb-4">{content.approach.processImprovement.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 list-none">
                {content.approach.processImprovement.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{content.results.title}</h2>
          <p className="text-lg leading-relaxed mb-12">{content.results.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.results.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 text-white max-w-6xl mx-auto rounded-lg" style={{ backgroundColor: '#002a5e'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl italic mb-4">"{content.testimonial.quote}"</p>
            <p className="font-semibold">- {content.testimonial.author}</p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">{content.conclusion.text}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

