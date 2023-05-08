import React from "react";
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="container mx-auto md:flex gap-[93px] px-[15px] md:px-0 ">
        <div className="basis-[60%]">
          <h2 className="text-[#7A8A9E] text-[13px] leading-[15.25px] tracking-[0.085em] font-bold">
            ABOUT US
          </h2>
          <h1 className="text-[#003760] text-[38px] leading-[46.8px] font-extrabold  mt-[8px]">
            Web Trading Concern Pvt. Ltd.
          </h1>
          <div className="w-full">
            <p className="text-[#696969] text-[15px] leading-[22.5px] font-normal w-full mt-[21px]">
              Established in 2001 AD, Web Trading Concern Pvt. Ltd is a reputed
              leading Medical, Lab and Health equipment supplier in Nepal
              providing services to reputed government and private Hospitals,
              healthcare institutions, 5 star Hotels, airport, shopping malls
              and development sectors in Nepal.
            </p>
            <p className="text-[#696969] text-[15px] leading-[22.5px] font-normal  w-full mt-[18px]">
              Web Trading Concern Pvt. Ltd provides a range of healthcare
              solutions by delivering products from top multinational
              manufacturing company in the field of diagnostics and medical
              support services. It has developed a reputation for excellence and
              has rapidly become the most trusted medical and Health equipment
              supplier in Nepal in terms of reliability and fastest service with
              a simple aim: the pursuit of uncompromising quality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[34px] mt-[40px]">
            <div className="about_box bg-[#007EC5]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#007EC5] text-[44.8px] leading-[67.2px]">
              <CountUp end={100} enableScrollSpy />
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Years Experience
              </p>
            </div>
            <div className="about_box bg-[#00A023]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#00A023] text-[44.8px] leading-[67.2px]">
              <CountUp end={400} enableScrollSpy />+
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Visa Gran ted{" "}
              </p>
            </div>
            <div className="about_box bg-[#FF7F0A]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#FF7F0A] text-[44.8px] leading-[67.2px]">
              <CountUp end={98} enableScrollSpy />%
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Admission Success{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[40%] mt-[40px] md:mt-0 flex items-center justify-center">
          <img src="/../assets/biglogo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
