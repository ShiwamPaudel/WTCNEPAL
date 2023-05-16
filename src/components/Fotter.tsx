import Link from "next/link";
import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import Parse from "html-react-parser"
function Fotter({ footer }: any) {
  return (
    <div className=" w-full bg-[#142031] py-[48px] px-[15px] md:px-0">
      {footer?.map((item: any, index: number) => (
        <div key={index} className="container 2xl:max-w-[1180px] mx-auto">
          <div className="flex gap-[68px] md:flex-row flex-col">
            <div className="basis-[30%] flex items-start justify-start flex-col">
              <img
                src={item?.attributes?.logo?.data?.attributes?.url}
                alt="avatar"
                className="w-full h-[125px] object-contain 2xl:ml-[-60px] xl:ml-[-80px]"
              />
              <p className="font-IBM font-normal text-[15px] leading-[24px] text-center md:text-left text-[#CFCFCF] pt-[12px] max-w-[375px]  pr-[12px] md:pr-[0px]">
               {
Parse(`${item?.attributes?.description}`)
               }
              <Link href="/about">..Read More</Link>
              </p>
            </div>
            <div className="basis-[70%] grid md:grid-cols-3 grid-cols-1 gap-[25px] md:gap-0">
              <div className="Address ml-[22px] lg:ml-[0px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-[#CFCFCF]">
                  Categories
                </h3>
                <a
                  href=""
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[14px]"
                >
                  Diagnostic Equipments/ Reagent Kits
                </a>
                <a
                  href=""
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
                >
                  Disinfectant And House Keeping
                </a>
                <a
                  href=""
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
                >
                  Dermatology (Skin Care & Beauty) Products
                </a>
                <a
                  href=""
                  className="flex flex-row  cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
                >
                  Medical And Critical Care Devices
                </a>
              </div>

              <div className="usefullink ml-[22px] lg:ml-[0px] md:pl-[40px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-[#CFCFCF]">
                  Quick Links
                </h3>
                <Link
                  href="/"
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  Contact Us
                </Link>
                <a
                  href=""
                  className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  Products
                </a>
              </div>
              <div className="country ml-[22px] md:ml-[0px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-[#CFCFCF]">
                  Address
                </h3>
                <div className="flex items-center gap-[10px]">
                  <img src="/../assets/location.png" alt="" />
                  <a
                    href=""
                    className="flex flex-row cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                  >
                   {item?.attributes?.address}
                  </a>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src="/../assets/contact.svg" alt="" />
                  <a
                    href=""
                    className="flex flex-row  cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                  >
                     {item?.attributes?.contact_number}
                  </a>
                </div>
                <div className="flex items-center gap-[10px] pt-[10px]">
                  <img src="/../assets/mail.svg" alt="" />

                  <a
                    href=""
                    className="flex flex-row  cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] "
                  >
          {item?.attributes?.Email}
                  </a>
                </div>
                <div className="flex items-center gap-[10px] pt-[10px]">
                  <BsGlobeAmericas
                    color="white"
                    className="opacity-[0.8]"
                    fontSize={16}
                  />

                  <a
                    href=""
                    className="flex flex-row  cursor-pointer hover:text-white/[0.5] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] "
                  >
                   {item?.attributes?.Web}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fotter;
