import { BaseUrl } from "@/pages/api/global";
import React,{useState,useEffect} from "react";
import axios from "axios";
// import Parse from "html-react-parser"
import { Skeleton } from 'antd';
import { useRouter } from "next/router";
const Products = () => {
  const router = useRouter()
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


    const [product,setProduct]=useState<any>(null)


    useEffect(()=>{
  
      let getProduct =async()=>{
        let product = await axios.get(`${BaseUrl}/products/?populate=*`)
     let list=    product.data.data.slice(0,8)
        setProduct(list)
      }
      getProduct()
      
      },[])
      console.log(product)

const handleClick =(item:any)=>{
  router.push(`/product-single/${item.id}`)
console.log(item)
}


  return (

    <>
    {
      product?  <div className="container 2xl:max-w-[1180px] mx-auto pb-[111px] pt-[100px] px-[15px] md:px-0">
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
        product?.map((item:any,index:number)=>(
          <div onClick={()=>handleClick(item)} key={index} className="border cursor-pointer flex items-center justify-end  flex-col gap-[35px] pb-[44px] pt-[10px] ">
                <img src={item?.attributes.image.data.attributes.url} alt="" className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out"/>
                <h2 className=" text-[#003760] text-[16px] leading-[20.08px] font-semibold">{item?.attributes?.title}</h2>
             
            </div>
        ))
      }
      </div>



    </div> : <div className="max-w-[1180px] mx-auto flex justify-center items-center" style={{ zIndex: 100,backgroundColor:'white' }}>
    <Skeleton className="px-4" active={true} />
  </div>
    }
   


      </>
  );
};

export default Products;




// : (
//   <div className="w-full flex justify-center items-center" style={{ zIndex: 100,backgroundColor:'white' }}>
//     <Skeleton className="px-4" active={true} />
//   </div>
// )}