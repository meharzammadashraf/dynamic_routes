import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

function Home({ post }) {
    console.log(post.products);
    return (
        <>
            {/* <h1>i am {asd}</h1> */}
            {
                <div className='border pt-8  pr-8 pl-8'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            <p>hello home</p>
                            {
                                post.products?.length ?
                                    post.products.map((items) => {
                                        return (
                                            <div key={items.id} className='h-80 flex flex-col justify-center p-6 border-2 border-gray-300 rounded-xl'>

                                                <div className='h-30'>
                                                    <h4 className='text-xl'>{items.title}</h4>
                                                    <button className="rounded-xl pt-2 pb-3 pl-3 pr-2 bg-red-400"><Link href={`/products/${items.id.toString()}`}>Show Detail</Link></button>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <p>hello i am a </p>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products')
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}


export default Home