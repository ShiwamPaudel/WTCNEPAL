import React from 'react'
import Slide from './Slide'

function Partnered({data,slide,height,style}:any) {
  return (
    <div className='bg-[#007DC50A]  pt-[50px] pb-[80px]'>
    <div className="container  mx-auto">
       <Slide data={data} slide={slide} height={height} style={style}/>
    </div>
    </div>
  )
}

export default Partnered