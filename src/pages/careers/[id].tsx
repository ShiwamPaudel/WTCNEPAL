import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../api/global";
import Parse from "html-react-parser";
import { useFormik } from "formik";
import { Button, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleJob = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    let getProduct = async () => {
      let product = await axios.get(`${BaseUrl}/gsfgs/${id}?populate=*`);
      //  let list=    product.data.data.slice(0,8)
      setProduct(product.data.data);
      //   setIsLoading(false);
      //   setIsLoading2(false)
    };
    getProduct();
  }, [id]);
  console.log(product, "hello");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  interface FormValues {
    Name: string;
    Email: string;
    Mobile: string;
    Message: string;
    Resume: File | ""; // Specify the data type as File or null
  }
  const formData = new FormData();
  const formik = useFormik<FormValues>({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      Message: "",
    Resume:""
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      // handleSubmit(values);

      // let data ={
      //   Name:values.Name,
      //   Email:values.Email,
      //   Mobile:values.Mobile,
      //   Message:values.Message,

      // }
      formData.append("data", JSON.stringify(values));
      formData.append("files.Resume",values.Resume)

      console.log(formData);

    
      handleSubmit(values);
    },
  });

  const handleSingleFile = (e: any) => {
    let file = e.target.files;
    console.log(file[0])
    // console.log(file)
    
    // formik.setFieldValue("Resume", file[0]);
    formData.append("files.Resume",file[0])
    console.log(formData);
  };

  const handleSubmit = async (values: any) => {
    console.log(formData)
    let submit = await axios.post(`${BaseUrl}/sc-xcs`, formData, {
      headers: { 'Content-type':"multipart/form-data"}
    });

    if(submit){
      toast.success("Applied Successfully!");
      router.push("/careers")
    }
    console.log(submit);
  };

  // formData.append("data",values)

  // for resume upload
  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
        formik.setFieldValue("Resume", info.file);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // const router = useRouter()
  return (
    <div className="container mx-auto 2xl:max-w-[1180px] pb-[50px]">
      <ToastContainer/>
      {/* modal popup */}
      <Modal
        width={700}
        title="Details"
        centered
        open={isModalOpen}
        footer={false}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <form onSubmit={formik.handleSubmit} className="space-y-[15px] ">
          <input
            name="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
            type="text"
            placeholder="Enter your Name*"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          <input
            name="Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
            type="email"
            placeholder="Enter your Email*"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          <input
            name="Mobile"
            onChange={formik.handleChange}
            value={formik.values.Mobile}
            type="text"
            placeholder="Enter your cell number*"
            required
            className="border h-[35px] pl-[15px] w-full"
          />
          {/* <input name="company_name" onChange={formik.handleChange} value={formik.values.company_name} type="text" placeholder="Enter your company name"  className="border h-[35px] pl-[15px] w-full" /> */}
          <textarea
            name="Message"
            onChange={formik.handleChange}
            value={formik.values.Message}
            placeholder="Enter your message"
            className="border h-[75px] pl-[15px] pt-[10px] w-full"
          />
          <div className="pt-[0px]">
            {/* <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload your CV</Button>
  </Upload> */}
            {/* <label htmlFor="">Upload your CV</label> */}
            <input type="file" name="Resume"    onChange={(event:any) => {
          formik.setFieldValue("Resume", event.currentTarget.files[0]);
        }} />
          </div>

          <button
            type="submit"
            className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded-[4px]"
          >
            Submit
          </button>
        </form>
      </Modal>
      <h1 className="text-[20px] font-semibold ">
        {product?.attributes?.Title}
      </h1>
      <div className="border w-[60%] mt-[15px] p-[10px]">
        <div className="border-b-[1px] pb-[5px]">
          <h2 className="text-[#23A8CD]">Basic Job Information</h2>
        </div>
        <div>
          <div className="pt-[10px]">
            { product?.attributes?.company_name &&
                          <h2>
                          Company Name:{" "}
                          <span className="font-semibold">
                            {product?.attributes?.company_name
                              ? product?.attributes?.company_name
                              : "Null"}
                          </span>
                        </h2>
            }

{
  product?.attributes?.No_of_Vacancy &&  <h2>
  No of Vacancy:{" "}
  <span className="font-semibold">
    {product?.attributes?.No_of_Vacancy
      ? product?.attributes?.No_of_Vacancy
      : "Null"}
  </span>
</h2>
}

          {
            product?.attributes?.education_level &&  <h2>
            Education Level:{" "}
            <span className="font-semibold">
              {product?.attributes?.education_level
                ? product?.attributes?.education_level
                : "Null"}
            </span>
          </h2>
          }  
           
           {
            product?.attributes?.address &&   <h2>
            Job Location:{" "}
            <span className="font-semibold">
              {product?.attributes?.address
                ? product?.attributes?.address
                : "Null"}
            </span>
          </h2>
           }
           
           {
            product?.attributes?.Deadline &&   <h2>
            Deadline:{" "}
            <span className="font-semibold">
              {product?.attributes?.Deadline
                ? product?.attributes?.Deadline
                : "Null"}
            </span>
          </h2>
           }
           
           {
            product?.attributes?.Professional_Skill_Required && <h2>
            Professional Skill Required :{" "}
            <span className="font-semibold">
              {product?.attributes?.Professional_Skill_Required
                ? product?.attributes?.Professional_Skill_Required
                : "Null"}
            </span>
          </h2>
           }

           { product?.attributes?.Employment_Type &&
            <h2>
              Employment Type :{" "}
              <span className="font-semibold">
                {product?.attributes?.Employment_Type
                  ? product?.attributes?.Employment_Type
                  : "Null"}
              </span>
            </h2>
           }
           
            
          </div>
        </div>
      </div>
      <div className="mt-[20px] border p-[10px] w-[60%]">
        <h1 className="border-b-[1px] pb-[5px] text-[#23A8CD]">
          Job Description
        </h1>
        <div className="pt-[10px]">
          {Parse(`${product?.attributes?.Job_description}`)}
        </div>
      </div>
      <div className="mt-[20px] border p-[10px] w-[60%]">
        <h1 className="border-b-[1px] pb-[5px] text-[#23A8CD]">
          Job Specification
        </h1>
        <div className="pt-[10px]">
          {Parse(`${product?.attributes?.Job_specification}`)}
        </div>
      </div>
      <button
        onClick={showModal}
        className="mt-[20px] h-[50px] w-[180px] bg-[#23A8CD] flex items-center justify-center text-white font-inter"
      >
        Appy Now
      </button>
    </div>
  );
};

export default SingleJob;
