import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { BaseUrl } from "@/utils/global.mjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ data }: any) => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // Wrap the values in a 'data' object as required by Strapi
        const response = await axios.post(`${BaseUrl}/contacts`, {
          data: {
            // Ensure these keys (full_name, email, message) 
            // match the field names in your Strapi Content Type exactly.
            full_name: values.full_name,
            email: values.email,
            message: values.message,
          },
        });

        if (response.status === 200 || response.status === 201) {
          toast.success("Message sent Successfully!");
          resetForm(); // Clears the form fields
        }
      } catch (error: any) {
        console.error("Submission error:", error.response?.data || error.message);
        toast.error(
          error.response?.data?.error?.message || "Failed to send message. Please try again."
        );
      }
    },
  });

  return (
    <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto flex md:flex-row flex-col py-10">
      <ToastContainer />
      
      {/* Contact Info Sidebar */}
      <div className="basis-[40%] flex items-center flex-col md:gap-[69px] gap-[50px]">
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold">Phone</h2>
          <p className="text-[#696969] text-[15px] font-bold text-center max-w-[150px]">
            {data?.attributes?.phone || data?.phone}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold">Email</h2>
          <p className="text-[#696969] text-[15px] font-bold">
            {data?.attributes?.email || data?.email}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[12px]">
          <h2 className="text-[#003760] text-[24px] font-bold">Address</h2>
          <p className="text-[#696969] text-[15px] font-bold text-center max-w-[320px]">
            {data?.attributes?.address || data?.address}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:basis-[60%] border-l-[1px] border-[#003760]/[0.1] md:px-[84px] px-[15px] mt-[30px] md:mt-0">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex items-start justify-center flex-col gap-[24px]"
        >
          <input
            type="text"
            name="full_name"
            required
            onChange={formik.handleChange}
            value={formik.values.full_name}
            placeholder="Full Name"
            className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none border focus:border-[#23a8cd]"
          />
          <input
            type="email"
            name="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="bg-[#F9F9F9] h-[64px] w-full pl-[21px] outline-none border focus:border-[#23a8cd]"
          />
          <textarea
            name="message"
            required
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Message"
            className="bg-[#F9F9F9] h-[184px] pt-[15px] w-full pl-[21px] outline-none border focus:border-[#23a8cd]"
          ></textarea>
          
          <div className="flex items-center justify-start">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="h-[45px] w-[198px] bg-[#23a8cd] flex items-center justify-center text-white text-[14px] font-semibold border hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out disabled:bg-gray-400"
            >
              {formik.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;