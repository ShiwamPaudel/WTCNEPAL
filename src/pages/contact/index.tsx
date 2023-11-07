import AboutBanner from '@/components/AboutBanner'
import BootomFooter from '@/components/BootomFooter'
import ContactForm from '@/components/ContactForm'
import Fotter from '@/components/Footer'
import Map from '@/components/Map'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from '@/pages/api/global'

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

  return (
    <div>
        <AboutBanner testimonial={testimonial}/>
        <ContactForm data={testimonial}/>
        <Map/>
        {/* <Fotter/>
        <BootomFooter/> */}
      
    </div>
  )
}

export default index
