'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Slider from "react-slick"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiEndPoint } from '@/lib/utils'
import SkeletonComponent from './SkeletonComponent'

export default function SphereComponent() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState({
        banner: {
            title: "Sphere: Precision in Every Process",
            description: "With Sphere, experience the power of efficiency in recruitment and bid management, fused with the intelligence of ERP, CRM, and Data Analytics—all in one place.",
            ctaText: "Subscribe Now",
            ctaLink: "/pricing",
            image: "/images/sphere-banner.png"
        },
        features: [
            {
                title: "Say Goodbye to Manual Tracking",
                description: "Tired of endless manual logs and clunky spreadsheets? Upgrade your hiring process with Sphere's automated job and applicant tracking system. Our intuitive platform gives you a real-time, bird's-eye view of every job opening and candidate in the pipeline. Make faster, data-driven hiring decisions with Sphere!",
                image: "/images/manualTracking.png"
            },
            {
                title: "Intuitive Workflow",
                description: "Sphere's not just about tracking candidates and jobs – it's about streamlining your entire hiring process. From scheduling interviews to getting those final signoffs, Sphere's got you covered. Our flexible system adapts to how you work, so you can focus on quickly screening the right candidates, confidently sending out those offers, and winning those project bids.",
                image: "/images/intutiveFlow.png"
            }
        ],
        modules: {
            title: "Modules",
            description: "Unleash the full potential of your business with Sphere's comprehensive suite of modules. From streamlining workflows to tracking security clearances, Sphere equips you with the tools to conquer every challenge and achieve peak performance.",
            categories: [
                {
                    name: "CRM",
                    items: [
                        { title: "Applicant Tracking", description: "Optimize candidate engagement, streamline hiring workflows, and elevate recruitment management.", icon: "fi-rr-following" },
                        { title: "Partner and Client Tracking", description: "Track partner and client interactions, manage relationships, and nurture growth opportunities.", icon: "fi-ts-leaf-heart" },
                        { title: "Contract Management", description: "Manage contractual agreements with ease, oversight for amendments, and systematic compliance checks", icon: "fi-tr-file-signature" },
                        { title: "Security Management", description: "Robust security protocols for clearances management and proactive compliance within regulatory frameworks", icon: "fi-tr-shield-keyhole" }
                    ]
                },
                {
                    name: "ERP",
                    items: [
                        { title: "Job Tracking", description: "Track job postings and application statuses with real-time updates and comprehensive oversight.", icon: "fi-tr-briefcase-blank" },
                        { title: "AI Bidding and Resource Planning", description: "Optimize bid strategies and resource allocation with advanced AI-driven planning tools.", icon: "fi-tr-auction" },
                        { title: "Basic Payroll", description: "Automate and streamline payroll processing with accurate, efficient, and compliant systems", icon: "fi-tr-user-salary" },
                        { title: "Corporate References", description: "Centralize corporate credentials, ensure easy access to references, and maintain data integrity", icon: "fi-ts-refer" },
                        { title: "Tasking", description: "Assign tasks effectively, monitor progress, and manage team workload for optimized project delivery", icon: "fi-ts-priority-importance" },
                        { title: "Packaging", description: "Enhance packaging efficiency, minimize resource wastage, and improve product presentation.", icon: "fi-ts-box-open" }
                    ]
                },
                {
                    name: "Data Analytics",
                    items: [
                        { title: "Reporting and Dashboard", description: "Access in-depth analytics with customizable dashboards, dynamic reporting, and strategic insights.", icon: "fi-tr-file-medical-alt" },
                        { title: "KPIs", description: "Monitor, analyze, and act on key performance indicators to drive targeted business growth and efficiency", icon: "fi-tr-meter-bolt" }
                    ]
                }
            ]
        },
        insights: {
            title: "Insights That Actually Matter",
            description: "Cut through the clutter and gain immediate insights with Sphere's real-time dashboards. Get the information you need, right when you need it, with key metrics at your fingertips. Make data-driven decisions with confidence and download customizable reports that fit your specific needs.",
            image: "/images/reportingDashboard.png"
        },
        videoSection: {
            title: "Want to know more?",
            description: "From detailed tutorials to insights on our innovative web applications, our videos are designed to enhance your understanding and utilization of our AI-powered solutions. Subscribe and stay updated with the latest tips, trends, and features that BnR360 has to offer.",
            ctaText: "Visit our Youtube Channel",
            ctaLink: "https://www.youtube.com/playlist?list=PL0Lr6iGPvwM-X8qVXZETr1NdMz9FBnehm",
            image: "/images/YouTube Tablet.webp"
        },
        faq: [
            {
                question: "What is Sphere?",
                answer: "Sphere is a unique and comprehensive platform specifically designed for the staffing, recruitment, and bidding industry. It centralizes and streamlines various business operations by implementing processes and workflows based on industry best practices. Sphere adeptly manages applicants, jobs, tasks, finances, and much more — all from one centralized hub. This integration allows businesses to effectively handle their recruitment and bidding processes, making it an indispensable tool for achieving operational excellence in these sectors."
            },
            {
                question: "How can Sphere benefit my business?",
                answer: "Sphere empowers your business by streamlining operations, enhancing productivity, and providing valuable insights for informed decision-making. It offers a wide range of features designed to optimize various aspects of your organization with its seamlessly integrated modules ensuring affordability and scalability"
            },
            {
                question: "Is Sphere suitable for businesses of all sizes?",
                answer: "Yes, Sphere is designed to cater to businesses of all sizes, from small startups to large enterprises. Its modular approach allows you to choose the features that best suit your specific needs."
            },
            {
                question: "Is Sphere user-friendly?",
                answer: "Sphere is designed with a user-friendly interface, making it easy for employees at all levels of your organization to use and benefit from its features."
            },
            {
                question: "Can I customize Sphere to fit my business unique requirements?",
                answer: "Yes, Sphere offers customization options to tailor the platform to your specific business needs. You can configure it to align with your unique processes and workflows."
            },
            {
                question: "Is my data safe with Sphere?",
                answer: "Yes, Sphere prioritizes data security. The platform employs robust security measures and encryption protocols to protect your sensitive information."
            },
            {
                question: "How can Sphere help with employee management?",
                answer: "Sphere offers features like payroll processing, applicant tracking, and security clearance monitoring, making employee management more efficient and effective."
            },
            {
                question: "Can Sphere help improve client relationships?",
                answer: "Sphere's partner/client tracking tools allow you to manage and nurture your client relationships, ensuring you deliver on target dates and foster growth."
            },
            {
                question: "How can I get insights from Sphere's reporting tools?",
                answer: "Sphere's reporting tools provide actionable insights through easy-to-understand reports and visualizations, helping you make data-driven decisions to enhance your business's performance."
            },
            {
                question: "How does Sphere ensure secure payments?",
                answer: "Your payments are processed securely through Stripe. BnR360 never stores your payment credentials, ensuring the highest level of security and confidentiality for your financial information."
            }
        ]
    })

    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
          try {
            const response = await fetch(`${ApiEndPoint}/sphere/data/`);
            if (!response.ok) throw new Error('Failed to fetch data');
            
            const result = await response.json();
            
            setData(result);
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
        <>
            <div className="gradient-bg text-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.banner.title}</h1>
                        <p className="text-xl mb-8">{data.banner.description}</p>
                        <Link href={data?.banner?.ctaLink || '#'} className="border-2 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                            {data.banner.ctaText}
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Image loader={myLoader} src={data.banner.image} alt="Sphere Banner" width={500} height={500} className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    {data.features.map((feature, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                            <div className="md:w-1/2">
                                <Image loader={myLoader} src={feature.image} alt={feature.title} width={500} height={300} className="rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">{data.modules.title}</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{data.modules.description}</p>

                    <Tabs defaultValue={data.modules.categories[0]?.name} className="w-full">
                        <TabsList className="flex justify-center space-x-2 mb-8">
                            {data.modules.categories.map((category, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={category.name}
                                    className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {data.modules.categories.map((category, idx) => (
                            <TabsContent key={idx} value={category.name} className="mt-8">
                                <div className="relative">
                                    <Slider ref={sliderRef} {...settings}>
                                        {category.items.map((item, index) => (
                                            <div key={index} className="px-4">
                                                <div className="bg-white rounded-lg shadow-md p-6">
                                                    <i className={`${item.icon} text-4xl text-indigo-600 mb-4`}></i>
                                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                                    <p className="text-gray-600">{item.description}</p>
                                                    <a href="#" className="mt-4 inline-block text-indigo-600 hover:underline">Start Your Trial Now</a>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                    <button
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
                                        onClick={() => sliderRef.current?.slickPrev()}
                                    >
                                        <FiChevronLeft className="text-2xl text-indigo-600" />
                                    </button>
                                    <button
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                                        onClick={() => sliderRef.current?.slickNext()}
                                    >
                                        <FiChevronRight className="text-2xl text-indigo-600" />
                                    </button>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">{data.insights.title}</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{data.insights.description}</p>
                    <div className="flex justify-center">
                        <Image loader={myLoader} src={data.insights.image} alt="Insights Dashboard" width={800} height={450} className="rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-4">{data.videoSection.title}</h2>
                            <p className="text-gray-600 mb-6">{data.videoSection.description}</p>
                            <Link
                                href={data?.videoSection?.ctaLink || '#'} className="gradient-bg text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
                                {data.videoSection.ctaText}
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <Image loader={myLoader} src={data.videoSection.image} alt="YouTube Tablet" width={500} height={300} className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {data.faq.map((faq, index) => (
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
                </div>
            </section>
        </>
    )
}

