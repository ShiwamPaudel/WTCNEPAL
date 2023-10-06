import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "@/pages/api/global";
import Head from "next/head";
import Parse from "html-react-parser";
import { Skeleton } from "antd";
import { imageUrl } from "@/utils/imageUrl";

const index = () => {
  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      let response = await axios.get(
        `${BaseUrl}/meet-our-directors?populate=*`
      );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data);
    };
    getTestimonial();
  }, []);
  // meet-our-directors
  // console.log("test", testimonial);
  return (
    <>
      <Head>
        <title>MEET OUR DIRECTOR</title>
        <link rel="icon" href="/../assets/wtc.svg" />
      </Head>

      {testimonial ? (
        testimonial?.map((item: any, index: number) => (
          <div
            key={index}
            className="max-w-[1180px] mx-auto md:flex-row flex-col flex py-[50px] gap-[50px] px-[15px] md:px-0"
          >
            <div className="basis-[40%]">
              <div className="h-[420px] w-full ">
                <img
                  src={imageUrl(
                    `${item?.attributes?.image?.data?.attributes?.url}`
                  )}
                  alt=""
                  className="object-contain h-[100%] w-full cursor-pointer"
                />
              </div>
            </div>
            <div className="basis-[60%]">
              <div className="flex items-center justify-start ">
                <h1 className="text-[28px] font-semibold ">
                  {item?.attributes?.title}
                </h1>
              </div>
              {/* <h1> Message from Director</h1> */}

              <div className="flex items-center flex-col justify-center pt-[15px]">
                <div className="flex items-center justify-start w-full">
                  {/* <img
                    src="/../assets/coma1.svg"
                    alt="avatar"
                    className="ml-[-20px]"
                  /> */}
                </div>

                <p className="text-[16px] max-w-[800px] text-justify">
                  {Parse(`${item?.attributes?.description}`)}
                </p>
                <div className="flex items-center justify-end w-full">
                  {/* <img
                    src="/../assets/coma2.svg"
                    alt="avatar"
                    className=" mr-[-20px]"
                  /> */}
                </div>
              </div>
              <div className="pt-[10px]">
                <p className="font-semibold text-[16px]">
                  {item?.attributes?.name}
                </p>
                <p>{item?.attributes?.position}</p>
                <p>{item?.attributes?.company_name}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          className="max-w-[1180px] mx-auto flex justify-center items-center"
          style={{ zIndex: 100, backgroundColor: "white" }}
        >
          <Skeleton className="px-4" active={true} />
        </div>
      )}
    </>
  );
};

export default index;
