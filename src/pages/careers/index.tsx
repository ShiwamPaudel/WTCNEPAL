import AboutBanner from '@/components/AboutBanner'
import JobListing from '@/components/JobListing'
import React from 'react'

const index = () => {
  return (
    <div className='container mx-auto 2xl:max-w-[1180px]'>
      {/* <AboutBanner/> */}
      
      <JobListing/>
    </div>
  )
}

export default index
