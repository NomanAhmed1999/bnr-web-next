import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SpecificBlog from '@/components/SpecificBlog'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Article'  
   }

function Prowin() {
    return (
        <>
            <Header />
            <SpecificBlog />
            <Footer />
        </>
    )
}

export default Prowin