import React from "react";
import { imageUrl } from "@/utils/imageUrl";

const AboutBanner = ({ testimonial }: any) => {
  // console.log("testimonial.data", testimonial);
  return (
    <div className="bg-[#23a8cd]">
      <div className="relative max-w-[1180px] mx-auto">
        <img
          src={imageUrl(
            `${testimonial?.attributes?.image?.data?.attributes?.url}`
          )}
          className="w-full  object-cover"
          alt=""
        />

        <h1 className="text-[#FEFEFE] cursor-pointer md:text-[48px] text-[25px] font-bold leading-[60.24px] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] capitalize">
          {testimonial?.attributes?.title}
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;
