import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google"; //Fonts
import { Poppins } from "next/font/google";
import BrandSlider from "@/components/BrandSlider";
import HomeSlider from "@/components/HomeSlider";
import Customers from "@/components/Customers";
import PartnerSlider from "@/components/PartnerSlider";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import PartneredUniverities from "@/components/PartneredUniverities";
import Partnered from "@/components/Partnered";
import Asked from "@/components/Asked";
import Requestcall from "@/components/Requestcall";
import News from "@/components/News";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import BootomFooter from "@/components/BootomFooter";
import Nav1 from "@/components/Nav1";
import Partnered1 from "@/components/Partnerned1";
import { useState, useEffect } from "react";
// import { BaseUrl } from "./api/global";
import { BaseUrl } from "@/utils/global.mjs";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Poppins({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload:true });

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
        ]);
        setPartner(partnerRes.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Load Chatbase embed script on client side (replaces previous WhatsApp floating anchor)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if ((window as any).chatbase && (window as any).chatbase('getState') === 'initialized') return;
    } catch (e) {
      // ignore
    }

    if (!(window as any).chatbase || typeof (window as any).chatbase !== 'function') {
      (window as any).chatbase = (...args: any[]) => {
        if (!(window as any).chatbase.q) (window as any).chatbase.q = [];
        (window as any).chatbase.q.push(args);
      };
      (window as any).chatbase = new Proxy((window as any).chatbase, {
        get(target: any, prop: string) {
          if (prop === 'q') return target.q;
          return (...args: any[]) => (target as any)(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      if (document.getElementById('m7oqdvaihYHu8iKv2Z4Vd')) return;
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = 'm7oqdvaihYHu8iKv2Z4Vd';
      (script as any).domain = 'www.chatbase.co';
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  const cacheKey = "cachedData";

  return (
    <>
      <Head>
        <title>Web Trading Concern Pvt. Ltd.</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      <>
        <ToastContainer />
        <HomeSlider />
        <AboutUs />
        <Customers />
        <Products  />
        {/* <PartnerSlider /> */}
        <BrandSlider />
        <Requestcall faq={faq} />
        <News />
      </>
    </>
  );
}

