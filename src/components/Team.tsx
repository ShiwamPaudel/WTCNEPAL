import { BaseUrl } from "@/pages/api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "@/utils/imageUrl";

const Team = () => {
  const [testimonial, setTestimonial] = useState<any>(null);
  const [testimonial2, setTestimonial2] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      let [teamMember, teamData] = await Promise.all([
        axios.get(`${BaseUrl}/team-members?populate=*&?sort=rank:asc`),
        axios.get(`${BaseUrl}/out-teams?populate=*&?sort=rank:asc`),
      ]);
      // let response = await axios.get(`${BaseUrl}/team-members?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(teamMember.data.data);
      setTestimonial2(teamData.data.data);
    };
    getTestimonial();
  }, []);

  // console.log(testimonial2)
  return (
    <div className="container 2xl:max-w-[1180px] mx-auto pt-[20px] px-[15px] md:0">
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

      <div className="grid md:grid-cols-4 grid-cols-1 px-[00px] my-20 gap-[30px] ">
        {testimonial?.map((item: any, index: number) => (
          <div
            key={index}
            className="border cursor-pointer group rounded-[3px] hover:scale-[103%] transition duration-150 ease-out"
          >
            <div className="h-[288px]">
              <img
                src={imageUrl(
                  `${item?.attributes?.image?.data?.attributes?.url}`
                )}
                className="h-[100%] w-full object-cover"
                alt=""
              />
            </div>
            <div className="py-[20px] pl-[15px] space-y-[5px] group-hover:bg-[#1CABD3] transition-colors duration-300 ease-out">
              <h1 className="text-[21px] font-normal leading-[25px] group-hover:text-white ">
                {item?.attributes?.name}
              </h1>
              <p className="text-[16px] font-thin leading-[24px] group-hover:text-white">
                {item?.attributes?.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
