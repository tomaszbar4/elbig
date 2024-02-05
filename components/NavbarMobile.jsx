import React from 'react'
import Link from 'next/link'

export default function NavbarMobile({isOpen}) {
  return (
    <nav>
            <div className={isOpen
            ?
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-t-2 md:hidden opacity-100 h-[18.35rem] visible transition-all duration-300"
            :
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-0 md:hidden opacity-0 invisible h-0 transition-all duration-300"}>
            <Link href="/" className="border-b-2 p-4 hover:bg-gray-100 hover:text-blue-500 hover:border-gray-300 transition-all duration-200">O firmie</Link>
            <Link href="/oferta" className="border-b-2 p-4 hover:bg-gray-100 hover:text-blue-500 hover:border-gray-300 transition-all duration-200">Oferta</Link>
            <Link href="/" className="border-b-2 p-4 hover:bg-gray-100 hover:text-blue-500 hover:border-gray-300 transition-all duration-200">Realizacje</Link>
            <Link href="/kontakt" className="border-b-2 p-4 hover:bg-gray-100 hover:text-blue-500 hover:border-gray-300 transition-all duration-200">Kontakt</Link>
            <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="text-red-500 p-4 hover:bg-gray-100 hover:text-red-400 transition-all duration-200">Sklep</Link>
          </div>
    </nav>
  )
}
