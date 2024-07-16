import BootomFooter from "@/components/BootomFooter";
import Footer from "@/components/Footer";
import Nav1 from "@/components/Nav1";
import FooterTop from "@/components/FooterTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "./api/global";
import { Button, Modal } from "antd";

import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true
});

export default function App({ Component, pageProps }: AppProps) {
  const [footer, setFooter] = useState<any>(null);
  const [popupbanner, setPopupbanner] = useState<any>(null);


  useEffect(() => {
    let getFooter = async () => {
      const [footer, popup] = await Promise.all([
        axios.get(`${BaseUrl}/footer-sections?populate=*`),
        axios.get(`${BaseUrl}/popup-banners?populate=*`),
      ]);
      // (`${BaseUrl}/footer-sections?populate=*`)
      // let popup = await
      // // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setFooter(footer.data.data);
      setPopupbanner(popup.data.data);
    };
    getFooter();
  }, []);
  // console.log(footer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const delay = 3000; // Delay of 3 seconds

    const timer = setTimeout(() => {
      // Perform any action after the delay
      showModal();
    }, delay);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts before the delay
    };
  }, []);
  return (
    <div className={poppins.className}>
      <Nav1/>
      <div>
      <Component {...pageProps} />
      <FooterTop />
      <Footer footer={footer} />
      <BootomFooter data={footer} />
      </div>
    </div>
  );
}
