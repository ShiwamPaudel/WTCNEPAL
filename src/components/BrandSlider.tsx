import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Brand {
  name: string;
  image: string;
  url: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const brands: Brand[] = [
  { name: 'Brand 1', image: '/assets/Partners/DiaSorin.png', url: 'https://int.diasorin.com/en' },
  { name: 'Brand 2', image: '/assets/Partners/BioSystems.png', url: 'https://biosystems.global/' },
  { name: 'Brand 3', image: '/assets/Partners/eppendorf.png', url: 'https://www.eppendorf.com/us-en/' },
  { name: 'Brand 4', image: '/assets/Partners/iSens.png', url: 'https://i-sens.com/' },
  { name: 'Brand 5', image: '/assets/Partners/Neomedica.jpg', url: 'https://neomedica.rs/' },
  { name: 'Brand 6', image: '/assets/Partners/Gesan.png', url: 'https://www.gesanproduction.it/en/' },
  { name: 'Brand 7', image: '/assets/Partners/Drawray.png', url: 'https://en.szdrawray.com/' },
  { name: 'Brand 8', image: '/assets/Partners/Biocartis.png', url: 'https://www.biocartis.com/en' },
  { name: 'Brand 9', image: '/assets/Partners/Avantor.png', url: 'https://www.avantorsciences.com/global/' },
  { name: 'Brand 10', image: '/assets/Partners/eDiagnosis.png', url: 'https://www.easydiagnosis.com.cn/' },
  { name: 'Brand 11', image: '/assets/Partners/ecosteryl.png', url: 'https://www.ecosteryl.com/en/' },
  { name: 'Brand 12', image: '/assets/Partners/Diversey.png', url: 'https://diversey.com/en' },
  { name: 'Brand 13', image: '/assets/Partners/Taski.png', url: 'https://taski.com/' },
  { name: 'Brand 14', image: '/assets/Partners/Ecotex.png', url: 'ecotexbd.com' },
  { name: 'Brand 15', image: '/assets/Partners/SinicMed.png', url: 'https://www.sinicmed.com/' },
  { name: 'Brand 16', image: '/assets/Partners/mixta.png', url: 'https://mixta.com.tr/?lang=en' },
  { name: 'Brand 17', image: '/assets/Partners/Hakerman.png', url: 'https://hakerman.com/en/' },
  { name: 'Brand 18', image: '/assets/Partners/Newster.png', url: 'https://www.newstergroup.com/' },
  { name: 'Brand 19', image: '/assets/Partners/Nihon Kohden.png', url: 'https://www.nihonkohden.com/index.html' },
  { name: 'Brand 20', image: '/assets/Partners/Asclepion.png', url: 'https://asclepion.com/en/' },
  { name: 'Brand 21', image: '/assets/Partners/Nesa World.png', url: 'https://nesa.world/' },
  { name: 'Brand 22', image: '/assets/Partners/Bison.png', url: 'http://www.bisonmedical.com/?c=137&ckattempt=1' },
  { name: 'Brand 23', image: '/assets/Partners/DermaIndia.png', url: 'https://dermaindia.in/' },
  { name: 'Brand 24', image: '/assets/Partners/Bedfordmed.png', url: 'https://www.bedfordmed.com/' },
  { name: 'Brand 25', image: '/assets/Partners/SIUI.png', url: 'http://www.siui.com/ax0/index.html' },
  { name: 'Brand 26', image: '/assets/Partners/GMT.png', url: 'https://geomitraa.com/' }
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
              gap: '10px',
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
