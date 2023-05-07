import React from 'react'
import Count from './Count'

function Education() {
  return (
    <>
    <div className="w-full h-[500px] md:h-[561px] lg:h-[607px] banner3 relative">
     <div className="w-full h-full absolute bg-[#040A51]/[0.9]"></div>
     <div className=" w-full flex flex-col absolute md:h-full xl:flex-row ">
        <div className="basis-[40%]">
        <h3 className="font-Work font-bold text-[13px] leading-[16px] tracking-[0.085px] text-[#007EC5] pt-[19px] md:pt-[72px] lg:pt-[147px] pl-[24px] md:pl-[101px]">ABOUT US</h3>
        <h2 className=" max-w-[700px] font-IBM font-medium text-[30px] md:text-[36px] leading-[35px] md:leading-[47px] text-[#FFFFFF] pl-[24px] md:pl-[97px] xl:w-full">Coastline Education the right place for Education</h2>
        <p className=" max-w-[500px] font-Work font-normal text-[15px] leading-[22.5px] text-[#C8C8C8] pr-[10px] md:pr-[10px] pt-[11px] pl-[24px] md:pl-[97px] xl:w-full">We have also had the notable success in recruiting students into the higher institutions in Australia, Canada, USA and the United Kingdom.</p>
        </div>
        <div className="basis-[60%]  ">
            <div className="flex flex-row  items-center">
            <div className=" border-r-[1px] border-solid border-[#FFFFFF] mt-[57px] ml-[26.5px] md:ml-[80px] lg:ml-[175px] xl:mt-[150.55px]">
                <div className="w-[50px] md:w-[60px] h-[42px] md:h-[51px] ml-[5px] ">
                <img src="/../assets/Vector.svg" alt="avatar" className="w-full h-full object-cover"/>
                </div>
                <Count/>
                <p className="font-IBM font-light text-[10px] md:text-[18px] leading-[27px] text-[#FFFFFF]  md:pt-[11px] pr-[10px] md:pr-[31px] lg:pr-[64px] whitespace-pre">Student of Purpose</p>
            </div>
                
            <div className=" border-r-[1px] border-solid border-[#FFFFFF] mt-[57px] ml-[19.5px] md:ml-[76.5px] lg:ml-[113px] xl:mt-[150.55px]">
                <div className="w-[50px] md:w-[60px] h-[42px] md:h-[51px] ml-[5px] ">
                <img src="/../assets/Vector.svg" alt="avatar" className="w-full h-full object-cover"/>
                </div>
                <Count/>
                <p className="font-IBM font-light text-[10px] md:text-[18px] leading-[27px] text-[#FFFFFF]  md:pt-[11px] pr-[10px] md:pr-[31px] lg:pr-[64px] whitespace-pre">Student of Purpose</p>
            </div>

            <div className="  mt-[57px] ml-[19.5px] md:ml-[76.5px] lg:ml-[113.5px] xl:mt-[150.55px]">
                <div className="w-[50px] md:w-[60px] h-[42px] md:h-[51px] ml-[5px] ">
                <img src="/../assets/Vector.svg" alt="avatar" className="w-full h-full object-cover"/>
                </div>
                <Count/>
                <p className="font-IBM font-light text-[10px] md:text-[18px] leading-[27px] text-[#FFFFFF]  md:pt-[11px] pr-[10px] md:pr-[31px] lg:pr-[64px] whitespace-pre">Student of Purpose</p>
            </div>          
            </div>
          
        </div>
     </div>
    </div>
    </>
  )
}

export default Education