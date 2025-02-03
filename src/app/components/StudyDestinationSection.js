"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionTitle from "./SectionTitle";

const StudyDestinationSection = () => {
  const destinations = [
    {
      image: "/images/study/uk.jpg",
      title: "Canada",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "Australia",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "USA",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "UK",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "Australia",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "USA",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
    {
      image: "/images/study/uk.jpg",
      title: "UK",
      description:
        "Explore comprehensive information on top study destinations around the globe",
    },
  ];

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: "url(/images/mapbg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:py-[80px] py-[40px]">
        <SectionTitle
          title="Find Your Perfect Study Destination and Shape Your Future Globally"
          color="text-white"
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Add padding-top to accommodate the translated cards */}
        <div className="">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative w-[300px] h-[420px] bg-cover bg-center overflow-hidden rounded-lg transition-all duration-300 shadow-lg mt-12 mb-16 ${
                    index % 2 !== 0 ? "translate-y-[-44px]" : ""
                  }`}
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  {/* Gradient Overlay Positioned at the Bottom */}
                  <div className="absolute bottom-0 left-0 w-[300px] h-[210px] bg-gradient-to-t from-[#CA8528]/90 to-transparent"></div>

                  {/* Text Content Positioned Above the Gradient */}
                  <div className="absolute bottom-0 w-full flex flex-col items-center p-4 text-white">
                    <p className="text-xs text-center">{destination.description}</p>
                    <h3 className="text-[25px] font-semibold underline mb-1">
                      {destination.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center items-center pb-[80px]">
          <button className="text-green text-sm lg:text-[25px] bg-white px-6 py-2 rounded-[9px]">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyDestinationSection;