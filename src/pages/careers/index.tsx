import AboutBanner from "@/components/AboutBanner";
import HardcodedJobListing from "@/components/JobListing";
import React from "react";
import Head from "next/head";

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers - Join Our Team</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0">
        <AboutBanner />
        <HardcodedJobListing />
      </div>
    </>
  );
};

export default CareersPage;