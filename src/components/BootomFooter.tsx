import Link from "next/link";
import React from "react";

const BootomFooter = () => {
  return (
    <div className="bg-[#15157c] py-[24px]">
      <div className="container 2xl:max-w-[1180px] mx-auto flex items-center justify-between flex-col md:flex-row gap-[18px] md:gap-0">
        <p className="text-[#fff] text-[16px]">Copyright @ 2023 Web Trading Concern Pvt.Ltd . All rights reserved.. Site by <Link href="https://supremeitsolutions.com" target="_blank" className="text-[#23A8CD]"> Supreme IT Solutions</Link></p>
        <div className="flex items-center gap-[31px]">
            <img src="/../assets/youtube.png" alt=""  className="cursor-pointer"/>
            <img src="/../assets/twitter.png" alt="" className="cursor-pointer" />
            <img src="/../assets/tiktok.png" alt=""  className="cursor-pointer"/>
            <img src="/../assets/facebook.png" alt=""  className="cursor-pointer"/>
            <img src="/../assets/instagram.png" alt=""  className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default BootomFooter;
