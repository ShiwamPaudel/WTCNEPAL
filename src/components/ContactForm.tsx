import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { BaseUrl } from "@/pages/api/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ data }: any) => {
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
    // console.log(submit);
    if (submit) {
      toast.success("Message sent Successfully!");
    }
  };

  return (
    <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto flex md:flex-row flex-col  py-10">
      <ToastContainer />
      <div className="basis-[40%] flex items-center flex-col md:gap-[69px] gap-[50px]">
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">
            Phone
          </h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold text-center max-w-[150px]">
            {data?.attributes?.phone}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">
            Email
          </h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold">
            {" "}
            {data?.attributes?.email}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold elading-[30.12px]">
            Address
          </h2>
          <p className="text-[#696969] text-[15px] leading-[22.5px] font-bold text-center max-w-[320px]">
            {data?.attributes?.address}
          </p>
        </div>
      </div>
      <div className="md:basis-[60%] border-l-[1px] border-[#003760]/[0.1] md:px-[84px] px-[15px] mt-[30px] md:mt-0">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex items-start justify-center flex-col gap-[24px]"
        >
          <input
            type="text"
            name="full_name"
            onChange={formik.handleChange}
            value={formik.values.full_name}
            placeholder="Full Name"
            className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none"
          />
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none"
          />
          <textarea
            name="message"
            id=""
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Message"
            className="bg-[#F9F9F9] h-[184px] pt-[15px] w-full pl-[21px] outline-none"
          ></textarea>
          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="h-[45px] w-[198px] bg-[#E02454] flex items-center justify-center text-white text-[14px] leading-[17.57px] font-bold"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
