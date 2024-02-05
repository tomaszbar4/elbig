// First, ensure you have react-slick and slick-carousel installed in your project:
// npm install react-slick slick-carousel

"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewItem } from '@/components';
import { customerReviews } from '@/constants/data';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


export default function CustomerReviews() {

    const NextArrow = ({onClick, className}) => (
        <button
        onClick={onClick}
        className="bg-red-700 absolute -bottom-16 left-1/2 text-3xl translate-x-1">
        <MdChevronRight/>
        </button>
    )

    const PrevArrow = ({onClick, className}) => (
        <button
        onClick={onClick}
        className="bg-red-700 absolute -bottom-16 right-1/2 -translate-x-1 text-3xl">  
        <MdChevronLeft/>
        </button>
    )

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full h-[40rem] relative overflow-hidden">
            <img src="/happy-customer.jpg" alt="Happy customer" className="w-full h-full object-cover"/>
            <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center bg-black/70">
                <p className="uppercase text-red-500 font-bold">Opinie klientów</p>
                <h4 className="font-bold text-3xl mb-8">Co mówią o nas klienci?</h4>
                <div className="w-11/12 min-[400px]:w-[25rem] min-[1280px]:w-[70rem]">
                    <Slider {...settings} className="w-full">
                        {customerReviews.map((review, index) => (
                            <div key={index} className="px-2 py-4">
                                <ReviewItem text={review}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
