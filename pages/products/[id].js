import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';


function Home({ post }) {
    console.log('post',post);
    return (
        <>
            {/* <h1>i am {asd}</h1> */}
            {
                <div className='border pt-8  pr-8 pl-8'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            <p>hello home</p>
                            <div className='h-80 flex flex-col justify-center p-6 border-2 border-gray-300 rounded-xl'>

                                <div className='h-30'>
                                    <h4 className='text-xl'>{post.title}</h4>
                                    <button className="rounded-xl pt-2 pb-3 pl-3 pr-2 bg-red-400">Show Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://dummyjson.com/products')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.products.map((post) => ({
        params: { id: post.id.toString() },
    }))


    return { paths, fallback: false }
}
export async function getStaticProps(context) {
    const id = context.params.id
   
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const post = await res.json()
    console.log(post)
    return { props: { post } }
}


export default Home