import { SmallHero, CheckInShopBtn } from '@/components'

const RozdzielniceDoFotowoltaiki = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Rozdzielnice do fotowoltaiki"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2">
        <p>Instalacja fotowoltaiczna bez względu na swój rozmiar, lokalizacje oraz moc generatora musi w swojej strukturze zawierać specjalistyczne rozdzielnice typu RPV, które służą jako:</p>
        <ul className="list-disc ml-4">
        <li>zabezpieczenie przed prądami zwrotnymi występującymi w łańcuchach równoległych</li>
        <li>zabezpieczenie przeciwprzepięciowe strony DC</li>
        <li>zabezpieczenie przeciwprzepięciowe strony AC</li>
        <li>wyłącznik główny instalacji PV</li>
        <li>pomiar brutto energii przekazywanej z generatora PV do sieci</li>
        </ul>
        <p>Szczególnie narażonym elementem instalacji PV jest falownik, który w przypadku braku odpowiedniego zabezpieczenia może zostać trwale uszkodzony.</p>
        <p>Firma El-BIG Jarosław Wręczycki jest certyfikowanym instalatorem w zakresie Odnawialnych Źródeł Energii OZE i jest wpisana w rejestrze certyfikowanych instalatorów pod numerem OZE-E/13/000053/15 prowadzonym przez Urząd Dozoru Technicznego.</p>
        <p>W swojej ofercie posiadamy dwa typy rozdzielnic:</p>
        <ul className="list-disc ml-4">
        <li className="mb-2">
        <span className="font-bold">Seria rozdzielnic RPV(T2)</span> przeznaczona jest do ochrony instalacji fotowoltaicznych: stringów, modułów PV oraz falowników/inwerterów przed indukowanymi przepięciami atmosferycznymi lub przepięciami łączeniowymi.Rozdzielnice serii RPV/(T2) stosujemy w przypadku kiedy budynek nie jest wyposażony w instalację odgromową (piorunochron) lub zachowane są przewidziane przepisami normy odstępy izolacyjne pomiędzy instalacją fotowoltaiczną i odgromową.
        </li>
        <li>
        <span className="font-bold">Seria rozdzielnic RPV(T1+T2)</span> przeznaczona jest do ochrony instalacji fotowoltaicznych: stringów, modułów PV oraz falowników/inwerterów przed przepięciami pochodzącymi z wyładowań atmosferycznych pośrednich lub bezpośrednich.Rozdzielnice serii RPV/(T1+T2) stosujemy w przypadku kiedy budynek wyposażony jest w instalację odgromową (piorunochron) i nie można zachować przewidzianych przepisami normy odstępów izolacyjnych pomiędzy instalacją fotowoltaiczną i odgromową.
        </li>
        </ul>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-do-fotowoltaiki-RPV/39"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
            <img src="/foto-oferta-fotowoltaika.jpg" alt="Pomiar półśredni" className="w-full max-w-[30rem]"/>
        </div>
        </section>
    </main>
  )
}

export default RozdzielniceDoFotowoltaiki