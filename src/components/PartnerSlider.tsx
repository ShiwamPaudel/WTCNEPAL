import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchPartners, Partner } from '@/pages/api/partners';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PartnerSlider: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await fetchPartners();
        console.log('Fetched partners:', data);  // Add this line
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };
    getPartners();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {partners.map(partner => (
        <div key={partner.id}>
          <img src={partner.image.url} alt={partner.title} />
        </div>
      ))}
    </Slider>
  );
};

export default PartnerSlider;
