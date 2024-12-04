'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [content, setContent] = useState({
    hero: {
      title: "Blogs",
      description: "Dive into expert articles about BnR360's products, services and solutions-written by industry experts, only for you!"
    },
    tabs: ['All', 'Sphere', 'GenRapide', 'Features', 'Others'],
    recentPost: {
      image: "/images/post7.webp",
      category: "Others",
      title: "How BnR 360 Sets New Standards in Business Solutions",
      excerpt: "The bidding landscape is a battlefield. Businesses scramble for the same resources, proposals pile up.",
      author: "Stella Louises",
      date: "24/3/2024"
    },
    blogPosts: [
      {
        image: "/images/post2.webp",
        category: "Others",
        title: "Change Your Approach to Bidding & Resourcing with AI-Powered Strategies",
        excerpt: "BnR 360 redefines the bidding and resourcing landscape with its cutting-edge AI tools, designed to optimize every stage.",
        author: "Maria Winfield",
        date: "14/1/2024",
        link: "article1.html"
      },
      {
        image: "/images/post3.webp",
        category: "Others",
        title: "The Origins of BnR 360",
        excerpt: "BnR 360 stands out in the demanding world of enterprise management, where efficiency and cutting-edge ideas are key to winning.",
        author: "Amelia Johnson",
        date: "22/1/2024",
        link: "article2.html"
      },
      {
        image: "/images/post6.webp",
        category: "Sphere",
        title: "Streamline. Automate. Dominate.",
        excerpt: "In today's fast-paced business world, efficiency is king. Sphere by BnR 360 is your weapon of choice",
        author: "Sophie Harper",
        date: "17/2/2024",
        link: "article3.html"
      },
      {
        image: "/images/post4.webp",
        category: "GenRapide",
        title: "The AI Gamechanger for Bidding & Recruitment",
        excerpt: "In today's fiercely competitive business environment, BnR 360's GenRapide emerges as a game-changer.",
        author: "Lucas Benjamin",
        date: "13/3/2024",
        link: "article4.html"
      },
      {
        image: "/images/post7.webp",
        category: "Others",
        title: "How BnR 360 Sets New Standards in Business Solutions",
        excerpt: "The bidding landscape is a battlefield. Businesses scramble for the same resources, proposals pile up.",
        author: "Matthew David",
        date: "24/3/2024",
        link: "article5.html"
      }
    ]
  })

  const filteredPosts = content.blogPosts.filter(post => 
    activeTab === 'All' || post.category === activeTab
  )

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

      {/* Blog Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {content.tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? 'gradient-bg text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent post</h2>
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
            <Image 
              src={content.recentPost.image} 
              alt={content.recentPost.title}
              width={600}
              height={400}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-8">
              <span className="text-blue-600 font-semibold">{content.recentPost.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{content.recentPost.title}</h3>
              <p className="text-gray-600 mb-4">{content.recentPost.excerpt}</p>
              <Link href="/articles/2" className="text-blue-600 hover:underline">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <div className="flex items-center mt-6">
                <i className="fi fi-sr-user-add mr-2"></i>
                <div>
                  <h4 className="font-semibold">{content.recentPost.author}</h4>
                  <p className="text-sm text-gray-500">{content.recentPost.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Read more</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href="{post.link}" className="text-blue-600 hover:underline">
                    read more...
                  </Link>
                  <div className="flex items-center mt-4">
                    <i className="fi fi-sr-user-add mr-2"></i>
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a question to ask or a feedback to share</h2>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}

