import React, { useEffect,useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {BaseUrl} from "../pages/api/global"
// import CountUp from "react-countup";

function SampleNextArrow(props: any) {

  const { className, style, onClick } = props;
  return (
    <div className="absolute hidden md:block top-[65%] right-[50%] translate-x-[-50%] z-50">
      <img
        src="/../assets/arrow2.png"
        alt=""
        onClick={onClick}
        className="rotate-180 cursor-pointer opacity-[0.5] hover:opacity-100"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute top-[65%] hidden md:block left-[51%] translate-x-[-50%] z-50">
      <img
        src="/../assets/arrow2.png"
        alt=""
        className=" cursor-pointer "
        onClick={onClick}
      />
    </div>
  );
}

function Slide2() {

  
  const [banner,setBanner]=useState<any>(null)
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let data = [
    {
      img: "/../assets/mainbanner1.jpg",
      caption:
        "Fully automated immunoassay analyzer - LIAISON® XL - DiaSorin - for clinical diagnostic, chemiluminescence, plasma",
    },
    {
      img: "/../assets/mainbanner2.jpg",
      caption:
        "BA400 is a clinical chemistry and turbidimetry analyzer designed to offer the best performance to laboratories looking towards achieving the highest efficiency with optimal operating costs.",
    },
    {
      img: "/../assets/mainbanner3.jpg",
      caption:
        "The sterilizing unit is designed for on-site installation in up to 300 beds hospitals. The sturdy design allows the sterilizer to work for several shifts, each lasting 35-40 minutes.",
    },
  ];


useEffect(()=>{

let getBanner =async()=>{
  let banenr = await axios.get(`${BaseUrl}/banners?populate=*`)
  setBanner(banenr.data.data)
}
getBanner()

},[])

console.log(banner)



  return (
    <div className="w-full relative  overflow-x-hidden">
      <div className=" hidden absolute  md:block bottom-[6%] left-[26%] z-40 text-white ">
        <h1 className="text-[92.31px] font-semibold leading-[78.46px] ">23</h1>
        <p className="text-[24px] font-semibold text-center">
          YEARS OF
          <br /> EXPERTIES
        </p>
      </div>
      <Slider {...settings} className=" ">
        {banner?.map((item: any, index: number) => (
          <div key={index} className=" h-[300px] xl:h-[687px] relative ">
            <div className="h-[100%] w-full absolute top-0 left-0 cover"></div>
            <img src={`${item?.attributes?.image?.data?.attributes?.url}`} className="w-full h-[100%] " alt="" />
            <div className=" md:flex items-center gap-[92px] text-white 2xl:pl-[300px] xl:pl-[450px] absolute left-[50%] transform translate-x-[-50%] bottom-[10%]">
              <div className="w-full">
                <p className="text-[20px] text-start font-semibold leading-[30px] md:w-[815px] w-[310px]">
                  {item?.attributes?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide2;
