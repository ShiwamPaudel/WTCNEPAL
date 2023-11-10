import { useRouter } from "next/router";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PopUpImage from "@/components/gallery/PopUpImage";
const ImageDetailPage = () => {
  const router = useRouter();
  const { image } = router.query;
  const [showImage, setSHowImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log("showImage data   ... ? ", showImage);
  
  interface ImageSource {
    src: string;
    alt: string;
  }
  const relatedImg_1: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
  ];
  const relatedImg_2: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
    },

    {
      src: "/assets/japan.jpg",
      alt: "",
    },
  ];
  const relatedImg_3: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
  ];
  const relatedImg_4: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
  ];
  const relatedImg_5: ImageSource[] = [
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
    {
      src: "/assets/japan.jpg",
      alt: "",
    },
  ];
  const relatedImages: { [key: string]: ImageSource[] } = {
    "1": relatedImg_1,
    "2": relatedImg_2,
    "3": relatedImg_3,
    "4": relatedImg_4,
    "5": relatedImg_5,
  };
  const relatedImageList = relatedImages[image as string] || [];

  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="/../assets/icon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </Head>
      <div>
        <div className=" container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto grid  grid-cols-2 lg:grid-cols-4 gap-4 m-20 px-[15px] sm:px-0">
          {relatedImageList.map((data, index) => (
            <>
              <button
                key={index}
                onClick={() => {
                  setSHowImage(true);
                  setImageUrl(data.src);
                }}
              >
                <div>
                  <Image
                    src={data.src}
                    alt="hello"
                    width={500}
                    height={200}
                    className="transition-transform transform scale-100 hover:scale-105"
                  />
                </div>
              </button>
              {showImage && (
                <PopUpImage
                  imageUrl={imageUrl}
                  closePopup={() => {
                    console.log("close pupup");
                    setSHowImage(false);
                  }}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageDetailPage;
