import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogsComponent from '@/components/BlogsComponent'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Blogs'  
   }


function Prowin() {
    return (
        <>
            <Header />
            <BlogsComponent />
            <Footer />
        </>
    )
}

export default Prowin