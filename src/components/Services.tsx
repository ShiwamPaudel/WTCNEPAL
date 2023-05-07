import React from "react";

const Services = () => {
  let data = [
    {
      img: "/../assets/professionalyear.svg",
      title: "Professional Year Program",
      desc: " Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta mullam blandit tempor sapien gravida donec ipsum, at porta…",
    },
    {
      img: "/../assets/professionalyear.svg",
      title: "Professional Year Program",
      desc: " Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta mullam blandit tempor sapien gravida donec ipsum, at porta…",
    },
    {
      img: "/../assets/professionalyear.svg",
      title: "Professional Year Program",
      desc: " Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta mullam blandit tempor sapien gravida donec ipsum, at porta…",
    },
  ];
  let data2 = [
    {
      img: "/../assets/professionalyear.svg",
      title: "Professional Year Program",
      desc: " Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta mullam blandit tempor sapien gravida donec ipsum, at porta…",
    },
    {
      img: "/../assets/professionalyear.svg",
      title: "Professional Year Program",
      desc: " Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta mullam blandit tempor sapien gravida donec ipsum, at porta…",
    },
  ];
  return (
    <div className="container mx-auto py-[102px]">
      <div className="grid grid-cols-3 gap-[50px]">
        {data.map((item: any, index: any) => (
          <div className="flex items-center justify-center flex-col service_box h-[276px] cursor-pointer">
            <img src={item.img} alt="" className="mb-[35px]" />
            <h1 className="text-[#0D1250] text-[20px] font-bold leading-[25.1px]">
              {item.title}
            </h1>
            <p className="text-[#333333] text-[15px] leading-[23.1px] font-thin text-center mt-[12px] max-w-[285px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-[50px] mt-[50px]">
        {data2.map((item: any, index: any) => (
          <div className="flex items-center justify-center flex-col service_box h-[276px] px-[45px] cursor-pointer">
            <img src={item.img} alt="" className="mb-[35px]" />
            <h1 className="text-[#0D1250] text-[20px] font-bold leading-[25.1px]">
              {item.title}
            </h1>
            <p className="text-[#333333] text-[15px] leading-[23.1px] font-thin text-center mt-[12px] max-w-[285px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
