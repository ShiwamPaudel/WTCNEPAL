import Image from "next/image";
import Head from "next/head";
import { Poppins } from "next/font/google";
import BrandSlider from "@/components/BrandSlider";
import HomeSlider from "@/components/HomeSlider";
import Customers from "@/components/Customers";
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
import { BaseUrl } from "./api/global";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  preload: true,
});

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

  // Chatbase script integration
  useEffect(() => {
    const existingScript = document.getElementById("m7oqdvaihYHu8iKv2Z4Vd");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "m7oqdvaihYHu8iKv2Z4Vd";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }

    if (
      typeof window !== "undefined" &&
      !(window as any).chatbaseInitialized
    ) {
      (window as any).chatbase = (...args: any[]) => {
        if (!(window as any).chatbase.q) {
          (window as any).chatbase.q = [];
        }
        (window as any).chatbase.q.push(args);
      };

      (window as any).chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });

      (window as any).chatbaseInitialized = true;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Web Trading Concern Pvt. Ltd.</title>
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

      <>
        {/* WhatsApp Bubble (optional, currently commented out) */}
        {/* <a
          href="https://wa.me/+9779851036184"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a> */}

        <ToastContainer />
        <HomeSlider />
        <AboutUs />
        <Customers />
        <Products />
        <BrandSlider />
        <Requestcall faq={faq} />
        <News />
      </>
    </>
  );
}
