import React from 'react'
import Link from 'next/link'

export default function NavbarMobile({isOpen}) {
  return (
    <nav>
            <div className={isOpen
            ?
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-t-2 md:hidden opacity-100 h-[18.25rem] visible transition-all duration-300"
            :
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-0 md:hidden opacity-0 invisible h-0 transition-all duration-300"}>
            <Link href="/" className="border-b-2 p-4">O firmie</Link>
            <Link href="/" className="border-b-2 p-4">Oferta</Link>
            <Link href="/" className="border-b-2 p-4">Realizacje</Link>
            <Link href="/kontakt" className="border-b-2 p-4">Kontakt</Link>
            <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="text-red-500 p-4">Sklep</Link>
          </div>
    </nav>
  )
}
