import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaFacebookF, FaTiktok,FaInstagram} from 'react-icons/fa'
function Fotter1() {
  return (
    <>
    <div className="w-full bg-[#0C1B30] pb-[25px] md:pb-0">
     <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] py-[24px]">copyright @ coastline 2023</p>
            <div className="flex flex-row ">
            <BsYoutube className="mr-[31px] fticon"/>
            <FiTwitter className="mr-[31px] fticon"/>
            <FaTiktok className="mr-[31px] fticon"/>
            <FaFacebookF className="mr-[31px] fticon"/>
            <FaInstagram className="mr-[31px] fticon"/>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Fotter1