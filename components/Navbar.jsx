"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaBasketShopping, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Hamburger, NavbarMobile } from "@/components";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <header className="bg-gray-900 text-white">
      <div className="max-w-[80rem] mx-auto flex justify-between items-center">
        <div className="flex gap-3 p-3">
          <Link href="https://www.google.com/maps/dir//El-Big+Reviews/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47112984b496b8a3:0xa78092697a8adc33?sa=X&ved=2ahUKEwjJiaKo6IeEAxVcSPEDHYpQBmcQ9Rd6BAg8EAA&hl=en-PL" 
          className="flex items-center gap-2">
          <FaLocationDot className="text-red-500"/>
            <span className="hidden lg:block hover:text-gray-400 transition-colors duration-200">ul. Nakielska 42/44</span>
            </Link>
          <Link href="mailto:biuro@elbig.com.pl" 
          className="flex items-center gap-2">
          <MdEmail className="text-red-500"/>
            <span className="hidden lg:block hover:text-gray-400 transition-colors duration-200">biuro@elbig.com.pl</span>
            </Link>
          <Link href="tel:+48324500640" 
          className="flex items-center gap-2">
            <FaPhone className="text-red-500"/>
            <span className="hidden lg:block hover:text-gray-400 transition-colors duration-200">+48 32 450 06 40</span>
            </Link>
        </div>
        <div className="bg-red-500 p-4 h-full flex gap-3">
          <Link href="https://www.facebook.com/rozdzielnice.elektryczne" className="hover:text-gray-800 transition-colors duration-200">
            <FaFacebookF />
          </Link>
          <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="hover:text-gray-800 transition-colors duration-200">
            <FaBasketShopping />
          </Link>
        </div>
      </div>
      <div className="bg-white">
        <nav className="flex items-center justify-between max-w-[80rem] mx-auto py-5 px-6">
          <div>
            <Image src="/logo.png" alt="Elbig logo" width={120} height={120} />
          </div>
          <div className="gap-4 uppercase font-bold text-gray-950 hidden md:flex">
            <Link href="/"
            className="hover:text-blue-500"
            >O firmie</Link>
            <Link href="/oferta"
            className="hover:text-blue-500"
            >Oferta</Link>
            <Link href="/"
            className="hover:text-blue-500"
            >Realizacje</Link>
            <Link href="/kontakt"
            className="hover:text-blue-500"
            >Kontakt</Link>
            <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="text-red-500">Sklep</Link>
          </div>
          <button 
          className="md:hidden"
          onClick={() => setIsOpen(oldValue => !oldValue)}><Hamburger/></button>
        </nav>
      </div>
    </header>
    <NavbarMobile isOpen={isOpen}/>
    </>
  );
};

export default Navbar;
