import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div>
        <h1 className='py-5 mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent'>Customer Testimonials</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>

            {testimonialsData.map((items,index)=>(
                <div className='bg-[#120f2a] rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-110 transition-all duration-700' key={index}>
                    <p className='text-4xl text-gray-400 font-bold'>”</p>
                    <p className='text-sm text-gray-400'>{items.text}</p>
                    <div className='flex items-center gap-3 mt-5'>
                        <img className='w-9 rounded-full' src={items.image} alt="" />
                        <div>
                            <p>{items.author}</p>
                            <p className='text-sm text-gray-200'>{items.jobTitle}</p>
                        </div>
                    </div>
                </div>
            ))}

            
        </div>
    </div>
  )
}

export default Testimonials