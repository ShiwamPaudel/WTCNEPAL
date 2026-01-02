import AboutBanner from "@/components/AboutBanner";
import Head from "next/head";
import React, { useState, useEffect } from "react";

import Nav1 from "@/components/Nav1";
import Link from "next/link";
import Image from "next/image";
const index = () => {
  interface ImageSource {
    src: string;
    alt: string;
    url: string;
    title: string;
  }
  const sources: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
      url: "1",
      title: "Add Title",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
      url: "2",
      title: "Add Title",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
      url: "3",
      title: "Add Title",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
      url: "4",
      title: "Add Title",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
      url: "5",
      title: "Add Title",
    },
  ];
  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>

      <div className=" container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 m-20 px-[15px] sm:px-0 ">
        {sources.map((data, index) => (
          <div key={index}>
            <div className="relative overflow-hidden card">
              <Link href={`/gallery/${encodeURIComponent(data.url)}`}>
                <Image
                  src={data.src}
                  alt="hello"
                  width={500}
                  height={200}
                  className="rounded-sm"
                />
                <div className="hover-content absolute flex items-center justify-center text-white text-lg">
                  view &#8594;
                </div>
              </Link>
            </div>
            <h1 className="text-center">{data.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
