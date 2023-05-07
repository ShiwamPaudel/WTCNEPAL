import React from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
function Nav1() {
  return (
    <>
      <div className="container mx-auto lg:hidden">
        <div className=" flex flex-row justify-between items-center  px-[15px] md:px-0 ">
          <div className="w-[115px] h-[63px] ">
            <a href="/">
              {" "}
              <img
                src="/../assets/logo.png"
                alt="avatar"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <Dramenu />
        </div>
      </div>

      <div className="container mx-auto justify-between font-semibold items-center hidden py-[10px] lg:flex lg:flex-row">
        <div className="w-[115px] h-[63px] ">
          <a href="/">
            {" "}
            <img
              src="/../assets/logo.png"
              alt="avatar"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div className="">
          <ul className="flex flex-row items-center font-[inter] gap-[40px] font-normal text-[15px] uppercase leading-[14.52px] text-[#000000]">
            <li>
              <a href="" className="font-semibold ">
                Home
              </a>
            </li>
            <li>
              <Link href="/aboutus" className=" font-semibold">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className=" font-semibold ">
                News & Event
              </Link>
            </li>
            <li>
              <Link href="/ielts" className="font-semibold ">
                Product Category
              </Link>
            </li>
            <li>
              <a href="" className="font-semibold ">
                Career
              </a>
            </li>
            <li>
              <a href="" className=" font-semibold">
                Check Mail
              </a>
            </li>
            <li className="h-[42px] w-[120px] bg-[#1CABD3] rounded-[39px] flex items-center justify-center">
              <a
                href=""
                className=" text-white text-[15px] leading-[18.15px] font-semibold"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav1;
