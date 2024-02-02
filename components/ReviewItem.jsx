import React from 'react'
import { FaQuoteRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';

export default function ({text}) {
  return (
    <div
    className="text-black h-60 overflow-visible cursor-pointer w-full flex flex-col gap-3 justify-center items-center shrink-0 p-6 relative z-20 rounded-lg transition-all duration-200 shadow-md bg-gray-50 hover:bg-gray-200 group">
        <FaQuoteRight className="text-4xl text-blue-500 absolute -top-4 left-4 bg-gray-50 min-h-0 rounded-full p-2 group-hover:bg-gray-200 transition-colors duration-200 z-20"/>
        <p>{text}</p>
        <div className="flex text-yellow-400">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <Link href="https://allegro.pl/uzytkownik/Jarek117/oceny" target="_blank" className="text-sm text-gray-400">Opinia z Allegro</Link>
    </div>
  )
}
