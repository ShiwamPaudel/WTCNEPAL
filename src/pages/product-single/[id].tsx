import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { BaseUrl } from "../api/global";
import axios from "axios";
import { useRouter } from "next/router";
import Parse from "html-react-parser";
import RelatedProducts from "@/components/RelatedProducts";
import { InfinitySpin } from "react-loader-spinner";
import { Skeleton } from "antd";

const ProductDetail = () => {
  const router = useRouter();
  let id = router.query.id;
  console.log(id);

  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(`${BaseUrl}/products/${id}?populate=*`);
      //  let list=    product.data.data.slice(0,8)
      setProduct(product.data.data);
      setIsLoading(false);
    };
    getProduct();
  }, [id]);
  console.log(product);

  const onChange = (key: string) => {
    // console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Features`,
      children: <div>{Parse(`${product?.attributes?.features}`)}</div>,
    },
    {
      key: "2",
      label: `Overview`,
      children: <div>{Parse(`${product?.attributes?.overview}`)}</div>,
    },
    {
      key: "3",
      label: `Specifications`,
      children: <div>{Parse(`${product?.attributes?.specifications}`)}</div>,
    },
  ];
  return (
    <>
      {isLoading ? (
        <div className="container max-w-[1180px] mx-auto flex items-center justify-center">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <>
          <div className="container mx-auto 2xl:max-w-[1180px] pt-[30px] pb-[80px]">
            <div className="border-b-[1px] pb-[15px] mb-[15px]">
              <h1 className="text-[40px] font-thin leading-[48px] text-[#212529]">
                {product?.attributes?.title}
              </h1>
            </div>
            <div className="flex gap-[80px] pt-[20px]">
              <div className="basis-[30%] border-[0.4px]">
                {isLoading ? (
                  <div
                    className="max-w-[1180px] mx-auto flex justify-center items-center"
                    style={{ zIndex: 100, backgroundColor: "white" }}
                  >
                    <Skeleton className="px-4" active={true} />
                  </div>
                ) : (
                  <div className="h-[250px] bg-white w-full flex items-center justify-center">
                    <img
                      src={product?.attributes?.image?.data?.attributes?.url}
                      alt=""
                      className="cursor-pointer hover:scale-[107%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="basis-[80%] ">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
            </div>
          </div>
          <RelatedProducts />
        </>
      )}

      {/* {product?.map((item: any, index: number) => ( */}

      {/* ))} */}
    </>
  );
};

export default ProductDetail;
