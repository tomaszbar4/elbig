import React from 'react'
import { ServiceItem } from '@/components'


export default function Services() {
  return (
    <section className="bg-gray-100 p-6 py-12 xl:px-0">
        <div className="max-w-[80rem] mx-auto">
        <p className="uppercase text-red-500 font-bold text-center">Czym się zajmujemy</p>
        <h4 className="font-bold text-4xl mb-8 text-center text-gray-950">Nasza oferta</h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <ServiceItem 
            title="Rozdzielnice budowlane"
            img="/rozdzielnice_budowlane.png"/>
            <ServiceItem 
            title="Pomiar półśredni"
            img="/pomiar_polsredni.png"/>
            <ServiceItem 
            title="Złącza kablowe"
            img="/zlacza_kablowe.png"/>
            <ServiceItem 
            title="Szafy oświetlenia ulicznego"
            img="/szafy_oswietlenia_ulicznego.jpg"/>
            <ServiceItem 
            title="Bateria kondensatorów - kompensacja mocy biernej"
            img="/bateria_kondensatorow.jpg"/>
            <ServiceItem 
            title="Szafy sterownicze"
            img="/szafy_sterownicze.jpg"/>
            <ServiceItem 
            title="Rozdzielnice do fotowoltaiki"
            img="/rozdzielnice_fotowoltaika.jpg"/>
            <ServiceItem 
            title="Rozdzielnice licznikowe"
            img="/rozdzielnice_licznikowe.png"/>
        </div>
        </div>
    </section>
  )
}
