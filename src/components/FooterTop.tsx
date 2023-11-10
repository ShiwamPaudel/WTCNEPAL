import React from "react";

const FooterTop = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 to-blue-800 py-6 ">
      <div className=" container 2xl:max-w-[1180px] xl:px-20 2xl:px-0   mx-auto flex justify-between items-center flex-col md:flex-row ">
        <div>
          <img src="/../assets/footerlogo.png" alt="" className="w-[132px] " />
        </div>
        <div className="flex justify-center items-center sm:items-start sm:justify-normal flex-col gap-2 sm:flex-row ">
          <input
            className=" w-[300px] sm:w-[350px] border border-white bg-transparent px-4 py-2 text-white placeholder:text-white rounded-md outline-none"
            placeholder="Enter your email"
          ></input>
          <button className="bg-white py-2 px-8 ml-2 rounded-md hover:bg-gray-200">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
