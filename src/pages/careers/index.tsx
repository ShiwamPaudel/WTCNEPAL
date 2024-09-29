import AboutBanner from "@/components/AboutBanner";
import JobListing from "@/components/JobListing";
import React from "react";
import Head from "next/head";

const index = () => {
  return (<>
 <Head>
    <title>Careers</title>
    <link rel="icon" href="/../assets/favicon.png" />
    <link
      rel="stylesheet"
    />
    </Head>
    <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0  ">
      <AboutBanner/>

      <JobListing />
    </div>
    </>
  );


};

export default index;
