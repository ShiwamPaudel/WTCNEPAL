import React from "react";
import Collape from "./Collape";

const Asked = ({ faq }: any) => {
  return (
    <div className="bg-white pb-[91px] px-[15px] md:px-0">
      <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085em] text-[#007EC5] text-center pt-[99px]">
        FAQs
      </h3>
      <h2 className="font-IBM font-normal uppercase text-4xl leading-[47px] text-[#0D1250] text-center pt-[4px]">
        Frequently Asked Questions
      </h2>
      <div className="container 2xl:max-w-[1180px] mx-auto flex items-center md:flex-row flex-col  gap-[40px] mt-[49px]">
        <div className="basis-[60%] ">
          <Collape />
        </div>
        <div className="basis-[40%]">
          {faq?.map((item: any, index: number) => (
            <img
              src={item?.attributes?.image?.data?.attributes?.url}
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
