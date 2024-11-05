import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'


const Navbar = () => {

  const {openSignIn} = useClerk()
  const {isSignedIn,user } = useUser()


  return (
    <div className="flex justify-between items-center py-7 mx:4 lg:mx-44 ">
      <Link to='/'><img src={assets.logo} alt="Logo" /></Link>
      {
        isSignedIn 
        ?<div>
          <UserButton/>
        </div>
        :<button onClick={()=>openSignIn({})} className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-3 sm:px-4 rounded-lg flex items-center transition duration-300 shadow-sm text-sm sm:text-base">
        Get Started
        <img src={assets.arrow_icon} alt="Arrow" className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      }
      

    </div>
  )
}

export default Navbar
