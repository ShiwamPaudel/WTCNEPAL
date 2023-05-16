import { BaseUrl } from "@/pages/api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Parse from "html-react-parser";

const OurVision = () => {
  const [vision, setVision] = useState<any>(null);

  useEffect(() => {
    let getVision = async () => {
      let response = await axios.get(
        `${BaseUrl}/vison-and-mission-and-values?populate=*`
      );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setVision(response.data.data);
    };
    getVision();
  }, []);
  console.log(vision);

  console.log(typeof vision);

  return (
    <div className="container mx-auto  py-[80px] px-[15px] md:px-0">
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-[40px] gap-[20px] h-[260px] md:px-[200px]">
        {vision?.slice(1).map((item: any, index: any) => (
          <>
            {
         
              <div className="border hover:scale-[103%] transition duration-300 ease-out cursor-pointer shadow-lg bg-[#23a8cd] text-white rounded-[3px] flex-1 md:px-[80px] px-[15px] h-[100%] flex items-center justify-start flex-col gap-[15px] py-[20px]">
                <h1 className="text-[25px] font-semibold border-b-[2px]">
                  {item?.attributes?.title}
                </h1>

                <div className="w-full flex items-center justify-center text-center text-white">
                  {Parse(`${item?.attributes?.description}`)}
                </div>
              </div>
            }
          </>
        ))}
      </div>
      <div className="md:mt-[40px] mt-[135px] md:px-[200px] cursor-pointer">
        {vision?.slice(0, 1)?.map((item: any, index: number) => {
          return (
            <>
              <div className="border hover:scale-[103%] transition duration-300 ease-out shadow-lg bg-[#23a8cd] text-white rounded-[3px] flex items-center justify-center flex-col py-[20px] px-[15px] md:px-[80px]">
                <h1 className="text-[25px] font-semibold border-b-[2px]">
                  {item?.attributes.title}
                </h1>
                <div>{Parse(`${item?.attributes?.description}`)}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OurVision;
