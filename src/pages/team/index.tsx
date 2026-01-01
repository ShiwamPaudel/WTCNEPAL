import AboutBanner from "@/components/AboutBanner";
import Team from "@/components/Team";
import React, { useState, useEffect } from "react";
import axios from "axios";

// import { BaseUrl } from "@/pages/api/global";
import { BaseUrl } from "@/utils/global";

import Head from "next/head";

const index = () => {
  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
    };
    getTestimonial();
  }, []);
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      <Team/>
    </div>
  );
};

export default index;
