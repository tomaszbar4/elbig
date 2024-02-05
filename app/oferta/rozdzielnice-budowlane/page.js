import { SmallHero, CheckInShopBtn } from '@/components'

const RozdzielniceBudowlane = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Rozdzielnice budowlane"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center gap-3 items-center w-full lg:w-1/2">
        <p className="font-semibold text-xl">Rozdzielnica budowlana to tymczasowe źródło energii elektrycznej.</p>
        <p>W naszej ofercie posiadamy rozdzielnice budowlane, które są niezbędne do zasilania wszelkiego typu narzędzi i urządzeń potrzebnych do wykonania prac budowlanych. Rozdzielnice budowlane określane również jako erbetka sprawdzą się również wszędzie tam, gdzie niezbędne jest przenośne lub tymczasowe źródło zasilania np. na kempingach, targowiskach lub podczas festynów.</p>
        <p className="font-semibold text-xl">Rozdzielnia budowlana często określana jest potocznie jako erbetka.</p>
        <p>Jako firma specjalizująca się w produkcji rozdzielnic budowlanych, oferujemy nasze produkty w standardowym wyposażeniu, jak również możemy wykonać je zgodnie z otrzymaną dokumentacją w dowolnej konfiguracji. Każda wyprodukowana przez nas rozdzielnia budowlana spełniają wymogi stawiane przez obowiązujące normy i przepisy oraz posiada stosowne certyfikaty i deklaracje zgodności. W naszej standardowej ofercie proponujemy rozdzielnice w obudowie z poliestru termoutwardzalnego wzmocnionego włóknem szklanym  w kolorze RAL7035 odznaczającym się odpornością na działanie warunków atmosferycznych UV.  Na życzenie rozdzielnica budowlana może być dostosowana do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-budowlane-RB/13"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
            <img src="/foto-oferta-rozdzbudowlane.jpg" alt="Rozdzielnice budowlane" className="w-full max-w-[30rem]"/>
        </div>
        </section>
    </main>
  )
}

export default RozdzielniceBudowlane