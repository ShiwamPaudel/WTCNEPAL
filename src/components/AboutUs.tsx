import React from "react";
// import CountUp from "react-countup";
import { CountUp } from 'use-count-up'
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="container 2xl:max-w-[1180px] mx-auto md:flex gap-[93px] px-[15px] md:px-0 ">
        <div className="basis-[50%]">
          <h2 className="text-[#7A8A9E] text-[13px] leading-[15.25px] tracking-[0.085em] font-bold">
            ABOUT US
          </h2>
          <h1 className="text-[#003760] text-[32px] leading-[46.8px] font-extrabold uppercase  mt-[8px]">
            Web Trading Concern Pvt. Ltd.
          </h1>
          <div className="w-full">
            <p className="text-[#696969] text-[15px] leading-[22.5px] font-normal w-full mt-[21px]">
              Web Trading Concern Pvt. Ltd is a renowned medical equipment
              supplier in Nepal that provides healthcare solutions to government
              and private hospitals, healthcare institutions, 5-star hotels,
              airports, shopping malls, and development sectors. We partner with
              top multinational manufacturing companies such as Eppendorf
              BioSystems, Avantor, Asclepion, i-sens, Improve Diversey,
              DiaSorin, Dermaindia, Bowin, Gesan, Newster, NeoMedica, and Meling
              to deliver high-quality medical and health equipment.
            </p>
            <p className="text-[#696969] text-[15px] leading-[22.5px] font-normal  w-full mt-[18px]">
              Our commitment to providing the best healthcare solutions has
              earned us a reputation for excellence in Nepal. Our reliable and
              fast services have made us the most dependable supplier of medical
              equipment in Nepal. At Web Trading Concern Pvt. Ltd, customer
              satisfaction is our top priority, and we take pride in our loyal
              customer base. We cater to leading government and private
              hospitals, healthcare institutions, 5-star hotels, airports,
              shopping malls, and development sectors in Nepal. We strive to
              expand our reach and cater to the needs of new customers across
              Nepal. Choose Web Trading Concern Pvt. Ltd for{" "}
              <span className="font-semibold text-[#0101CC] cursor-pointer">
                <Link href="/about"> Read more.....</Link>{" "}
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[34px] mt-[40px]">
            <div className="about_box bg-[#007EC5]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#007EC5] text-[44.8px] leading-[67.2px]">
                {/* <CountUp end={100} enableScrollSpy /> */}
                <CountUp isCounting end={23} duration={3.2} />
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Years Experience
              </p>
            </div>
            <div className="about_box bg-[#00A023]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#00A023] text-[44.8px] leading-[67.2px]">
                {/* <CountUp end={400} enableScrollSpy />+ */}
                <CountUp isCounting end={400} duration={3.2} />+
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Customers{" "}
              </p>
            </div>
            <div className="about_box bg-[#FF7F0A]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
              <h2 className="text-[#FF7F0A] text-[44.8px] leading-[67.2px]">
                {/* <CountUp end={98} enableScrollSpy />% */}
                <CountUp isCounting end={98} duration={3.2} />%
              </h2>
              <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                Repeated Customers{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[45%] mt-[40px] md:mt-0 flex items-center justify-center">
          <img src="/../assets/home_image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
