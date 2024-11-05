import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-5 lg:px-44 sm:sm-20'>
        {/*-----Left portion----*/}
        <div className=''>
            <h1 className= 'text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-200 leading-tight '>
                Remove the <br className='max-md:hidden'/> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from images <br className='max-md:hidden'/>in seconds.
            </h1>
            <p className='my-6 text-[xl] text-gray-400'>Experience seamless background removal powered by AI.<br className='max-sm:hidden'/> Transform your images instantly with professional-grade results,<br className='max-sm:hidden'/> no design skills needed.</p>
            <div>
                <input type="file" id='upload1' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-110 transition-all duration-700' htmlFor='upload1'> 
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='text-sm'>Upload your image</p>
                </label>
            </div>
        </div>
        {/*-----Right portion----*/}
        <div className='w-full '>
            <img src={assets.header_img} alt="" className='w-full h-auto' />
        </div>
    </div>
  )
}

export default Header