'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ApiEndPoint } from '@/lib/utils'
import SkeletonComponent from './SkeletonComponent'

export default function ProWinPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState({
    hero: {
      title: "Smart Recruitment and Proposal Management Solutions by BnR360",
      description: "Boost your hiring and proposal management efficiency with BnR360's smart solutions, with our tools for free!"
    },
    sections: [
      {
        id: "aichatbot",
        title: "Recruitment Chatbot",
        description: "Our recruitment chatbot takes care of the initial stages for you, handling candidate interactions 24/7, pre-screening applications, and passing only the most qualified candidates to your team.",
        features: [
          "Automated Pre-Screening: Set up custom questions and filters for job-specific criteria.",
          "Seamless ATS Integration: Automatically log candidate interactions in your ATS.",
          "Global Reach: Multilingual capabilities help you engage with candidates anywhere in the world.",
          "Real-Time Insights: Get data on candidate engagement and application trends to optimize your strategy."
        ],
        image: "/images/prowin-2.jpg"
      },
      {
        id: "resumeparse",
        title: "Resume Parser",
        description: "Instantly Organize and Sort Resumes. Skip manual resume sorting—our parser does it for you in seconds.",
        features: [
          {
            title: "Instant Data Extraction",
            description: "Automatically extract skills, experience, and qualifications from resumes into your system.",
            image: "/images/instantdata.png"
          },
          {
            title: "Advanced Matching",
            description: "Automatically match candidates to job requirements.",
            image: "/images/advancedmatching.png"
          },
          {
            title: "Multi-Format Support",
            description: "Supports PDF, DOCX, and TXT formats.",
            image: "/images/multi.png"
          },
          {
            title: "Customizable Fields",
            description: "Tailor resume parsing to your specific hiring needs.",
            image: "/images/customizedable.png"
          }
        ]
      },
      {
        id: "prowin",
        title: "ProWin Prep",
        description: "Managing joint ventures and complex bids doesn't have to be stressful. ProWin Prep provides everything you need to organize, collaborate, and deliver winning proposals—all in one easy-to-use platform.",
        features: [
          {
            title: "Real-Time Dashboards",
            description: "Track every proposal's progress with dynamic, visual dashboards."
          },
          {
            title: "Seamless Collaboration",
            description: "Share proposals with internal teams and external partners easily."
          },
          {
            title: "Sphere Integration",
            description: "Access document management and compliance tools to ensure quality proposals."
          },
          {
            title: "Scalable for All Projects",
            description: "Manage single bids or multi-partner proposals with ease."
          }
        ]
      }
    ],
    bundleOffer: {
      title: "Exclusive Bundle Offer: Recruitment Chatbot + Resume Parser + ProWin Prep",
      description: "Automate Your Entire Recruitment & Proposal Process. Save time, reduce manual tasks, and boost productivity by bundling these powerful solutions together. Handle recruitment and proposals faster and smarter.",
      discount: "💼 Save 15% when you bundle these products!"
    },
    bundle_offer: {
      title: "Why BnR360?",
      description: "Our solutions offer robust security features, seamless integration, and scalable packages to fit your needs, no matter the size of your business.",
      tagline: "🔒 Secure. Reliable. Scalable."
    }
  })


  
    
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const response = await fetch(`${ApiEndPoint}/prowin/data/`);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const result = await response.json();
        console.log(result);
        
        setContent(result);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


const myLoader=({src}: any)=>{
    return `${ApiEndPoint}/api${src}`;
  }

  if (loading) {
    return <SkeletonComponent />
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl mb-8">{content.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      {content.sections?.map((section: any, index) => (
        <section key={section.id} id={section.id} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{section.title}</h2>
            <p className="text-xl mb-12 text-center">{section.description}</p>

            {section.id === "aichatbot" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <ul className="space-y-4">
                    {section.features.map((feature: any, featureIndex: any) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image loader={myLoader} src={section.image} alt="AI Chatbot" width={500} height={300} className="rounded-lg shadow-xl" />
                </div>
              </div>
            )}

            {section.id === "resumeparse" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.features.map((feature: any, featureIndex: any) => (
                  <div key={featureIndex} className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <Image loader={myLoader} src={feature.image} alt={feature.title} width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section.id === "prowin" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.features.map((feature: any, featureIndex: any) => (
                  <div key={featureIndex} className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Bundle Offer Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{content.bundleOffer?.title}</h2>
          <p className="text-xl mb-4">{content.bundleOffer?.description}</p>
          <p className="text-2xl font-bold mb-8">{content.bundleOffer?.discount}</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Special Pricing →
          </Link>
        </div>
      </section>

      {/* Why BnR360 Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{content.bundle_offer.title}</h2>
          <p className="text-xl mb-4">{content.bundle_offer.description}</p>
          <p className="text-2xl font-bold  mb-8">{content.bundle_offer.tagline}</p>
          <div className="space-x-4">
            <Link href="/contact" className="gradient-bg text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Book a Demo
            </Link>
            <Link href="/contact" className="gradient-bg px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Navigation Buttons */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2 flex space-x-4">
        {content.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-300"
          >
            {section.title}
          </a>
        ))}
      </div>
    </main>
  )
}

