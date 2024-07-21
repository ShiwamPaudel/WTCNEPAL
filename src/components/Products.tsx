import { BaseUrl } from "@/pages/api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin, ThreeDots } from "react-loader-spinner";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { imageUrl } from "@/utils/imageUrl";


const Products = () => {
  const [limit, setLimit] = useState(8);
  const [isLoading3, setIsLoading3] = useState(true);
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(
        `${BaseUrl}/products?populate=*&pagination[start]=0&pagination[limit]=${limit}&sort=rank:asc`
      );
      setProduct(product.data.data);
      setIsLoading3(false);
    };
    getProduct();
  }, [limit]);

  const handleClick = (item: any) => {
    router.push(`/product-single/${item.id}`);
  };

  const handleLimit = () => {
    setLimit(limit + 8);
    setIsLoading3(true);
  };

  return (
    <>
      {product ? (
        <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto py-10 px-[15px] md:px-0">
          <div className="flex items-center justify-center gap-[8px] flex-col">
            <h2 className="text-[#7A8A9E] text-[13px] leading-[15.23px] font-medium ">
              PRODUCTS
            </h2>
            <h1 className="text-[36px] font-semibold leading-[42.19px] text-center uppercase">
              Products That We Offer
            </h1>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-[30px] gap-x-[15px] md:gap-y-[35px] gap-y-[15px] py-10">
            {product?.map((item: any, index: number) => (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className="border cursor-pointer flex flex-col items-center md:justify-end justify-center py-4"
              >
                <div className="md:h-[200px] h-[150px] flex items-center justify-center">
                  <img
                    src={imageUrl(
                      `${item?.attributes?.image?.data?.attributes?.url}`
                    )}
                    alt=""
                    className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"
                  />
                </div>
                <h2 className="text-[#003760] text-[16px] text-center leading-[20.08px] font-semibold">
                  {item?.attributes?.title}
                </h2>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            {isLoading3 ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              <button
                onClick={handleLimit}
                className="h-[50px] text-[17px] font-semibold bg-[#23a8cd] hover:bg-cyan-400 w-[140px] flex items-center justify-center text-white text-[16px] rounded-[8px] border transition-all duration-500 ease-in-out"
              >
                Load More
              </button>
            )}
          </div>
        </div>
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

export default Products;
