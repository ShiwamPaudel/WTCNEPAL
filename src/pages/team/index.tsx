import AboutBanner from "@/components/AboutBanner";
import Team from "@/components/Team";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BaseUrl } from "@/pages/api/global";
import Head from "next/head";

const index = () => {
  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      // let response = await axios.get(
      //   `${BaseUrl}/team-banner?populate=*&?sort=rank:asc`
      // );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      // setTestimonial(response.data.data);
    };
    getTestimonial();
  }, []);
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      {/* <AboutBanner testimonial={testimonial} /> */}
      <Team/>
    </div>
  );
};

export default index;
