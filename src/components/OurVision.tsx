import { BaseUrl } from "@/pages/api/global";
import React,{useState,useEffect} from "react";
import axios from "axios";
import Parse from "html-react-parser"

const OurVision = () => {
  const [vision,setVision]=useState<any>(null)


  useEffect(()=>{

    let getVision =async()=>{
      let response = await axios.get(`${BaseUrl}/vison-and-mission-and-values?populate=*`)
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setVision(response.data.data)
    }
    getVision()
    
    },[])
    console.log(vision)

  console.log(typeof(vision))  
  
  return (
    <div className="container mx-auto  py-[80px] px-[15px] md:px-0">
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-[40px] gap-[20px] h-[260px] md:px-[200px]">

        {
          vision?.slice(1,3).map((item:any,index:number) =>(
<div className="border hover:scale-[103%] transition duration-300 ease-out cursor-pointer shadow-lg bg-[#1CABD3] text-white rounded-[3px] flex-1 md:px-[80px] px-[15px] h-[100%] flex items-center justify-start flex-col gap-[15px] py-[20px]">
          <h1 className="text-[25px] font-semibold border-b-[2px]">{item?.attributes?.title}</h1>

          <div className="w-full flex items-center justify-center text-center text-white">
            {Parse(`${item?.attributes?.description}`)}
          </div>
        
        </div>
          ))
        }
        
        {/* <div className="border hover:scale-[103%] transition duration-300 ease-out  cursor-pointer shadow-lg bg-[#1CABD3] text-white rounded-[3px] flex-1 h-[100%] flex items-center justify-start flex-col gap-[15px] px-[18px] md:px-[80px] py-[20px]">
          <h1 className="text-[25px] font-semibold border-b-[2px]">Mission</h1>
          <p className="text-center text-[16px] ">
            At Web Trading Concern Pvt. Ltd, we are committed to delivering
            innovative healthcare solutions that enhance patient outcomes and
            improve the quality of life. Our mission is to provide reliable,
            top-quality medical and health equipment to healthcare providers and
            institutions in Nepal.
          </p>
        </div> */}
      </div>
      <div className="md:mt-[40px] mt-[135px] md:px-[200px] cursor-pointer">
        {
          vision?.slice(0,1)?.map((item:any, index:number)=> {
         
            return (
              <>  
              
              <div className="border hover:scale-[103%] transition duration-300 ease-out shadow-lg bg-[#1CABD3] text-white rounded-[3px] flex items-center justify-center flex-col py-[20px] px-[15px] md:px-[80px]">
              <h1 className="text-[25px] font-semibold border-b-[2px]">{item?.attributes.title}</h1>
              <p className="text-center text-[16px]  my-[15px]">
                Our core values guide our actions and decisions as we strive to
                achieve our vision and mission. We are committed to:
              </p>
              <ul className="space-y-[8px]">
                <li>
                  <span className="font-bold">Quality</span>: We source products
                  from top multinational manufacturing companies to ensure the
                  highest standards of quality.
                </li>
                <li>
                  <span className="font-bold">Integrity</span>: We conduct our
                  business with honesty, transparency, and accountability. Customer
                  focus: We prioritize customer satisfaction and strive to deliver
                  the best product
                </li>
                <li>
                  <span className="font-bold">Innovation</span> : We embrace new
                  technologies and ideas to provide cutting-edge solutions to our
                  customers.
                </li>
                <li>
                  <span className="font-bold">Teamwork</span> : We work
                  collaboratively with our stakeholders to achieve shared goals and
                  objectives.
                </li>
                <li>
                  <span className="font-bold">Social responsibility</span> : We are
                  committed to making a positive impact on society and the
                  environment through our business operations.
                </li>
              </ul>
            </div>
              
              </>
            )

          }
           
          )
        }
      
      </div>
    </div>
  );
};

export default OurVision;
