import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GrowthComponent from '@/components/GrowthComponent'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Growth'
}


function Prowin() {
    return (
        <>
            <Header />
            <GrowthComponent />
            <Footer />
        </>
    )
}

export default Prowin