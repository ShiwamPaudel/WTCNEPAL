import React, { useEffect, useState } from "react";
import axios from "axios";
// import { BaseUrl } from "@/pages/api/global";
import { BaseUrl } from "@/utils/global.mjs";

import parse from "html-react-parser";

import { imageUrl } from "@/utils/imageUrl";
const AboutUs = () => {
  const [customer, setCustomer] = useState<any>(null);

  useEffect(() => {
    let getAbout = async () => {
      let banenr = await axios.get(`${BaseUrl}/customers?populate=*`);
      setCustomer(banenr.data.data);
    };
    getAbout();
  }, []);
  return (
    <div className="custom-bg" >
      <div className="bg-gradient-to-r from-black/50 to-blue-600/95  md:from-neutral-50/90 md:to-blue-600/95  py-10 ">
        {customer?.map((item: any, index: number) => (
          <div className="md:flex my-8 items-center">
            <div className="basis-[55%] mt-[40px] md:mt-0 flex flex-col items-center justify-center ">
              <div className="bg-white p-8 rounded-r-[20px]">
                <img
                  src={imageUrl(
                    `${item?.attributes?.image?.data?.attributes?.url}`
                  )}
                  alt="img"
                />
              </div>
            </div>
            <div className="basis-[45%] flex flex-col justify-center items-center">
              <h1 className="text-white text-[32px] leading-[46.8px] font-semibold uppercase py-4 mt-8 md:mt-0">
                {item?.attributes?.title}
              </h1>
              <div className="w-[90%] text-xl text-justify text-white">
                {parse(`${item?.attributes?.description}`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
