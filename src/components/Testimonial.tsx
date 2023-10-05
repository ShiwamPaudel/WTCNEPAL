// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Test2 from "./Test2";
// import Slide from './Slide'
import { BaseUrl } from "@/pages/api/global";
import { Skeleton } from "antd";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      let response = await axios.get(`${BaseUrl}/testimonials?populate=*`);
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data);
    };
    getTestimonial();
  }, []);

  return (
    <>
      {testimonial ? (
        <div className=" testimonial relative px-[15px] md:px-0 py-10">
          <div className="h-[100%] w-full bg-[#1CABD3CC]/[0.8] absolute left-0 top-0"></div>
          <div className="container 2xl:max-w-[1180px] mx-auto flex flex-col md:flex-row  ">
            <div className="md:basis-[40%]  md:ml-[0px] relative z-30">
              <h3 className="font-Work font-bold text-[13px] leading-[15px] tracking-[0.085em] text-[#fff] text-center md:text-left  uppercase ">
                TESTIMONIALS
              </h3>
              <h1 className="font-IBM uppercase text-[30px] md:text-[30px] text-center md:text-left leading-[47px] text-[#fff]  font-extrabold pr-[10px] pt-[4px] md:whitespace-pre">
                What Our Customers Say
              </h1>
              <p className="font-Work font-normal text-[16px] text-center md:text-start md:max-w-[385px] text-white leading-[24px]">
                Customer Reviews: Transforming Healthcare through Cutting-Edge
                Equipment. Success Stories: Revolutionizing Patient Care with
                Advanced Medical Technology. Success Stories: Revolutionizing
                Patient Care with Advanced Medical Technology
              </p>
            </div>
            {/* <div className="basis-[60%] mt-[92px] mb-[82px] md:ml-[23px] ">
              <Test2 testimonial={testimonial} />
            </div> */}
          </div>
        </div>
      ) : (
        <div
          className="max-w-[1180px] mx-auto flex justify-center items-center"
          style={{ zIndex: 100, backgroundColor: "white" }}
        >
          <Skeleton className="px-4" active={true} />
        </div>
      )}
    </>
  );
};
export default Testimonial;
