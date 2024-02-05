import { SmallHero, CheckInShopBtn } from '@/components'

const SzafyOswietleniaUlicznego = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Szafy oświetlenia ulicznego"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2">
        <p>Pobór mocy biernej należy dostosować do wymogów dostawcy energii elektrycznej. Odbywa się to bez ingerencji w ilość pracujących urządzeń i bez zmniejszenia obciążenia mocą czynną. Moc bierna o charakterze indukcyjnym pobierają przede wszystkim odbiorniki silnikowe. Wielkość pobieranej mocy biernej indukcyjnej kompensujemy poprzez wprowadzenie odbiorników o charakterze pojemnościowym. W ten sposób moc pobierana przez urządzenia indukcyjne jest kompensowana przez odbiory pojemnościowe. Możemy to uzyskać dzięki zastosowaniu automatycznej bateri kompensacyjnej.</p>
        <p>Rozdzielnice do kompensacji mocy biernej BK są inteligentnymi urządzeniami do automatycznego utrzymywania zadanego współczynnika mocy oraz do utrzymywania minimum pobranej mocy biernej poprzez automatyczne załączanie i wyłączanie kondesatorów.</p>
        <p>Rozdzielnice BK wykonywane są w wielu zakresach mocy, różnych wersjach stopniowania i wyposażenia zgodnie z indywidualnymi wymogami technicznymi.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-budowlane-RB/13"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 ">
            <img src="/foto-oferta-oswietlenieuliczne.jpg" alt="Pomiar półśredni" className="w-full max-w-[25rem]"/>
        </div>
        </section>
    </main>
  )
}

export default SzafyOswietleniaUlicznego