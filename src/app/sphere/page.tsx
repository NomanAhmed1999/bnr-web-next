import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SphereComponent from '@/components/Sphere'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
 title: 'Sphere'  
}

function Sphere() {
    return (
        <>
            <Header />
            <SphereComponent />
            <Footer />
        </>
    )
}

export default Sphere