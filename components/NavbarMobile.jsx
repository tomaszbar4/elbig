import React from 'react'
import Link from 'next/link'

export default function NavbarMobile({isOpen, toggleHamburger}) {

  function toggleAndScroll() {
    toggleHamburger()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <nav>
            <div className={isOpen
            ?
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-t-2 md:hidden opacity-100 h-[18.35rem] visible transition-all duration-300 "
            :
            "uppercase font-bold text-gray-950 flex flex-col bg-white border-0 md:hidden opacity-0 invisible h-0 transition-all duration-300"}>
            <Link href="/" className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><button className="w-full h-full" onClick={toggleAndScroll}>O firmie</button></Link>
            <Link href="/oferta" className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><button className="w-full h-full" onClick={toggleAndScroll}>Oferta</button></Link>
            <Link href="/realizacje" className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><button className="w-full h-full" onClick={toggleAndScroll}>Realizacje</button></Link>
            <Link href="/kontakt" className="w-full h-full border-b-2 hover:bg-gray-100 transition-all duration-200 hover:text-red-500"><button className="w-full h-full" onClick={toggleAndScroll}>Kontakt</button></Link>
            <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="w-full h-full hover:bg-gray-100 transition-all duration-200 hover:text-red-700 text-red-500 "><button className="w-full h-full" onClick={toggleAndScroll}>Sklep</button></Link>
          </div>
    </nav>
  )
}
