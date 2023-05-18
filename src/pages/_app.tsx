import BootomFooter from '@/components/BootomFooter'
import Fotter from '@/components/Fotter'
import Nav1 from '@/components/Nav1'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect,useState} from "react"
import axios from 'axios'
import { BaseUrl } from './api/global'
import { Button, Modal } from 'antd';


export default function App({ Component, pageProps }: AppProps) {
  const [footer,setFooter]=useState<any>(null)
  const [popupbanner,setPopupbanner] = useState<any>(null);

  useEffect(()=>{

    let getFooter =async()=>{
      const [footer,popup] = await Promise.all([
        axios.get(`${BaseUrl}/footer-sections?populate=*`),
        axios.get(`${BaseUrl}/popup-banners?populate=*`),

      ]) 
      // (`${BaseUrl}/footer-sections?populate=*`)
      // let popup = await 
      // // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setFooter(footer.data.data)
      setPopupbanner(popup.data.data)
    }
    getFooter()
    
    },[])
    console.log(popupbanner)


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
    useEffect(() => {
      const delay = 3000; // Delay of 3 seconds
  
      const timer = setTimeout(() => {
        // Perform any action after the delay
        showModal();
      }, delay);
  
      return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts before the delay
      };
    }, []);
  return(
    <>
   <Modal className='pop' title="" width={800} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
  {
    popupbanner?.map((item:any,index:number) =>(
      <>
     { item?.attributes?.image?.data?.attributes?.mime==="video/mp4"?
     <video autoPlay loop muted>
     <source src={item?.attributes?.image?.data?.attributes?.url} type="video/mp4" />
   </video> :<img src={item?.attributes?.image?.data?.attributes?.url} alt=""  className="w-full h-[100%] object-contain" />
    }
      
     
       {/* <video autoPlay={true}  src={item?.attributes?.image?.data?.attributes?.url} className="w-full h-[100%] object-contain"  /> */}
      </>
    ))
  }
      </Modal>
    <Nav1/>
  <Component {...pageProps} />
  <Fotter footer={footer}/>
  <BootomFooter/>
    </>
  ) 
}
