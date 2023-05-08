import React, { useState } from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
function Nav1() {
  const [about, SetAbout] = useState(false);

  const handleDropDown = () => {
    SetAbout(!about);
  };
  const handleDropDownHide =()=>{
    SetAbout(false)

  }
  return (
    <>
      <div className="container mx-auto lg:hidden">
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

      <div className="container mx-auto justify-between font-semibold items-center hidden py-[10px] lg:flex lg:flex-row">
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
              <Link href="/" className="font-semibold  hover:text-[#1CABD3] transition-colors duration-150 ease-out">
                Home
              </Link>
            </li>
            <li onMouseEnter={handleDropDown} onMouseLeave={handleDropDownHide} className="relative">
              <Link href="/about" className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out">
                About Us
              </Link>

              {about && (
                <div className="absolute top-[14px] left-0  w-[150px] h-[56px] z-40 space-y-[10px]">
                  <div className="bg-white border   absolute top-[3px] h-[100%] w-full pt-[10px] pl-[15px]">
                    <li className="text-[15px] hover:text-[#1CABD3] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                      Company
                    </li>
                    <li className="text-[15px] mt-[6px] hover:text-[#1CABD3] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                      <Link href="/team">
                      Our Team
                      </Link>
                    </li>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="" className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out">
                News & Event
              </Link>
            </li>
            <li>
              <Link href="/ielts" className="font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out">
                Product Category
              </Link>
            </li>
            <li>
              <Link href="" className="font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out">
                Career
              </Link>
            </li>
            <li>
              <Link href="" className=" font-semibold hover:text-[#1CABD3] transition-colors duration-300 ease-out">
                Check Mail
              </Link>
            </li>
            <li className="h-[42px] w-[120px] bg-[#1CABD3] rounded-[39px] flex items-center justify-center">
              <Link
                href="/contact"
                className=" text-white text-[15px] leading-[18.15px] font-semibold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav1;
