import React from 'react'

function Course() {
  return (
    <>
    <div className="flex flex-col xl:flex-row bg-[#FFFFFF] h-full xl:h-[516px]">
        <div className="basis-[80%] order-2 md:order-none z-30">
            <h3 className="font-Work font-bold text-[13px] leading-[16px] tracking-[0.085%] text-[#007EC5] pt-[44px] pl-[51px] md:pl-[93px] ">COURSES</h3>
            <h2 className="font-IBM font-normal text-[30px] md:text-4xl leading-[47px] text-[#0D1250] pl-[51px] md:pl-[93px] pt-[3px]">Select Appropriate Course</h2>
            <div className="flex flex-col md:flex-row mt-[63px] ml-[51px] md:ml-[93px] gap-[24px] md:gap-[70px] xl:gap-[22px] pb-[20px] lg:pb-[0px]">
            <div className="w-[224.45px] h-[210px] lg:w-[263.45px] lg:h-[193px] appro">
                    <h3 className="font-IBM font-medium text-lg leading-[23px] text-[#0FD022] pl-[17px] pt-[5px] md:pt-[26px]  ">TOEFL</h3>
                    <p className="font-IBM text-light leading-[24px] text-[#505056] px-[17px] pt-[22px] ">TOEFL iBT is an language proficiency test that is administered by the ETS via the internet to students option..</p>
                </div>
                <div className="w-[224.45px] h-[210px] lg:w-[263.45px] lg:h-[193px]  appro">
                    <h3 className="font-IBM font-medium text-lg leading-[23px] text-[#0D1250] pl-[17px] pt-[5px] md:pt-[26px]  ">IELTS</h3>
                    <p className="font-IBM text-light leading-[24px] text-[#505056] px-[17px] pt-[22px] ">International English Language Testing System International English Language Testing System is an English language …</p>
                </div>
                <div className=" w-[224.45px] h-[210px] lg:w-[263.45px] lg:h-[193px]  appro">
                    <h3 className="font-IBM font-medium text-lg leading-[23px] text-[#FF5421] pl-[17px] pt-[5px] md:pt-[26px]  ">SAT</h3>
                    <p className="font-IBM text-light leading-[24px] text-[#505056] pl-[17px] pt-[22px] ">The SAT is a standardized test owned and developed by the College Board for undergraduate admissions in US universi…</p>
                </div>
            </div>
        </div>
        <div className="basis-[20%]"></div>
        <div className="w-full h-[380px] px-[15px] md:px-[0px] xl:mb-[0px] mb-[10px]">
         <img src="/../assets/unsplash_E9NcsvbRVqo.png" alt="avatar" className="w-full h-full object-containt"/>
        </div>
    </div>
    <div className="grid  lg:grid-cols-2 mt-[4px]">
      <div className="w-full h-[330px] px-[15px] md:px-[0px] md:h-[444px]">
        <img src="/../assets/image 14.png" alt="join iltes" className="w-full h-full object-cover"/>
      </div>
      <div className="banner2 relative w-full h-[444px]">
      <div className="w-full h-[444px] bg-[#040A51]/[0.9] absolute"></div>
      <h2 className="font-IBM absolute font-semibold text-[32px] md:text-[40px] lg:text-[30px]  xl:text-[38px] leading-[36px] md:leading-[43px] lg:leading-[38px] xl:leading-[49.4px] text-[#FFFFFF] top-[19px] md:top-[74px] left-[47px] md:left-[79px] right-[29px] md:right-[307px] lg:right-[173px]">Get Special Rewards On Your
Test Score</h2>
        <p className="font-Work font-normal text-[15px] leading-[22.5px] text-[#FFFFFF] absolute top-[138px] md:top-[178px] lg:top-[162px] xl:top-[177px] left-[47px] md:left-[79px] right-[29px] md:right-[237px] lg:right-[95px] xl:right-[200px]">Coastline Education an independent student placement agency in Nepal, has been dedicated to empowering Nepalese students for accessing education. We have also had the notable success in recruiting students into the higher institutions in Australia, Canada and the United Kingdom.</p>
        <div className="w-[147px] h-[46px] bg-[#007EC5] rounded-sm absolute bottom-[65px] md:bottom-[103px] lg:bottom-[69px] xl:bottom-[80px] left-[47px] md:left-[79px] right-[538px]">
            <a href="" className="font-['Roboto'] font-bold text-base leading-[18.75px] tracking-[0.01em] absolute text-[#FFFFFF] pt-[14px] pl-[16px] ">REGISTER NOW</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Course