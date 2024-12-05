import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceComponent from '@/components/ServiceComponent'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Service'
}


function Service() {
    return (
        <>
            <Header />
            <ServiceComponent />
            <Footer />
        </>
    )
}

export default Service