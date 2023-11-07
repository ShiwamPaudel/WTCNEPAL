import React from "react";
import Parse from "html-react-parser";
import { imageUrl } from "@/utils/imageUrl";

const PartneredUniverities = ({ partner, title }: any) => {
  console.log(partner);
  return (
    <div className=" container  mx-auto my-8 ">
      <h2 className="text-[36px] font-semibold leading-[42.19px] text-center uppercase pb-10">
        {title}
      </h2>
      <div className="grid grid-cols-7 auto-rows-[100px]">
        {partner?.map((item: any, index: number) => (
          <div className="flex justify-center items-center">
            <img
              src={imageUrl(
                `${item?.attributes?.image?.data?.attributes?.url}`
              )}
              alt=""
              className="w-[60%] h-[50%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartneredUniverities;
