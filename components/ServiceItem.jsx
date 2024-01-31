import React from 'react'
import Image from 'next/image'

export default function ServiceItem({img, title}) {
  return (
    <div className="bg-whit  flex flex-col items-center text-gray-950 rounded-lg shadow-sm group cursor-pointer transition-all duration-200 bg-white">
    <div className="h-48 lg:h-40">
    <Image src={img} alt="Zdjęcie" width={150} height={150} className="p-6 w-full h-full group-hover:-translate-y-2 transition-translate duration-200"/>
    </div>
    <div className="w-full p-6 h-full flex justify-center items-center font-semibold uppercase text-center text-lg border-t-[1px]">
        <p className="group-hover:text-red-500 transition-all duration-200">{title}</p>
    </div>
    </div>
  )
}
