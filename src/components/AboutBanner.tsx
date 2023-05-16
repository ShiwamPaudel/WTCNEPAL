import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from '@/pages/api/global'
import Item from 'antd/es/list/Item'

const AboutBanner = ({title}:any) => {
  const [testimonial,setTestimonial]=useState<any>(null)


  useEffect(()=>{

    let getTestimonial =async()=>{
      let response = await axios.get(`${BaseUrl}/about-banner?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data)
    }
    getTestimonial()
    
    },[])
    // console.log(testimonial)
  return (
    <div className='bg-[#23a8cd]'>
    <div className='relative max-w-[1180px] mx-auto'>
    <img src={testimonial?.attributes?.image?.data?.attributes?.url} className='w-full h-[150px] md:h-[280px] object-cover' alt="" />
    <h1 className='text-[#FEFEFE] cursor-pointer md:text-[48px] text-[25px] font-bold leading-[60.24px] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>{title}</h1>

  </div>
    </div>
  )
}

export default AboutBanner
