import React from 'react'
import Test2 from './Test2'
import Slide from './Slide'

const Testimonial = () => {
  return (
   <div className=' testimonial relative px-[15px] md:px-0'>
    <div className='h-[100%] w-full bg-[#1CABD3CC]/[0.8] absolute left-0 top-0'>

    </div>
     <div className="container mx-auto flex flex-col md:flex-row  ">
        <div className="md:basis-[40%]  md:ml-[0px] relative z-30">
            <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085em] text-[#fff] text-center md:text-left pt-[20px] md:pt-[239px] uppercase ">TESTIMONIALS</h3>
            <h1 className="font-IBM  text-[30px] md:text-[36px] text-center md:text-left leading-[47px] text-[#fff]  font-extrabold pr-[10px] pt-[4px] whitespace-pre">What Our Students Say</h1>
            <p className="font-Work font-normal text-[16px] text-center max-w-[385px] text-white leading-[24px]">Customer Reviews: Transforming Healthcare through Cutting-Edge Equipment. Success Stories: Revolutionizing Patient Care with Advanced Medical Technology. Success Stories: Revolutionizing Patient Care with Advanced Medical Technology</p>
        </div>
        <div className="basis-[60%] mt-[92px] mb-[82px] md:ml-[23px] ">
          <Test2/>
         
        </div>
    </div>
   </div>
  )
}
export default Testimonial