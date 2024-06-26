import React, { useState, useEffect } from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
import { BaseUrl } from "@/pages/api/global";
import axios from "axios";
// import { useRouter } from "next/router";
function Nav1() {
  const [about, SetAbout] = useState(false);
  const [product, setProduct] = useState(false);
  const [sub, setSub] = useState(null);
  const [sub2, setSub2] = useState(null);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);

  // const router = useRouter();
  const [list2, setList2] = useState(null);
  const [list4, setList4] = useState(null);
  const [fix, setFixed] = useState(false);
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `${BaseUrl}/product-categories?populate=*`
      );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setCategories(response?.data.data);
    };
    getCategory();
  }, []);

  //filtering main category

  // console.log(categories, "category");

  let mainCategory = categories?.filter(
    (item: any, index: number) => item.attributes.salect_category === "main"
  );

  console.log(mainCategory,"filtering main category")

  let subCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Diagnostic Equipments/ Reagent Kits"
  );

  // console.log(subCategory);

  subCategory?.sort((a: any, b: any) =>
    a.attributes.title.localeCompare(b.attributes.title)
  );

  let secondCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Disinfectant And House Keeping"
  );

  // console.log(secondCategory);

  let thirdCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Dermatology (Skin Care & Beauty) Products"
  );
  // console.log(thirdCategory);

  let fourthCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Medical And Critical Care Devices"
  );
  // console.log(fourthCategory, "filtering sub category");

  const handleDropDown = () => {
    SetAbout(!about);
  };
  const handleDropDownHide = () => {
    SetAbout(false);
  };

  const handleProduct = () => {
    setProduct(true);
    setSub(null);
    setSub2(null);
  };
  const handleProductHide = () => {
    setProduct(false);
  };

  const handleList2 = (index: any) => {
    setList2(index);
  };

  const handlelist4 = (index: any) => {
    setList4(index);
  };

  const handleSubmenu2 = (index: any) => {
    // console.log(index);
    setSub2(index);
  };


  const handleSubmenu = (index: any) => {
    // console.log(index);
    setSub(index);
    setMenu2(false);
    setMenu3(false);
    setMenu4(false);
  };

 

  const stickyTop = () => {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", stickyTop);
  }

  // const isActive = (path: string) => {
  //   return router.pathname === path;
  // };

  return (
    <>
      {/* responsive navbar  */}
      <div className="container flex mx-auto lg:hidden ">
        <div className=" flex flex-row justify-between items-center  px-[15px] md:px-0 ">
          <div className="w-[115px] h-auto ">
            <Link href="/">
              <img
                src="/../assets/logo.png"
                alt="avatar"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <Dramenu categories={categories} />
        </div>
      </div>

      <div className={`bg-cyan ${fix ? "nav" : ""}`}>
        <div className="container flex justify-between items-center py-[5px] lg:flex 2xl:max-w-[1180px] mx-auto font-semibold hidden lg:flex-row ">
          {/* xl:px-20 2xl:px-0 */}
          <div className="w-[137px] h-auto ">
            <Link href="/">
              <img
                src="/../assets/logo.png"
                alt="avatar"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="">
            <ul className="flex flex-row items-center font-[inter] gap-[20px] font-normal text-[14px] uppercase leading-[14.52px] text-[#000000]">
              <li>
                <Link
                  href="/"
                  className="px-[1px] py-[5px] hover-text-border font-semibold relative overflow-hidden hover:text-[#23a8cd] transition-colors duration-150 ease-out px-"
                >
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={handleDropDown}
                onMouseLeave={handleDropDownHide}
                className="relative px-[1px] py-[5px]"
              >
                <Link
                  href="/about"
                  className="hover-text-border font-semibold hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  Company
                </Link>

                {about && (
                  <div className="absolute top-[12px] left-[-60px]   w-[199px] h-[126px] z-40 space-y-[10px]">
                    <div className="  absolute top-[27px] h-[100%] w-full ">
                      <li className="hover-text-borderB relative overflow-hidden text-[14px] border-b-[0.5px] border-b-[white]/[0.5] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                        <Link href="/about">About Web Trading</Link>
                      </li>
                      <li className="text-[14px] border-b-[0.5px] border-b-[white]/[0.5]  bg-[#23a8cd] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="/director">Meet our Director</Link>
                      </li>
                      <li className="text-[14px]  border-b-[0.5px] border-b-[white]/[0.5]  bg-[#23a8cd] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="/team">Our Team</Link>
                      </li>
                      <li className="text-[14px] hidden bg-[#23a8cd] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="">Our Network</Link>
                      </li>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={handleProduct}
                onMouseLeave={handleProductHide}
                className="relative px-[1px] py-[5px]"
              >
                <Link
                  href="/brand-product/BioSystems"
                  className="cursor-pointer hover-text-border font-semibold hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  Products
                </Link>

                {product && (
                  <div className="absolute top-[12px] left-[-84px]   w-[250px] h-[126px] z-[9999] space-y-[10px]">
                    <div className="bg-white  absolute top-[27px] h-[100%] w-full ">
                      <>
                        {mainCategory?.map((item: any, index: any) => (
                          <>
                            <li
                              onMouseEnter={() => handleSubmenu(index)}
                              className="text-[14px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                            >
                              <Link href="/about">
                                {item?.attributes?.title}
                              </Link>
                            </li>

                            {sub === 0 && (
                              <div className="absolute top-[-10px] left-[100%] border-l-2 border-transparent   w-[90%] h-[126px] z-40 space-y-[10px]">
                                <div className="bg-white  w-full  absolute top-[10px] h-[100%]  ">
                                  {subCategory?.map((item: any, index: any) => (
                                    <>
                                      {/* {console.log(item)} */}
                                      <li
                                        onMouseEnter={() =>
                                          handleSubmenu2(index)
                                        }
                                        className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                      >
                                        <Link href="/about">
                                          {item?.attributes?.title}
                                        </Link>
                                      </li>

                                      {sub2 === index && (
                                        <div className="absolute left-[100%] border-l-2 border-transparent   w-[54%] h-[126px] z-40 space-y-[10px]">
                                          <div className=" -mt-[40%]    absolute top-[0px] h-[100%] w-full ">
                                            {item.attributes.brand_name && (
                                              <>
                                                <li className="text-[15px] whitespace-pre w-full border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                  <Link
                                                    href={`/brand-product/${item.attributes.brand_name}`}
                                                  >
                                                    {item.attributes.brand_name}
                                                  </Link>
                                                </li>
                                                {item?.attributes
                                                  ?.brand_name2 && (
                                                  <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                    <Link
                                                      href={`/brand-product/${item?.attributes?.brand_name2}`}
                                                    >
                                                      {
                                                        item?.attributes
                                                          ?.brand_name2
                                                      }
                                                    </Link>
                                                  </li>
                                                )}
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}

                            {sub === 1 && (
                              <div className="absolute top-[59px] left-[100%] border-l-2 border-transparent   w-[90%] h-[126px] z-40 space-y-[10px]">
                                <div className="  absolute top-[10px] h-[100%] w-full ">
                                  {secondCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li
                                          onMouseEnter={() =>
                                            handleList2(index)
                                          }
                                          className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                        >
                                          <Link href="/about">
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {list2 === index && (
                                          <div className="absolute  left-[100%]  border-l-2 border-transparent  w-[35%] h-[126px] z-40 space-y-[10px]">
                                            <div className=" mt-[-36px]    absolute top-[0px] h-[100%] w-full ">
                                              {item?.attributes?.brand_name && (
                                                <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                  <Link
                                                    href={`/brand-product/${item?.attributes?.brand_name}`}
                                                  >
                                                    {
                                                      item?.attributes
                                                        ?.brand_name
                                                    }
                                                  </Link>
                                                </li>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            {sub === 2 && (
                              <div className="absolute top-[115px] left-[100%] border-l-2 border-transparent   w-[90%] h-[126px] z-40 space-y-[10px]">
                                <div
                                  onMouseEnter={handleSubmenu2}
                                  className="  absolute top-[10px] h-[100%] w-full "
                                >
                                  {thirdCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item?.attributes?.title}`}
                                          >
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {/* {sub2 && (
        <div className="absolute top-[5px] left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
          <div className="  absolute top-[0px] h-[100%] w-full ">
            <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
              <Link href="/about">BioSystems</Link>
            </li>
          </div>
        </div>
      )} */}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {sub === 3 && (
                              <div className="absolute top-[185px] left-[100%]  border-l-2 border-transparent  w-[90%] h-[126px] z-40 space-y-[10px]">
                                <div className="    absolute top-[10px] h-[100%] w-full ">
                                  {fourthCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li
                                          onMouseEnter={() =>
                                            handlelist4(index)
                                          }
                                          className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                        >
                                          <Link href="/about">
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {list4 === index && (
                                          <div className="absolute  left-[100%]  border-l-2 border-transparent  w-[55%] h-[126px] z-40 space-y-[10px]">
                                            <div className=" mt-[-35px] absolute top-[0px] h-[100%] w-full ">
                                              <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] whitespace-nowrap hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                <Link
                                                  href={`/brand-product/${item?.attributes?.brand_name}`}
                                                >
                                                  {item?.attributes?.brand_name}
                                                </Link>
                                              </li>
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/news"
                  className="px-[1px] py-[5px] hover-text-border font-semibold relative overflow-hidden hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  News & Events
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gallery"
                  className=" font-semibold hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  Gallery
                </Link>
              </li> */}

              <li>
                <Link
                  href="/careers"
                  className="px-[1px] py-[5px] hover-text-border font-semibold relative overflow-hidden hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-[1px] py-[5px] hover-text-border font-semibold relative overflow-hidden hover:text-[#23a8cd] transition-colors duration-300 ease-out"
                >
                  Contact
                </Link>
              </li>
              <li className="h-[42px] w-[128px] bg-[#23a8cd] rounded-[39px] flex items-center ml-[0px] justify-center whitespace-nowrap">
                <Link
                  target="_black"
                  href="https://mail.zoho.com/zm/"
                  className="text-white text-[15px] leading-[18.15px] font-semibold"
                  passHref
                >
                  Check Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav1;
