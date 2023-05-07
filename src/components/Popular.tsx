import React from "react";

const Popular = () => {
  let data = [
    {
      img: "/../assets/canada.png",
      dest: "CANADA",
    },
    {
      img: "/../assets/usa.png",
      dest: "USA",
    },
    {
      img: "/../assets/australia.png",
      dest: "AUSTRALIA",
    },
    {
      img: "/../assets/uk.png",
      dest: "UK",
    },
    {
      img: "/../assets/newZealand.png",
      dest: "NEW ZEALAND",
    },
  ];
  return (
    <>
      <div className=" pb-[110px]">
        <div className="container mx-auto">
          <h3 className="font-Work font-bold text-[13px] leading-[15.25px] tracking-[0.085em] text-center text-[#007EC5] pt-[13px] md:pt-[100px] ">
            EXPLORE
          </h3>
          <h2 className="font-IBM text-[32px] md:text-[36px] leading-[47px] text-[#0D1250] text-center pt-[3px] px-[5px] md:px-[0px]">
            Popular Countries of 2023
          </h2>
          <p className="font-Work font-light text-[15px] leading-[18px] text-[#838485] text-center pt-[3px] ">
            Lorem ipsum dolor sit amet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] mt-[52px] px-[15px] md:px-0">
           {
            data.map((item,index)=>(
               <div className="bg-[] box_div group h-[250px] bg-white flex items-center justify-center flex-col gap-[34px] cursor-pointer">
               <img src={item.img} alt="" />
               <h2 className="group-hover:text-[#FFFFFF] text-[20px] leading-[24.2px] font-bold">
                {item.dest}
               </h2>
             </div>
            ))
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
