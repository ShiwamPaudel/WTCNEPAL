import { BaseUrl } from "@/pages/api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Parse from "html-react-parser";
import { imageUrl } from "@/utils/imageUrl";

const OurVision = () => {
  const [vision, setVision] = useState<any>(null);
  // console.log(vision);

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
  // console.log(vision);

  // console.log(typeof vision);

  return (
    <div className="container 2xl:max-w-[1180px] mx-auto  px-[15px] md:px-0 pb-10 flex flex-col md:flex-row items-center gap-10 text-center text-white">
      {/* <div className="rounded-tl-[15px] rounded-tr-[50px] rounded-br-[15px]  rounded-bl-[50px] w-[250px] h-[200px] bg-[#23a8cd] p-4 flex flex-col items-center gap-2">
        <h1 className="text-[20px]">Our Vision</h1>
        <img src="/assets/vision1.png" alt="" className="w-[50px] h-[50px]" />
      </div>
      <div className="rounded-tl-[15px] rounded-tr-[50px] rounded-br-[15px]  rounded-bl-[50px] w-[250px] h-[200px] bg-[#23a8cd] p-4 flex flex-col items-center gap-2">
        <h1 className="text-[20px]">Our Mission</h1>
        <img src="/assets/mission1.png" alt="" className="w-[50px] h-[50px]" />
      </div> */}

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px]  2xl:px-[200px]">
        {vision?.map((item: any, index: any) => (
          <>
            {
              <div className="border hover:scale-[103%] transition duration-300 ease-out cursor-pointer shadow-lg bg-[#23a8cd] hover:bg-[#0000CC] text-white rounded-[3px] flex-1 md:px-[25px] px-[15px] h-[100%] flex items-center justify-start flex-col gap-[15px] py-[20px] rounded-tl-[15px] rounded-tr-[50px] rounded-br-[15px]  rounded-bl-[50px]">
                <div className="bg-white rounded-[10px] p-[5px]">
                  <img
                    src={imageUrl(
                      `${item?.attributes?.image?.data?.attributes?.url}`
                    )}
                    alt=""
                    className="h-[80px] w-[80px]"
                  />
                </div>
                <h1 className="text-[25px] font-semibold capitalize border-b-[2px]">
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
      {/* <div className="md:mt-[40px] mt-[135px] hidden 2xl:px-[200px] cursor-pointer">
        {vision?.slice(2)?.map((item: any, index: number) => {
          return (
            <>
              <div className="border hover:scale-[103%] transition duration-300 ease-out shadow-lg bg-[#23a8cd] hover:bg-[#0000CC] text-white rounded-[3px] flex items-center justify-center flex-col py-[20px] px-[15px] md:px-[80px]">
                <div className="bg-white rounded-[10px] p-[5px] mb-[7px]">
                  <img
                    src={item?.attributes?.image?.data?.attributes?.url}
                    alt=""
                    className="h-[80px] w-[80px]"
                  />
                </div>
                <h1 className="text-[25px] capitalize font-semibold border-b-[2px]">
                  {item?.attributes.title}
                </h1>
                <div className="css-specific">
                  {Parse(`${item?.attributes?.description}`)}
                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
};

export default OurVision;
