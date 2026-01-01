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
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    </Head>
    <a
        href="https://wa.me/+9779851140881"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <AboutBanner testimonial={testimonial}/>
      <AboutUs />
      <OurVision/>
   

    
    </>
  );
};

export default index;
