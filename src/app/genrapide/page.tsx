import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GenrapideComponent from '@/components/GenrapideComponent'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'GenRapide'
}


function Prowin() {
    return (
        <>
            <Header />
            <GenrapideComponent />
            <Footer />
        </>
    )
}

export default Prowin