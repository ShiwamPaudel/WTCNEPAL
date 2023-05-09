import { useRouter } from 'next/router'
import React from 'react'

const NewsBlock = () => {
    const router = useRouter()
    
    let news = [
        {
            id:1,
          img:"/../assets/news.jpg",
          date:" Thursday, 30 March 2023",
          time:" 15 min read",
          title:" PTE Classes in Kathmandu",
    desc: " Web Trading Concern Pvt. Ltd. is delighted to announce our participation as a distributor company in our first international exhibition, held at India's renowned trade fair for hospitals, health centers, and clinics. Our presence at this prestigious event is a testament to our commitment to providing high-quality medical equipment and solutions to our valued customers. We are proud to showcase our extensive range of healthcare solutions, which have been sourced from the top multinational manufacturing companies in the diagnostics and medical support services fields. Our products and services have rapidly gained recognition in Nepal, and our participation in this international exhibition is a significant milestone in our journey to expand our reach and cater to the needs of customers beyond our borders. On Day 1 of the exhibition, we had the opportunity to connect with a diverse group of industry professionals and stakeholders, share insights, and showcase our expertise. We were delighted by the positive response we received from visitors who appreciated our commitment to delivering innovative healthcare solutions. Our team at Web Trading Concern Pvt. Ltd. is dedicated to exceeding our customers' expectations by delivering products and services of the highest quality. We believe that our participation in this international exhibition is a stepping stone towards achieving our vision of becoming the leading healthcare solutions provider in Nepal and beyond.",
         
        },
        {
            id:2,
          img:"/../assets/news2.png",
          date:" Thursday, 30 March 2023",
          time:" 15 min read",
          title:" PTE Classes in Kathmandu",
          desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
        },
        {
            id:3,
          img:"/../assets/news3.png",
          date:" Thursday, 30 March 2023",
          time:" 15 min read",
          title:" PTE Classes in Kathmandu",
          desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
        },
      ]

      const handleClick =(item:any)=>{
router.push((`/news/${item.id}`))
      }
  return (
    <div className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[80px] mb-[72px] gap-[30px]">
        {
          news.map((item:any,index:number)=>(
            <div className="kal" key={index} onClick={()=>handleClick(item)}>
            <div className="w-[94%] md:w-full ml-[12px] md:ml-[0px] h-[274px] overflow-hidden">
              <img
                src={item?.img}
                alt="avatar"
                className="w-full h-full object-cover rounded-[10px] cursor-pointer hover:scale-[106%] transition duration-300 ease-out"
              />
            </div>
            <div className="flex flex-row mt-[17px] ml-[20px] md:ml-[5px] ">
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
            <p className="font-IBM font-normal text-[15px] leading-[24px] text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] max-w-[378px]">
              {item?.desc.slice(0,270)}..
            </p>
            <div className="flex items-center justify-end pr-[11px]">
              <div className="w-[109px] h-[38px] bg-[#007EC5] hover:bg-[#007EC5]/[0.8] rounded-sm  mt-[31px] group">
                <a
                  href=""
                  className="font-IBM font-normal text-sm leading-[18px] text-[#FBFCFC] py-[10px] pl-[13px] flex flex-row"
                >
                  Read More{" "}
                  <img
                    src="/../assets/arrow.png"
                    alt="avatar"
                    className="w-[5px] h-[10px] ml-[10px] mt-[5px] group-hover:translate-x-[5px] transition duration-200 ease-out"
                  />
                </a>
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
