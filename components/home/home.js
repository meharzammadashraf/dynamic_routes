import React, { useState, useEffect } from 'react'
function Home({items}) {
    console.log("aaaaaaaaaaaaaaaaa", items);
  return (
    <>
    <h1>i am home</h1>
        {
        <div className='border pt-8  pr-8 pl-8'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <p>hello home</p>
                {
                    items?.length ?
                    items.map((items) => {
                        return (
                            <div key={items.id} className='h-80 flex flex-col justify-center p-6 border-2 border-gray-300 rounded-xl'>
                                
                                <div className='h-30'>
                                    <h4 className='text-xl'>{items.title}</h4>
                                    <button className="rounded-xl pt-2 pb-3 pl-3 pr-2 bg-red-400">Show Detail</button>
                                </div>
                            </div>
                        )
                    }):
                    <p>hello i am a </p>
                }
            </div>
        </div>
    </div>
      }
    </>
  )
}
export const getStaticProps = async()=>{
const res = await fetch("https://dummyjson.com/products")
const data = await res.json();
return{
    props:{
        items: data,
    }
}
}
export default Home