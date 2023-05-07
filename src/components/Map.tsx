import React from 'react'

const Map = () => {
  return (
    <div className='relative'>
      {/* <div className='absolute bg-[#003760]/[0.3] h-[100%] w-full top-0 left-0'>
      </div> */}
      {/* <img src="/../assets/map.png" className='w-full' alt="" /> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16812.078516084366!2d85.34635970615892!3d27.646060439425465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1683465551592!5m2!1sen!2snp" width="100%" height="450"   loading="lazy" ></iframe>
    </div>
  )
}

export default Map
