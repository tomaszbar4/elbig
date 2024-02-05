import { SmallHero, CheckInShopBtn } from '@/components'

const RozdzielniceLicznkowe = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Rozdzielnice licznkowe"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center gap-3 items-center w-full lg:w-1/2">
        <p className="font-semibold text-xl">Rozdzielnica licznikowa to układ pomiarowy wykonany zgodnie ze standardami technicznymi zakładu energetycznego.</p>
        <p>W naszej ofercie posiadamy rozdzielnice licznikowe, które przeznaczone są do zasilania odbiorców w energię elektryczną. Rozdzielnica licznikowa posiada zabudowany układ pomiarowy wraz z aparatami pełniącymi funkcję zabezpieczeń przed i/lub zalicznikowych. W naszej standardowej ofercie proponujemy rozdzielnice licznikowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV.  Wszystkie rozdzielnice licznikowe wyposażone są w zamek składający się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie rozdzielnice możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas rozdzielnie licznikowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każda z oferowanych przez nas rozdzielnic licznikowych posiada wszelkie wymagane certyfikaty oraz deklarację  zgodności.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-budowlane-RB/13"/>
        </div>
        <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/2">
            <img src="/foto-oferta-licznikowe.jpg" alt="Rozdzielnice budowlane" className="w-full max-w-[35rem]"/>
        </div>
        </section>
    </main>
  )
}

export default RozdzielniceLicznkowe