import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingComponent from '@/components/PricingComponent'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Pricing'
}



function Prowin() {
    return (
        <>
            <Header />
            <PricingComponent />
            <Footer />
        </>
    )
}

export default Prowin