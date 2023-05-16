import React from "react";
import Parse from "html-react-parser";

const PartneredUniverities = ({ partner,title }: any) => {
  console.log(partner);
  return (
    <div className="bg-[#007DC50A]  pt-[80px] px-[15px] pb-[50px] md:px-0">
      {partner?.map((item: any, index: number) => (
        <div
          key={index}
          className="container 2xl:max-w-[1180px] mx-auto flex flex-col md:flex-row "
        >
          <div className="flex md:items-start items-center basis-[40%] justify-center flex-col w-full ">
            <h2 className=" text-[#7A8A9E]  text-[13px]  leading-[15.25px] font-medium tracking-[ 0.085em]">
              {title}
            </h2>
            <h1 className="text-[#0D1250] uppercase text-[36px] font-medium text-left leading-[46.8px] mt-[3px]">
              {item?.attributes?.title}
            </h1>
            <div>{Parse(`${item?.attributes?.description}`)}</div>
            <p className="text-[#434343] mt-[24px] text-[16px] leading-[28.8px]  font-normal md:max-w-[521px] w-full md:text-start text-center">
              {}
            </p>
          </div>

          <div className="mt-[30px] md:mt-0 basis-[60%]">
            <img src={item?.attributes?.image?.data?.attributes?.url} alt="" className="w-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartneredUniverities;
