import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slide3({data,slide,height,style}:any) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };



  return (
    <div>
      <Slider {...settings} className=" ">
       {
        data?.map((item:any,index:number)=>(
          <div className="w-full cursor-pointer hover:scale-[105%] transition duration-300 ease-out" key={index}>
          <div className={`w-[100%]   h-[79px]   `}>
            <img
              src={item?.attributes?.image?.data?.attributes?.url}
              alt="Edge"

              className={`w-full h-full object-contain`}
            />
          </div>
        </div>
        ))
       }
      
      </Slider>
    </div>
  );
}

export default Slide3;
