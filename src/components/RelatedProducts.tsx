import React, { useEffect, useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BaseUrl } from "../pages/api/global";
import { useRouter } from "next/router";
// import CountUp from "react-countup";
import { Skeleton } from 'antd';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute hidden md:block top-[105%] right-[50%] translate-x-[-50%]  z-50">
      <img
        src="/../assets/arrow2.png"
        alt=""
        onClick={onClick}
        className="rotate-180 cursor-pointer  hover:opacity-100 invert z-50"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute top-[105%] hidden md:block left-[52%] translate-x-[-50%] z-50">
      <img
        src="/../assets/arrow2.png"
        alt=""
        className=" cursor-pointer invert "
        onClick={onClick}
      />
    </div>
  );
}

function RelatedProducts() {
    const router = useRouter()
  const [banner, setBanner] = useState<any>(null);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
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

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(`${BaseUrl}/products/?populate=*`);
      // let list = product.data.data.slice(0, 8);
      setProduct(product.data.data);
    };
    getProduct();
  }, []);

  console.log(product);
  const handleClick =(item:any)=>{
    router.push(`/product-single/${item.id}`)
  console.log(item)
  }


  return (
    <div className=" relative  overflow-x-hidden max-w-[1180px] mx-auto pb-[90px] px-[15px] md:px-0">
      <div className="border-b-[1px] pb-[15px] mb-[15px]">
        <h1 className="text-[22px] ">Related Products</h1>
      </div>

      {
        product ?
        <Slider {...settings} className=" mt-[40px]">
        {product?.map((item: any, index: number) => (
            <div key={index} onClick={()=>handleClick(item)}>
            <div key={index} className="w-[95%]  h-[350px] relative ">
              <div className="h-[270px] flex items-center justify-center border">
                <img
                  src={`${item?.attributes?.image?.data?.attributes?.url}`}
                  className="w-[70%] h-[100%] object-contain cursor-pointer hover:scale-[105%] transition duration-500 ease-out"
                  alt=""
                />
              </div>
             
                <div className="pt-[15px]">
                  <p className="text-[20px] text-start font-semibold leading-[30px] ">
                    {item?.attributes?.title}
                  </p>
                </div>
            
            </div>
          </div>
        ))}
      </Slider>:<div className="max-w-[1180px] mx-auto flex justify-center items-center" style={{ zIndex: 100,backgroundColor:'white' }}>
    <Skeleton className="px-4" active={true} />

    </div>
    }
    </div>
  );
}

export default RelatedProducts;
