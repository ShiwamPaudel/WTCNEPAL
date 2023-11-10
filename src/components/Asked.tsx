import React, { useState, useEffect } from "react";
import Collape from "./Collape";
import { imageUrl } from "@/utils/imageUrl";

const Asked = ({ faq }: any) => {
  // console.log("faq", faq);
  return (
    <div className="bg-white  px-[15px] md:px-0 py-10">
      <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085em] text-[#007EC5] text-center ">
        FAQs
      </h3>
      <h2 className="font-IBM font-normal uppercase text-4xl  text-[#0D1250] text-center ">
        Frequently Asked Questions
      </h2>
      <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto flex items-center md:flex-row flex-col  gap-[40px] ">
        <div className="basis-[60%] ">
          <Collape />
        </div>
        <div className="basis-[40%]">
          {faq?.map((item: any, index: number) => (
            <img
              src={imageUrl(
                `${item?.attributes?.image?.data?.attributes?.formats?.large.url}`
              )}
              alt=""
              className="md:h-[552px] w-full object-cover "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asked;
