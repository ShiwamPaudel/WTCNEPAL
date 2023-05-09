import React from "react";

function Requestcall() {
  return (
    <div className="contact_form px-[15px] md:px-0">
      <div className="container mx-auto relative py-[32px] md:px-[180px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[92px]">
          <div className=" pl-[15px] md:pl-[10px] flex items-center justify-center">
            <div>
            <h3 className="font-Work hidden font-bold text-[13px] leading-[15.25px] tracking-[0.085px] text-[white] ">
            Contact us
            </h3>
            <h2 className="font-IBM uppercase font-extrabold max-w-[564px] text-[33px] md:text-[32px] leading-[44px] md:leading-[47px] text-[white] pt-[4px]">
            Have a Question? Contact Us
            </h2>
            <p className="font-Work font-normal text-[16px] leading-[18px] text-[white] pr-[35px] w-[338px] mt-[26px] md:w-[385px] 2xl:w-[545px]">
            Web Trading Nepal is committed to providing the highest level of customer service. We welcome your feedback, questions, and concerns. Please feel free to reach out to us using the form below.
            </p>
            </div>
          </div>
          <div className="box1 w-full h md:h-[600px] ">
            <h2 className="font-IBM font-medium text-[28px] leading-[36.4px] text-[#0D1250] pt-[34px] pl-[34px]">
              Contact Form
            </h2>
            <p className="font-Work font-normal text-[xs] leading-[18px] text-[#838485] pt-[14px] pl-[34px]">
              Leave us your info, we shall call you ASAP
            </p>
            <div className="grid grid-cols-1  mt-[40px] ml-[34px] gap-[32px] mr-[38px]">
              <div className="box2">
                <form action="" method="post">
                  <label className="font-IBM font-normal text-[15px] leading-[19.5px] text-[#0D1250]">
                    fullname
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-[1px] pl-[14px] border-solid border-[#EDEDED] w-full h-[56px] mt-[8px] mb-[38px] inputfield"
                  />
                  <br />
                  <label className="font-IBM font-normal  text-[15px] leading-[19.5px] text-[#0D1250]">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-[1px] pl-[14px] border-solid border-[#EDEDED] w-full mb-[38px] h-[56px] mt-[8px] inputfield"
                  />
                  <label className="font-IBM font-normal  text-[15px] leading-[19.5px] text-[#0D1250]">
                    Message
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-[1px] border-solid pl-[14px] border-[#EDEDED] w-full h-[56px] mt-[8px] inputfield"
                  />
                </form>
              </div>
            </div>
            <div className=" h-[56px] mx-[34px] mt-[40px] mb-[34px] bg-[#1CABD3] hover:bg-[#1CABD3]/[0.8] rounded-sm">
              <div className="flex items-center justify-center">
             
                <a
                  href=""
                  className="font-IBM font-semibold text-[15px] leading-[19.5px] text-[#FFFFFF] pl-[15px] py-[18px]"
                >
                  {" "}
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requestcall;
