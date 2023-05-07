import React from "react";

const Smalltitle = () => {
  return (
    <div className="bg-[#007DC5]/[0.05] pb-[95px]">
      <div className="container mx-auto mt-[30px] md:mt-[0px] pt-[120px]">
        <div className="flex items-center flex-col md:flex-row gap-[30px] md:gap-0 justify-between px-[15px] md:px-0">
          <div className="flex items-start justify-start flex-col">
            <h3 className="text-start font-bold text-[13px] font-Work leading-[15.25px] tracking-[0.05em] text-[#007EC5] md:pt-[0]">
              COURSES
            </h3>
            <h2 className="font-IBM font-normal text-[36px] leading-[46.8px] text-[#0D1250] pt-[3px] text-start max-w-[443px]">
              Select Appropriate Course That You Need
            </h2>
          </div>
          <button className="h-[59px] w-[194px]     rounded-[23px] bg-white flex items-center justify-center sd text-[#000000] text-[16px] font-semibold leading-[20.08px] ">
          Discover More
          </button>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[52px]">
          <div className="w-full h-[404px] lg:h-[384px] bg-[#FFFFFF] rounded-[4px]  cursor-pointer hover:scale-[103%] transition duration-200 ease-out border-[1px] border-solid border-[#EDEDED] box-border">
            <div className="w-[94%] md:w-full h-[208px] ml-[11px] md:ml-[0px]">
              <img
                src="/../assets/Rectangle 1218iltes.png"
                alt="ielts"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-IBM font-medium text-lg leading-[23.4px] text-[#000000] pl-[19px] pt-[33px] ">
              IELTS
            </h2>
            <p className="font-Work font-normal text-[15px] leading-[22.5px] text-[#000000] pl-[19px] pt-[17px]">
              International English Language Testing System International
              English Language Testing System is an English language …
            </p>
          </div>
          <div className="w-full h-[404px] lg:h-[384px] bg-[#FFFFFF] rounded-[4px]  cursor-pointer hover:scale-[103%] transition duration-200 ease-out border-[1px] border-solid border-[#EDEDED] box-border">
            <div className="w-[94%] md:w-full h-[208px] ml-[11px] md:ml-[0px]">
              <img
                src="/../assets/Rectangle 1217sat.png"
                alt="ielts"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-IBM font-medium text-lg leading-[23.4px] text-[#000000] pl-[19px] pt-[33px] ">
              SAT
            </h2>
            <p className="font-Work font-normal text-[15px] leading-[22.5px] text-[#000000] pl-[19px] pt-[17px]">
              The SAT is a standardized test owned and developed by the College
              Board for undergraduate admissions in US universi…
            </p>
          </div>
          <div className="w-full h-[404px] lg:h-[384px] bg-[#FFFFFF]  rounded-[4px] cursor-pointer hover:scale-[103%] transition duration-200 ease-out border-[1px] border-solid border-[#EDEDED] box-border">
            <div className="w-[94%] md:w-full h-[208px] ml-[11px] md:ml-[0px]">
              <img
                src="/../assets/Rectangle 1216toefl.png"
                alt="ielts"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-IBM font-medium text-lg leading-[23.4px] text-[#000000] pl-[19px] pt-[33px] ">
              TOEFL
            </h2>
            <p className="font-Work font-normal text-[15px] leading-[22.5px] text-[#000000] pl-[19px] pt-[17px]">
              TOEFL iBT is an English language proficiency test that is
              administered by the ETS via the internet to students option..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smalltitle;
