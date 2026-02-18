import { BaseUrl } from "@/utils/global.mjs";
import { createProductSlug } from "@/utils/slugify";
import { NextSeo } from "next-seo";
import React from "react";
import axios from "axios";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { imageUrl } from "@/utils/imageUrl";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface BrandProps {
  filteredBrans: any[];
  brandName: string;
  error?: boolean;
}

const Brand = ({ filteredBrans, brandName, error }: BrandProps) => {
  const router = useRouter();

  // Mapping of brand names to their assets and external links
  const brandData: Record<string, { logo: string; url: string }> = {
    "DiaSorin": { logo: "/assets/Partners/DiaSorin.png", url: "https://int.diasorin.com/en" },
    "BioSystems": { logo: "/assets/Partners/BioSystems.png", url: "https://biosystems.global/" },
    "Eppendorf": { logo: "/assets/Partners/eppendorf.png", url: "https://www.eppendorf.com/us-en/" },
    "iSens": { logo: "/assets/Partners/iSens.png", url: "https://i-sens.com/" },
    "Neomedica": { logo: "/assets/Partners/Neomedica.png", url: "https://neomedica.rs/" },
    "Gesan": { logo: "/assets/Partners/Gesan.png", url: "https://www.gesanproduction.it/en/" },
    "Drawray": { logo: "/assets/Partners/Drawray.png", url: "https://en.szdrawray.com/" },
    "Biocartis": { logo: "/assets/Partners/Biocartis.png", url: "https://www.biocartis.com/en" },
    "Ecosteryl": { logo: "/assets/Partners/ecosteryl.png", url: "https://www.ecosteryl.com/en/" },
    "Diversey": { logo: "/assets/Partners/Diversey.png", url: "https://diversey.com/en" },
    "Taski": { logo: "/assets/Partners/Taski.png", url: "https://taski.com/" },
    "Hakerman": { logo: "/assets/Partners/Hakerman.png", url: "https://hakerman.com/en/" },
    "Newster": { logo: "/assets/Partners/newster.png", url: "https://www.newstergroup.com/" },
    "Sterilmed": { logo: "/assets/Partners/Sterilmed.png", url: "https://www.sterilmed.com.tr/" },
    "Nihon Kohden": { logo: "/assets/Partners/Nihon Kohden.png", url: "https://www.nihonkohden.com/index.html" },
    "Asclepion": { logo: "/assets/Partners/asclepion.png", url: "https://asclepion.com/en/" },
    "Nesa World": { logo: "/assets/Partners/Nesa World.png", url: "https://nesa.world/" },
    "Bison": { logo: "/assets/Partners/Bison.png", url: "http://www.bisonmedical.com/?c=137&ckattempt=1" },
    "DermaIndia": { logo: "/assets/Partners/DermaIndia.png", url: "https://dermaindia.in/" },
    "GMT": { logo: "/assets/Partners/GMT.png", url: "https://geomitraa.com/" }
  };

  // Helper to find brand data case-insensitively
  const currentBrand = Object.keys(brandData).find(key => key.toLowerCase() === brandName.toLowerCase());
  const brandInfo = currentBrand ? brandData[currentBrand] : null;

  if (router.isFallback) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Skeleton className="px-4" active={true} />
      </div>
    )
  }

  const handleClick = (item: any) => {
    router.push(`/product-single/${createProductSlug(item.attributes.title, item.id)}`);
  };

  return (
    <>
      <NextSeo
        title={`${brandName} Products | Medical Equipment Service Provider - WTCNepal`}
        description={`Explore high-quality ${brandName} solutions from Web Trading Concern Pvt. Ltd. We distribute ${brandName} Products in Nepal with full technical support and maintenance.`}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${brandName} in Nepal, ${brandName} Supplier Nepal, ${brandName} Distributor in Nepal`
          }
        ]}
        openGraph={{
          title: `${brandName} Products | Web Trading Concern Pvt. Ltd., Nepal`,
          description: `Explore high-quality ${brandName} solutions from Web Trading Concern Pvt. Ltd.`,
          site_name: 'Web Trading Concern Pvt. Ltd., Nepal'
        }}
      />

      <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto pb-[111px] pt-[80px] px-[15px] md:px-0">
        <div className="grid md:grid-cols-2 items-center border-b-[4px] border-b-[#0000CC] pb-[20px] mb-[40px] gap-6">
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-[28px] md:text-[36px] font-extrabold leading-tight uppercase text-[#212529] text-left">
              {brandName}
            </h1>
            <h6 className="text-[14px] md:text-[16px] text-gray-600 font-medium leading-relaxed">
              Explore high-quality products from {brandName}
            </h6>
          </div>

          {brandInfo && (
            <div className="flex flex-wrap items-center md:justify-end justify-start gap-6 mt-4 md:mt-0">
              {/* Logo - Constrained Height */}
              <div
                className="relative cursor-pointer group"
                onClick={() => window.open(brandInfo.url, '_blank')}
              >
                <img
                  src={brandInfo.logo}
                  alt={`${brandName} Logo`}
                  style={{ height: '110px', width: 'auto' }}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Visit Website Button - Exact Nav Style */}
              <a
                href={brandInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    h-[42px] px-6 rounded-[19px] 
                    bg-[#23a8cd] text-white font-semibold text-[14px]
                    flex items-center justify-center gap-2 whitespace-nowrap
                    transition-colors duration-300 ease-out
                    hover:bg-cyan-400 shadow-sm
                "
              >
                <span>Visit Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
        {filteredBrans && filteredBrans.length > 0 ? (
          <div className="grid md:grid-cols-4 grid-cols-1 gap-x-[30px] gap-y-[35px] mt-[68px]">
            {filteredBrans?.map((item: any, index: number) => (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className="border cursor-pointer flex items-center justify-end  flex-col gap-[35px] pb-[44px] pt-[10px] "
              >
                <div className="h-[200px] flex items-center justify-center relative w-full">
                  <Image
                    src={imageUrl(
                      `${item?.attributes?.image?.data?.attributes?.url}`
                    )}
                    alt={item?.attributes?.title || brandName}
                    fill
                    className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out object-contain p-4"
                  />
                </div>
                <h2 className=" text-[#003760] text-[16px] text-center leading-[20.08px] font-semibold px-2">
                  {item?.attributes?.title}
                </h2>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No products found for {brandName}.
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }; // 'id' here corresponds to the brand name string based on file name [id].tsx and usage

  try {
    // Ideally we should filter on backend, but mimicking original logic:
    let productRes = await axios.get(`${BaseUrl}/products?populate=*`);
    let allProducts = productRes.data.data;

    let filteredBrans = allProducts?.filter(
      (item: any) => item?.attributes?.brand_name?.data?.attributes?.title === id
    );

    return {
      props: {
        filteredBrans: filteredBrans || [],
        brandName: id,
      }
    }

  } catch (error) {
    console.error("Error fetching brand products:", error);
    return {
      props: {
        filteredBrans: [],
        brandName: id,
        error: true
      }
    }
  }
}

export default Brand;
