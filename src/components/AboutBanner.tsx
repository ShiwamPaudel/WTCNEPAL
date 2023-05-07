import React from 'react'

const AboutBanner = ({title}:any) => {
  return (
    <div className='relative'>
    <img src="/../assets/about.png" className='w-full h-[150px] md:h-auto' alt="" />
    <h1 className='text-[#FEFEFE] cursor-pointer md:text-[48px] text-[32px] font-bold leading-[60.24px] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>{title}</h1>

  </div>
  )
}

export default AboutBanner
