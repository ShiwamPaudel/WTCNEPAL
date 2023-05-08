import AboutBanner from "@/components/AboutBanner";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Partnered from "@/components/Partnered";
import PartneredUniverities from "@/components/PartneredUniverities";
import Testimonial from "@/components/Testimonial";
import React from "react";

const index = () => {
  let data = [
    {
      img: "/../assets/partner1.png",
    },
    {
      img: "/../assets/partner2.png",
    },
    {
      img: "/../assets/partner3.png",
    },
    {
      img: "/../assets/partner4.png",
    },
    {
      img: "/../assets/partner5.png",
    },
    {
      img: "/../assets/partner1.png",
    },
    {
      img: "/../assets/partner3.png",
    },
  ];
  return (
    <>
      <AboutBanner title="About Us"/>
      <AboutUs />
      <OurVision/>
      {/* <PartneredUniverities
        img={"/../assets/globe.png"}
        title={"We Represent"}
        partner={"OUR PARTNERS"}
        description={
          "We take pride in representing over 50 renowned brands from around the globe. As your trusted partner, we bring you a diverse range of medical equipment and technologies, sourced from industry-leading manufacturers. With our extensive network and expertise, we ensure that you have access to the latest innovations in healthcare, all in one place."
        }
      />
      <Partnered data={data} slide={6} height={"125px"} style={"cover"} />
      <Testimonial />
     */}

    
    </>
  );
};

export default index;
