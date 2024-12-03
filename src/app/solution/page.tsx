import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionComponent from '@/components/SolutionComponent'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Solution'
}


function Solution() {
    return (
        <>
            <Header />
            <SolutionComponent />
            <Footer />
        </>
    )
}

export default Solution