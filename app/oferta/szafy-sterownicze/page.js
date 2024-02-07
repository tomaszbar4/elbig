import { SmallHero, CheckInShopBtn } from '@/components'

const SzafySterownicze = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Szafy sterownicze"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2">
        <p className="text-xl font-semibold">Szafy sterownicze to rozdzielnice automatyki przemysłowej projektowane i budowana na potrzeby sterowania i wizualizacji procesów przemysłowych.</p>
        <p>Wychodząc na przeciw zapotrzebowaniu sektora przemysłowego nasza firma wprowadziła do swojej oferty usługę projektowania i prefabrykacji szaf sterowniczych. Wykonywane przez nas szafy sterownicze inaczej szafy automatyki przemysłowej budujemy na podstawie dokumentacji klienta lub na podstawie własnych projektów. Przy konstruowaniu rozdzielnic sterowniczych wykorzystujemy aparaturę wiodących producentów takich jak: EATON, Schneider, Rittal, Lumel, Siemens, Toshiba, ABB i wielu innych.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 ">
            <img src="/foto-oferta-sterownicze.jpg" alt="Szafy sterownicze" className="w-full max-w-[25rem]"/>
        </div>
        </section>
    </main>
  )
}

export default SzafySterownicze