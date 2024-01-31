import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import Image from 'next/image';

const Footer = () => {

  function Line() {
    return (
      <div className="block w-12 h-[0.125rem] bg-white mb-6"></div>
    )
  }

  const date = new Date().getFullYear()

  return (
   <footer className="bg-gray-950">
    <div className="flex flex-col sm:flex-row gap-4 p-4 py-8 max-w-[90rem] mx-auto text-gray-300 justify-center">
    <div className="">
      <h3 className="text-2xl uppercase mb-4 font-bold">O nas</h3>
      <Line/>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
        <MdEmail  className="border-[0.1rem] w-12 h-12 p-2.5 rounded-xl border-gray-700"/>
        <Link href="/" className="flex flex-col">
          <span className="font-medium uppercase text-gray-600">Adres E-mail</span>
          <span>biuro@elbig.com.pl</span>
        </Link>
        </div>
        <div className="flex items-center gap-3">
          <FaLocationDot className="border-[0.1rem] w-12 h-12 p-3 rounded-xl border-gray-700"/>
        <Link href="/" className="flex flex-col ">
          <span className="font-medium uppercase text-gray-600">Adres firmy</span>
          <span>ul. Nakielska 42/44 42-600 Tarnowskie Góry</span>
        </Link>
        </div>
      </div>
    </div>
    <div>
      <div>
    <h3 className="text-2xl uppercase mb-4 font-bold">Usługi</h3>
    <Line/>
    <ul className="flex flex-col gap-2">
      <li className="flex items-center gap-1">
        <MdChevronRight/>
        Rozdzielnice elektryczne</li>
      <li className="flex items-center gap-1">
        <MdChevronRight/>
        Skrzynki elektryczne</li>
      <li className="flex items-center gap-1">
        <MdChevronRight/>
        Złącza kablowe</li>
    </ul>
    </div>
    </div>
    </div>
      <div className="border-t-[0.1rem] border-gray-800 text-center p-3">
        &copy; Copyright {date} El-Big, All Rights Reserved
        </div>
   </footer>
  )
}

export default Footer