import React from "react";
import Head from "next/head";

const CareersPage = () => {
  const jobs = [
    { 
      id: 1, 
      title: "Frontend Developer", 
      company_name: "Web Trading Concern Pvt. Ltd.", 
      job_location: "Kathmandu, Nepal",
      employment_type: "Full-time",
      salary: "Negotiable",
      deadline: "2024-07-14"
    },
    { 
      id: 2, 
      title: "Backend Developer", 
      company_name: "Tech Solutions Inc.", 
      job_location: "Remote",
      employment_type: "Full-time", 
      salary: "Rs. 50,000 - Rs. 80,000",
      deadline: "2024-07-20"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Join Our Team</title>
        <link rel="icon" href="/../assets/favicon.png" />
      </Head>
      <div className="container mx-auto 2xl:max-w-[1180px] xl:px-20 2xl:px-0 p-8">
        <h1 className="text-3xl font-bold mb-8">Career Opportunities</h1>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="border p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-[#23A8CD]">
                    <a href={`/careers/${job.id}`} className="hover:underline">
                      {job.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {job.company_name} • {job.job_location} • {job.employment_type}
                  </p>
                  <p className="text-green-600 font-medium mt-1">Salary: {job.salary}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </p>
                  <a 
                    href={`/careers/${job.id}`}
                    className="inline-block mt-2 px-4 py-2 bg-[#23A8CD] text-white rounded hover:bg-[#1c8db0]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareersPage;