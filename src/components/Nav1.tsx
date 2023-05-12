import React, { useState } from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
function Nav1() {
  const [about, SetAbout] = useState(false);
  const [product, setProduct] = useState(false);
  const [sub, setSub] = useState(false);
  const [sub2, setSub2] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);

  const [list2,setList2] = useState(0);
  const [list4,setList4] = useState(3);

  const handleDropDown = () => {
    SetAbout(!about);
  };
  const handleDropDownHide = () => {
    SetAbout(false);
  };
  const handleProduct = () => {
    setProduct(true);
  };
  const handleProductHide = () => {
    setProduct(false);
  };

  const handleList2 =(index:any)=>{
    setList2(index)
  }
const handleList2hide = ()=>{
  setList2(0)
}

const handlelist4 = (index:any)=>{
  setList4(index)
}
const handlelist4hide =()=>{
  setList4(5)
}

  const handleSubmenuHide = () => {
    setSub(false);
  };
  const handleSubmenu2 = (index: any) => {
    // console.log(index)
    setSub2(index);
  };
  const handleSubmenuHide2 = () => {
    // setSub2(false);
  };

  const handleSubmenu = () => {
    setSub(true);
    setMenu2(false);
    setMenu3(false);
    setMenu4(false);
  };
  const handleMenu2 = () => {
    setSub(false);
    setMenu2(true);
    setMenu3(false);
    setMenu4(false);
    // alert(sub)
  };
  const handleMenu3 = () => {
    setSub(false);
    setMenu2(false);
    setMenu3(true);
    setMenu4(false);
    // alert(sub)
  };
  const handleMenu4 = () => {
    setSub(false);
    setMenu4(true);
    setMenu2(false);
    setMenu3(false);
    // alert(sub)
  };

  const handle3level = () => {
    setSub2(true);
  };

  let menu = [
    {
      name: " Diagnostic Equipments/ Reagent kits",
    },
    {
      name: " Disinfectant and House Keeping",
    },
    {
      name: "  Dermatology (Skin care & beauty) Products",
    },
    {
      name: " Medical And Critical Care Devices<",
    },
  ];
  let submenu2 = [
    {
      name: "Biochemistry Instruments and Reagents",
      sub: "BioSystems",
    },
    {
      name: " Blood Gas & Electrolyte Analyzer",
      sub: "i-sens",
    },
    {
      name: "Glucometer",
    },
    {
      name: "  Hematology Instruments and Reagents",
      sub: "Avantor",
    },
    {
      name: " Liquid, Sample and Cell Handling",
      sub: "Eppendorf",
      sub2: "Melling",
    },
    {
      name: "Immunoassay Analyzers",
      sub: "Diasorin",
      sub2: "NeoMedica",
    },
    {
      name: " ELISA and Flexible C. Difficile Testing",
    },
    {
      name: "Vacutainer and View Finder",
      sub: "Improve",
    },
    {
      name: "Histopathology Instruments",
      sub: "Myr",
    },
    {
      name: "Protein Analyzer",
    },
  ];
  let submenu4 = [
    {
      name: "Biochemistry Instruments and Reagents",
    },
    {
      name: " Blood Gas & Electrolyte Analyzer",
    },
    {
      name: "Glucometer",
    },
    {
      name: "  Hematology Instruments and Reagents",
    },
    {
      name: " Liquid, Sample and Cell Handling",
    },
    {
      name: "Immunoassay Analyzers",
    },
    {
      name: " ELISA and Flexible C. Difficile Testing",
    },
    {
      name: "Vacutainer and View Finder",
    },
    {
      name: "Histopathology Instruments",
    },
    {
      name: "Protein Analyzer",
    },
  ];
  let submenu3 = [
    {
      name: "Disinfectact and Cleaner",

    },
    {
      name: "Sterlizer",
      sub:"Newster"
    },
  ];
  let submenu5 = [
    {
      name: "Asclepion",
    },
    {
      name: "Dermaindia",
    },
  ];
  let submenu6 = [
    {
      name: "Ventilator",
      sub:"Nihon kohden"
    },
    {
      name: "OT Lights and Tables",
      sub:"Bowin"
    },
  ];

  return (
    <>
      <div className="container   mx-auto lg:hidden">
        <div className=" flex flex-row justify-between items-center  px-[15px] md:px-0 ">
          <div className="w-[115px] h-[63px] ">
            <Link href="/">
              {" "}
              <img
                src="/../assets/logo.png"
                alt="avatar"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <Dramenu />
        </div>
      </div>

      <div className="container 2xl:max-w-[1180px] mx-auto justify-between font-semibold items-center hidden py-[10px] lg:flex lg:flex-row">
        <div className="w-[115px] h-[63px] ">
          <Link href="/">
            {" "}
            <img
              src="/../assets/logo.png"
              alt="avatar"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-row items-center font-[inter] gap-[40px] font-normal text-[15px] uppercase leading-[14.52px] text-[#000000]">
            <li>
              <Link
                href="/"
                className="font-semibold  hover:text-[#1CABD3] transition-colors duration-150 ease-out"
              >
                Home
              </Link>
            </li>
            <li
              onMouseEnter={handleDropDown}
              onMouseLeave={handleDropDownHide}
              className="relative"
            >
              <Link
                href="/about"
                className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out"
              >
                Company
              </Link>

              {about && (
                <div className="absolute top-[18px] left-0    w-[199px] h-[126px] z-40 space-y-[10px]">
                  <div className="  border-t-[4px] border-t-[black]   absolute top-[27px] h-[100%] w-full ">
                    <li className="text-[14px] border-b-[0.5px] border-b-[white]/[0.5] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                      <Link href="/about">About Web Trading</Link>
                    </li>
                    <li className="text-[14px]   border-b-[0.5px] border-b-[white]/[0.5]  bg-[#1CABD3] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                      <Link href="">Meet our CEO</Link>
                    </li>
                    <li className="text-[14px]  border-b-[0.5px] border-b-[white]/[0.5]  bg-[#1CABD3] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                      <Link href="/team">Our Team</Link>
                    </li>
                    <li className="text-[14px]   bg-[#1CABD3] text-white py-[20px] px-[15px] hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                      <Link href="">Our Network</Link>
                    </li>
                  </div>
                </div>
              )}
            </li>
            <li
              onMouseEnter={handleProduct}
              onMouseLeave={handleProductHide}
              className="relative"
            >
              <Link
                href="/ielts"
                className="font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out"
              >
                Products
              </Link>

              {product && (
                <div className="absolute top-[18px] left-0    w-[399px] h-[126px] z-40 space-y-[10px]">
                  <div className="bg-white  border-t-[4px] border-t-[black]   absolute top-[27px] h-[100%] w-full ">
                    <>
                      <li
                        onMouseEnter={handleSubmenu}
                        className="text-[15px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                      >
                        <Link href="/about">
                          Diagnostic Equipments/ Reagent kits
                        </Link>
                      </li>
                      <li
                        onMouseEnter={handleMenu2}
                        className="text-[15px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                      >
                        <Link href="/about">
                          Disinfectant and House Keeping
                        </Link>
                      </li>
                      <li
                        onMouseEnter={handleMenu3}
                        className="text-[15px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                      >
                        <Link href="/about">
                          {" "}
                          Dermatology (Skin care & beauty) Products
                        </Link>
                      </li>
                      <li
                        onMouseEnter={handleMenu4}
                        className="text-[15px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                      >
                        <Link href="/about">
                          Medical And Critical Care Devices
                        </Link>
                      </li>
                      {sub && (
                        <div className="absolute top-[0px] left-[100%]    w-[399px] h-[126px] z-40 space-y-[10px]">
                          <div className="bg-white border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full ">
                            {submenu2.map((item: any, index: any) => (
                              <>
                                {/* {console.log(item)} */}
                                <li
                                  onMouseEnter={() => handleSubmenu2(index)}
                                  onMouseLeave={handleSubmenuHide2}
                                  className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                >
                                  <Link href="/about">{item.name}</Link>
                                </li>

                                {sub2 === index && (
                                  <div className="absolute  left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
                                    <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                                      {item.sub && (
                                        <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          {item.sub}
                                        </li>
                                      )}

                                      {item.sub2 && (
                                        <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          {item.sub2}
                                        </li>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                      {menu2 && (
                        <div className="absolute top-[0px] left-[100%]    w-[399px] h-[126px] z-40 space-y-[10px]">
                          <div
                          
                            className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full "
                          >
                            {submenu3.map((item: any, index: number) => (
                              <>
                                <li   onMouseEnter={()=>handleList2(index)}
                            onMouseLeave={handleList2hide} className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                  <Link href="/about">{item.name}</Link>
                                </li>
                                {list2===index && (
                                  <div className="absolute  left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
                                    <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                                      {
                                        item.sub && <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                        <Link href="/about">{item.sub}</Link>
                                      </li>
                                      }
                                      
                                    </div>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                      {menu3 && (
                        <div className="absolute top-[95px] left-[100%]    w-[399px] h-[126px] z-40 space-y-[10px]">
                          <div
                            onMouseEnter={handleSubmenu2}
                            onMouseLeave={handleSubmenuHide2}
                            className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full "
                          >
                            {submenu5.map((item: any, index: number) => (
                              <>
                                <li className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                  <Link href="/about">{item.name}</Link>
                                </li>
                                {/* {sub2 && (
                                  <div className="absolute top-[5px] left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
                                    <div className="  border-t-[4px] border-t-[black]   absolute top-[0px] h-[100%] w-full ">
                                      <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                        <Link href="/about">BioSystems</Link>
                                      </li>
                                    </div>
                                  </div>
                                )} */}
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                      {menu4 && (
                        <div className="absolute top-[100px] left-[100%]    w-[399px] h-[126px] z-40 space-y-[10px]">
                          <div
                            
                            className=" border-l-[0.5px]   border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full "
                          >
                            {submenu6.map((item: any, index: number) => (
                              <>
                                <li onMouseEnter={()=>handlelist4(index)}
                            onMouseLeave={handlelist4hide} className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                  <Link href="/about">{item.name}</Link>
                                </li>
                                {list4===index && (
                                  <div className="absolute top-[5px] left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
                                    <div className="  border-t-[4px] border-t-[black]   absolute top-[0px] h-[100%] w-full ">
                                      <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                        <Link href="/about">{item.sub}</Link>
                                      </li>
                                    </div>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/news"
                className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out"
              >
                News & Events
              </Link>
            </li>

            <li>
              <Link
                href=""
                className="font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out"
              >
                Contact
              </Link>
            </li>
            <li className="h-[42px] w-[128px] bg-[#1CABD3] rounded-[39px] flex items-center ml-[0px] justify-center">
              <Link
                href=""
                className=" text-white text-[15px] leading-[18.15px] font-semibold"
              >
                Check Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav1;
