import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowRightAlt } from "react-icons/md";

export default function ServiceItem({img, title, link, description}) {
  return (
    <Link 
    href={`oferta/${link}`}
    className="bg-white flex flex-col items-center text-gray-950 shadow-md cursor-pointer transition-all duration-200 border-2 border-b-0 border-gray-300/50">
    <div className="h-56 p-8">
    <Image src={img} alt="Zdjęcie" width={150} height={150} className="p-6 w-full h-full transition-translate duration-200"/>
    </div>
    <div className="w-full p-6 h-full flex flex-col border-t-[1px] gap-2 bg-gray-700 text-white justify-center">
        <p className="transition-all duration-200 font-bold text-lg">{title}</p>
        <p className="text-sm">{description}</p>
        <button className="text-left mt-4 w-fit text-sm font-semibold flex items-center gap-1 group hover:text-red-500 duration-200 transition-all">Zobacz więcej
        <MdArrowRightAlt className="group-hover:translate-x-1 group-hover:text-red-500 duration-200 transition-all text-xl"/>
        </button>
    </div>
    </Link>
  )
}
