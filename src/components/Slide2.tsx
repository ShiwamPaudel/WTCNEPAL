import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BaseUrl } from "../pages/api/global";
import { imageUrl } from "@/utils/imageUrl";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute hidden md:block top-[50%] right-7 z-50">
      <img
        src="/../assets/arrow.png"
        alt=""
        onClick={onClick}
        className="w-12 h-12 cursor-pointer opacity-[0.5] hover:opacity-100"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className=" absolute top-[50%] hidden md:block left-7 z-50">
      <img
        src="/../assets/arrow.png"
        alt=""
        className="w-12 h-12 rotate-180 cursor-pointer opacity-[0.5] hover:opacity-100"
        onClick={onClick}
      />
    </div>
  );
}

function Slide2() {
  const [banner, setBanner] = useState<any[]>([]);

  // Hardcoded images array
  const hardcodedImages = [
    {
      url: "./assets/GB/NihonKohdenHomeBanner.gif",
      description: "",
    },
    {
      url: "./assets/GB/BA200.gif",
      description: "",
    },
    {
      url: "./assets/GB/Liaison XL.gif",
      description: "",
    },
    {
      url: "./assets/GB/DIS5B.gif",
      description: "",
    },
  ];

  const settings = {
    dots: false,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/banners?populate=*`);
        const fetchedBanners = response.data.data.map((item: any) => ({
          url: imageUrl(item.attributes.image.data.attributes.url),
          description: item.attributes.description,
          duration: 5000, // Default 5 seconds for fetched images
        }));
        setBanner([...fetchedBanners, ...hardcodedImages]); // Prioritize API images
      } catch (error) {
        console.error("Error fetching banners:", error);
        setBanner(hardcodedImages); // Fallback to hardcoded images in case of an error
      }
    };


    getBanner();
  }, []);

  return (
    <div className="w-full relative overflow-x-hidden">
      <Slider {...settings}>
        {banner.map((item, index) => (
          <div key={index} className="h-[300px] xl:h-[92vh] relative">
            <div className="h-[100%] w-full absolute top-0 left-0 cover"></div>
            <img
              src={item.url}
              className="w-full h-[100%] object-cover"
              alt=""
            />
            <div className="md:flex items-center gap-[92px] text-white 2xl:pl-[180px] xl:pl-[80px] absolute left-[50%] transform translate-x-[-50%] bottom-[10%]">
              <div className="w-full">
                <p className="md:text-[32px] text-[20px] leading-[37px] text-start font-semibold md:w-[815px] w-[310px]">
                  {item.description}
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
