import React,{useEffect,useState} from "react";
import axios from "axios";
// import CountUp from "react-countup";
import { CountUp } from 'use-count-up'
import Link from "next/link";
import { BaseUrl } from "@/pages/api/global";
import parse from 'html-react-parser';
import { Button, Modal } from 'antd';
import { useFormik } from 'formik';

const AboutUs = () => {
  const [about,setAbout]=useState<any>(null)


  useEffect(()=>{

    let getAbout =async()=>{
      let banenr = await axios.get(`${BaseUrl}/about-uses?populate=*`)
      setAbout(banenr.data.data)
    }
    getAbout()
    
    },[])


    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      company_name:""
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

const handleSubmit = async(values:any) => {

let submit = await axios.post(`${BaseUrl}/email-collections`,{data:values})
console.log(submit)
if(submit){
  window.location.href ="https://www.dmsnepal.com/brochure?brochure=products/wNR0XuhUdDYoxCXir1VQ5r6RnAUFk80AbZca8TQd.pdf"

}else{

}


// const notify = () =>
// if(status==="200"){
//   console.log("hello this code runs")
//   alert("success")

// } 

}

  return (
    <div className="pt-[80px] pb-[80px]">
        <Modal
        title="Provide your details for download brochure"
        centered
        open={modal2Open}
        footer={false}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
     <form onSubmit={formik.handleSubmit} className="space-y-[15px] ">
      <input name="name" onChange={formik.handleChange} value={formik.values.name} type="text" placeholder="Enter your Name" required className="border h-[35px] pl-[15px] w-full" />
      <input name="email" onChange={formik.handleChange} value={formik.values.email} type="email" placeholder="Enter your Email" required className="border h-[35px] pl-[15px] w-full" />
      <input name="mobile" onChange={formik.handleChange} value={formik.values.mobile} type="text" placeholder="Enter your number" required className="border h-[35px] pl-[15px] w-full" />
      <input name="company_name" onChange={formik.handleChange} value={formik.values.company_name} type="text" placeholder="Enter your company name"  className="border h-[35px] pl-[15px] w-full" />
      <button type="submit" className="h-[35px] w-[100px] bg-blue-700 flex items-center justify-center text-white rounded-[4px]">Submit</button>
     </form>
      </Modal>
      {
        about?.map((item:any,index:number)=>(
          <div className="container 2xl:max-w-[1180px] mx-auto md:flex gap-[93px] px-[15px] md:px-0 ">
          <div className="basis-[50%]">
            <h2 className="text-[#7A8A9E] text-[13px] leading-[15.25px] tracking-[0.085em] font-bold">
              Welcome
            </h2>
            <h1 className="text-[#003760] text-[32px] leading-[46.8px] font-extrabold uppercase  mt-[8px]">
        {item?.attributes?.title}
            </h1>
            <div className="w-full">
              {
                parse(`${item?.attributes?.description}`)
              }
            
            </div>
            <div className="grid md:grid-cols-3 gap-[34px] mt-[40px]">
              <div className="about_box bg-[#007EC5]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#007EC5] text-[44.8px] leading-[67.2px]">
                  
                  {/* <CountUp end={100} enableScrollSpy /> */}
                  <CountUp isCounting end={parseInt(item.attributes.Years_Experience)} duration={3.2} />
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="about_box bg-[#00A023]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#00A023] text-[44.8px] leading-[67.2px]">
                  {/* <CountUp end={400} enableScrollSpy />+ */}
                  <CountUp isCounting end={parseInt(item.attributes.Customers)} duration={3.2} />+
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Customers{" "}
                </p>
              </div>
              <div className="about_box bg-[#FF7F0A]/[0.05] cursor-pointer hover:scale-[105%] transition duration-300 ease-out">
                <h2 className="text-[#FF7F0A] text-[44.8px] leading-[67.2px]">
                  {/* <CountUp end={98} enableScrollSpy />% */}
                  <CountUp isCounting end={parseInt(item.attributes.Repeated_Customers)} duration={3.2} />%
                </h2>
                <p className="text-[#434343] text-[16px] leading-[24px] font-semibold">
                  Repeated Customers{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[45%] mt-[40px] md:mt-0 flex items-center justify-center flex-col gap-[40px]">
            <div>
            <img src={item?.attributes?.image?.data?.attributes?.url} alt="img" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/../assets/brochure.png" alt="" className="cursor-pointer w-[70%]"  onClick={() => setModal2Open(true)}/>
              
            </div>
          </div>
        </div>
        ))
      }
  
    </div>
  );
};

export default AboutUs;
