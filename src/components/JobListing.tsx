import React, { useEffect, useState } from "react";
import axios from "axios";
// import { BaseUrl } from "../api/global";
import { BaseUrl } from "@/pages/api/global";
import Link from "next/link";


interface Job {
  id: number;
  attributes: {
    title: string;
    company_name: string;
    deadline: string;
    job_location: string;
    employment_type: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

const JobListing = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Updated endpoint to match your Strapi collection
        const response = await axios.get(`${BaseUrl}/api/careers?populate=*`);
        console.log("Jobs API Response:", response.data); // Debug log
        setJobs(response.data.data || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading jobs...</div>;
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
      
      {jobs.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-gray-500">No job openings at the moment.</p>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-[#23A8CD]">
                    <Link href={`/careers/${job.id}`} className="hover:underline">
                      {job.attributes.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {job.attributes.company_name} • {job.attributes.job_location} • {job.attributes.employment_type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Deadline: {new Date(job.attributes.deadline).toLocaleDateString()}
                  </p>
                  <Link 
                    href={`/careers/${job.id}`}
                    className="inline-block mt-2 px-4 py-2 bg-[#23A8CD] text-white rounded hover:bg-[#1c8db0] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListing;