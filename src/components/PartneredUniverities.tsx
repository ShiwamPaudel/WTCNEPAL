import React from 'react'

const PartneredUniverities = ({img,partner,title,description}:any) => {
  return (
    <div className='bg-[#007DC50A]  pt-[80px] px-[15px] pb-[30px] md:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row '>
            <div className='flex md:items-start items-center basis-[40%] justify-center flex-col w-full '>
                <h2 className=' text-[#7A8A9E]  text-[13px]  leading-[15.25px] font-medium tracking-[ 0.085em]'>{partner}</h2>
                <h1 className='text-[#0D1250] uppercase text-[36px] font-medium text-center leading-[46.8px] mt-[3px]'>{title}</h1>
                <p className='text-[#434343] mt-[24px] text-[16px] leading-[28.8px]  font-normal md:max-w-[521px] w-full md:text-start text-center'>{description}</p>
            </div>

            <div className='mt-[30px] md:mt-0 basis-[60%]'>

                <img src={img} alt="" className='w-full object-contain' />
            </div>
            


        </div>
      
    </div>
  )
}

export default PartneredUniverities
