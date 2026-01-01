// import React, { useState } from "react";
// import Link from "next/link";

// const JobListing = () => {
//   // Hardcoded job data
//   const hardcodedJobs = [
//     {
//       id: 1,
//       title: "Sales & Marketing Officer",
//       company_name: "Web Trading Concern Pvt. Ltd.",
//       deadline: "2025-12-31",
//       job_location: "Tripureshwor, Kathmandu, Nepal",
//       employment_type: "Full-time",
//       salary: "Negotiable"
//     },
//     {
//       id: 2,
//       title: "Storekeeper",
//       company_name: "Web Trading Concern Pvt. Ltd.",
//       deadline: "2025-12-31",
//       job_location: "Tripureshwor, Kathmandu, Nepal",
//       employment_type: "Full-time",
//       salary: "Negotiable"
//     }
//   ];

//   return (
//     <div className="py-8">
//       <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
//       <div className="space-y-4">
//         {hardcodedJobs.map((job) => (
//           <div key={job.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-xl font-semibold text-[#23A8CD]">
//                   <Link href={`/careers/${job.id}`} className="hover:underline">
//                     {job.title}
//                   </Link>
//                 </h3>
//                 <p className="text-gray-600 mt-1">
//                   {job.company_name} • {job.job_location} • {job.employment_type}
//                 </p>
//                 <p className="text-green-600 font-medium mt-1">Salary: {job.salary}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm text-gray-500">
//                   Deadline: {new Date(job.deadline).toLocaleDateString()}
//                 </p>
//                 <Link 
//                   href={`/careers/${job.id}`}
//                   className="inline-block mt-2 px-4 py-2 bg-[#23A8CD] text-white rounded hover:bg-[#1c8db0] transition-colors"
//                 >
//                   Apply Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListing;