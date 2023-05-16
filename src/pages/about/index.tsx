import AboutBanner from "@/components/AboutBanner";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Partnered from "@/components/Partnered";
import PartneredUniverities from "@/components/PartneredUniverities";
import Testimonial from "@/components/Testimonial";
import React from "react";

const index = () => {

  return (
    <>
    <Head>
      <title>ABOUT WEB TRADING</title>
      <link rel="icon" href="/../assets/favicon.jpg" />
    </Head>
      <AboutBanner title="About Us"/>
      <AboutUs />
      <OurVision/>
   

    
    </>
  );
};

export default index;
