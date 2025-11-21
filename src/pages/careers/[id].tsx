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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleJob = () => {
  const router = useRouter();
  const id = router.query.id;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return;
      
      try {
        // Updated endpoint to match your career collection
        const response = await axios.get(`${BaseUrl}/api/careers/${id}?populate=*`);
        console.log("API Response:", response.data); // Debug log
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching job:", error);
        toast.error("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };
    
    getProduct();
  }, [id]);

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
    Resume: File | "";
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      Message: "",
      Resume: "",
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("data", JSON.stringify({
          name: values.Name,
          email: values.Email,
          mobile: values.Mobile,
          message: values.Message,
          job: id // Link application to the job
        }));
        
        if (values.Resume) {
          formData.append("files.resume", values.Resume);
        }

        const submit = await axios.post(`${BaseUrl}/api/resume-collections`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (submit.status === 200) {
          toast.success("Applied Successfully!");
          setIsModalOpen(false);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Application error:", error);
        toast.error("Failed to submit application");
      }
    },
  });

  if (loading) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }

  if (!product) {
    return <div className="container mx-auto p-8">Job not found</div>;
  }

  const attributes = product.attributes;

  return (
    <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0 pb-[50px]">
      <ToastContainer />
      
      {/* Application Modal */}
      <Modal
        width={700}
        title="Apply for this Position"
        centered
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            name="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
            type="text"
            placeholder="Enter your Name*"
            required
            className="border h-[35px] pl-[15px] w-full rounded"
          />
          <input
            name="Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
            type="email"
            placeholder="Enter your Email*"
            required
            className="border h-[35px] pl-[15px] w-full rounded"
          />
          <input
            name="Mobile"
            onChange={formik.handleChange}
            value={formik.values.Mobile}
            type="text"
            placeholder="Enter your cell number*"
            required
            className="border h-[35px] pl-[15px] w-full rounded"
          />
          <textarea
            name="Message"
            onChange={formik.handleChange}
            value={formik.values.Message}
            placeholder="Enter your message"
            className="border h-[75px] pl-[15px] pt-[10px] w-full rounded"
          />
          <div>
            <label className="block mb-2">Upload your CV*</label>
            <input
              type="file"
              name="Resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={(event) => {
                if (event.currentTarget.files?.[0]) {
                  formik.setFieldValue("Resume", event.currentTarget.files[0]);
                }
              }}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded hover:bg-blue-800 disabled:bg-blue-400"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </Modal>

      {/* Job Details */}
      <h1 className="text-2xl font-bold mb-4">{attributes?.Title || attributes?.title}</h1>
      
      <div className="border w-full lg:w-[60%] mt-[15px] p-[20px] rounded-lg shadow-sm">
        <div className="border-b pb-3 mb-4">
          <h2 className="text-[#23A8CD] font-semibold text-lg">Basic Job Information</h2>
        </div>
        <div className="space-y-2">
          {attributes?.company_name && (
            <p><strong>Company Name:</strong> {attributes.company_name}</p>
          )}
          {attributes?.no_of_vacancy && (
            <p><strong>No of Vacancy:</strong> {attributes.no_of_vacancy}</p>
          )}
          {attributes?.education_level && (
            <p><strong>Education Level:</strong> {attributes.education_level}</p>
          )}
          {attributes?.job_location && (
            <p><strong>Job Location:</strong> {attributes.job_location}</p>
          )}
          {attributes?.address && (
            <p><strong>Address:</strong> {attributes.address}</p>
          )}
          {attributes?.deadline && (
            <p><strong>Deadline:</strong> {new Date(attributes.deadline).toLocaleDateString()}</p>
          )}
          {attributes?.employment_type && (
            <p><strong>Employment Type:</strong> {attributes.employment_type}</p>
          )}
          {attributes?.salary && (
            <p><strong>Salary:</strong> {attributes.salary}</p>
          )}
        </div>
      </div>

      {attributes?.job_description && (
        <div className="mt-6 border p-[20px] w-full lg:w-[60%] rounded-lg shadow-sm">
          <h1 className="border-b pb-3 mb-4 text-[#23A8CD] font-semibold text-lg">
            Job Description
          </h1>
          <div className="prose max-w-none">
            {Parse(attributes.job_description)}
          </div>
        </div>
      )}

      {attributes?.job_specification && (
        <div className="mt-6 border p-[20px] w-full lg:w-[60%] rounded-lg shadow-sm">
          <h1 className="border-b pb-3 mb-4 text-[#23A8CD] font-semibold text-lg">
            Job Specification
          </h1>
          <div className="prose max-w-none">
            {Parse(attributes.job_specification)}
          </div>
        </div>
      )}

      <button
        onClick={showModal}
        className="mt-6 h-[50px] w-[180px] bg-[#23A8CD] flex items-center justify-center text-white font-inter rounded hover:bg-[#1c8db0] transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
};

export default SingleJob;