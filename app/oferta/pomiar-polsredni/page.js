import { SmallHero, CheckInShopBtn } from '@/components'

const PomiarPolsredni = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Rozdzielnice pomiaru półśredniego"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2">
        <img src="/foto-oferta-dodatkowe.jpg" alt="Pomiar półśredni - rysunek" className="w-full max-w-72"/>
        <p>W naszej ofercie posiadamy złącza pomiaru półpośredniego PP, który stosujemy jeżeli w sieci niskiego napięcia płyną prądy większe od wartości dopuszczalnych dla licznika i w związku z tym są stosowane przekładniki prądowe – liczniki takie są nazywane licznikami półpośrednimi. W układzie tym obwody prądowe liczników połączone są z przekładnikami prądowymi, a obwody napięciowe zasilane są napięciem bezpośrednim obwodu objętego pomiarem. Dla zapewnienia prawidłowej pracy układu stosuje się listwę kontrolno-pomiarową SKA, która służy do łączenia obwodów wtórnych przekładników prądowych oraz obwodów napięciowych z obwodami licznika energii.</p>
        <p>W złączach pomiaru półpośredniego w zależności od potrzeb klienta montujemy tablice licznikowe, liczniki, listwy kontrolno-pomiarowe, przekładniki, rozłączniki izolacyjne, wyłączniki nadprądowe, podstawy bezpiecznikowe, listwy zaciskowe tworząc dowolne konfiguracje we wszystkich układach połączeń.</p>
        <p>W naszej standardowej ofercie proponujemy złącza pomiaru półpośredniego w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV. Na życzenie złącza pomiaru półpośredniego możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas złącza pomiaru półpośredniego wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację zgodności.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Pomiar-polposredni-1PP/53"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
            <img src="/foto-oferta-pomiarpolsredni.jpg" alt="Pomiar półśredni" className="w-full max-w-[30rem]"/>
        </div>
        </section>
    </main>
  )
}

export default PomiarPolsredni