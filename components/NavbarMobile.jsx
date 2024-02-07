import React from 'react'
import Link from 'next/link'

export default function NavbarMobile({isOpen, toggleHamburger}) {
  return (
    <nav>
            <div className={isOpen
            ?
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-t-2 md:hidden opacity-100 h-[18.35rem] visible transition-all duration-300 "
            :
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-0 md:hidden opacity-0 invisible h-0 transition-all duration-300"}>
            <button onClick={toggleHamburger} className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><Link href="/">O firmie</Link></button>
            <button onClick={toggleHamburger} className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><Link href="/oferta" >Oferta</Link></button>
            <button onClick={toggleHamburger} className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><Link href="/realizacje" >Realizacje</Link></button>
            <button onClick={toggleHamburger} className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><Link href="/kontakt" >Kontakt</Link></button>
            <button onClick={toggleHamburger} className="w-full h-full hover:bg-gray-100 transition-all duration-200 hover:text-red-700 text-red-500 "><Link href="https://www.rozdzielnie-elektryczne.com.pl/">Sklep</Link></button>
          </div>
    </nav>
  )
}
