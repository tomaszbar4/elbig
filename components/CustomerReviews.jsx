"use client"
import React, { useState, useEffect } from 'react'
import { ReviewItem } from '@/components'
import { customerReviews } from '@/constants/data'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


export default function CustomerReviews({windowWidth}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    function furtherReviews() {
        if(currentIndex<customerReviews.length-3)
        setCurrentIndex(oldIndex => oldIndex + 1)
        else {
        setCurrentIndex(0)
        }
    }

    function previousReviews() {
        if(currentIndex>0)
        setCurrentIndex(oldIndex => oldIndex - 1)
        else {
            setCurrentIndex(customerReviews.length-3)
        }
    }

    const [number, setNumber] = useState(windowWidth < 1024 ? -100 : -33)

      useEffect(() => {
        setNumber(windowWidth < 1024 ? -100 : -(100/3))
      }, [windowWidth])

      

  return (
    <section className="overflow-hidden w-full h-[40rem] relative" >
        <img src="/happy-customer.jpg" alt="Happy customer" className="w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center bg-black/70">
            <p className="uppercase text-red-500 font-bold">Opinie klientów</p>
            <h4 className="font-bold text-3xl mb-8">Co mówią o nas klienci?</h4>
            <div className="w-[20.5rem] lg:w-[61.5rem] overflow-hidden transition-translate duration-200">
            <div className={`w-full py-12 relative flex transition-translate duration-500`}
            style={{translate: `${number * currentIndex}%`}}
            >
            {customerReviews.map(review => (
                <ReviewItem 
                key={review}
                text={review}/>
            ))}
        </div>
        </div>
        <div className="flex gap-2">
        <button onClick={previousReviews} className="text-base bg-white/70 text-black rounded-full p-2 flex items-center justify-center"><FaChevronLeft/></button>
        <button onClick={furtherReviews} className="text-base bg-white/70 text-black rounded-full p-2 flex items-center justify-center "><FaChevronRight/></button>
        </div>
        </div>
    </section>
  )
}
