import AboutBanner from "@/components/AboutBanner";
import News from "@/components/News";
import NewsBlock from "@/components/NewsBlock";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>
          NEWS & EVENTS
        </title>
      </Head>
      <AboutBanner title="News & Events" />
      <NewsBlock />
    </div>
  );
};

export default index;
