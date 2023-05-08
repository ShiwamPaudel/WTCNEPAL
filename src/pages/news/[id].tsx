import AboutBanner from '@/components/AboutBanner'
import React from 'react'

const SingleNews = () => {
    let news = 
        {
            id:1,
          img:"/../assets/news1.png",
          date:" Thursday, 30 March 2023",
          time:" 15 min read",
          title:" PTE Classes in Kathmandu",
          desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
        }
        // {
        //     id:2,
        //   img:"/../assets/news2.png",
        //   date:" Thursday, 30 March 2023",
        //   time:" 15 min read",
        //   title:" PTE Classes in Kathmandu",
        //   desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
        // },
        // {
        //     id:3,
        //   img:"/../assets/news3.png",
        //   date:" Thursday, 30 March 2023",
        //   time:" 15 min read",
        //   title:" PTE Classes in Kathmandu",
        //   desc:" The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours."
        // },
      

  return (
    <>
      <AboutBanner title="News & Events" />

    <div className='container  mx-auto py-[80px]'>
      <div className='h-[300px]'>
     <img src={news.img} alt="" className='h-[100%] w-[50%] object-cover' />
      </div>
      <div className="flex flex-row mt-[17px] ml-[20px] md:ml-[5px] ">
              <p className="font-IBM font-normal text-xs leading-[16px] text-[ #848385]  border-r-[1px] border-solid border-[#000000] pr-[8px] text-[#848385]">
                {news?.date}
              </p>
              <img
                src="/../assets/Vectoreye.svg"
                alt="avatar"
                className="w-[9px] h-[7px] ml-[8px] pt-[4px]"
              />
              <p className="font-IBM font-normal text-xs leading-[16px] text-[#848385] pl-[5px]pt-[4px] ">
             {news?.time}
              </p>
            </div>
            <h2 className="font-IBM font-medium text-[27px] md:text-[28px] leading-[36px] text-[#0D1250] pt-[11px] pl-[20px] md:pl-[5px]">
             {news?.title}
            </h2>
            <p className="font-IBM font-normal text-[16px] max-w-[50%] leading-[24px] text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.  m ipsum dolor sit amet consectetur adipisicing elit. Saepe animi laudantium cum voluptate repellat expedita totam qui eaque provident culpa, nobis magni, alias dignissimos consequuntur possimus commodi! Cupiditate asperiores dignissimos quam omnis iusto cum est laudantium ipsum ullam pariatur officiis numquam, quae accusantium alias consectetur atque. Doloremque quae dolorum adipisci ullam iure ex error aliquam minus, possimus architecto fuga saepe cupiditate quas perspiciatis, similique provident. Aut deserunt reiciendis recusandae amet, repellendus laborum optio! In debitis ab vero sit nemo excepturi, facere harum fugit provident maiores, omnis quas doloribus. Consequuntur hic quod praesentium voluptatibus deleniti sequi provident magnam, quasi maiores fugiat!m ipsum dolor sit amet consectetur adipisicing elit. Saepe animi laudantium cum voluptate repellat expedita totam qui eaque provident culpa, nobis magni, alias dignissimos consequuntur possimus commodi! Cupiditate asperiores dignissimos quam omnis iusto cum est laudantium ipsum ullam pariatur officiis numquam, quae accusantium alias consectetur atque. Doloremque quae dolorum adipisci ullam iure ex error aliquam minus, possimus architecto fuga saepe cupiditate quas perspiciatis, similique provident. Aut deserunt reiciendis recusandae amet, repellendus laborum optio! In debitis ab vero sit nemo excepturi, facere harum fugit provident maiores, omnis quas doloribus. Consequuntur hic quod praesentium voluptatibus deleniti sequi provident magnam, quasi maiores fugiat!Saepe animi laudantium cum voluptate repellat expedita totam qui eaque provident culpa, nobis magni, alias dignissimos consequuntur possimus commodi! Cupiditate asperiores dignissimos quam omnis iusto cum est laudantium ipsum ullam pariatur officiis numquam, quae accusantium alias consectetur atque. Doloremque quae dolorum adipisci ullam iure ex error aliquam minus, possimus architecto fuga saepe cupiditate quas perspiciatis, similique provident. Aut deserunt reiciendis recusandae amet, repellendus laborum optio! In debitis ab vero sit nemo excepturi, facere harum fugit provident maiores, omnis quas doloribus. Consequuntur hic quod praesentium voluptatibus deleniti sequi provident magnam, quasi maiores fugiat!
            </p> 
            <div className="flex items-center justify-end pr-[11px] hidden">
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
    </>
  )
}

export default SingleNews
