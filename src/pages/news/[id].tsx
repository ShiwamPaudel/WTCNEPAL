import AboutBanner from "@/components/AboutBanner";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SingleNews = () => {
  let news = {
    id: 1,
    img: "/../assets/news1.png",
    date: " Thursday, 30 March 2023",
    time: " 15 min read",
    title: " PTE Classes in Kathmandu",
    desc: " The Pearson Test of English (PTE) is broadly accepted English  Language Proficiency test which is run by Pearson Inc. for study and  immigration purpose. PTE is a computer-based test of 3 hours.",
  };
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

      <div className="container flex gap-[40px] mx-auto py-[80px] ">
        <div className="basis-[70%] border p-[20px]">
          <div className="h-[300px]">
            <img
              src="/../assets/news.jpg"
              alt=""
              className="h-[100%] w-full object-cover"
            />
          </div>
          <div className="flex flex-row mt-[17px] ml-[20px] md:ml-[5px] "></div>

          <p className="font-IBM font-normal text-[16px]  leading-[24px] text-[#505056] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] ">
            Web Trading Concern Pvt. Ltd. is delighted to announce our
            participation as a distributor company in our first international
            exhibition, held at India's renowned trade fair for hospitals,
            health centers, and clinics. Our presence at this prestigious event
            is a testament to our commitment to providing high-quality medical
            equipment and solutions to our valued customers. We are proud to
            showcase our extensive range of healthcare solutions, which have
            been sourced from the top multinational manufacturing companies in
            the diagnostics and medical support services fields. Our products
            and services have rapidly gained recognition in Nepal, and our
            participation in this international exhibition is a significant
            milestone in our journey to expand our reach and cater to the needs
            of customers beyond our borders. On Day 1 of the exhibition, we had
            the opportunity to connect with a diverse group of industry
            professionals and stakeholders, share insights, and showcase our
            expertise. We were delighted by the positive response we received
            from visitors who appreciated our commitment to delivering
            innovative healthcare solutions. Our team at Web Trading Concern
            Pvt. Ltd. is dedicated to exceeding our customers' expectations by
            delivering products and services of the highest quality. We believe
            that our participation in this international exhibition is a
            stepping stone towards achieving our vision of becoming the leading
            healthcare solutions provider in Nepal and beyond.
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
        <div className="basis-[30%] border">
          <div className="pt-[15px] px-[20px]">
            <h2 className="text-[20px] font-semibold uppercase">search</h2>
            <div className=" flex items-center h-[50px] mt-[20px]">
              <input type="text" className="border w-full h-[100%] pl-[14px]" />
              <div className="px-[20px] bg-black h-[100%] flex items-center justify-center">
                <HiOutlineSearch color="white" fontSize={25} />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] mt-[40px] px-[20px] pt-[15px]">
            <h2 className="text-[20px] font-semibold uppercase">
              recent posts
            </h2>
            <ul className="mt-[20px] space-y-[5px] text-[#0000CC] ">
              <li className="cursor-pointer border-b-[1px] pb-[10px] hover:underline">
                Lorem ipsum dolor sit, amet consectetur adipisicientium, ea
                quisquam.?
              </li >
              <li className="cursor-pointer border-b-[1px] pb-[10px] hover:underline">
                Lorem ipsum dolor sit, amet consectetur adipisicientium, ea
                quisquam.?
              </li>
              <li className="cursor-pointer hover:underline">
                Lorem ipsum dolor sit, amet consectetur adipisicientium, ea
                quisquam.?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
