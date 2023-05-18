import AboutBanner from "@/components/AboutBanner";
import News from "@/components/News";
import NewsBlock from "@/components/NewsBlock";
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from '@/pages/api/global'
import Head from "next/head";

const index = () => {
  const [testimonial,setTestimonial]=useState<any>(null)


  useEffect(()=>{

    let getTestimonial =async()=>{
      let response = await axios.get(`${BaseUrl}/news-banner?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data)
    }
    getTestimonial()
    
    },[])

  return (
    <div>
      <Head>
        <title>
          NEWS & EVENTS
        </title>
        <link rel="icon" href="/../assets/wtc.svg" />
      </Head>
      <AboutBanner testimonial={testimonial} />
      <NewsBlock />
    </div>
  );
};

export default index;
