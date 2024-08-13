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
      // href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      // integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    />
    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/> */}
  </Head>
    <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0  ">
      <AboutBanner/>

      <JobListing />
    </div>
    </>
  );


};

export default index;
