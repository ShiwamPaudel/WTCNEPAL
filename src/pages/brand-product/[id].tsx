import { BaseUrl } from "@/pages/api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Parse from "html-react-parser"
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { json } from "stream/consumers";
import { imageUrl } from "@/utils/imageUrl";
const Brand = () => {
  const router = useRouter();

  let query = router.query.id;

  //  let data =JSON.stringify(query)
  // let parse = query.toString();
  //  toString(query)

  // console.log(query)

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(`${BaseUrl}/products?populate=*`);
      //  let list=    product.data.data.slice(0,8)
      setProduct(product.data.data);
      // console.log("product.data ? ", product.data)
    };
    getProduct();
  }, []);

  let filteredBrans = product?.filter(
    (item: any, index: number) =>
      item?.attributes?.brand_name?.data?.attributes?.title === query
  );
  // console.log("hehe",filteredBrans)

  const handleClick = (item: any) => {
    router.push(`/product-single/${item.id}`);
    console.log(item);
  };

  return (
    <>
      {product ? (
        <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto pb-[111px] pt-[80px] px-[15px] md:px-0">
          <div className="flex items-center justify-center gap-[8px] flex-col">
            <h1 className="text-[36px] font-extrabold leading-[42.19px] text-center uppercase border-b-[4px] border-b-[#0000CC] pb-[10px]">
              {query}
            </h1>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-x-[30px] gap-y-[35px] mt-[68px]">
            {filteredBrans?.map((item: any, index: number) => (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className="border cursor-pointer flex items-center justify-end  flex-col gap-[35px] pb-[44px] pt-[10px] "
              >
                <div className="h-[200px] flex items-center justify-center">
                  <img
                    src={imageUrl(
                      `${item?.attributes?.image?.data?.attributes?.url}`
                    )}
                    alt=""
                    className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"
                  />
                </div>
                <h2 className=" text-[#003760] text-[16px] text-center leading-[20.08px] font-semibold">
                  {item?.attributes?.title}
                </h2>
              </div>
            ))}
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

export default Brand;

// : (
//   <div className="w-full flex justify-center items-center" style={{ zIndex: 100,backgroundColor:'white' }}>
//     <Skeleton className="px-4" active={true} />
//   </div>
// )}
