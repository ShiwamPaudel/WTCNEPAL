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
import { Image } from "antd";
import { Modal } from "antd";
import { useFormik } from "formik";
import ReactPlayer from "react-player";
import { Breadcrumb } from "antd";
import { imageUrl } from "@/utils/imageUrl";

const ProductDetail = () => {
  const router = useRouter();
  let id = router.query.id;
  // console.log(id);

  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(`${BaseUrl}/products/${id}?populate=*`);
      //  let list=    product.data.data.slice(0,8)
      setProduct(product.data.data);
      setIsLoading(false);
      setIsLoading2(false);
    };
    getProduct();
  }, [id]);
  console.log("product", product);

  const onChange = (key: string) => {
    // console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Overview`,
      children: <div>{Parse(`${product?.attributes?.overview}`)}</div>,
    },
    {
      key: "2",
      label: `Features`,
      children: <div>{Parse(`${product?.attributes?.features}`)}</div>,
    },
   
    {
      key: "3",
      label: `Specifications`,
      children: <div>{Parse(`${product?.attributes?.specifications}`)}</div>,
    },
    {
      key: "4",
      label: <div>{product?.attributes?.Youtube_video_Link && "Video"}</div>,
      children: (
        <div>
          <ReactPlayer url={product?.attributes?.Youtube_video_Link} />
        </div>
      ),
    },
  ];

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      company_name: "",
      message: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: any) => {
    let submit = await axios.post(`${BaseUrl}/email-collections`, {
      data: values,
    });
    // console.log(submit);
    if (product?.attributes?.Brochure?.data?.length) {
      const brochureUrl = product.attributes.Brochure.data[0].attributes.url;
      window.location.href = `${brochureUrl}`;
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="container max-w-[1180px] mx-auto flex items-center justify-center">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <>
          <Modal
            title="PLEASE FILL DETAILS TO DOWNLOAD BROCHURE"
            centered
            open={modal2Open}
            footer={false}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
          >
            <form onSubmit={formik.handleSubmit} className="space-y-[15px] ">
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="Enter your Name"
                required
                className="border h-[35px] pl-[15px] w-full"
              />
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                placeholder="Enter your Email"
                required
                className="border h-[35px] pl-[15px] w-full"
              />
              <input
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                type="text"
                placeholder="Enter your cell number"
                required
                className="border h-[35px] pl-[15px] w-full"
              />
              <input
                name="company_name"
                onChange={formik.handleChange}
                value={formik.values.company_name}
                type="text"
                placeholder="Enter your company name"
                className="border h-[35px] pl-[15px] w-full"
              />
              <textarea
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder="Enter your message"
                className="border h-[75px] pl-[15px] w-full"
              />
              <button
                type="submit"
                className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded-[4px]"
              >
                Submit
              </button>
            </form>
          </Modal>
          <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0   pt-[30px] pb-[80px] px-[15px] md:px-0">
            <div className="pb-[15px]">
              {product?.attributes?.select_product_category && (
                <Breadcrumb
                  items={[
                    {
                      title: (
                        <a href="">
                          {product?.attributes?.select_product_category}
                        </a>
                      ),
                    },
                    {
                      title: (
                        <a href="">
                          {product?.attributes?.choose_product_sub_category}
                        </a>
                      ),
                    },
                  ]}
                />
              )}
            </div>

            <div className="border-b-[1px] pb-[15px] mb-[15px]">
              <h1 className="text-[40px] font-thin leading-[48px] text-[#212529]">
                {product?.attributes?.title}
              </h1>
            </div>
            <div className="flex md:flex-row flex-col md:gap-[80px] gap-[50px] pt-[20px]">
              <div className="basis-[30%] ">
                {isLoading2 ? (
                  <div
                    className="max-w-[1180px] mx-auto flex justify-center items-center"
                    style={{ zIndex: 100, backgroundColor: "white" }}
                  >
                    <Skeleton className="px-4" active={true} />
                  </div>
                ) : (
                  <div>
                    <div className="md:h-[250px] p-[10px] h-[180px] md:border-[0.4px] bg-white w-full flex items-center justify-center">
                      <Image
                        width={250}
                        height={220}
                        src={imageUrl(
                          `${product?.attributes?.image?.data?.attributes?.url}`
                        )}
                        className="cursor-pointer hover:scale-[107%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"
                      />
                    </div>
                    <div className="pt-[15px]">
                      {product?.attributes?.Brochure?.data?.length && (
                        <button
                          onClick={() => setModal2Open(true)}
                          className="h-[38px] p-[10px] bg-[#23a8cd] hover:bg-[#23a8cd] w-[180px] flex items-center justify-center text-white text-[16px] leading-[21.6px] rounded-[4px] "
                        >
                          Download Brochure
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="basis-[80%] ">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
            </div>
          </div>
          <RelatedProducts setIsLoading2={setIsLoading2} />
        </>
      )}

      {/* {product?.map((item: any, index: number) => ())} */}
    </>
  );
};

export default ProductDetail;
