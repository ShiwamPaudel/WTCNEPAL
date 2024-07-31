// BrandSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define type for brand data
interface Brand {
  name: string;
  image: string;
  url: string;
}

// Define slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6, // Show 6 slides at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const brands: Brand[] = [
  { name: 'Brand 1', image: '/assets/Partners/DiaSorin.png', url: '' },
  { name: 'Brand 2', image: '/assets/Partners/asclepion.png', url: '' },
  { name: 'Brand 3', image: '/assets/Partners/eppedorf.png', url: '' },
  { name: 'Brand 4', image: '/assets/Partners/diversey.png', url: '' },
  { name: 'Brand 5', image: '/assets/Partners/isens.jpg', url: '' },
  { name: 'Brand 6', image: '/assets/Partners/avantor.png', url: '' },
  { name: 'Brand 7', image: '/assets/Partners/BioSystems.png', url: '' },
  { name: 'Brand 8', image: '/assets/Partners/newster.png', url: '' },
  { name: 'Brand 9', image: '/assets/Partners/nihonkohden.png', url: '' },
  { name: 'Brand 11', image: '/assets/Partners/Ecotex.png', url: '' },
];

const BrandSlider: React.FC = () => {
  return (
    <Slider {...sliderSettings}>
      {brands.map((brand, index) => (
        <div
          key={index}
          onClick={() => window.location.href = brand.url}
          style={{ cursor: 'pointer', padding: '10px 15px' }}
        >
          <img
            src={brand.image}
            alt={brand.name}
            style={{ 
              gap: '100px',
              width: '100%',
              height: '100px', 
              objectFit: 'contain', 
              display: 'block', 
             }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
