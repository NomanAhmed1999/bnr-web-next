'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function GenRapidePage() {
  const [content] = useState({
    hero: {
      title: "GenRapide: Revolutionize Your Bidding Process",
      description: "Harness the power of Generative AI to master RFP triaging and bid submissions. GenRapide is your gateway to excellence in both government and private sectors, streamlining every step from proposal to performance. Get ahead with smarter bidding.",
      cta: {
        text: "Subscribe Now",
        link: "/pricing"
      },
      image: "/images/genrapide banner.webp"
    },
    resume: {
      title: "Your resumes have never been this perfect",
      description: "ProReshape goes beyond editing. Our AI analyzes your resume against specific job requirements, ensuring your skills and projects perfectly match what employers need. Quickly compare resumes to RFPs – ProReshape does the heavy lifting so you can focus on landing the job.",
      image: "/images/resume.webp"
    },
    rfp: {
      title: "Decode RFP's instantly",
      description: "RFPDecoder transforms tedious analysis into a task of mere seconds. Upload, analyze, and extract key RFP details instantly with our AI-powered module, setting the stage for successful bids.",
      images: [
        "/images/Layer1.webp",
        "/images/Layer.webp",
        "/images/layer3.webp"
      ]
    },
    insights: {
      title: "Get Instant Insights",
      description: "Assign roles, manage your team, and harness the capabilities of ProReshape and RFPDecoder. Keep a close eye on your AI credits and storage usage with our intuitive dashboard and enjoy the flexibility to modify your plan as your business evolves. With GenRapide, every insight is an opportunity for growth.",
      cta: {
        text: "Subscribe Now",
        link: "https://genrapide.bnr360.com/signup"
      },
      image: "/images/instant.webp"
    },
    modules: {
      title: "Modules",
      description: "Maximize your bidding and staffing potential with GenRapide's suite of powerful AI modules. Designed for intuitive operation, each module equips you with the tools for success in a competitive landscape.",
      items: [
        {
          title: "ProReshape",
          description: "Craft resumes that resonate. ProReshape fine-tunes each CV to match job requirements precisely, offering a bespoke touch to your staffing solutions."
        },
        {
          title: "RFPDecoder",
          description: "Simplify complex RFPs within seconds. Our RFPDecoder parses lengthy documents, extracts crucial data, and presents actionable information swiftly and efficiently."
        },
        {
          title: "RFP List",
          description: "Stay organized and informed. RFP List archives your triaged documents and keeps a detailed record of all activities, ensuring nothing slips through the cracks."
        }
      ]
    },
    youtube: {
      title: "Explore BnR360 on YouTube",
      description: "From detailed tutorials to insights on our innovative web applications, our videos are designed to enhance your understanding and utilization of our AI-powered solutions. Subscribe and stay updated with the latest tips, trends, and features that BnR360 has to offer.",
      image: "/images/YouTube Tablet.webp",
      cta: {
        text: "Visit our Youtube Channel",
        link: "https://www.youtube.com/playlist?list=PL0Lr6iGPvwM-X8qVXZETr1NdMz9FBnehm"
      }
    },
    blog: {
      title: "GenRapide: Reshape, Decode, Triumph",
      description: "Simplify, streamline, succeed – discover GenRapide's powerful tools. Unlock efficiency with our AI-powered platform: ProReshape: Craft winning resumes tailored to specific job requirements. RFPDecoder: Easily understand complex RFPs for smarter bids. RFP List: Stay organized with all your bid documents in one place.",
      cta: {
        text: "Visit Our Blog",
        link: "./article4.html"
      },
      image: "/images/refs.webp"
    },
    faqs: [
      {
        question: "How does GenRapide revolutionize recruitment?",
        answer: "GenRapide leverages Generative AI to streamline recruitment by customizing resumes to job requirements and generating project descriptions, significantly reducing time and effort."
      },
      {
        question: "What benefits does the ProReshape module offer?",
        answer: "ProReshape automates resume customization, aligning candidates' experiences with job vacancies, and formulates project descriptions that match employers' needs, enhancing talent acquisition."
      },
      {
        question: "How does RFPDecoder enhance RFP document handling?",
        answer: "RFPDecoder swiftly extracts and organizes data from RFP documents, enabling prompt and accurate responses to business opportunities."
      },
      {
        question: "Can GenRapide assist in meeting Corporate Mandatories for bidding?",
        answer: "Yes, GenRapide's analytics cross-reference submissions against corporate mandates, ensuring compliance and positioning bids for success."
      },
      {
        question: "What subscription options does GenRapide offer?",
        answer: "GenRapide offers various annual and monthly subscription packages, each tailored to different business sizes and needs."
      },
      {
        question: "How secure is the payment process with GenRapide?",
        answer: "Payments are processed through Stripe, ensuring secure and reliable transactions. Subscriptions can be chosen based on the frequency and scale of your business requirements."
      },
      {
        question: "How does the Dashboard aid in subscription and credit management?",
        answer: "The dashboard offers real-time tracking of credit usage and subscription management, ensuring effective resource allocation and cost control."
      },
      {
        question: "What happens to my documents after uploading them to GenRapide?",
        answer: "Uploaded documents are securely stored and can be downloaded at any time. After processing with RFPDecoder, a new document with the extracted information is generated for your use."
      },
      {
        question: "How are credits consumed within GenRapide?",
        answer: "Credits are deducted for actions like rewriting or project description preparation. Unused credits do not roll over, encouraging optimal usage within each subscription period. Renew your package once the credit quota is exhausted."
      },
      {
        question: "What makes GenRapide unique among AI recruitment tools?",
        answer: "GenRapide distinguishes itself with AI-driven ProReshape and RFPDecoder modules, an intuitive dashboard, and a strategic partnership with the Microsoft Startup Program, delivering a robust and efficient recruitment experience."
      }
    ],
    cta: {
      title: "Take your idea to the next stage with BnR360",
      description: "Bringing AI innovation | BnR credits | Transforming Bidding and Resourcing | Expert guidance",
      button: {
        text: "Sign Up",
        link: "/pricing"
      }
    }
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
              <p className="text-lg mb-8">{content.hero.description}</p>
              <Link href={content.hero.cta.link} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                {content.hero.cta.text}
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={content.hero.image}
                alt="GenRapide Banner"
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.resume.title}</h2>
            <p className="text-xl">{content.resume.description}</p>
          </div>
          <div className="flex justify-center">
            <Image 
              src={content.resume.image}
              alt="Resume"
              width={800}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* RFP Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.rfp.title}</h2>
            <p className="text-xl">{content.rfp.description}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {content.rfp.images.map((image, index) => (
              <Image 
                key={index}
                src={image}
                alt={`RFP Image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.insights.title}</h2>
            <p className="text-xl mb-8">{content.insights.description}</p>
            <Link href={content.insights.cta.link} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              {content.insights.cta.text}
            </Link>
          </div>
          <div className="flex justify-center">
            <Image 
              src={content.insights.image}
              alt="Insights Dashboard"
              width={800}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.modules.title}</h2>
            <p className="text-xl">{content.modules.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.modules.items.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                <p>{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.youtube.title}</h2>
            <p className="text-xl mb-8">{content.youtube.description}</p>
            <Image 
              src={content.youtube.image}
              alt="YouTube Tablet"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mb-8"
            />
            <Link href={content.youtube.cta.link} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              {content.youtube.cta.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.blog.title}</h2>
              <p className="text-xl mb-8">{content.blog.description}</p>
              <Link href={content.blog.cta.link} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                {content.blog.cta.text}
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={content.blog.image}
                alt="Blog Reference"
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-xl mb-8">{content.cta.description}</p>
          <Link href={content.cta.button.link} className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-semibold">
            {content.
cta.button.text}
          </Link>
        </div>
      </section>
    </main>
  )
}

