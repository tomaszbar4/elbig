"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/eaton.png",
  "/emiler.jpg",
  "/abb.png",
  "/eti.jpg",
  "/schneider.png",
  "/hager.png",
  "/legrand.png",
  "/siemens.png"
];

export default function Partners() {
  // Slider settings
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto w-[20rem] sm:w-[40rem] lg:w-[60rem]">
        <Slider {...settings}>
          {images.map(image => (
            <div key={image} className="px-4 mt-2">
              <img src={image} alt="Partner logo" className="w-32 h-32 object-contain m-auto"/>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
