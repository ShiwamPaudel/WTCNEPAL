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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from "react-loader-spinner";
import Test from "../components/Test"


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

  // const [isLoading, setIsLoading] = useState(true);
  // const [partner,setPartner]=useState<any>(null)
  // const [customer,setCustomer]=useState<any>(null)
  // const [slide1,setSlide1]=useState<any>(null)
  // const [faq,setFaq]=useState<any>(null)


  // useEffect(()=>{

  //   let getPartner =async()=>{
  //     let slide1 = await axios.get(`${BaseUrl}/slider1s?populate=*`)
  //     setSlide1(slide1.data.data)
  //     let response = await axios.get(`${BaseUrl}/our-partners?populate=*`)
  //     setPartner(response.data.data)
  //     let partner1 = await axios.get(`${BaseUrl}/customers?populate=*`)
  //     setCustomer(partner1.data.data)
  //     let faq = await axios.get(`${BaseUrl}/faqs?populate=*`)
  //     setFaq(faq.data.data)
      
  //   }
  //   getPartner()
    
  //   },[])
  const [isLoading, setIsLoading] = useState(true);
const [partner, setPartner] = useState<any>(null);
const [customer, setCustomer] = useState<any>(null);
const [slide1, setSlide1] = useState<any>(null);
const [slide2, setSlide2] = useState<any>(null);
const [faq, setFaq] = useState<any>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const [slide1Res, partnerRes, customerRes, faqRes,slideRes2] = await Promise.all([
        axios.get(`${BaseUrl}/slider1s?populate=*`),
        axios.get(`${BaseUrl}/our-partners?populate=*`),
        axios.get(`${BaseUrl}/customers?populate=*`),
        axios.get(`${BaseUrl}/faqs?populate=*`),
        axios.get(`${BaseUrl}/slider2s?populate=*`),
      ]);

      setSlide1(slide1Res.data.data);
      setPartner(partnerRes.data.data);
      setCustomer(customerRes.data.data);
      setFaq(faqRes.data.data);
      setSlide2(slideRes2.data.data)
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, []);

    console.log(slide2)

    
  return (
    <>
      <Head>
        <title>WEB TRADING CONCERN PVT.LTD</title>
      </Head>
{/* <div className="max-w-[1180px] mx-auto"> */}


<>
<ToastContainer />
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
      <Partnered1 data={slide2} slide={10} height={'79px'} style={'contain'}/>
      <News />
      {/* <Test/> */}
    </>
     
     
      {/* </div> */}
  
    </>
  );
}
