import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import HomeSlider from "@/components/HomeSlider";
import Customers from "@/components/Customers";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import PartneredUniverities from "@/components/PartneredUniverities";
import Partnered from "@/components/Partnered";
import Asked from "@/components/Asked";
import Requestcall from "@/components/Requestcall";
import News from "@/components/News";
import Fotter from "@/components/Footer";
import Products from "@/components/Products";
import BootomFooter from "@/components/BootomFooter";
import Nav1 from "@/components/Nav1";
import Partnered1 from "@/components/Partnerned1";
import { useState, useEffect } from "react";
import { BaseUrl } from "./api/global";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [partner, setPartner] = useState<any>(null);
  const [slide1, setSlide1] = useState<any>(null);
  const [slide2, setSlide2] = useState<any>(null);
  const [faq, setFaq] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnerRes] = await Promise.all([
          axios.get(`${BaseUrl}/our-partners?populate=*`),
          // axios.get(`${BaseUrl}/slider1s?populate=*`),
          // axios.get(`${BaseUrl}/faqs?populate=*`),
          // axios.get(`${BaseUrl}/slider2s?populate=*`),
        ]);

        setPartner(partnerRes.data.data);
        // setSlide1(slide1Res.data.data);
        // setFaq(faqRes.data.data);
        // setSlide2(slideRes2.data.data);
        // setPopupbanner(popupBanner.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const cacheKey = "cachedData";

  // const fetchData = async () => {
  //   try {
  //     const [slide1Res, partnerRes, customerRes, faqRes, slideRes2] = await Promise.all([
  //       axios.get(`${BaseUrl}/slider1s?populate=*&?sort=rank:asc`),
  //       axios.get(`${BaseUrl}/our-partners?populate=*&?sort=rank:asc`),
  //       axios.get(`${BaseUrl}/customers?populate=*&?sort=rank:asc`),
  //       axios.get(`${BaseUrl}/faqs?populate=*&?sort=rank:asc`),
  //       axios.get(`${BaseUrl}/slider2s?populate=*&?sort=rank:asc`),
  //     ]);

  //     const data = {
  //       slide1: slide1Res.data.data,
  //       partner: partnerRes.data.data,
  //       customer: customerRes.data.data,
  //       faq: faqRes.data.data,
  //       slide2: slideRes2.data.data,
  //     };

  //     localStorage.setItem(cacheKey, JSON.stringify(data));

  //     // Update state with fetched data
  //     setSlide1(data.slide1);
  //     setPartner(data.partner);
  //     setCustomer(data.customer);
  //     setFaq(data.faq);
  //     console.log("faq 1st",faq)
  //     setSlide2(data.slide2);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const loadDataFromCache = () => {
  //   const cachedData = localStorage.getItem(cacheKey);

  //   if (cachedData) {
  //     const data = JSON.parse(cachedData);
  //     setSlide1(data.slide1);
  //     setPartner(data.partner);
  //     setCustomer(data.customer);
  //     setFaq(data.faq);
  //     setSlide2(data.slide2);
  //   } else {
  //     fetchData();
  //   }
  // };

  // useEffect(() => {
  //   loadDataFromCache();
  // }, []);

  // console.log(popupbanner)

  return (
    <>
      <Head>
        <title>WEB TRADING CONCERN PVT.LTD</title>
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
      {/* <div className="max-w-[1180px] mx-auto"> */}
      <>
        <a
          href="https://wa.me/+9779851140881"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
        <ToastContainer />
        <HomeSlider />
        <AboutUs />
        <Customers />
        {/* <PartneredUniverities partner={partner} title={"We represent"} /> */}
        {/* <Partnered data={slide1} slide={6} height={"125px"} style={"cover"} /> */}
        <Products />
        {/* <Testimonial /> */}
        <Asked faq={faq} />
        <Requestcall />
        {/* <Partnered1 data={slide2} slide={10} height={'79px'} style={'contain'}/> */}
        <News />
        {/* <Test/> */}
      </>
    </>
  );
}

