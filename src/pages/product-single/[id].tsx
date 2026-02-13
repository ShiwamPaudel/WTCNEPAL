import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { BaseUrl } from "@/utils/global.mjs";
import axios from "axios";
import { useRouter } from "next/router";
import Parse from "html-react-parser";
import RelatedProducts from "@/components/RelatedProducts";
import { InfinitySpin } from "react-loader-spinner";
import { Skeleton } from "antd";
import { Modal } from "antd";
import { useFormik } from "formik";
import ReactPlayer from "react-player";
import { Breadcrumb } from "antd";
import { imageUrl } from "@/utils/imageUrl";
import { NextSeo, ProductJsonLd, BreadcrumbJsonLd } from "next-seo";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface ProductDetailProps {
  product: any;
  error?: boolean;
}

const ProductDetail = ({ product, error }: ProductDetailProps) => {
  const router = useRouter();
  const [isLoading2, setIsLoading2] = useState(true);

  if (router.isFallback) {
    return (
      <div className="container max-w-[1180px] mx-auto flex items-center justify-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  if (error || !product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const onChange = (key: string) => {
    // console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Overview`,
      children: <div>{Parse(`${product?.attributes?.overview || ''}`)}</div>,
    },
    {
      key: "2",
      label: `Features`,
      children: <div>{Parse(`${product?.attributes?.features || ''}`)}</div>,
    },

    {
      key: "3",
      label: `Specifications`,
      children: <div>{Parse(`${product?.attributes?.specifications || ''}`)}</div>,
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
    try {
      let submit = await axios.post(`${BaseUrl}/email-collections`, {
        data: values,
      });
      // console.log(submit);
      if (product?.attributes?.Brochure?.data?.length) {
        const brochureUrl = product.attributes.Brochure.data[0].attributes.url;
        // window.location.href = `https://admin.dmsnepal.com${brochureUrl}`;
        window.location.href = `https://admin.wtcnepal.com${brochureUrl}`;
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const breadcrumbs = [
    { position: 1, name: "Home", item: "https://wtcnepal.com/" },
    {
      position: 2,
      name: product?.attributes?.select_product_category || "Category",
      item: `https://wtcnepal.com/brand-product/${product?.attributes?.select_product_category}`,
    },
    {
      position: 3,
      name: product?.attributes?.title || "Product",
      item: `https://wtcnepal.com/product-single/${product.id}`,
    },
  ];

  const productTitle = product?.attributes?.title || 'Product';
  const productDesc = product?.attributes?.overview?.replace(/<[^>]*>?/gm, '').substring(0, 160) || "High-quality medical equipment from Web Trading Concern Nepal.";
  const productImg = product?.attributes?.image?.data?.attributes?.url ? imageUrl(product.attributes.image.data.attributes.url) : "https://wtcnepal.com/assets/logo.png";

  return (
    <>
      <NextSeo
        title={`${productTitle} | Medical Equipment Nepal`}
        description={productDesc}
        openGraph={{
          title: `${productTitle} | WTC Nepal`,
          description: productDesc,
          images: [
            {
              url: productImg,
              alt: productTitle,
            }
          ],
          site_name: 'Web Trading Concern Nepal',
        }}
      />
      <ProductJsonLd
        productName={productTitle}
        images={[productImg]}
        description={productDesc}
        brand={product?.attributes?.brand_name?.data?.attributes?.title || "WTC Nepal"}
        // Assuming price is unavailable or request for quote, typical for medical equipment sites
        offers={[
          {
            price: "0",
            priceCurrency: "NPR",
            priceValidUntil: "2025-12-31",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            url: `https://wtcnepal.com/product-single/${product.id}`,
            seller: {
              name: "Web Trading Concern Nepal"
            }
          }
        ]}
      />
      <BreadcrumbJsonLd itemListElements={breadcrumbs} />

      <>
        <Modal
          title="PLEASE FILL THE DETAILS TO DOWNLOAD BROCHURE"
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
              placeholder="Your Name"
              required
              className="border h-[35px] pl-[15px] w-full"
            />
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="Email Address"
              required
              className="border h-[35px] pl-[15px] w-full"
            />
            <input
              name="mobile"
              onChange={formik.handleChange}
              value={formik.values.mobile}
              type="text"
              placeholder="Phone Number"
              required
              className="border h-[35px] pl-[15px] w-full"
            />
            <input
              name="company_name"
              onChange={formik.handleChange}
              value={formik.values.company_name}
              type="text"
              placeholder="Organization's Name"
              className="border h-[35px] pl-[15px] w-full"
            />
            <textarea
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Write a comment"
              className="border h-[75px] pl-[15px] w-full"
            />
            <button
              type="submit"
              className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded-[4px] transition duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg"
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
                // Initial state for image loading
                <div>
                  <div className="md:h-[250px] p-[10px] h-[180px] md:border-[0.4px] bg-white w-full flex items-center justify-center">
                    <Skeleton.Image active={true} />
                  </div>
                  {/* Try to load image to existing img tag structure first */}
                  <Image
                    width={250}
                    height={220}
                    src={imageUrl(
                      `${product?.attributes?.image?.data?.attributes?.url}`
                    )}
                    alt={productTitle}
                    className="hidden"
                    onLoad={() => setIsLoading2(false)}
                    onError={() => setIsLoading2(false)}
                  />
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
                      alt={productTitle}
                      className="cursor-pointer hover:scale-[107%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"
                    />
                  </div>
                  <div className="pt-[15px]">
                    {product?.attributes?.Brochure?.data?.length && (
                      <button
                        onClick={() => setModal2Open(true)}
                        className="h-[38px] p-[10px] bg-[#23a8cd] w-[180px] flex items-center justify-center text-white text-[16px] leading-[21.6px] rounded-[4px] transition duration-300 ease-in-out hover:bg-[#1e97b8] hover:shadow-lg"
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  try {
    const res = await axios.get(`${BaseUrl}/products/${id}?populate=*`);
    const product = res.data.data;

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        error: true,
      },
    };
  }
}

export default ProductDetail;
