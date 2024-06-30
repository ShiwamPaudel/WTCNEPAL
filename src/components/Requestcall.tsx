import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { BaseUrl } from "@/pages/api/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Collape from "./Collape";
function Requestcall({ faq }: any) {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: any) => {
    let submit = await axios.post(`${BaseUrl}/contacts`, { data: values });
    console.log(submit);
    if (submit) {
      toast.success("Message sent Successfully!");
    }

    // const notify = () =>
    // if(status==="200"){
    //   console.log("hello this code runs")
    //   alert("success")

    // }
  };

  return (
    <div className="contact_form">
      <ToastContainer />
      <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto relative ">
        <h1 className="text-lg sm:text-[36px] font-semibold leading-[42.19px] text-center uppercase text-white py-10">Frequently Asked Questions</h1>
        <div className="flex flex-col lg:flex-row gap-6 pb-10 mx-8">
          <Collape />
          <div className="box1 w-full self-start px-6 py-8  basis-[50%] rounded-lg ">
            <div className="font-IBM font-medium text-[28px] leading-[36.4px] text-[#0D1250]">
              Have a question?
            </div>
            <p className="font-Work font-normal text-[xs] leading-[18px] text-[#838485] ">
              Leave us your info and we shall get back to you soon.
            </p>
            <div className=" grid grid-cols-1  mt-[40px]  gap-[32px] mr-[38px]">
              <div className="box2">
                <form onSubmit={formik.handleSubmit}>
                  <label className="font-IBM font-normal text-[15px] leading-[19.5px] text-[#0D1250]">
                    Full Name
                  </label>
                  <br />
                  <input
                    name="full_name"
                    onChange={formik.handleChange}
                    value={formik.values.full_name}
                    required
                    type="text"
                    className="border-[1px] border-solid border-[#EDEDED] w-full h-[56px] mt-[8px] mb-[38px] inputfield pl-[14px]"
                  />
                  <br />
                  <label className="font-IBM font-normal  text-[15px] leading-[19.5px] text-[#0D1250]">
                    Email
                  </label>
                  <br />
                  <input
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                    type="text"
                    className="border-[1px]  border-solid border-[#EDEDED] w-full mb-[38px] h-[56px] mt-[6px] inputfield pl-[14px]"
                  />
                  <label className="font-IBM font-normal  text-[15px] leading-[19.5px] text-[#0D1250]">
                    Message
                  </label>
                  <br />
                  <input
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    required
                    type="text"
                    className="border-[1px] border-solid pl-[14px] border-[#EDEDED] w-full h-[56px] mt-[8px] inputfield"
                  />
                  <div className=" h-[56px]  mt-[40px]  bg-[#1CABD3] hover:bg-cyan-400 rounded-sm cursor-pointer transition-all duration-500 ease-in-out">
                    <div className="flex items-center justify-center pb-2">
                      <button
                        type="submit"
                        className="font-IBM font-semibold text-[15px] leading-[19.5px] text-[#FFFFFF] pl-[15px] py-[18px]"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requestcall;
