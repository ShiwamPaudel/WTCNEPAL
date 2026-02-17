import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Brand {
  name: string;
  image: string;
  url: string;
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const brands: Brand[] = [
  { name: 'DiaSorin', image: '/assets/Partners/DiaSorin.png', url: 'https://int.diasorin.com/en' },
  { name: 'BioSystems', image: '/assets/Partners/BioSystems.png', url: 'https://biosystems.global/' },
  { name: 'Eppendorf', image: '/assets/Partners/eppendorf.png', url: 'https://www.eppendorf.com/us-en/' },
  { name: 'iSens', image: '/assets/Partners/iSens.png', url: 'https://i-sens.com/' },
  { name: 'Neomedica', image: '/assets/Partners/Neomedica.png', url: 'https://neomedica.rs/' },
  { name: 'Gesan', image: '/assets/Partners/Gesan.png', url: 'https://www.gesanproduction.it/en/' },
  { name: 'Drawray', image: '/assets/Partners/Drawray.png', url: 'https://en.szdrawray.com/' },
  { name: 'Biocartis', image: '/assets/Partners/Biocartis.png', url: 'https://www.biocartis.com/en' },
  { name: 'Ecosteryl', image: '/assets/Partners/ecosteryl.png', url: 'https://www.ecosteryl.com/en/' },
  { name: 'Diversey', image: '/assets/Partners/Diversey.png', url: 'https://diversey.com/en' },
  { name: 'Taski', image: '/assets/Partners/Taski.png', url: 'https://taski.com/' },
  { name: 'Hakerman', image: '/assets/Partners/Hakerman.png', url: 'https://hakerman.com/en/' },
  { name: 'Newster', image: '/assets/Partners/newster.png', url: 'https://www.newstergroup.com/' },
  { name: 'Sterilmed', image: '/assets/Partners/Sterilmed.png', url: 'https://www.sterilmed.tr/' },
  { name: 'Nihon Kohden', image: '/assets/Partners/Nihon Kohden.png', url: 'https://www.nihonkohden.com/index.html' },
  { name: 'Asclepion', image: '/assets/Partners/asclepion.png', url: 'https://asclepion.com/en/' },
  { name: 'Nesa World', image: '/assets/Partners/Nesa World.png', url: 'https://nesa.world/' },
  { name: 'Bison', image: '/assets/Partners/Bison.png', url: 'http://www.bisonmedical.com/?c=137&ckattempt=1' },
  { name: 'DermaIndia', image: '/assets/Partners/DermaIndia.png', url: 'https://dermaindia.in/' },
  { name: 'GMT', image: '/assets/Partners/GMT.png', url: 'https://geomitraa.com/' }
];

const BrandSlider: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
          Our Global Partners
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600 rounded-full"></span>
        </h2>
      </div>
      <Slider {...sliderSettings} className="brand-slider">
        {brands.map((brand, index) => (
          <div key={index} className="px-4 outline-none">
            <div
              onClick={() => window.open(brand.url, '_blank')}
              className="group cursor-pointer bg-white w-40 h-24 mx-auto rounded-xl shadow-sm border border-gray-100 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-red-400 hover:scale-110"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={160}
                height={96}
                className="max-w-[50%] max-h-[50%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
