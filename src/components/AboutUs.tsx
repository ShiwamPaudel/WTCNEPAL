import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "@/utils/global.mjs";
import parse from "html-react-parser";
import { Modal } from "antd";
import { useFormik } from "formik";
import { imageUrl } from "@/utils/imageUrl";

const AboutUs = () => {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    let getAbout = async () => {
      let banenr = await axios.get(`${BaseUrl}/tsts?populate=*`);
      setAbout(banenr.data.data);
    };
    getAbout();
  }, []);

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      company_name: "",
      message: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: any) => {
    let submit = await axios.post(`${BaseUrl}/email-collections`, {
      data: values,
    });

    if (submit) {
      const pdfUrl = `wtc.pdf`;
      window.open(pdfUrl, "_blank");
    } else {
    }
  };


  return (
    <div className="py-10">
      <Modal
        title="Enter your details to download Brochure: "
        centered
        open={modal2Open}
        footer={false}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <form onSubmit={formik.handleSubmit} className="space-y-[15px] ">
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            placeholder="Your Name"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="Email Address"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          <input
            name="mobile"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            type="text"
            placeholder="Phone Number"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          <input
            name="company_name"
            onChange={formik.handleChange}
            value={formik.values.company_name}
            type="text"
            placeholder="Organization's Name"
            className="border h-[35px] pl-[15px] w-full font-Poppins"
          />
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Write a comment"
            className="border h-[75px] pl-[15px] pt-[10px] w-full font-poppins"
          />

          <button
            type="submit"
            className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded-[4px]"
          >
            Submit
          </button>
        </form>
      </Modal>

      {about?.map((item: any, index: number) => (
        <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto md:flex gap-20 px-[15px] md:px-0 ">
          <div className="basis-[50%] ">
            <h2 className="text-[#7A8A9E] text-[13px] leading-[15.25px] tracking-[0.085em] font-bold">
              Welcome
            </h2>
            <h1 className="text-[#003760] text-[32px] leading-[46.8px] font-semibold uppercase py-4">
              {item?.attributes?.title}
            </h1>
            <div className="w-full">
              {parse(`${item?.attributes?.description}`)}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "25", label: "Years of Experience" },
                { number: "1400 +", label: "Installations" },
                { number: "7", label: "Provinces Reached" },
                { number: "25 +", label: "Global Partners" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 group"
                >
                  <h3 className="text-3xl font-bold text-blue-600 mb-1 group-hover:scale-110 origin-left transition-transform duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
          <div className="basis-[45%] mt-[40px] md:mt-0 flex flex-col items-center justify-center">
            <div className="mb-8">
              <img
                src={imageUrl(
                  `${item?.attributes?.image?.data?.attributes?.url}`
                )}
                alt="img"
              />
            </div>
            <div className="flex items-center justify-center">
              {/* <img src="/../assets/brochure.png" alt="" className="cursor-pointer w-[70%]"  onClick={() => setModal2Open(true)}/> */}
              <button
                onClick={() => setModal2Open(true)}
                className="h-[50px] bg-[#23a8cd] font-semibold hover:bg-blue-500 w-[190px] flex items-center justify-center text-white text-[16px] rounded-[8px] border transition-all duration-500 ease-in-out"
              >
                Download Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
