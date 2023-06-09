import { BaseUrl } from '@/pages/api/global'
import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Parse from "html-react-parser"

const NewsBlock = () => {
    const router = useRouter()

    const [news,setNews]=useState<any>(null)


    useEffect(()=>{
  
      let getNews =async()=>{
        let response = await axios.get(`${BaseUrl}/news-and-events/?populate=*`)
        // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
        setNews(response.data.data)
      }
      getNews()
      
      },[])
      console.log(news)

      // news.map((item:any,index:number)=>(
     
      //   let data = 
      // ))
    
    // let newss = [
    //     {
    //         id:1,
    //       img:"/../assets/news2.jpg",
    //       date:" Thursday, 30 March 2023",
    //       time:" 15 min read",
    //       title:" PTE Classes in Kathmandu",
    // desc: " The First National Biotechnology Conference 2023 is just  days away! With the theme of 'Challenges And Prospects Of Biotechnology In Nepal,' this event is a unique opportunity to connect with experts and learn about the latest developments in the field. Join us at Kathmandu University on 11th and 12th May.",
         
    //     },
    //     {
    //         id:2,
    //       img:"/../assets/news.jpg",
    //       date:" Thursday, 30 March 2023",
    //       time:" 15 min read",
    //       title:" PTE Classes in Kathmandu",
    //       desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
    //     },
    //     {
    //         id:3,
    //       img:"/../assets/news.jpg",
    //       date:" Thursday, 30 March 2023",
    //       time:" 15 min read",
    //       title:" PTE Classes in Kathmandu",
    //       desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
    //     },
    //   ]

      const handleClick =(item:any)=>{
router.push((`/news/${item.id}`))
      }
  return (
    <div className='container 2xl:max-w-[1180px] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[80px] mb-[72px] gap-[30px]">
        {
          news?.map((item:any,index:number)=>(
            <div className="kal" key={index} onClick={()=>handleClick(item)}>
            <div className="w-[94%] md:w-full ml-[12px] md:ml-[0px] h-[274px] overflow-hidden">
              <img
                src={item?.attributes?.image?.data?.attributes?.url}
                alt="avatar"
                className="w-full h-full object-cover rounded-[10px] cursor-pointer hover:scale-[106%] transition duration-300 ease-out"
              />
            </div>
            <div className="flex hidden flex-row mt-[17px] ml-[20px] md:ml-[5px] ">
              <p className="font-IBM font-normal text-xs leading-[16px] text-[ #848385]  border-r-[1px] border-solid border-[#000000] pr-[8px] text-[#848385]">
                {item?.date}
              </p>
              <img
                src="/../assets/Vectoreye.svg"
                alt="avatar"
                className="w-[9px] h-[7px] ml-[8px] pt-[4px]"
              />
              <p className="font-IBM font-normal text-xs leading-[16px] text-[#848385] pl-[5px]pt-[4px] ">
             {item?.time}
              </p>
            </div>
            <h2 className="font-IBM hidden font-medium text-[27px] md:text-[28px] leading-[36px] text-[#0D1250] pt-[11px] pl-[20px] md:pl-[5px]">
             {item?.title}
            </h2>
         <div className='h-[109px] overflow-hidden'>
         <div className=" font-normal text-[15px] leading-[24px] font-inter text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] max-w-[378px]">
              {
                Parse(`${(item?.attributes?.description)}`)
              }
              {/* {JSON.stringify() }.. */}
            </div>
         </div>
            <div className="flex items-center justify-end pr-[11px]">
              <div className="w-[109px] h-[38px] bg-[#007EC5] hover:bg-[#007EC5]/[0.8] rounded-sm  mt-[15px] group">
                <p
                  // href="#"
                  className="font-IBM font-normal text-sm leading-[18px] text-[#FBFCFC] py-[10px] pl-[13px] flex flex-row"
                >
                  Read More{" "}
                  <img
                    src="/../assets/arrow.png"
                    alt="avatar"
                    className="w-[5px] h-[10px] ml-[10px] mt-[5px] group-hover:translate-x-[5px] transition duration-200 ease-out"
                  />
                </p>
              </div>
            </div>
          </div>
          ))
        }
       
     

   
      </div>
    </div>
  )
}

export default NewsBlock
