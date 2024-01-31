"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'

const images = [
  "/eaton.png",
  "/emiler.jpg",
  "/abb.png",
  "/eti.jpg",
  "/schneider.png",
  "/hager.png",
  "/legrand.png",
  "/siemens.png"
]

export default function Partners({windowWidth}) {

  const [index, setIndex] = useState(0)
  const [number, setNumber] = useState(undefined)

    function updateIndex() {

        let reversedNumber
        reversedNumber = number !==4 ? reversedNumber = number === 6 ? 2 : 6 : 4
        if(index<reversedNumber) 
        {
        setIndex(oldValue => oldValue + 1)
        }
        else {
         setIndex(0)
        }
      
      }

    useEffect(() => {
      setTimeout(() => {
        updateIndex()
      }, 3000)
    }, [index])

    useEffect(() => {
      if(windowWidth<640) {
        setNumber(2)
      }
      else if (windowWidth<1024) {
        setNumber(4)
      }
      else {
        setNumber(6)
      }
    }, [windowWidth])


  return (
    <section className="bg-white">
        <div className="mx-auto py-12 overflow-hidden w-[20rem] sm:w-[40rem] lg:w-[60rem]">
          <div className="lg:w-full flex transition-translate duration-300"
          style={{translate: `${-100/number * index}%`}}
          >
            {images.map(image => (
              <img 
              key={image}
              src={image} alt="Partner logo" className="w-32 object-contain mx-4"/>
            ))}
          </div>
        </div>
    </section>
  )
}
