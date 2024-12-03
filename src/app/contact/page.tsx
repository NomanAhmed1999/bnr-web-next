import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactComponent from '@/components/ContactComponent'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Contact'
}

function Prowin() {
    return (
        <>
            <Header />
            <ContactComponent />
            <Footer />
        </>
    )
}

export default Prowin