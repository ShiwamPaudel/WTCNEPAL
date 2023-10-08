import AboutBanner from "@/components/AboutBanner";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BaseUrl } from "../api/global";
import Parse from "html-react-parser";
import axios from "axios";
import Item from "antd/es/list/Item";
import { imageUrl } from "@/utils/imageUrl";

const SingleNews = () => {
  const router = useRouter();
  let id = router.query.id;

  // console.log("id", id);

  const [news, setNews] = useState<any>(null);
  const [banner, setBanner] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getNews = async () => {
      let news = await axios.get(`${BaseUrl}/news-and-events/${id}?populate=*`);
      let response = await axios.get(
        `${BaseUrl}/news-banner?populate=*&?sort=rank:asc`
      );
      setBanner(response.data.data);
      //  let list=    product.data.data.slice(0,8)
      setNews(news.data.data);
      setIsLoading(false);
    };
    getNews();
  }, [id]);
  // console.log(news);

  return (
    <>
      <AboutBanner testimonial={banner} />

      <div className="container px-[15px] md:px-0 flex-wrap md:flex-nowrap 2xl:max-w-[1180px] flex gap-[40px] mx-auto py-[80px] ">
        <div className="md:basis-[70%]  border p-[20px]">
          <div className="h-[300px]">
            <img
              src={imageUrl(
                `${news?.attributes?.image?.data?.attributes?.url}`
              )}
              // src={news?.attributes?.image?.data?.attributes?.url}
              alt=""
              className="h-[100%] w-full object-cover"
            />
          </div>
          <div className="flex flex-row mt-[17px] ml-[20px] md:ml-[5px] "></div>

          <p className="font-IBM font-normal text-[16px]  leading-[24px] text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] ">
            {Parse(`${news?.attributes?.description}`)}
          </p>
          <div className="flex items-center justify-end pr-[11px]">
            <div className="w-[109px] h-[38px] bg-[#007EC5] hover:bg-[#007EC5]/[0.8] rounded-sm  mt-[31px] group">
              <a
                href=""
                className="font-IBM font-normal text-sm leading-[18px] text-[#FBFCFC] py-[10px] pl-[13px] flex flex-row"
              >
                Read More{" "}
                <img
                  src="/../assets/arrow.png"
                  alt="avatar"
                  className="w-[5px] h-[10px] ml-[10px] mt-[5px] group-hover:translate-x-[5px] transition duration-200 ease-out"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:basis-[30%] border">
          <div className="pt-[15px] px-[20px]">
            <h2 className="text-[20px] font-semibold uppercase">search</h2>
            <div className=" flex items-center h-[50px] mt-[20px]">
              <input type="text" className="border w-full h-[100%] pl-[14px]" />
              <div className="px-[20px] bg-black h-[100%] flex items-center justify-center">
                <HiOutlineSearch color="white" fontSize={25} />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] mt-[40px] px-[20px] pt-[15px]">
            <h2 className="text-[20px] font-semibold uppercase">
              recent posts
            </h2>
            <ul className="mt-[20px] space-y-[5px] text-[#0000CC] ">
              <li className="cursor-pointer border-b-[1px] pb-[10px] hover:underline">
                DiaSorin User Meet and Update Training: A Successful Gathering
                of Minds
              </li>
              <li className="cursor-pointer border-b-[1px] pb-[10px] hover:underline">
                WTC-DiaSorin Day 2023 Gala Dinner Celebration: A Grand Affair of
                Togetherness
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
