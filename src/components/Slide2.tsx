import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

 let data =[
  {
    img:"/../assets/mainbanner1.jpg",
    caption:"Fully automated immunoassay analyzer - LIAISON® XL - DiaSorin - for clinical diagnostic / chemiluminescence / plasma"
  },
  {
    img:"/../assets/mainbanner2.jpg",
    caption:"BA400 is a clinical chemistry and turbidimetry analyzer designed to offer the best performance to laboratories looking towards achieving the highest efficiency with optimal operating costs."
  },
  {
    img:"/../assets/mainbanner3.jpg",
    caption:"The sterilizing unit is designed for on-site installation in up to 300 beds hospitals. The sturdy design allows the sterilizer to work for several shifts, each lasting 35-40 minutes."
  }
 ]

  return (
    <div className="w-full  overflow-x-hidden">
      <Slider {...settings} className=" ">
   
      {
        data.map((item:any,index:number)=>(
          <div key={index} className=" h-[300px] xl:h-[687px] relative ">

            <div className="h-[100%] w-full absolute top-0 left-0 cover">

            </div>
             <img
            src={item.img}
            className="w-full h-[100%] "
            alt=""
             />
            <div className=" hidden md:flex items-center gap-[92px] text-white absolute left-[50%] transform translate-x-[-50%] bottom-[10%]">
            <div className="">
              <h1 className="text-[92.31px] font-semibold leading-[78.46px] ">
                23
              </h1>
              <p className="text-[24px] font-semibold text-center">
                YEARS OF
                <br /> EXPERTIES
              </p>
            </div>
            <div className="">
              <p className="text-[20px] text-start font-semibold leading-[30px] w-[815px]">
               {item.caption}
              </p>
            </div>
          </div>
        </div>
        ))
      }

        
      </Slider>
    </div>
  );
}

export default Slide2;
