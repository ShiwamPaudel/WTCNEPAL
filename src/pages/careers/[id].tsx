import { BaseUrl } from "@/utils/global.mjs";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobDetails: any = {
    "1": {
      title: "Sales & Marketing Officer",
      company_name: "Web Trading Concern Pvt. Ltd.",
      deadline: "2025-12-31",
      job_location: "Tripureshwor, Kathmandu, Nepal",
      employment_type: "Full-time",
      salary: "Negotiable",
      education_level: "Bachelor's Degree",
      job_description: `
        <h3>Responsibilities:</h3>
        <ul>
          <li>Promote and sell medical equipment to hospitals, clinics, and healthcare professionals.</li>
          <li>Identify potential clients and generate leads through market research and networking.</li>
          <li>Prepare sales presentations, proposals, and quotations.</li>
          <li>Maintain and update client records and sales reports.</li>
        </ul>
      `,
      job_specification: `
        <h3>Technical Skills:</h3>
        <ul>
          <li>Client Relationship Management</li>
          <li>Sales & Negotiation Skills</li>
          <li>Market Awarness & Product Knowledge</li>
        </ul>
      `
    },
    "2": {
      title: "Storekeeper",
      company_name: "Web Trading Concern Pvt. Ltd.",
      deadline: "2025-12-31", 
      job_location: "On-Site",
      employment_type: "Full-time",
      salary: "Negotiable",
      education_level: "Intermediate",
      job_description: `
        <h3>Responsibilities:</h3>
        <ul>
          <li>Receive, inspect, and store incoming medical equipment and supplies.</li>
          <li>Maintain accurate inventory records and update stock movement regularly.</li>
          <li>Ensure proper storage conditions for sensitive medical equipment.</li>
        </ul>
      `,
      job_specification: `
        <h3>Technical Skills:</h3>
        <ul>
          <li>-</li>
          <li>-</li>
          <li>-</li>
        </ul>
      `
    }
  };

  const job = jobDetails[id as string];

  if (!job) {
    return (
      <div className="container mx-auto p-8">
        <h1>Job not found</h1>
        <button onClick={() => router.push('/careers')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Back to Careers
        </button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const resumeFile = formData.get('resume') as File;

    // Validate file
    if (!resumeFile || resumeFile.size === 0) {
      alert("Please upload your resume");
      return;
    }

    // Create FormData for Strapi (required for file uploads)
    const strapiFormData = new FormData();
    strapiFormData.append('data', JSON.stringify({
      Name: formData.get('name'),
      Email: formData.get('email'),
      Mobile: formData.get('mobile'),
      Message: formData.get('message'),
      jobPosition: job.title,
      rank: 0 // Default value as per your Strapi collection
    }));

    // Append the resume file with the correct field name
    strapiFormData.append('files.Resume', resumeFile);

    try {
      // Use the correct Strapi endpoint for your collection
      const response = await fetch(`${BaseUrl}/sc-xcs`, {
        method: 'POST',
        // Don't set Content-Type header when using FormData - browser will set it automatically with boundary
        body: strapiFormData
      });

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully! We will contact you soon.");
        setIsModalOpen(false);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Strapi error:', result);
        alert(`Failed to submit application: ${result.error?.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Application error:', error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <button 
        onClick={() => router.push('/careers')}
        className="mb-6 px-4 py-2 text-blue-600 hover:text-blue-800"
      >
        ← Back to Careers
      </button>

      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-6">{job.company_name}</p>
      
      <div className="border rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-[#23A8CD] mb-4">Basic Job Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <p><strong>Company Name:</strong> {job.company_name}</p>
          <p><strong>Job Location:</strong> {job.job_location}</p>
          <p><strong>Employment Type:</strong> {job.employment_type}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Education Level:</strong> {job.education_level}</p>
          <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-[#23A8CD] mb-4">Job Description</h2>
        <div dangerouslySetInnerHTML={{ __html: job.job_description }} />
      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-[#23A8CD] mb-4">Job Specification</h2>
        <div dangerouslySetInnerHTML={{ __html: job.job_specification }} />
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-[#23A8CD] text-white rounded hover:bg-[#1c8db0]"
      >
        Apply Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Apply for {job.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                name="name" 
                type="text" 
                placeholder="Name*" 
                required 
                className="w-full p-2 border rounded" 
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Email*" 
                required 
                className="w-full p-2 border rounded" 
              />
              <input 
                name="mobile" 
                type="tel" 
                placeholder="Phone*" 
                required 
                className="w-full p-2 border rounded" 
              />
              <textarea 
                name="message" 
                placeholder="Message" 
                className="w-full p-2 border rounded h-20" 
              />
              <input 
                name="resume" 
                type="file" 
                required 
                accept=".pdf,.doc,.docx" 
                className="w-full" 
              />
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white p-2 rounded">
                  Submit
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleJob;