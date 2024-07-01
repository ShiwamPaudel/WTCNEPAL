import AboutBanner from "@/components/AboutBanner";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BaseUrl } from "../api/global";
import Parse from "html-react-parser";
import axios from "axios";
import Item from "antd/es/list/Item";
import { imageUrl } from "@/utils/imageUrl";
import Head from "next/head";
import { title } from "process";

const SingleNews = () => {
  const router = useRouter();
  const id = router.query.id;

  const [news, setNews] = useState<any>(null);
  const [forRecentPost, setForRecentPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getNews = async () => {
      try {
        const newsResponse = await axios.get(`${BaseUrl}/news-and-events/${id}?populate=*`);
        const recentPostsResponse = await axios.get(`${BaseUrl}/news-and-events/?populate=*`);

        setNews(newsResponse?.data.data);
        setForRecentPost(recentPostsResponse?.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    getNews();
  }, [id]);

  useEffect(() => {
    if (news) {
      document.title = news.attributes.title || "News & Events";
    }
  }, [news]);

  return (
    <>
      <Head>
        <title>{news ? news.attributes.title : "News & Events"}</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      {/* <AboutBanner testimonial={banner} /> */}

      <div className="container px-[15px] md:px-0 flex-wrap md:flex-nowrap 2xl:max-w-[1180px] xl:px-20 2xl:px-0   flex gap-[40px] mx-auto py-[80px] ">
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

          <div className="font-IBM font-normal text-[16px]  leading-[24px] text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] ">
            {Parse(`${news?.attributes?.description}`)}
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
              {forRecentPost
                ?.filter((item: any) => String(item.id) !== id)
                .map((filteredItem: any, index: number) => (
                  <li
                    key={index}
                    className="cursor-pointer border-b-[1px] pb-[10px] hover:underline"
                    onClick={() => router.push(`/news/${filteredItem.id}`)}
                  >
                    {Parse(
                      `${filteredItem?.attributes?.description.slice(0, 90)}`
                    )}
                    ...
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
