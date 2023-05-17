import BootomFooter from '@/components/BootomFooter'
import Fotter from '@/components/Fotter'
import Nav1 from '@/components/Nav1'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect,useState} from "react"
import axios from 'axios'
import { BaseUrl } from './api/global'


export default function App({ Component, pageProps }: AppProps) {
  const [footer,setFooter]=useState<any>(null)


  useEffect(()=>{

    let getFooter =async()=>{
      let response = await axios.get(`${BaseUrl}/footer-sections?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setFooter(response.data.data)
    }
    getFooter()
    
    },[])
    console.log(footer)
  return(
    <>
   
    <Nav1/>
  <Component {...pageProps} />
  <Fotter footer={footer}/>
  <BootomFooter/>
    </>
  ) 
}
