import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Test2() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let data = [
    {
      img: "/../assets/testimonial1.png",
      name: "Dr. DB Lama",
      position: "MBBS, MD, MSP",
      desc: "  Working with Web Trading Concern Pvt. Ltd. has been a game-changer for our medical facility. Their extensive range of high-quality equipment has allowed us to enhance the level of care we provide to our patients. The team's expertise, prompt service, and dedication to customer satisfaction have exceeded our expectations.",
    },
    {
      img: "/../assets/testimonial2.png",
      name: "Dr. Mamta Shrestha",
      position: "MBBS, MD",
      desc: "  As a medical research facility, we rely heavily on advanced equipment to conduct our studies. [Your Company Name] has been instrumental in providing us with cutting-edge technology that has significantly enhanced our research capabilities. Their exceptional customer service and ongoing support have made them an invaluable partner in our scientific endeavors.",
    },
    {
      img: "/../assets/testimonial1.png",
      name: "Richard Anderson",
      position: "MBA, Australia",
      desc: "  The desire to study abroad comes with its own set of complications and moving forward can be very tedious. With Education Foundation, I was easily able to step forward as a high-school graduate with some much-needed support. From the selection of the right college to my visa preparation, everything was so hassle-free. I thank the friendly personnel at Coastline for providing me the stepping-stone I needed to excel.",
    },
  ];

  return (
    <div className="w-full ">
      <div className="2xl:w-[36vw] xl:w-[52vw]">
        <Slider {...settings}>
          {data.map((item: any, index) => (
            <div className="w-full cursor-pointer " key={index}>
              <div className=" h-[456px] bg-[#FFFFFF] w-full xl:w-[95%] term rounded-[10px]">
                <div className="flex flex-row">
                  <div className="w-[58px] h-[58px] ml-[35px] mt-[32px] ">
                    <img
                      src={item?.img}
                      alt="Richard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="richard">
                    <h2 className="font-['IBM Plex Sans'] font-normal text-[24px] leading-[31.2px] text-[#000000] pt-[36px] pl-[24px] pr-[85px]">
                      {item?.name}
                    </h2>
                    <p className="font-IBM font-normal text-xs leading-[16px] text-[#007EC5] pt-[3px] pl-[24px]">
                      {item?.position}
                    </p>
                  </div>
                </div>
                <img
                  src="/../assets/coma1.svg"
                  alt="avatar"
                  className="w-[30px] h-[30px] mt-[35px] ml-[15px] md:ml-[34px]"
                />
                <p className="font-Work font-normal text-xs leading-[16px] md:leading-[21.6px] text-[#838485] pt-[11px] pl-[34px] pr-[45px] pb-[4px]">
                  {item?.desc}
                </p>
                <img
                  src="/../assets/coma2.svg"
                  alt="avatar"
                  className="w-[30px] h-[30px] ml-[273px] md:ml-[334px] lg:ml-[518px] xl:ml-[294px] 2xl:ml-[250px] "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Test2;
