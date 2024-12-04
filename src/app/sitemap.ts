import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // const response = await fetch(`https://www.test.dc3worx.ca/blogs`)
    // const { post }: any = await response

    // const postEntries: MetadataRoute.Sitemap = post.map(({id}: any) => ({
    //     url: `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,
    //     // lastModified: new Date(post.updatedat),
    // }))
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/sphere`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/genrapide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/prowin`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/case-study`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/growth`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/service`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/solution`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        // ...postEntries,
    ]
}