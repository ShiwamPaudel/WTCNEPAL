// import { BaseUrl } from "@/pages/api/global";
import { BaseUrl } from "@/utils/global.mjs";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "@/utils/imageUrl";

const Team = () => {
  const [testimonial, setTestimonial] = useState<any>(null);
  const [testimonial2, setTestimonial2] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      let [teamMember, teamData] = await Promise.all([
        axios.get(`${BaseUrl}/team-members?populate=*&sort=rank:asc`),
        axios.get(`${BaseUrl}/out-teams?populate=*&sort=rank:asc`),
      ]);
      setTestimonial(teamMember.data.data);
      setTestimonial2(teamData.data.data);
    };
    getTestimonial();
  }, []);

  return (
    <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto pt-[20px] px-[15px] md:0">
      {testimonial2?.map((item: any, index: number) => (
        <div className=" flex items-center justify flex-col gap-[10px]">
          <h1 className="text-[32px] font-semibold ">
            {item?.attributes?.title}
          </h1>
          <p className="text-[16px] leading-[24px] font-normal max-w-[1100px] text-center">
            {item?.attributes?.description}
          </p>
        </div>
      ))}

      <div className="grid md:grid-cols-4 grid-cols-1 px-[0px] my-20 gap-[30px]">
        {testimonial?.map((item: any, index: number) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <div className="h-[288px]">
                  <img
                    src={imageUrl(
                      `${item?.attributes?.image?.data?.attributes?.url}`
                    )}
                    className="h-full w-full object-cover"
                    alt={item?.attributes?.name}
                  />
                </div>
                <div className="py-[20px] pl-[15px] text-left space-y-[5px]">
                  <h1 className="text-[21px] font-semibold leading-[25px]">
                    {item?.attributes?.name}
                  </h1>
                  <p className="text-[16px] font-normal leading-[24px]">
                    {item?.attributes?.position}
                  </p>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <h1 className="text-[21px] font-semibold leading-[25px] mb-2">
                  {item?.attributes?.name}
                </h1>
                <p className="text-[14px] font-medium leading-[20px] mb-4 opacity-90">
                  {item?.attributes?.position}
                </p>
                <div className="text-[14px] font-normal leading-[22px] overflow-y-auto max-h-[220px]">
                  {item?.attributes?.details || (
                    <p className="italic opacity-80">
                      ...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
