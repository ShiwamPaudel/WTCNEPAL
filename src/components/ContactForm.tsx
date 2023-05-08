import React from "react";

const ContactForm = () => {
  return (
    <div className="container 2xl:max-w-[1180px] mx-auto flex md:flex-row flex-col md:py-[150px] py-[100px]">
      <div className="basis-[40%] flex items-center flex-col md:gap-[69px] gap-[50px]">
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">Phone</h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold text-center">+977-1234567891 <br /> 01-154245684</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">Email</h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold"> info@coastline.com</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">Address</h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold text-center"> 15 St, New York, NY 10005 <br /> United States</p>
        </div>
      </div>
      <div className="md:basis-[60%] border-l-[1px] border-[#003760]/[0.1] md:px-[84px] px-[15px] mt-[30px] md:mt-0">
      <form action="" className="w-full flex items-start justify-center flex-col gap-[24px]">
        <input type="text" placeholder="Full Name" className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none"/>
        <input type="email" placeholder="Email" className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none" />
        <textarea name="" id="" placeholder="Message" className="bg-[#F9F9F9] h-[184px] pt-[15px] w-full pl-[21px] outline-none"></textarea>
        <div className="flex items-center justify-start">
        <button type="submit" className="h-[45px] w-[198px] bg-[#E02454] flex items-center justify-center text-white text-[14px] leading-[17.57px] font-bold">SEND MESSAGE</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
