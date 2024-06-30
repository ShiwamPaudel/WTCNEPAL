import Link from "next/link";
import React from "react";

const BootomFooter = ({ data }: any) => {
  // console.log("bottom", data);
  return (
    <div className="bg-[#15157c] py-[24px]">
      <div className="container 2xl:max-w-[1180px]  mx-auto  px-[15px] sm:px-0 flex items-center justify-between flex-col md:flex-row gap-[18px] md:gap-0">
        <p className="text-[#fff] text-[16px]">
          Copyright @ 2023 Web Trading Concern Pvt.Ltd . All rights reserved..
          Site by{" "}
          <Link
            href="https://supremeitsolutions.com"
            target="_blank"
            className="text-[#23A8CD]"
          >
            Under Maintainance
          </Link>
        </p>
        {data?.map((item: any, index: number) => (
          <div className="flex items-center gap-[31px]">
            {item?.attributes?.Youtube_Url && (
              <Link href={`${item?.attributes?.Youtube_Url}`} target="_blank">
                <img
                  src="/../assets/youtube.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            )}
            {item?.attributes?.Twitter_url && (
              <Link href={`${item?.attributes?.Twitter_url}`} target="_blank">
                {" "}
                <img
                  src="/../assets/twitter.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            )}
            {item?.attributes?.Tiktok_Url && (
              <Link href={`${item?.attributes?.Tiktok_Url}`} target="_blank">
                {" "}
                <img
                  src="/../assets/tiktok.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            )}
            {item?.attributes?.Facebook_Url && (
              <Link href={`${item?.attributes?.Facebook_Url}`} target="_blank">
                {" "}
                <img
                  src="/../assets/facebook.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            )}
            {item?.attributes?.Instagram_Url && (
              <Link href={`${item?.attributes?.Instagram_Url}`} target="_blank">
                <img
                  src="/../assets/instagram.png"
                  alt=""
                  className="cursor-pointer"
                />{" "}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootomFooter;
