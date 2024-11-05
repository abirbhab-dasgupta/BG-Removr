import React from 'react'
import { assets } from '../assets/assets'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l order-gray-300 pl-4 text-sm text-gray-400 max:sm-hidden'>Made by Abirbhab Dasgupta @2024 </p>
        <div className="flex gap-4">
          <a href="https://github.com/abirbhab-dasgupta" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://instagram.com/abirbhab_" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/abirbhab" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
          </a>
        </div>
    </div>
  )
}

export default Footer