import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Modal } from 'antd';
import { BaseUrl } from '@/pages/api/global';
import { useRouter } from 'next/router';
// import { Router } from 'next/router';

type Props = {}



const JobListing = (props: Props) => {
    const [job,setJob]=useState<any>(null)
    const router = useRouter()


    useEffect(()=>{
  
      let getJobs =async()=>{
        let response = await axios.get(`${BaseUrl}/gsfgs?populate=*`)
        // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
        setJob(response.data.data)
      }
      getJobs()
      
      },[])

    console.log(job, "jobs");

    const handleClick =(item:any)=>{
// router.push(``)
router.push(`/careers/${item.id}`)
console.log(item.id)
    }
    return (
        <div className='  pt-[60px] pb-[72px]' id='job'>

            {/* this is for modal */}
            {/* <Modal
                title=""
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={800}
                footer={false}
            >
                <div className='mt-[28px]'>
                    {


                        // <img src={`${imgUrl}${content?.attributes?.image?.data?.attributes?.url}`} className='w-full' alt="" />

                    }
                </div>
            </Modal> */}
            <div className='container mx-auto '>
                <div>
                    <h1 className='text-[#16243D] md:text-[36px] text-[26px] md:leading-[57.66px] leading-[41.6px] tracking-[0.02em] font-normal text-center'>CURRENT JOB LISTINGS</h1>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[14px] pb-[109px] mt-[42px] px-[12px] md:px-0'>
                    {
                        job?.map((item: any, index: any) =>

                        (
                            <div onClick={()=>handleClick(item)} className='bg-white  border shadow-md border-[#EFEFEF] py-[20px] px-[27px] cursor-pointer hover:shadow-lg transform hover:scale-[102%] transition-all duration-300 ease-out rounded-[4px]' key={index} >
                                {/* <h1 className='text-[#16243D] text-[19px] leading-[30.4px] font-medium tracking-[0.02em] mt-[10px]'>{item?.attributes.Title}</h1> */}
                                {/* <div className='grid grid-cols-2 gap-[10px] my-[10px]'>
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Company:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.company_name}</p>
                                    </div>
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Salary:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.salary}</p>
                                    </div>
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Manpower:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.manpower}</p>
                                    </div>
                                
                                 
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Location:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.address}</p>
                                    </div>
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Posted Date:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.posted_date}</p>
                                    </div>
                                    <div className='border p-[5px]'>
                                        <p className='font-bold'>Last Date:</p>
                                        <p className='text-[#1295EF] text-[15px] leading-[24px] font-medium mb-[10px]'>{item?.attributes.last_date}</p>
                                    </div>
                                </div> */}
                                <div className='flex items-center gap-[25px]'>
                                    <div className='basis-[20%]'>
                                        <img src="/../assets/avtar.jpeg" alt="avatar" className='w-full' />
                                    </div>
                                    <div className='basis-[80%]'>
                                <p className='text-[12px] leading-[17px] font-normal text-[#333]'>Apply Before {item.attributes.Deadline}</p>
                                <h1 className='text-[16px] leading-[18px] text-[#23A8CD] mt-[8px] mb-[4px]'>{item.attributes.Title}</h1>
                                <p className='text-[14px] leading-[20px] font-normal text-[#333]'>D.Shahi & Associates</p>
                                    </div>

                                </div>


                                <div className='flex items-center gap-[4px] hidden'>
                                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 6C4.80937 6 5.07431 5.8824 5.29481 5.6472C5.51531 5.412 5.62537 5.1296 5.625 4.8C5.625 4.47 5.51475 4.1874 5.29425 3.9522C5.07375 3.717 4.809 3.5996 4.5 3.6C4.19063 3.6 3.92569 3.7176 3.70519 3.9528C3.48469 4.188 3.37462 4.4704 3.375 4.8C3.375 5.13 3.48525 5.4126 3.70575 5.6478C3.92625 5.883 4.191 6.0004 4.5 6ZM4.5 10.41C5.64375 9.29 6.49219 8.2724 7.04531 7.3572C7.59844 6.442 7.875 5.6296 7.875 4.92C7.875 3.83 7.54912 2.9376 6.89737 2.2428C6.24562 1.548 5.4465 1.2004 4.5 1.2C3.55313 1.2 2.75381 1.5476 2.10206 2.2428C1.45031 2.938 1.12462 3.8304 1.125 4.92C1.125 5.63 1.40156 6.4426 1.95469 7.3578C2.50781 8.273 3.35625 9.2904 4.5 10.41ZM4.5 12C2.99062 10.63 1.86337 9.3576 1.11825 8.1828C0.373125 7.008 0.000375 5.9204 0 4.92C0 3.42 0.452438 2.225 1.35731 1.335C2.26219 0.445 3.30975 0 4.5 0C5.69062 0 6.73837 0.445 7.64325 1.335C8.54812 2.225 9.00037 3.42 9 4.92C9 5.92 8.62725 7.0076 7.88175 8.1828C7.13625 9.358 6.009 10.6304 4.5 12Z" fill="#97A6B7" />
                                    </svg>
                                    <p className='text-[#696E77] text-[15px] leading-[20.49px] font-normal tracking-[0.02em]'> {item?.attributes.address}</p>
                                </div>
                                <div className='mt-[5.5px] hidden flex items-center gap-[5px] justify-end pr-[25.5px] pb-[18.5px]'>
                                    <p className='text-[#1295EF] text-[14px] leading-[22.4px] font-normal tracking-[0.02em]'>View Job</p>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 8.5C6.39493 8.5 5.33512 8.07857 4.55372 7.32843C3.77232 6.57828 3.33333 5.56087 3.33333 4.5C3.33333 3.43913 3.77232 2.42172 4.55372 1.67157C5.33512 0.921427 6.39493 0.5 7.5 0.5C8.46054 0.499812 9.39166 0.818226 10.1358 1.40135C10.8798 1.98448 11.3912 2.79651 11.5833 3.7L15 3.7L15 5.3L11.5833 5.3C11.3912 6.20349 10.8798 7.01552 10.1358 7.59865C9.39166 8.18177 8.46054 8.50019 7.5 8.5ZM10 4.5C10 3.86348 9.73661 3.25303 9.26777 2.80294C8.79893 2.35286 8.16304 2.1 7.5 2.1C6.83696 2.1 6.20107 2.35286 5.73223 2.80294C5.26339 3.25303 5 3.86348 5 4.5C5 5.13652 5.26339 5.74697 5.73223 6.19706C6.20107 6.64714 6.83696 6.9 7.5 6.9C8.16304 6.9 8.79893 6.64714 9.26777 6.19706C9.73661 5.74697 10 5.13652 10 4.5ZM-1.39876e-07 3.7L1.66667 3.7L1.66667 5.3L-2.09815e-07 5.3L-1.39876e-07 3.7Z" fill="#1295EF" />
                                    </svg>
                                </div>
                            </div>
                        ))
                    }


                </div>
                <div className='flex items-center justify-center hidden'>

                    <button className='bg-[#1295EF] h-[64px] w-[233px] flex items-center justify-center text-white text-[16px] leading-[21.86px] font-semibold' >Load More Listings</button>
                </div>
            </div>
        </div>
    )
}

export default JobListing