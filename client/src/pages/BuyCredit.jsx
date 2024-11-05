import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 '>
      <button className='border border-gray-300 px-10 py-2 rounded-full mb-6 '>Our Plans</button>
      <h1 className='mb-6 sm:mb-10 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center text-left gap-6 '>
        {plans.map((item,index)=>(
          <div className='border border-violet-950 rounded-lg bg-[#120f2a] drop-shadow-sm py-12 px-8 text-gray-300 hover:scale-90 transition-all duration-700' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='font-semibold mt-3'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6 '>
              <span className='text-3xl font-medium'>₹{item.price}</span>/ {item.credits} credits
            </p>
            <button className='w-full font-light mt-8 bg-white hover:bg-gray-100 text-black py-3 px-6 rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 shadow-sm'>Proceed Payment</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit