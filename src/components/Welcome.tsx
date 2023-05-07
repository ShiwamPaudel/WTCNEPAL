import React from 'react'
import Education from './Education'

function Welcome() {
  return (
    <>
    <div className=" container mx-auto">
     <div className="flex flex-col lg:flex-row gap-[4px] md:gap-[45px]">
        <div className="basis-[55%]">
          <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085px] text-[#007EC5] pt-[22px] pl-[15px] md:pl-[0px] md:pt-[33px] lg:pt-[209px]">COASTLINE EDUCATION</h3>
          <h2 className="font-IBM font-normal text-[31px] md:text-4xl leading-[47px] text-[#0D1250] pl-[15px] md:pl-[0px] pt-[5px] md:pt-[8px]">Welcome to Coastline Education</h2>
          <p className="font-IBM font-normal text-[18px] md:text-xl pl-[15px] pr-[12px] md:pl-[0px] md:pr-[0px] leading-[30px] text-[#000000] pt-[8px] max-w-[617px] 2xl:w-full">Coastline Education, an independent student placement agency in Nepal, has been dedicated to empowering Nepalese students for accessing education in the Australia and other countries since 2015.</p>
          <p className="font-IBM font-normal text-[14px] md:text-[16px] pl-[15px] pr-[12px] md:pl-[0px] md:pr-[0px] leading-[24px] text-[#505056] pt-[8px] max-w-[608px] 2xl:w-full">We are now officially collaborating with more than 200 higher institutions in the Australia and other countries, and a number of others unofficially depending on students’ academic interests, financial strengths and other parameter.</p>
        </div>
        <div className="basis-[45%]">
            <div className="w-[94%] md:w-full lg:w-[505px] h-[508px] mt-[81px] mb-[81px] 2xl:w-full ml-[13px] md:ml-[0px]">
            <img src="/../assets/image 14joiniltes.png" alt="avatar" className="w-full h-full object-cover"/>
            </div>
        </div>
     </div>
    </div>
    <Education/>
    </>
  )
}

export default Welcome