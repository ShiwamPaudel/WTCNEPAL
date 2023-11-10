import { BaseUrl } from "@/pages/api/global";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Parse from "html-react-parser";
import { imageUrl } from "@/utils/imageUrl";

const NewsBlock = () => {
  const router = useRouter();

  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    let getNews = async () => {
      let response = await axios.get(`${BaseUrl}/news-and-events/?populate=*`);
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setNews(response.data.data);
    };
    getNews();
  }, []);

  const handleClick = (item: any) => {
    router.push(`/news/${item.id}`);
  };
  return (
    <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {news?.map((item: any, index: number) => (
          <div
            className="kal overflow-hidden"
            key={index}
            onClick={() => handleClick(item)}
          >
            <div className="w-[94%] md:w-full ml-[12px] md:ml-[0px] h-[274px] ">
              <img
                src={imageUrl(
                  `${item?.attributes?.image?.data?.attributes?.url}`
                )}
                alt="avatar"
                className="w-full h-full object-cover rounded-[10px] cursor-pointer hover:scale-[106%] transition duration-300 ease-out"
              />
            </div>
            <div className="hidden flex-row mt-[17px] ml-[20px] md:ml-[5px] ">
              <p className="font-IBM font-normal text-xs leading-[16px] text-[ #848385]  border-r-[1px] border-solid border-[#000000] pr-[8px] text-[#848385]">
                {item?.date}
              </p>
              <img
                src="/../assets/Vectoreye.svg"
                alt="avatar"
                className="w-[9px] h-[7px] ml-[8px] pt-[4px]"
              />
              <p className="font-IBM font-normal text-xs leading-[16px] text-[#848385] pl-[5px]pt-[4px] ">
                {item?.time}
              </p>
            </div>
            <h2 className="font-IBM hidden font-medium text-[27px] md:text-[28px] leading-[36px] text-[#0D1250] pt-[11px] pl-[20px] md:pl-[5px] ">
              {item?.title}
            </h2>
            <div className="h-[109px] overflow-hidden text-justify">
              <div className=" font-normal text-[15px] leading-[24px] font-inter text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] md:max-w-[378px]">
                {Parse(`${item?.attributes?.description}`)}
              </div>
            </div>
            <div className="flex items-center justify-end pr-[11px]">
              <div className="w-[109px] h-[38px] bg-[#007EC5] hover:bg-[#007EC5]/[0.8] rounded-sm  mt-[15px] group">
                <p className="font-IBM font-normal text-sm leading-[18px] text-[#FBFCFC] py-[10px] pl-[13px] flex flex-row cursor-pointer">
                  Read More
                  <img
                    src="/../assets/arrow.png"
                    alt="avatar"
                    className="w-[5px] h-[10px] ml-[10px] mt-[5px] group-hover:translate-x-[5px] transition duration-200 ease-out"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlock;
