'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ApiEndPoint } from '@/lib/utils'
import SkeletonComponent from './SkeletonComponent'

interface Content {
  hero: {
    title: string
    description: string
    image: string
  }
  launchAgency: {
    title: string
    description: string
    services: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  readyToScale: {
    title: string
    description: string
    points: Array<{
      title: string
      description: string
    }>
    image: string
  }
  governmentContracts: {
    title: string
    points: Array<{
      title: string
      description: string
    }>
    image: string
  }
  customizeSuccess: {
    title: string
    description: string
  }
}

export default function SolutionPage() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState<Content>({
    hero: {
      title: "BnR360 Solutions: Your Growth Partner",
      description: "At BnR360, we believe in making business growth simple. Whether you're just starting out or ready to scale, we've got the right tools and expertise to get you there. From managing bids and recruitment to providing strategic support, we ensure you stay ahead of the competition. Our easy-to-use AI-powered solutions streamline your operations, allowing you to focus on growth.",
      image: "/images/Mobile.webp"
    },
    launchAgency: {
      title: "Launch Your Agency with Confidence",
      description: "Starting a new agency? We've got everything you need to hit the ground running—minus the headaches.",
      services: [
        {
          icon: "⚙️",
          title: "Complete Setup",
          description: "We'll build your recruitment and bidding processes from scratch, so you don't have to."
        },
        {
          icon: "📋",
          title: "Hands-On Training",
          description: "We train your team to navigate daily operations smoothly—whether it's finding top talent or submitting winning bids."
        },
        {
          icon: "🧑‍💼",
          title: "We've Got Your Back",
          description: "Full-time recruiters, expert bid writers, and admin support are at your service. Let us handle the backend while you focus on building relationships and closing deals."
        },
        {
          icon: "🌟",
          title: "Why Choose This Package?",
          description: "Because starting strong is half the battle. We help you get the foundation right so you can focus on what matters—growing your business."
        }
      ]
    },
    readyToScale: {
      title: "Ready to Scale? Let's Grow Together!",
      description: "Is your talent acquisition and RFP management agency bursting at the seams? That's a good problem to have! With our Expansion & Growth Package, you'll be able to handle more business without sacrificing quality or burning out your team.",
      points: [
        {
          title: "Smarter Processes",
          description: "We optimize what you're already doing, making your workflows faster and smoother."
        },
        {
          title: "Build Your Dream Team",
          description: "With additional recruiters and bid writers, you'll have the resources to take on bigger, more complex projects."
        },
        {
          title: "Strategic Support",
          description: "Monthly check-ins with our experts ensure you're always moving in the right direction."
        },
        {
          title: "Why Choose This Package?",
          description: "You've put in the hard work, now it's time to scale. We help you grow strategically, so you don't lose control or quality."
        }
      ],
      image: "/images/smartprocess.jpg"
    },
    governmentContracts: {
      title: "Government Contracts Made Easy",
      points: [
        {
          title: "Compliance, Handled",
          description: "We set up your systems to meet strict government requirements, so you don't have to worry about missing any details."
        },
        {
          title: "Specialized Support",
          description: "Our dedicated government bid writer and recruiter know exactly what it takes to win those contracts."
        },
        {
          title: "We'll Manage the Paperwork",
          description: "From documentation to compliance management, we've got it covered."
        },
        {
          title: "Why Choose This Package?",
          description: "Government contracts are tricky, but they're worth it. We make sure your agency is perfectly positioned to compete and win."
        }
      ],
      image: "/images/contract.jpg"
    },
    customizeSuccess: {
      title: "Customize Your Success",
      description: "We know one size doesn't fit all. That's why we offer custom solutions for agencies that need a little bit more—or less. Whether you need an extra recruiter, more administrative support, or expert bid writers, we'll build a package that's right for you."
    }
  })
    
 
    
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const response = await fetch(`${ApiEndPoint}/solution/data/`);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const result = await response.json();
        
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="wrap-banner gradient-bg to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">{content.hero?.title}</h2>
                <p className="mb-6">{content.hero?.description}</p>
                <Link href="/pricing" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                  Check Pricing
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image loader={myLoader} src={content.hero?.image} alt="BnR360 Service Image" width={400} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">{content.launchAgency?.title}</h1>
            <p className="text-center mb-12 max-w-2xl mx-auto">{content.launchAgency?.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {content.launchAgency?.services?.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>
                  <p className='text-center text-gray-500 text-lg'>{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Let's Get Started →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4">{content.readyToScale?.title}</h1>
            <p className="text-center mb-12 max-w-2xl mx-auto">{content.readyToScale?.description}</p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                {content.readyToScale?.points?.map((point, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{point.title}</h2>
                    <p>{point.description}</p>
                  </div>
                ))}
                <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                  Let's Talk Growth →
                </Link>
              </div>

              <div className="md:w-1/2">
                <Image loader={myLoader} src={content?.readyToScale?.image} alt="Growth Image" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8"><span className="text-blue-600">{content?.governmentContracts?.title}</span></h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <ul className="space-y-4">
                  {content.governmentContracts?.points?.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span><strong>{point?.title}:</strong> {point?.description}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 mt-8">
                  See How We Can Help →
                </Link>
              </div>

              <div className="md:w-1/2">
                <Image loader={myLoader} src={content?.governmentContracts?.image} alt="Government Contracts Image" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-200 text-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">{content.customizeSuccess?.title}</h1>
            <p className="mb-8 max-w-2xl mx-auto">
              {content.customizeSuccess?.description}
            </p>
            <Link href="/contact" className="inline-block gradient-bg text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              Start Building Your Custom Plan →
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

