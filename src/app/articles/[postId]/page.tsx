import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SpecificBlog from '@/components/SpecificBlog'
import { Metadata } from 'next'
import React, {cache} from 'react'



export async function generateMetadata({
    params: { postId },
}: any): Promise<Metadata> {
    const response = await fetch(`https://www.test.dc3worx.ca/api/blogs/${postId}`)
    const post: any = await response
    return {
        title: post.title,
        description: post.body,
        // openGraph: {
        //     images: [
        //         {
        //             url: post.image
        //         }
        //     ]
        // }
    }
}


function Prowin(params: { postId: string }) {
    return (
        <>
            <Header />
            <SpecificBlog />
            <Footer />
        </>
    )
}

export default Prowin