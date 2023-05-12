import React from 'react'
// import Slide from './Slide'
import Slide3 from './Slide3'

function Partnered1({data,slide,height,style}:any) {


  return (
    <div className='bg-[#007DC50A]  pt-[50px] pb-[80px]'>
    <div className="container 2xl:max-w-[1180px]  mx-auto">
       <Slide3 data={data} slide={slide} height={height} style={style}/>
    </div>
    </div>
  )
}

export default Partnered1