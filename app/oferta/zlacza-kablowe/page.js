import { SmallHero, CheckInShopBtn } from '@/components'

const ZlaczaKablowe = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Złącza kablowe"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2">
        <p>W naszej ofercie posiadamy rozdzielnice licznikowe, które przeznaczone są do zasilania odbiorców w energię elektryczną. Rozdzielnice licznikowe posiadają zabudowany układ pomiarowy wraz z aparatami pełniącymi funkcję zabezpieczeń przed i/lub zalicznikowych. W naszej standardowej ofercie proponujemy rozdzielnice w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV.  Wszystkie rozdzielnice licznikowe wyposażone są w zamek składajacy się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie rozdzielnice możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas rozdzielnice licznikowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każda z oferowanych przez nas rozdzielnic licznikowych potwierda wszelkie wymagane certyfikaty oraz deklarację  zgodności wydawaną do każdej rozdzielnicy.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-budowlane-RB/13"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 ">
            <img src="/foto-oferta-zlacza.jpg" alt="Pomiar półśredni" className="w-full max-w-[20rem]"/>
        </div>
        </section>
    </main>
  )
}

export default ZlaczaKablowe