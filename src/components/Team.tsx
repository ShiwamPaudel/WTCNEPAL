import React from "react";

const Team = () => {
  let team = [
    {
      img: "/../assets/team.png",
      name: "Ms.NAME",
      position: "Principle",
    },
    {
      img: "/../assets/team.png",
      name: "Ms.NAME",
      position: "Principle",
    },
    {
      img: "/../assets/team.png",
      name: "Ms.NAME",
      position: "Principle",
    },
    {
      img: "/../assets/team.png",
      name: "Ms.NAME",
      position: "Principle",
    },
    {
        img: "/../assets/team.png",
        name: "Ms.NAME",
        position: "Principle",
      },
      {
        img: "/../assets/team.png",
        name: "Ms.NAME",
        position: "Principle",
      },
      {
        img: "/../assets/team.png",
        name: "Ms.NAME",
        position: "Principle",
      },
      {
        img: "/../assets/team.png",
        name: "Ms.NAME",
        position: "Principle",
      },
  ];
  return (
    <div className="container mx-auto pt-[20px] px-[15px] md:0">
      <div className=" flex items-center justify flex-col gap-[10px]">
        <h1 className="text-[22px] font-semibold">Meet Our Leadership Team</h1>
        <p className="text-[16px] leading-[24px] font-normal max-w-[1100px] text-center">
        Our staffs with varied experience and skills are readily available to meet customers service needs in the range of the areas catered by our firm. Our team is well versed in managing complex and high value assignments. Continuous training and HR development activities keep our staffs always updated to meet and exceed customers expectation. Currently 40 well trained and highly qualified professionals are working in Web Trading Concern.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 px-[50px] mt-[80px] gap-[40px] pb-[50px]">
        {team.map((item: any, index: number) => (
          <div className="border cursor-pointer group rounded-[3px] hover:scale-[103%] transition duration-150 ease-out">
            <div className="h-[288px]">
              <img
                src={item?.img}
                className="h-[100%] w-full object-cover"
                alt=""
              />
            </div>
            <div className="py-[20px] pl-[15px] space-y-[5px] group-hover:bg-[#1CABD3] transition-colors duration-300 ease-out">
              <h1 className="text-[21px] font-normal leading-[25px] group-hover:text-white ">
               {item?.name}
              </h1>
              <p className="text-[16px] font-thin leading-[24px] group-hover:text-white">{item?.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
