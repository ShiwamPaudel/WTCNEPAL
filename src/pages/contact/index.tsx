import AboutBanner from '@/components/AboutBanner'
import BootomFooter from '@/components/BootomFooter'
import ContactForm from '@/components/ContactForm'
import Fotter from '@/components/Fotter'
import Map from '@/components/Map'
import React from 'react'

const index = () => {
  return (
    <div>
        <AboutBanner title="Contact Us"/>
        <ContactForm/>
        <Map/>
        {/* <Fotter/>
        <BootomFooter/> */}
      
    </div>
  )
}

export default index
