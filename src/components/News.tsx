import React from "react";
import NewsBlock from "./NewsBlock";

function News() {
  return (
    <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto px-[15px] md:px-0 py-10">
      <h3 className="font-Work font-bold text-[13px] leading-[15.25px] tracking-[0.085em] text-[#007EC5] text-center">
        BLOGS
      </h3>
      <h2 className="font-IBM uppercase font-medium text-[34px] md:text-[36px] leading-[47px] text-[#0D1250] pb-10 text-center">
        Latest News & Events
      </h2>

      <NewsBlock />
    </div>
  );
}

export default News;
