import React,{useEffect,useState} from "react";
import axios from "axios";
// import CountUp from "react-countup";
import { CountUp } from 'use-count-up'
import Link from "next/link";
import { BaseUrl } from "@/pages/api/global";
import parse from 'html-react-parser';

const AboutUs = () => {
  const [about,setAbout]=useState<any>(null)


  useEffect(()=>{

    let getAbout =async()=>{
      let banenr = await axios.get(`${BaseUrl}/about-uses?populate=*`)
      setAbout(banenr.data.data)
    }
    getAbout()
    
    },[])

  return (
    <div className="pt-[80px] pb-[80px]">
      {
        about?.map((item:any,index:number)=>(
          <div className="container 2xl:max-w-[1180px] mx-auto md:flex gap-[93px] px-[15px] md:px-0 ">
          <div className="basis-[50%]">
            <h2 className="text-[#7A8A9E] text-[13px] leading-[15.25px] tracking-[0.085em] font-bold">
              ABOUT US
            </h2>
            <h1 className="text-[#003760] text-[32px] leading-[46.8px] font-extrabold uppercase  mt-[8px]">
        {item?.attributes?.title}
            </h1>
            <div className="w-full">
              {
                parse(`${item?.attributes?.description}`)
              }
            
            </div>
            <div className="grid md:grid-cols-3 gap-[34px] mt-[40px]">
              <div className="about_box bg-[#007EC5]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#007EC5] text-[44.8px] leading-[67.2px]">
                  
                  {/* <CountUp end={100} enableScrollSpy /> */}
                  <CountUp isCounting end={parseInt(item.attributes.Years_Experience)} duration={3.2} />
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="about_box bg-[#00A023]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#00A023] text-[44.8px] leading-[67.2px]">
                  {/* <CountUp end={400} enableScrollSpy />+ */}
                  <CountUp isCounting end={parseInt(item.attributes.Customers)} duration={3.2} />+
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Customers{" "}
                </p>
              </div>
              <div className="about_box bg-[#FF7F0A]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#FF7F0A] text-[44.8px] leading-[67.2px]">
                  {/* <CountUp end={98} enableScrollSpy />% */}
                  <CountUp isCounting end={parseInt(item.attributes.Repeated_Customers)} duration={3.2} />%
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Repeated Customers{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[45%] mt-[40px] md:mt-0 flex items-center justify-center">
            <img src={item?.attributes?.image?.data?.attributes?.url} alt="img" />
          </div>
        </div>
        ))
      }
  
    </div>
  );
};

export default AboutUs;
