import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseStudyComponent from '@/components/CaseStudyComponent'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Case study'
}

function Prowin() {
    return (
        <>
            <Header />
            <CaseStudyComponent />
            <Footer />
        </>
    )
}

export default Prowin