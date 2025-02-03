"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Button from './Button';

const rightArrow = "/images/right-arrow.svg";

const Banner = () => {
  const slides = [
    {
      image: '/images/USA.png',
      text: 'Your Gateway to World-Class Education Begins Here!',
      buttonText: 'Build Your Future',
    },
    {
      image: '/images/Australia.png',
      text: 'Turn Your Deams into Reality with UniGlobe Consulting.',
      buttonText: 'Start Your Journey Today',
    },
    {
      image: '/images/Canada.png',
      text: 'Unlock Your Future with Scholarships.',
      buttonText: 'Book A Free Consultation with Experts',
    },
  ];

  return (
    <div className="relative w-full h-[502px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Only Autoplay is needed
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[502px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/65"></div>
              <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
                <div className="text-white lg:ml-28">
                  <h1 className="text-[30px] lg:text-[45px] font-bold lg:max-w-[578px] leading-tight lg:mb-10 mb-6 tracking-wider">{slide.text}</h1>
                  <Button text={slide.buttonText} icon={rightArrow} onClick={() => alert('Button clicked!')} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;