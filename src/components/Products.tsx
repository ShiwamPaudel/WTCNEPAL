import React from "react";

const Products = () => {
    let data =[
        {
            img:"/../assets/product1.png",
            name:"Centrifuge 5804/5804R"
        },
        {
            img:"/../assets/product2.png",
            name:"Megasurg Gold"
        },
        {
            img:"/../assets/product3.png",
            name:"i-smart 300"
        },
        {
            img:"/../assets/product4.png",
            name:"Centrifuge 5804/5804R"
        },
        {
            img:"/../assets/product5.png",
            name:"Liquid Handling work stations"
        },
        {
            img:"/../assets/product6.png",
            name:"Pipetes"
        },
        {
            img:"/../assets/product7.png",
            name:"Liquid Handling work stations"
        },
        {
            img:"/../assets/product8.png",
            name:"Tissue Inclusion Center Modular EC 350"
        },

    ]
  return (
    <div className="container 2xl:max-w-[1180px] mx-auto pb-[111px] pt-[100px] px-[15px] md:px-0">
      <div className="flex items-center justify-center gap-[8px] flex-col">
        <h2 className="text-[#7A8A9E] text-[13px] leading-[15.23px] font-medium">
          PRODUCTS
        </h2>
        <h1 className="text-[36px] font-extrabold leading-[42.19px] text-center uppercase">
          Products That We Offer
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-x-[30px] gap-y-[35px] mt-[68px]">
      {
        data.map((item:any,index:number)=>(
            <div key={index} className="border cursor-pointer flex items-center justify-end  flex-col gap-[35px] pb-[44px] pt-[10px] ">
                <img src={item?.img} alt="" className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out"/>
                <h2 className=" text-[#003760] text-[16px] leading-[20.08px] font-semibold">{item?.name}</h2>
            </div>
        ))
      }
      </div>
    </div>
  );
};

export default Products;
