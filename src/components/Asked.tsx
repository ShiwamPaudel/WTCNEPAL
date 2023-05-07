import React from 'react'
import Collape from './Collape'

const Asked = () => {
  return (
    <div className="bg-white pb-[91px] px-[15px] md:px-0">
     <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085em] text-[#007EC5] text-center pt-[118px]">FAQs</h3>
     <h2 className="font-IBM font-normal text-4xl leading-[47px] text-[#0D1250] text-center pt-[4px]">Frequently Asked Questions</h2>
     <div className="container mx-auto flex items-center md:flex-row flex-col  gap-[40px] mt-[49px]">
      <div className='basis-[60%] '>
         <Collape/>
      </div>
      <div className='basis-[40%]'>

         <img src="/../assets/ask.png" alt="" className='h-[552px] w-full object-cover '/>
      </div>
     </div>
    </div>
  )
}

export default Asked