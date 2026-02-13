import { BaseUrl } from "@/utils/global.mjs";
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

  if (router.isFallback) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Skeleton className="px-4" active={true} />
      </div>
    )
  }

  const handleClick = (item: any) => {
    router.push(`/product-single/${item.id}`);
  };

  return (
    <>
      <NextSeo
        title={`${brandName} Products | Medical Equipment Nepal`}
        description={`Explore high-quality ${brandName} solutions from Web Trading Concern. We provide the best ${brandName} in Nepal with full technical support and maintenance.`}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${brandName} in Nepal, ${brandName} Supplier Nepal, Best ${brandName} Nepal`
          }
        ]}
        openGraph={{
          title: `${brandName} Products | WTC Nepal`,
          description: `Explore high-quality ${brandName} solutions from Web Trading Concern.`,
          site_name: 'Web Trading Concern Nepal'
        }}
      />

      <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto pb-[111px] pt-[80px] px-[15px] md:px-0">
        <div className="flex items-center justify-center gap-[8px] flex-col">
          <h1 className="text-[36px] font-extrabold leading-[42.19px] text-center uppercase border-b-[4px] border-b-[#0000CC] pb-[10px]">
            {brandName}
          </h1>
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
