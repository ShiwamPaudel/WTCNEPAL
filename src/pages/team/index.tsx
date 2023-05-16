import AboutBanner from '@/components/AboutBanner'
import Team from '@/components/Team'
import React from 'react'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>OUT TEAM</title>
      </Head>
        <AboutBanner title={"Our Team"}/>
        <Team/>
      
    </div>
  )
}

export default index
