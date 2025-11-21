import AboutBanner from "@/components/AboutBanner";
import JobListing from "@/components/JobListing"; // Fixed import name
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
        <JobListing /> {/* Fixed component name */}
      </div>
    </>
  );
};

export default CareersPage;