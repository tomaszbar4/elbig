import React from 'react'
import { ServiceItem, SmallHero } from '@/components'

const Oferta = () => {
  return (
    <main className="bg-gray-50">
        <SmallHero text="OFERTA"/>
        <div className="max-w-[80rem] mx-auto py-24 px-6 xl:px-0">
        <p className="uppercase text-red-500 font-bold text-center">Czym się zajmujemy</p>
        <h4 className="font-bold text-4xl mb-8 text-center text-gray-950">Nasza oferta</h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <ServiceItem 
            title="Rozdzielnice budowlane"
            img="/rozdzielnice_budowlane.png"
            link="/rozdzielnice-budowlane"
            />
            <ServiceItem 
            title="Pomiar półśredni"
            img="/pomiar_polsredni.png"
            link="/pomiar-polsredni"
            />
            <ServiceItem 
            title="Złącza kablowe"
            img="/zlacza_kablowe.png"
            link="/zlacza-kablowe"
            />
            <ServiceItem 
            title="Szafy oświetlenia ulicznego"
            img="/szafy_oswietlenia_ulicznego.jpg"
            link="/szafy-oswietlenia-ulicznego"
            />
            <ServiceItem 
            title="Bateria kondensatorów - kompensacja mocy biernej"
            img="/bateria_kondensatorow.jpg"
            link="/kompensacja-mocy-biernej"
            />
            <ServiceItem 
            title="Szafy sterownicze"
            img="/szafy_sterownicze.jpg"
            link="/szafy-sterownicze"
            />
            <ServiceItem 
            title="Rozdzielnice do fotowoltaiki"
            img="/rozdzielnice_fotowoltaika.jpg"
            link="/rozdzielnice-do-fotowoltaiki"
            />
            <ServiceItem 
            title="Rozdzielnice licznikowe"
            img="/rozdzielnice_licznikowe.png"
            link="/rozdzielnice-licznikowe"
            />
            <ServiceItem 
            title="Rozdzielnice do stacji transformatorowej"
            img="/rozdzielnica_do_stacji.jpg"
            link="/kompensacja-mocy-biernej"
            />
            <ServiceItem 
            title="Rozdzielnice przeciwpożarowego wyłącznika prądu"
            img="/rozdzielnica_przeciwpozarowego.jpg"
            link="/szafy-sterownicze"
            />
            <ServiceItem 
            title="Rozdzielnice do zabudowy (skrzynki elektryczne)"
            img="/rozdzielnice_do_zabudowy.png"
            link="/rozdzielnice-elektryczne"
            />
            <ServiceItem 
            title="Frezowanie CNC"
            img="/frezowanie.png"
            link="/frezowanie-cnc"
            />
        </div>
        </div>
    </main>
  )
}

export default Oferta