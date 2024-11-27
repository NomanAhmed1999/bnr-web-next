'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'

export default function HeroBanner() {
    const [content, setContent] = useState({
        heroWords: ['Manage', 'Track', 'Automate', 'Outsource'],
        heroColors: ['#212040', '#da0001', '#f57d3f', '#f321b0'],
        currentWordIndex: 0,
        offerings: [
            {
                title: "Full Bid Management",
                description: "Manage the entire bidding process, from RFP analysis to proposal submission, ensuring accuracy and compliance every time.",
                icon: "/images/track bids.png"
            },
            {
                title: "Turnkey Recruitment Solutions",
                description: "From sourcing to onboarding, our complete recruitment management services streamline every stage of the hiring process.",
                icon: "/images/write parposal 1.png"
            },
            {
                title: "Custom On-Demand Services",
                description: "Tailor your services to your specific needs, with flexible, pay-as-you-go support for bid writing, resume parsing, and more.",
                icon: "/images/parse doc 1.png"
            },
            {
                title: "Strategic Growth & Scaling",
                description: "Optimize your operations for growth with our advanced process automation and expert consultancy services.",
                icon: "/images/manage clients 1.png"
            },
            {
                title: "Data Insights & Reporting",
                description: "Leverage real-time analytics and customizable reports to make informed business decisions and track your progress.",
                icon: "/images/generate reposts 1.png"
            },
            {
                title: "Security & Compliance",
                description: "Rest easy with our top-tier data security measures and compliance protocols, ensuring safe and secure operations.",
                icon: "/images/customize workflow 1.png"
            }
        ],
        products: [
            {
                name: "Sphere",
                logo: "/images/spheres.webp",
                description: "Dive into a world where resumes are effortlessly parsed, RFPs and bids are seamlessly tracked, and decision-making is powered by an interactive dashboard. With Sphere, organizing interviews, managing applicant databases, and ensuring real-time workflow transparency becomes second nature. Our integrated ERP, CRM, and Data Analytics tools, alongside a dedicated security management module, ensure that your operations are efficient and secure.",
                images: [
                    "/images/intutiveFlow.png",
                    "/images/reportingDashboard.png",
                    "/images/sphere-banner.png"
                ],
                link: "/pages/sphere.html"
            },
            {
                name: "GenRapide",
                logo: "/images/GenRapide Logo-new.webp",
                description: "The breakthrough platform transforming talent acquisition and proposal management. With our ProReshape module, reshape and enrich resumes to meet exacting standards, while RFPDecoder uses Generative AI to quickly distill RFP essentials. GenRapide simplifies it with a user-friendly dashboard for credit monitoring, user roles, and activity tracking.",
                images: [
                    "/images/GenRapide 1.webp",
                    "/images/GenRapide 2.webp",
                    "/images/GenRapide 3.webp"
                ],
                link: "/pages/genrapide.html"
            }
        ],
        supportingProducts: [
            {
                title: "Resume Parser",
                link: "/pages/prowin.html",
                color: "bg-blue-100 border-blue-500"
            },
            {
                title: "ProWin Prep",
                link: "/pages/prowin.html",
                color: "bg-indigo-600 text-white"
            },
            {
                title: "AI Chatbot Requirement",
                link: "/pages/prowin.html",
                color: "bg-green-100 border-green-500"
            }
        ],
        stats: [
            { value: "60%", description: "Reduction in bid preparation time" },
            { value: "50%", description: "Savings on operational overhead" },
            { value: "30%", description: "Faster candidate placements" }
        ],
        testimonials: [
            {
                text: "Sphere makes it so much easier to organize and track information across different categories in one unified system. Everything related to a bid is in one place, and it's much simpler to track client and professional contacts. Compared to Bullhorn, Sphere fills those gaps better—it's easier to use, has a more intuitive interface, a stronger search engine, and offers more customization.",
                author: "Kyle Bentley",
                position: "Proposal Writer, Zernam"
            },
            {
                text: "I was always jumping between different tools for RFPs, recruitment, and managing clients, and I ended up paying for a bunch of features I didn't really need. But now, everything's in one place—staffing, bidding, even the reports that help us make better decisions. It's been a huge time and money saver.",
                author: "Shahzad",
                position: "COO, CCI"
            }
        ]
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setContent(prevContent => ({
                ...prevContent,
                currentWordIndex: (prevContent.currentWordIndex + 1) % prevContent.heroWords.length
            }))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="bg-gradient-to-b from-blue-400 to-indigo-800 text-white py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="inline-block transition-all duration-500 ease-in-out" style={{ color: content.heroColors[content.currentWordIndex] }}>
                                {content.heroWords[content.currentWordIndex]}
                            </span>{' '}
                            your Bidding and Resourcing Operations
                        </h2>
                        <p className="text-xl mb-8">
                            Outsource, Bid, and Win with Integrated ATS, CRM, ERP, and AI-Powered Tools for Bidding & Recruitment.
                        </p>
                        <div className="space-x-4">
                            <Link href="https://sphere.bnr360.com/signup-trial" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
                                Start for Free
                            </Link>
                            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <Image src="/images/HeroBanner.webp" alt="Hero Banner" width={500} height={500} className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20">
                <h2 className="text-3xl font-bold text-center mb-10">Powered By Leading Technology</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 pr-4">
                        <Slider {...settings}>
                            <div>
                                <Image src="/images/partnership-1.webp" alt="Partnership 1" width={800} height={400} className="w-full" />
                            </div>
                            <div>
                                <Image src="/images/partnership_2.png" alt="Partnership 2" width={800} height={400} className="w-full" />
                            </div>
                        </Slider>
                    </div>
                    <div className="md:w-1/3 pl-4 mt-8 md:mt-0">
                        <Slider {...settings}>
                            {content.testimonials.map((testimonial, index) => (
                                <div key={index}>
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <p className="mb-4">{testimonial.text}</p>
                                        <h5 className="font-bold">{testimonial.author}</h5>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Our <span className="text-indigo-600">Offerings</span></h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.offerings.map((offering, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <Image src={offering.icon} alt={offering.title} width={100} height={100} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                                <p className="text-gray-600">{offering.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        {content.stats.map((stat, index) => (
                            <div key={index} className="w-full md:w-1/3 text-center mb-8 md:mb-0">
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-xl text-white">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Products</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Your gateway to innovative solutions in bidding, resourcing, and beyond. Our suite of
                        products is designed to elevate your teams' efficiency, save costs, and streamline your workflow
                    </p>
                    {content.products.map((product, index) => (
                        <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : 'bg-gray-100'}`}>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8">
                                    <Image src={product.logo} alt={product.name} width={200} height={100} className="mb-6" />
                                    <p className="text-gray-600 mb-6">{product.description}</p>
                                    <Link href={product.link} className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                                        Visit {product.name}
                                    </Link>
                                </div>
                                <div className="md:w-1/2 p-8">
                                    <Slider {...settings}>
                                        {product.images.map((image, imgIndex) => (
                                            <div key={imgIndex}>
                                                <Image src={image} alt={`${product.name} ${imgIndex + 1}`} width={500} height={300} className="rounded-lg shadow-md" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Our Supporting Products</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.supportingProducts.map((product, index) => (
                            <div key={index} className={`rounded-lg shadow-lg p-6 ${product.color}`}>
                                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                                <Link href={product.link} className="inline-block mt-4 bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition duration-300">
                                    Learn More -&gt;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

