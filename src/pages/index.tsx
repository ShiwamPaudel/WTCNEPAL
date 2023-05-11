import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import PartneredUniverities from "@/components/PartneredUniverities";
import Partnered from "@/components/Partnered";
import Asked from "@/components/Asked";
import Requestcall from "@/components/Requestcall";
import News from "@/components/News";
import Fotter from "@/components/Fotter";
import Products from "@/components/Products";
import BootomFooter from "@/components/BootomFooter";
import Nav1 from "@/components/Nav1";
import Partnered1 from "@/components/Partnerned1";
import { useState,useEffect } from "react";
import { BaseUrl } from "./api/global";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let data = [
    {
      img:"/../assets/partner1.png"
    },
    {
      img:"/../assets/partner2.png"
    },
    {
      img:"/../assets/partner3.png"
    },
    {
      img:"/../assets/partner4.png"
    },
    {
      img:"/../assets/partner5.png"
    }, 
     {
      img:"/../assets/partner1.png"
    },
    {
      img:"/../assets/partner3.png"
    },
  
  ]
  let data2 = [
    {
      img:"/../assets/cus1.png"
    },
    {
      img:"/../assets/cus2.png"
    },
    {
      img:"/../assets/cus3.png"
    },
    {
      img:"/../assets/cus4.png"
    },
    {
      img:"/../assets/cus5.png"
    }, 
     {
      img:"/../assets/cus6.png"
    },
    {
      img:"/../assets/cus7.png"
    },
    {
      img:"/../assets/cus8.png"
    }, 
     {
      img:"/../assets/cus9.png"
    },
    {
      img:"/../assets/cus10.png"
    },
    {
      img:"/../assets/cus7.png"
    },
  
  ]


  const [partner,setPartner]=useState<any>(null)
  const [customer,setCustomer]=useState<any>(null)
  const [slide1,setSlide1]=useState<any>(null)
  const [faq,setFaq]=useState<any>(null)


  useEffect(()=>{

    let getPartner =async()=>{
      let response = await axios.get(`${BaseUrl}/our-partners?populate=*`)
      let partner1 = await axios.get(`${BaseUrl}/customers?populate=*`)
      let slide1 = await axios.get(`${BaseUrl}/slider1s?populate=*`)
      let faq = await axios.get(`${BaseUrl}/faqs?populate=*`)
      setSlide1(slide1.data.data)
      setPartner(response.data.data)
      setFaq(faq.data.data)
      setCustomer(partner1.data.data)
    }
    getPartner()
    
    },[])

    console.log(customer)
  return (
    <>
      <Head>
        <title>WEB TRADING CONCERN PVT.LTD</title>
      </Head>
{/* <div className="max-w-[1180px] mx-auto"> */}


      <Navbar />
      <AboutUs />
      <Products/>
      <Testimonial />
      <PartneredUniverities partner={partner} title={"OUR PARTNERS"} />
      <Partnered data={slide1} slide={6} height={'125px'} style={'cover'}/>
      <Asked faq={faq} />
      {/* <Testimonial /> */}
      <Requestcall />
      <PartneredUniverities partner={customer} title={"OUR Customers"} />
      <Partnered1 data={data2} slide={10} height={'79px'} style={'contain'}/>
      <News />
      {/* </div> */}
  
    </>
  );
}
