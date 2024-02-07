import React from 'react'
import { ServiceItem, SmallHero } from '@/components'

const Oferta = () => {
  return (
    <main className="bg-gray-50">
        <SmallHero text="OFERTA"/>
        <div className="max-w-[80rem] mx-auto py-24 px-6 xl:px-0">
        <p className="uppercase text-red-500 font-bold text-center">Czym się zajmujemy</p>
        <h4 className="font-bold text-4xl mb-8 text-center text-gray-950">Nasza oferta</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
            description="Firma EL-BIG specjalizuje się w prefabrykacji różnego typu rozdzielnic elektrycznych, które wykonujemy zgodnie z obowiązującymi normami i zaleceniami."
            img="/rozdzielnice_do_zabudowy.png"
            link="/rozdzielnice-elektryczne"
            />
            <ServiceItem 
            title="Frezowanie CNC"
            description="Nasze produkty odznaczają się wysoką jakością dzięki zastosowania w procesie montażu rozdzielnic elektrycznych maszyn sterowanych numerycznie potocznie zwanych maszynami CNC."
            img="/frezowanie.png"
            link="/frezowanie-cnc"
            />
        </div>
        </div>
    </main>
  )
}

export default Oferta