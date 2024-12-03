import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProwinComponent from '@/components/ProwinComponent'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Prowin'
}

function Prowin() {
    return (
        <>
            <Header />
            <ProwinComponent />
            <Footer />
        </>
    )
}

export default Prowin