import React from 'react'
import { ServiceItem } from '@/components'


export default function Services() {
  return (
    <section className="bg-gray-100 p-6 py-12 xl:px-0">
        <div className="max-w-[80rem] mx-auto">
        <p className="uppercase text-red-500 font-bold text-center">Czym się zajmujemy</p>
        <h4 className="font-bold text-4xl mb-8 text-center text-gray-950">Nasza oferta</h4>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <ServiceItem 
            title="Rozdzielnice budowlane"
            description="W naszej ofercie posiadamy rozdzielnice budowlane, które są niezbędne do zasilania wszelkiego typu narzędzi i urządzeń potrzebnych do wykonania prac budowlanych."
            img="/rozdzielnice_budowlane.png"
            link="/rozdzielnice-budowlane"
            />
            <ServiceItem 
            title="Pomiar półśredni"
            description="W naszej ofercie posiadamy złącza pomiaru półpośredniego PP, który stosujemy jeżeli w sieci niskiego napięcia płyną prądy większe od wartości dopuszczalnych dla licznika i w związku z tym są stosowane przekładniki prądowe."
            img="/pomiar_polsredni.png"
            link="/pomiar-polsredni"
            />
            <ServiceItem 
            title="Złącza kablowe"
            description="W naszej ofercie posiadamy rozdzielnice licznikowe, które przeznaczone są do zasilania odbiorców w energię elektryczną."
            img="/zlacza_kablowe.png"
            link="/zlacza-kablowe"
            />
            <ServiceItem 
            title="Szafy oświetlenia ulicznego"
            description="Pobór mocy biernej należy dostosować do wymogów dostawcy energii elektrycznej. Odbywa się to bez ingerencji w ilość pracujących urządzeń i bez zmniejszenia obciążenia mocą czynną."
            img="/szafy_oswietlenia_ulicznego.jpg"
            link="/szafy-oswietlenia-ulicznego"
            />
            <ServiceItem 
            title="Bateria kondensatorów - kompensacja mocy biernej"
            description="Firma ELBIG oferuje szeroką gamę rozdzielnic do kompensacji mocy biernej, które wpływają na poprawę jakości energii elektrycznej."
            img="/bateria_kondensatorow.jpg"
            link="/kompensacja-mocy-biernej"
            />
            <ServiceItem 
            title="Szafy sterownicze"
            description="Wychodząc na przeciw zapotrzebowaniu sektora przemysłowego nasza firma wprowadziła do swojej oferty usługę projektowania i prefabrykacji szaf sterowniczych."
            img="/szafy_sterownicze.jpg"
            link="/szafy-sterownicze"
            />
            <ServiceItem 
            title="Rozdzielnice do fotowoltaiki"
            description="Instalacja fotowoltaiczna bez względu na swój rozmiar, lokalizacje oraz moc generatora musi w swojej strukturze zawierać specjalistyczne rozdzielnice typu RPV."
            img="/rozdzielnice_fotowoltaika.jpg"
            link="/rozdzielnice-do-fotowoltaiki"
            />
            <ServiceItem 
            title="Rozdzielnice licznikowe"
            description="Rozdzielnica licznikowa to układ pomiarowy wykonany zgodnie ze standardami technicznymi zakładu energetycznego."
            img="/rozdzielnice_licznikowe.png"
            link="/rozdzielnice-licznikowe"
            />
        </div>
        </div>
    </section>
  )
}
