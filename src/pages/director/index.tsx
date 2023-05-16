import React from "react";
import Head from "next/head";

const index = () => {
  return (

    <>
    <Head>
      <title>MEET OUR DIRECTOR</title>
    </Head>
    
    <div className="max-w-[1180px] mx-auto flex py-[50px] gap-[50px]">
      <div className="basis-[40%]">
        <div className="h-[420px] w-full ">
          <img src="/../assets/director.jpg" alt="" className="object-contain h-[100%] w-full cursor-pointer" />
        </div>
      </div>
      <div className="basis-[60%]">
        <div className="flex items-center justify-start ">
          <h1 className="text-[28px] font-semibold "> Message from Director</h1>
        </div>
        {/* <h1> Message from Director</h1> */}

        <div className="flex items-center flex-col justify-center pt-[15px]">
          <div className="flex items-center justify-start w-full">
            <img src="/../assets/coma1.svg" alt="avatar" className="ml-[-20px]" />
          </div>

          <p className="text-[16px] max-w-[800px] text-justify">
            I am delighted to welcome you to a new and exciting chapter at Web
            Trading Concern Pvt. Ltd. It is a privilege to introduce our company
            to you and share our journey since our inception in 2001 A.D. At Web
            Trading Concern Pvt. Ltd., we are committed to achieving new heights
            of success every year, working towards our long-term mission and
            vision. We specialize in serving the Diagnostics, Dermatology,
            Disinfection & Sterilization and Medical & Critical Care health
            sector of Nepal with solutions from top multinational brands across
            the globe. Our top priority is delivering high-quality service to
            our clients while maintaining the reputation of the brands we
            represent. We take great pride in our products, which inspires us to
            provide excellent services and deliver value for the money our
            clients spend. We understand the unique needs of each of our
            clients, and our Sales and Service team is committed to providing
            round-the-clock communication to ensure their satisfaction. I would
            like to express my appreciation to our valued clients for their
            continued patronage, our employees for their cooperation, and our
            channel partners for their trust. Lastly, I would also like to thank
            our well-wishers and stakeholders who have contributed to the growth
            and success of Web Trading Concern Pvt. Ltd.
          </p>
          <div className="flex items-center justify-end w-full">
      
              <img
                src="/../assets/coma2.svg"
                alt="avatar"
                className=" mr-[-20px]"
              />
        
          </div>
        </div>
        <div className="pt-[10px]">
          <p className="font-semibold text-[16px]"> Ramindra Neupane</p>
          <p>Director</p>
          <p>Web Trading Concern Pvt. Ltd.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default index;
