import { BaseUrl } from "@/pages/api/global";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { InfinitySpin,ThreeDots } from "react-loader-spinner";
import { Skeleton } from 'antd';
import { useRouter } from "next/router";
const Products = () => {
  const [limit ,setLimit]=useState(8)
  const [isLoading3,setIsLoading3]=useState(true)
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
        let product = await axios.get(`${BaseUrl}/products?populate=*&pagination[start]=0&pagination[limit]=${limit}`)
    //  let list=    product.data.data.slice(0,8)
        setProduct(product.data.data)
        setIsLoading3(false)
      }
      getProduct()
      
      },[limit])
      console.log(product)

const handleClick =(item:any)=>{
  router.push(`/product-single/${item.id}`)
console.log(item)
}

const handleLimit =()=>{
  setLimit(limit + 8)
  setIsLoading3(true)
}
console.log(limit)
  return (

    <>
    {
      product?  <div className="container 2xl:max-w-[1180px] mx-auto pb-[111px] pt-[50px] px-[15px] md:px-0">
      <div className="flex items-center justify-center gap-[8px] flex-col">
        <h2 className="text-[#7A8A9E] text-[13px] leading-[15.23px] font-medium">
          PRODUCTS
        </h2>
        <h1 className="text-[36px] font-semibold leading-[42.19px] text-center uppercase">
          Products That We Offer
        </h1>
      </div>
      
       <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-[30px] gap-x-[15px] md:gap-y-[35px] gap-y-[15px] mt-[68px]">
      {
        product?.map((item:any,index:number)=>(
          <div onClick={()=>handleClick(item)} key={index} className="border cursor-pointer flex items-center md:justify-end justify-center  flex-col md:gap-[35px] gap-[15px] md:pb-[44px] pb-[25px] pt-[10px] ">
            <div className="md:h-[200px] h-[120px] flex items-center justify-center">

                <img src={item?.attributes?.image?.data?.attributes?.url} alt="" className="cursor-pointer hover:scale-[105%] transition duration-300 ease-out h-[100%] w-[80%] object-contain"/>
            </div>
                <h2 className=" text-[#003760] text-[16px] text-center leading-[20.08px] font-semibold">{item?.attributes?.title}</h2>
             
            </div>
        ))
      }
      </div>
      
     
      <div className="flex items-center justify-center pt-[50px]">
        {/* <button onClick={handleLimit} className="h-[50px] w-[130px] bg-[#23A8CD] flex items-center justify-center text-white text-[16px] rounded-[4px]"> Load More</button> */}
        {
          isLoading3 ? <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          // wrapperClassName=""
          visible={true}
           />
          :<button onClick={handleLimit} className="h-[50px] w-[130px] bg-[#23A8CD] flex items-center justify-center text-white text-[16px] rounded-[4px]"> Load More</button>
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