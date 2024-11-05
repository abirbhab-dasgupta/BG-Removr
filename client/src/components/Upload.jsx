import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div>
        <h1 className='py-6 md:py-16 mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent'>See the magic. Try now</h1>
        <div className='text-center mb-24'>
                <input type="file" id='upload2' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-110 transition-all duration-700' htmlFor='upload2'> 
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='text-sm'>Upload your image</p>
                </label>
            </div>
    </div>
  )
}

export default Upload