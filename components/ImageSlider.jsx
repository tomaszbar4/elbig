"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ImageSlider = ({imageUrls}) => {

    const [currentImg, setCurrentImg] = useState(0)

    function changeCurrentImg() {
        if(currentImg===0) {
            setTimeout(() => {
                setCurrentImg(1)
            }, 10000)
        }
        else {
            setTimeout(() => {
                setCurrentImg(0)
            }, 10000)
        }
    }

    const nextImg = () => {
        if(currentImg<1)
        setCurrentImg(oldValue => oldValue + 1)
    }

    const previousImg = () => {
        if(currentImg>0)
        setCurrentImg(oldValue => oldValue - 1)
    }


  return (
    <div className="flex overflow-hidden relative">
        {imageUrls.map((image, idx) => (
            <div 
            key={idx}
            className="h-full w-full block shrink-0">
                <img 
                src={image.url} 
                alt="" 
                className="w-full min-h-[25rem] max-h-[50rem] object-cover transition-translate duration-500"
                style={{translate: `${-100 * currentImg}%`}}
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/60 lg:bg-black/40">

                </div>
                <div 
                key={currentImg}
                className={currentImg===idx
                ? "w-full h-full top-0 left-0 absolute grid lg:grid-cols-2 opacity-100 visible items-center "
                :
                 "w-full h-full top-0 left-0 absolute invisible opacity-0 "}>
                    {image.html}
                </div>
            </div>
        ))}
            <button onClick={previousImg} className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-3xl p-2 bg-black/50 rounded-full text-white"><MdChevronLeft/></button>
            <button onClick={nextImg} className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-3xl p-2 bg-black/50 rounded-full text-white"><MdChevronRight/></button>
            <button 
            onClick={() => setCurrentImg(0)}
            className={currentImg === 0
            ? "absolute bottom-4 right-1/2 -transalte-x-1 w-3 h-3 bg-white/100 rounded-full transition-all duration-200"
            :
            "absolute bottom-4 right-1/2 -transalte-x-1 w-3 h-3 bg-white/50 rounded-full transition-all duration-200"
            }/>
            <button 
            onClick={() => setCurrentImg(1)}
            className={currentImg === 1
            ? "absolute bottom-4 left-1/2 translate-x-1 w-3 h-3 bg-white/100 rounded-full transition-all duration-200"
            : "absolute bottom-4 left-1/2 translate-x-1 w-3 h-3 bg-white/50 rounded-full transition-all duration-200"
            }/>

    </div>
  )
}

export default ImageSlider