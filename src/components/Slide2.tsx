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
        className="rotate-180 cursor-pointer"
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
        className=" cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}

function Slide2() {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full overflow-x-hidden">
      <Slider {...settings} className="slide2 ">
        <div className="h-[300px] xl:h-[687px] 2xl:h-[800px] relative">
          <img
            src="/../assets/bg.png"
            className="w-full h-[100%] object-cover"
            alt=""
          />
          <div className=" hidden md:flex items-center gap-[92px] text-white absolute left-[50%] transform translate-x-[-50%] bottom-[10%]">
            <div className="">
              <h1 className="text-[92.31px] font-semibold leading-[78.46px] ">
                {/* <CountUp end={23} enableScrollSpy /> */}
                23
              </h1>
              <p className="text-[24px] font-semibold text-center ">
                YEARS OF <br /> EXPERTIES
              </p>
            </div>
            <div>
              <p className="text-[20px] font-semibold leading-[30px] w-[815px]">
                Welcome to our comprehensive range of cutting-edge medical
                equipment. With our unwavering commitment to excellence, we
                strive to empower healthcare professionals by providing
                state-of-the-art tools and technologies. Discover innovative
                solutions that enhance patient care, optimize diagnoses, and
                revolutionize the healthcare industry.s
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[300px] xl:h-[687px] 2xl:h-[800px]">
          <img
            src="/../assets/bg.png"
            className="w-full h-[100%] object-cover"
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
            <div>
              <p className="text-[20px] font-semibold leading-[30px] w-[815px]">
                Welcome to our comprehensive range of cutting-edge medical
                equipment. With our unwavering commitment to excellence, we
                strive to empower healthcare professionals by providing
                state-of-the-art tools and technologies. Discover innovative
                solutions that enhance patient care, optimize diagnoses, and
                revolutionize the healthcare industry.s
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slide2;
