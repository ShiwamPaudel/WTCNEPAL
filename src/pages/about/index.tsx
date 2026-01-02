import AboutBanner from "@/components/AboutBanner";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Partnered from "@/components/Partnered";
import PartneredUniverities from "@/components/PartneredUniverities";
import Testimonial from "@/components/Testimonial";
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from "@/utils/global.mjs";
import Item from 'antd/es/list/Item'

const index = () => {
  const [testimonial,setTestimonial]=useState<any>(null)


  useEffect(()=>{

    let getTestimonial =async()=>{
      let response = await axios.get(`${BaseUrl}/about-banner?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data)
    }
    getTestimonial()
    
    },[])


  return (
    <>
    <Head>
      <title>ABOUT WEB TRADING</title>
      <meta name="description" content="Welcome to WTC Nepal." />
        <meta property="og:title" content="Home - WTC Nepal" />
        <meta property="og:description" content="Welcome to WTC Nepal. Your gateway to Healthcare Equipment solutions." />
        <meta property="og:url" content="https://wtcnepal.com" />
      <link rel="icon" href="/../assets/favicon.png" />
    </Head>
    <a
        href="https://wa.me/+9779851140881"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 .08 5.29.08 11.92c0 2.1.54 4.16 1.57 5.96L0 24l6.3-1.63A11.91 11.91 0 0012 23.84c6.63 0 11.92-5.29 11.92-11.92a11.78 11.78 0 00-3.4-8.44zM12 20.1c-1.7 0-3.36-.45-4.8-1.3l-.34-.21-3.74.97.99-3.65-.22-.37A8.32 8.32 0 013.7 12.02C3.7 7.36 7.35 3.7 12 3.7S20.3 7.36 20.3 12.02 16.65 20.1 12 20.1z"/></svg>
      </a>
      <AboutBanner testimonial={testimonial}/>
      <AboutUs />
      <OurVision/>
   

    
    </>
  );
};

export default index;
