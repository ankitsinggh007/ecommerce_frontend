import React from 'react'
import {TiSocialTwitter,TiSocialFacebook,TiSocialYoutube,TiSocialLinkedin} from "react-icons/ti";
import Flipkart from "../assets/soldout/flipkart.svg"
function Footer() {
  return (
    <div className='flex flex-col items-center p-2 text-white bg-[#172337]'>

        <span><img className=' mt-2 w-40 ' src={Flipkart} alt="" /></span>
        <div className='flex  mt-2 justify-between'>
            <span className='ml-5'>Home</span>
            <span className='ml-5'>About</span>
            <span className='ml-5'>Blog</span>
            <span className='ml-5'>Contact</span>
        </div>
        <span className='mt-2'>© 2022 Flipkart clone. All rights reserved</span>
        <div className='flex  mt-2 justify-between mt-2'>
            <span className='text-3xl mr-4 p-2 rounded-full border border-black text-primary shadow-md hover:bg-primary hover:text-white ease-in duration-300 '>
                <TiSocialFacebook/>
            </span>
            <span  className='text-3xl  mr-4 p-2 rounded-full border border-black text-primary shadow-md hover:bg-primary hover:text-white ease-in duration-300 '>
                <TiSocialTwitter/>
            </span>
            <span  className='text-3xl p-2  mr-4 rounded-full border border-black text-primary shadow-md hover:bg-primary hover:text-white ease-in duration-300 '>
                <TiSocialYoutube/>
            </span>
            <span  className='text-3xl p-2  mr-4 rounded-full border border-black text-primary shadow-md hover:bg-primary hover:text-white ease-in duration-300 '>
                <TiSocialFacebook/>
            </span>
            <span  className='text-3xl p-2  mr-4 rounded-full border border-black text-primary shadow-md hover:bg-primary hover:text-white ease-in duration-300 '>
                <TiSocialLinkedin/>
            </span>
        </div>
    </div>
  )
}

export default Footer