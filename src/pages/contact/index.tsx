import AboutBanner from '@/components/AboutBanner'
import BootomFooter from '@/components/BootomFooter'
import ContactForm from '@/components/ContactForm'
import Fotter from '@/components/Footer'
import Head from "next/head";

import Map from '@/components/Map'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from "@/utils/global.mjs";

const index = () => {
  const [testimonial,setTestimonial]=useState<any>(null)


  useEffect(()=>{

    let getTestimonial =async()=>{
      let response = await axios.get(`${BaseUrl}/contact-section?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data)
    }
    getTestimonial()
    
    },[])

    console.log(testimonial)

  return (<>  
    <Head>
    <title>Contact us</title>
    <link rel="icon" href="/../assets/favicon.png" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
  </Head>
    <div>
        <AboutBanner testimonial={testimonial}/>
        <ContactForm data={testimonial}/>
        <Map/>
        {/* <Fotter/>
        <BootomFooter/> */}
      
    </div>
    </>

  )
}

export default index
