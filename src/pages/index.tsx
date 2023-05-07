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

  return (
    <>
      <Head>
        <title>WEB TRADING CONCERN PVT.LTD</title>
      </Head>

      <Navbar />
      <AboutUs />
      <Products/>
      <Testimonial />
      <PartneredUniverities img={"/../assets/globe.png"} title={"We Represent"} partner={"OUR PARTNERS"} description={"We take pride in representing over 50 renowned brands from around the globe. As your trusted partner, we bring you a diverse range of medical equipment and technologies, sourced from industry-leading manufacturers. With our extensive network and expertise, we ensure that you have access to the latest innovations in healthcare, all in one place."} />
      <Partnered data={data} slide={6} height={'125px'} style={'cover'}/>
      <Asked />
      {/* <Testimonial /> */}
      <Requestcall />
      <PartneredUniverities img={"/../assets/nepal.png"} title={"We Valuable Customers"} partner={"CUSTOMERS"} description={"We have always been praised by our valuable customers. “Satisfaction” of our customers comes first. Some of our valuable customers but not limited includes:"} />
      <Partnered1 data={data2} slide={10} height={'79px'} style={'contain'}/>
      <News />
      <Fotter />
      <BootomFooter/>
    </>
  );
}
