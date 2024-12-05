'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecificBlog() {
  const [content, setContent] = useState({
    hero: {
      title: "Blogs",
      description: "Dive into expert articles about BnR360's products, services and solutions-written by industry experts, only for you!"
    },
    article: {
      image: "/images/post7.webp",
      category: "Features",
      title: "How BnR 360 Sets New Standards in Business Solutions: A Look at Its Top Features",
      excerpt: "Discover Plans for You",
      author: "Matthew David",
      date: "20/10/2024",
      content: [
        "The bidding landscape is a battlefield. Businesses scramble for the same resources, proposals pile up, and standing out can feel impossible. But what if your solution wasn't just better, but fundamentally different? Enter BnR 360: the all-in-one platform designed to revolutionize how you win bids, secure top talent, and dominate your industry.",
        "Unlike traditional solutions where everyone uses the same generic tools, BnR 360 personalizes your experience. Our cutting-edge security protocols, including geographically dispersed teams and two-factor authentication, ensure your data remains confidential – even if your competitors use BnR 360. They see their data, you see yours, and your unique strategies remain a closely guarded secret.",
        "Forget the days of juggling multiple, disconnected systems. BnR 360 seamlessly integrates CRM, ERP, AI-powered Bidding & Resource Planning, and more, into a single, unified platform. This eliminates data silos, streamlines workflows, and empowers you to manage every aspect of your business – from candidate tracking to contract management – with unparalleled efficiency.",
        "BnR 360 understands that one size doesn't fit all. That's why we offer a vast array of customizable packages, ensuring you only pay for the features that perfectly align with your unique needs and budget. Unlike competitors who force you into pre-packaged solutions, BnR 360 empowers you to maximize your return on investment without wasting resources on unnecessary features.",
        "BnR 360 isn't just software; it's a constant companion on your growth journey. We're dedicated to staying ahead of the curve, consistently integrating the latest AI advancements to enhance our platform. This ensures you have access to the most cutting-edge tools and functionalities, empowering you to stay competitive and win in today's ever-evolving marketplace.",
        "BnR 360 goes beyond software. We offer comprehensive integration with essential tools like LinkedIn Premium, VOIP, and more, eliminating the need for multiple subscriptions. Additionally, our user-friendly interface with customizable light and dark modes ensures a seamless experience for everyone on your team, regardless of technical expertise.",
        "Many competitors force you to choose between products and services. BnR 360 breaks the mold. We offer both, seamlessly integrated into our platform. Plus, our dedicated team is here to provide personalized support every step of the way, ensuring you get the most out of your BnR 360 experience."
      ],
      socialLinks: [
        { name: 'Facebook', url: 'https://www.facebook.com/people/BnR360/100093720805116/', icon: 'fa-facebook-f' },
        { name: 'Twitter', url: 'https://twitter.com/BnR360', icon: 'fa-x-twitter' },
        { name: 'LinkedIn', url: 'https://ca.linkedin.com/company/bnr360', icon: 'fa-linkedin-in' },
        { name: 'Instagram', url: 'https://www.instagram.com/bnr360.official/', icon: 'fa-instagram' }
      ]
    }
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 flex items-center">
          <Image src="/images/Layer 4.webp" alt="Blog Hero" width={300} height={300} className="mr-8" />
          <div>
            <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
            <p className="text-xl">{content.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Image 
              src={content.article.image} 
              alt={content.article.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg mb-8"
            />
            <div className="mb-8">
              <span className="text-blue-600 font-semibold">{content.article.category}</span>
              <h1 className="text-3xl font-bold mt-2 mb-4">{content.article.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{content.article.excerpt}</p>
              <div className="flex items-center">
                <i className="fi fi-sr-user-add mr-2"></i>
                <div>
                  <h3 className="font-semibold">{content.article.author}</h3>
                  <p className="text-sm text-gray-500">{content.article.date}</p>
                </div>
              </div>
            </div>
            
            {content.article.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Follow BnR360</h3>
              <div className="flex space-x-4">
                {content.article.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <i className={`fa-brands ${link.icon} text-2xl`}></i>
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

