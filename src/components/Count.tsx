import React from 'react'
import CountUp from 'react-countup'
function Count() {
  return (
      <>
       <h1 className="font-IBM font-light text-[30px] md:text-[55.89px] leading-[83.83px] text-[#FFFFFF]  md:pt-[11px]">
          <CountUp start={0} end={100} duration={1} delay={0} enableScrollSpy/>K+
      </h1>
      </>
    
    
    
    
  )
}

export default Count