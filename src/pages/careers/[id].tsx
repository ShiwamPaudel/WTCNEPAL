import { useRouter } from "next/router";
import React, { useState } from "react";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobDetails: any = {
    "1": {
      title: "Frontend Developer",
      company_name: "Web Trading Concern Pvt. Ltd.",
      deadline: "2024-07-14",
      job_location: "Kathmandu, Nepal",
      employment_type: "Full-time",
      salary: "Negotiable",
      education_level: "Bachelor's in Computer Science",
      job_description: `
        <h3>Responsibilities:</h3>
        <ul>
          <li>Develop responsive web applications using React/Next.js</li>
          <li>Collaborate with design and backend teams</li>
          <li>Write clean, maintainable code</li>
          <li>Participate in code reviews</li>
        </ul>
      `,
      job_specification: `
        <h3>Technical Skills:</h3>
        <ul>
          <li>React.js & Next.js</li>
          <li>TypeScript</li>
          <li>HTML5, CSS3, JavaScript</li>
        </ul>
      `
    },
    "2": {
      title: "Backend Developer",
      company_name: "Tech Solutions Inc.",
      deadline: "2024-07-20", 
      job_location: "Remote",
      employment_type: "Full-time",
      salary: "Rs. 50,000 - Rs. 80,000",
      education_level: "Bachelor's in Computer Science",
      job_description: `
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design and develop RESTful APIs</li>
          <li>Create database schemas and optimize queries</li>
          <li>Implement authentication and authorization</li>
        </ul>
      `,
      job_specification: `
        <h3>Technical Skills:</h3>
        <ul>
          <li>Node.js & Express.js</li>
          <li>MongoDB/PostgreSQL</li>
          <li>REST API design</li>
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
  
  try {
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        message: formData.get('message'),
        jobPosition: job.title,
        // For file upload, you'd need multipart form data
      })
    });

    if (response.ok) {
      alert("Application submitted successfully!");
      setIsModalOpen(false);
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Failed to submit application. Please try again.");
    }
  } catch (error) {
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
              <input type="text" placeholder="Name*" required className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email*" required className="w-full p-2 border rounded" />
              <input type="tel" placeholder="Phone*" required className="w-full p-2 border rounded" />
              <textarea placeholder="Message" className="w-full p-2 border rounded h-20" />
              <input type="file" required className="w-full" />
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white p-2 rounded">Submit</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-500 text-white p-2 rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleJob;