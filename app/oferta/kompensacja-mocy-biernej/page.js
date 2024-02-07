import { SmallHero, CheckInShopBtn } from '@/components'

const KompensacjaMocyBiernej = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Kompensacja mocy biernej"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col gap-4 justify-center ">
        <img src="/foto-oferta-kompensacja.jpg" alt="Kompensacja mocy biernej" className="mb-4 w-full max-w-[45rem] mx-auto"/>
        <p className="text-xl font-semibold">Firma ELBIG oferuje szeroką gamę rozdzielnic do kompensacji mocy biernej, które wpływają na poprawę jakości energii elektrycznej.</p>
        <p>W obecnych czasach w skład instalacji elektrycznej prądu przemiennego wchodzą odbiorniki, takie jak transformatory, silniki, spawarki, urządzenia elektroniczne itp. oraz w szczególności odbiorniki, w których prąd ulega przesunięciu fazowemu w stosunku do napięcia, w skutek czego następuje zużycie energii sumarycznej, zwanej energią pozorną. Odpowiadająca energii pozornej moc pozorna S stanowi geometryczną sumę mocy czynnej P oraz mocy biernej Q.</p>
        <img src="/kompensacja1.png" alt="Obliczenia kompensacja" className="w-full max-w-[20rem]"/>
        <p>Moc czynna P jest pobierana przez odbiorniki i przetwarzana na pracę mechaniczną lub energię cieplną. Moc bierna może mieć  charakter indukcyjny lub pojemnościowy i jest niezbędna do wytwarzania pola elektromagnetycznego w dławikach, transformatorach lub silnikach oraz pola elektrycznego w kablach czy kondensatorach. Pobór mocy biernej wpływa na zwiększenie strat cieplnych a co za tym idzie zmniejszenie sprawności przesyłowych linii energetycznych.</p>
        <p>Z definicji, współczynnik mocy, zwany inaczej cosφ urządzenia elektrycznego jest równy stosunkowi mocy czynnej P (kW) do mocy pozornej S (kVA) i może się zmieniać w zakresie wartości od 0 do 1.</p>
        <img src="/kompensacja2.png" alt="Obliczenia kompensacja" className="w-full max-w-[15rem]"/>
        <p>Współczynnik mocy równy 1 oznacza zerowe zużycie energii biernej mamy w tym przypadku do czynienia z idealnie rezystancyjnym odbiornikiem. Współczynnik mocy mniejszy od 1 oznacza zużycie energii biernej, które wzrasta im bardziej współczynnik ten zbliża się do 0 w którym to przypadku mamy do czynienia z odbiornikiem idealnie indukcyjnym. Dostawcy energii w umowie o dostawę energii elektrycznej posługują się współczynnikiem mocy wyrażonym jako tgφ</p>
        <img src="/kompensacja3.png" alt="Obliczenia kompensacja" className="w-full max-w-[15rem]"/>
        <p>Z powyższego wzoru wynika zależność, że im mniejsza wartość tgφ, tym mniejsza zawartość składowej biernej w prądzie. Dopuszczalną wartość współczynnika mocy w sieciach elektroenergetycznych określa Rozporządzenie Ministra Gospodarki Pracy. Zgodnie z tym Rozporządzeniem tgφdop≤0,4 (cosφdop≥0,929). W przypadku przekroczenia dopuszczalnej wartości, dostawca energii nalicza kary, których wysokość jest zależna od wartości i czasu pobieranej mocy biernej. W takim przypadku opłacalne staje się zainstalowanie automatycznej baterii kondensatorów i zastosowanie kompensacji mocy biernej indukcyjnej. Kompensacja mocy biernej polega na włączeniu do sieci równolegle odbiornika o mocy biernej równej do pobieranej przez odbiornik ale o przeciwnym znaku. W ten sposób moc pobierana przez urządzenia indukcyjne jest kompensowana przez odbiory pojemnościowe.</p>
        <p className="text-xl font-semibold">Rozdzielnice do kompensacji mocy biernej BK są inteligentnymi urządzeniami do automatycznego utrzymywania zadanego współczynnika mocy.</p>
        <p>Automatyczne baterie kondensatorów służą do utrzymywania minimum pobranej mocy biernej poprzez automatyczne załączanie i wyłączanie kolejnych sekcji kondensatorów. Rozdzielnice BK wykonywane są w wielu zakresach mocy, różnych wersjach stopniowania i wyposażenia zgodnie z indywidualnymi wymogami technicznymi. Dzięki kompensacji mocy biernej, redukuje się ilości energii biernej dostarczanej przez źródło zasilania i poprawia współczynnik mocy całej instalacji. Kompensacja mocy biernej daje następujące korzyści:</p>
        <ul className="list-disc ml-5">
            <li>wyeliminowanie rachunków za energię bierną</li>
            <li>zmniejszenie strat mocy czynnej w przewodach instalacji (o prawie 3%)</li>
            <li>poprawa wartości napięcia na końcu linii</li>
            <li>zwiększenie dostępnej mocy czynnej</li>
        </ul>
        <p>Projekt automatycznej baterii do kompensacji mocy biernej powinien być poprzedzony szczegółową analizą techniczno ekonomiczną. Wstępną analizę można przeprowadzić na podstawie historii rachunków z wyszczególnionymi opłatami za pobór mocy biernej. Możemy w ten sposób oszacować konieczność przeprowadzenia inwestycji w urządzenia do kompensacji mocy biernej. Aby obliczyć lub raczej oszacować moc baterii kondensatorów, którą należy zainstalować należy wybrać miesiąc, w którym opłaty za energię elektryczną były najwyższe. W rachunku będzie podana wartość energii w kVArh. Następnie należy określić miesięczną ilość godzin pracy instalacji. Na podstawie tych dwóch wielkości obliczamy moc kondensatora Qc, który powinien być zainstalowany</p>
        <img src="/kompensacja4.png" alt="Obliczenia kompensacja" className="w-full max-w-[25rem]"/>
        <p className="text-xl font-semibold">Do wykonania prawidłowego projektu baterii kondensatorów potrzebna jest szczegółowa analiza parametrów sieci oraz profilu energetycznego odbiorcy energii.</p>
        <p>Badania tego dokonujemy na miejscu u klienta. Na podstawie przeprowadzonych pomiarów sporządzamy pełny raport wraz z dobranym urządzeniem oraz ofertę jego dostawy i montażu.</p>
        <img src="/kompensacja5.jpg" alt="Obliczenia kompensacja" className="w-full max-w-[15rem]"/>
        <p>Przeprowadzona analiza parametrów obciążenia w czasie pozwala nie tylko określić precyzyjnie wartość kondensatora do kompensacji mocy biernej ale również dobrać odpowiednio wartości stopni automatycznej baterii kondensatorów. Automatyczna regulacja współczynnika mocy polega na włączaniu lub wyłączaniu kolejnych stopni baterii kondensatorów na podstawie aktualnych danych obciążenia przetwarzanych przez automatyczny regulator zabudowany w rozdzielnicy do kompensacji mocy biernej. Przeznaczone do tego celu styczniki są specjalnie zaprojektowane przez producentów do sterowania kondensatorów, a w szczególności do instalowania
        w bateriach kondensatorów z regulacją automatyczną. Styczniki te są wyposażone w dodatkowe styki pomocnicze podłączone szeregowo do rezystorów ograniczających, przeznaczonych do redukowania przetężeń powstających podczas operacji  łączeniowych. W przypadku obciążeń przy ultra-szybkich cyklach pracy (urządzenia spawalnicze itp.) konwencjonalny sposób sterowania kondensatorami (styczniki elektromagnetyczne) nie znajduje już zastosowania.  Do systemów kompensacyjnych o dużej prędkości przełączania niezbędne są styczniki półprzewodnikowe.</p>
        <p>Każdemu kondensatorowi pracującemu w układzie stopnie automatycznej baterii kondensatorów konieczne jest zapewnienie zewnętrznego zabezpieczenia w postaci wyłącznika z wyzwalaczem termicznym ustawionym pomiędzy 1,3 a 1,5 In oraz wyzwalaczem magnetyczny ustawiony pomiędzy 5 a 10 In. Jako zabezpieczenie można również zastosować aparaty wyposażone we wkładki topikowe typu gL, o prądzie znamionowym od 1,4 do 2 In.</p>
        <img src="/kompensacja6.jpg" alt="Obliczenia kompensacja" className="w-full max-w-[20rem]"/>
        <p>Nad całym procesem automatycznej kompensacji współczynnika mocy czuwa regulator mocy biernej. Przykładem takiego urządzenia jest automatyczny regulator mocy DCRG 8 produkcji LOVATO. Regulator ten posiada najnowocześniejsze funkcje niezbędne w przypadku zastosowań w zakresie kompensacji współczynnika mocy.</p>
        <img src="/kompensacja7.jpg" alt="Licznik" className="w-full max-w-[20rem]"/>
        <p>Zapraszamy do skorzystania z poniższego konfiguratora lub bezpośredni kontakt z naszym biurem. Przeprowadzimy dla Państwa audyt i pomożemy w doborze optymalnego rozwiązania – rozdzielnicy do automatycznej kompensacji mocy biernej.</p>
        <img src="/kompensacja8.jpg" alt="Licznik" className="w-full max-w-[15rem]"/>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Kompensacja-mocy-biernej/54"/>
        </section>
    </main>
  )
}

export default KompensacjaMocyBiernej