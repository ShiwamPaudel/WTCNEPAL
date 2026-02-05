import AboutBanner from '@/components/AboutBanner'
import Services from '@/components/Services'
import Meta from '@/components/Meta'
import React from 'react'

const index = () => {
  return (
    <div>
      <Meta
        title="Medical Equipment Service & Maintenance Nepal"
        description="Reliable medical equipment maintenance, repair, and AMC services in Nepal. Expert biomedical engineering support for hospitals and diagnostic labs."
        keywords="Medical Equipment Service Nepal, Biomedical Equipment Repair, Hospital Maintenance Nepal, Lab Equipment Service"
        breadcrumbs={[
          { name: "Home", item: "https://wtcnepal.com/" },
          { name: "Services", item: "https://wtcnepal.com/service" }
        ]}
      />
      <AboutBanner title="Services" />
      <Services />

    </div>
  )
}

export default index
