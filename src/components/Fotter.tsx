import React from "react";
function Fotter() {
  return (
    <div className=" w-full bg-[#142031] py-[48px] px-[15px] md:px-0">
      <div className="container mx-auto">
        <div className="flex gap-[68px] md:flex-row flex-col">
          <div className="basis-[30%] flex items-start justify-start flex-col">
            <img
              src="/../assets/footerlogo.png"
              alt="avatar"
              className="w-full h-[125px] object-contain 2xl:ml-[-110px] xl:ml-[-80px]"
            />
            <p className="font-IBM font-normal text-[15px] leading-[24px] text-center md:text-left text-[#CFCFCF] pt-[12px] max-w-[375px]  pr-[12px] md:pr-[0px]">
              We denounce with righteous indi gnation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of your moment,
              so blinded by desire those who fail weakness.
            </p>
          </div>
          <div className="basis-[70%] grid md:grid-cols-3 grid-cols-1 gap-[25px] md:gap-0">
            <div className="Address ml-[22px] lg:ml-[0px]">
              <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-[#CFCFCF]">
                Products
              </h3>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[14px]"
              >
                Centrifuge 5804/5804R
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
              >
                i-smart 300
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
              >
                Liquid Handling work stations
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[9px]"
              >
                Pipettes
              </a>
            </div>

            <div className="usefullink ml-[22px] lg:ml-[0px] md:pl-[40px]">
              <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-[#CFCFCF]">
                Quick Links
              </h3>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
              >
                Home
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
              >
                About
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
              >
                Contact Us
              </a>
              <a
                href=""
                className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
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
                  className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  DMS House-148, Kumari Marga, Tripureshwor, Kathmandu G.P.O.
                  BOX: 1797
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src="/../assets/contact.svg" alt="" />
                <a
                  href=""
                  className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] pt-[13px]"
                >
                  015362654, 015319205, 01410063 Toll Free Number (for service
                  only): 166001299994
                </a>
              </div>
              <div className="flex items-center gap-[10px] pt-[10px]">
                <img src="/../assets/mail.svg" alt="" />

                <a
                  href=""
                  className="flex flex-row  items-center font-IBM font-normal text-[15px] leading-[24px] text-[#CFCFCF] "
                >
                  info@dmsnepal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
