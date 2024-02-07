const customerReviews = [
    "Polecam",
    "Szybka dostawa, polecam",
    "Mąż zadowolony",
    "wszystko sprawnie, polecam",
    "Sprzedający wymienił mi na swój koszt uszkodzony w transporcie daszek rozdzielnicy, mimo, że już było po terminie składania reklamacji w sprawie uszkodzeń w transporcie. Polecam w 100%.",
    "Ekspresowa dostawa :) Za co bardzo dziękuję!",
    "kontakt bardzo dobry , niestety musiałem zwrócić towar z powodu nie przemyślanego zakupu i z tym również nie było żadnego problemu",
    "Super kontakt. Postawa frontem do klienta. Polecam",
    "Super produkt, bardzo dobra komunikacja oraz serwis",
    "Dobra jakość. Porządna rozdzielnica.",
    "Transakcja bez zarzutu.Polecam ",
    "Szybko i sprawnie , przesyłka dobrze zabezpieczona"
]

const connectionStandards = [
    {
        name: 'Złącza kablowe i kablowo-pomiarowe standard TAURON',
        description: 
        (<div className="flex flex-col gap-2">
        <p>W naszej ofercie posiadamy złącza kablowe, które są niezbędnym elementem struktury każdej bezpiecznej sieci elektroenergetycznej. Złącza kablowe służą do rozdziału i zabezpieczenia przed skutkami zwarć i przeciążeń obwodów zasilanych z sieci elektroenergetycznej prądu przemiennego.</p>
        <p>W naszej standardowej ofercie proponujemy złącza kablowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV.  Wszystkie złącza kablowe wyposażone są w zamek składajacy się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie złącza kablowe możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas złącza kablowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację  zgodności.</p>
        </div>)
    },
    {
        name: 'Złącza kablowe ZK SK i kablowo pomiarowe ZK-P standard ENEA',
        description: 
        (
        <div className="flex flex-col gap-2">
        <p>W naszej ofercie posiadamy złącza kablowe, które są niezbędnym elementem struktury każdej sieci elektroenergetycznej. Złącza kablowe służą do rozdziału i zabezpieczenia przed skutkami zwarć i przeciązeń obwodów zasilanych z sieci elektroenergetycznej prądu przemiennego.</p>
        <p>W naszej standardowej ofercie proponujemy złącza kablowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL 7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV. Wszystkie złącza kablowe wyposażone są w zamek składający się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie złącza możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas złącza kablowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację zgodności.</p>
        </div>
        )
    },
    {
        name: 'Złącza kablowo-pomiarowe ZK standard PGE',
        description:
        (
        <div className="flex flex-col gap-2">
        <p>W naszej ofercie posiadamy złącza kablowe, które są niezbędnym elementem struktury każdej sieci elektroenergetycznej. Złącza kablowe służą do rozdziału i zabezpieczenia przed skutkami zwarć i przeciązeń obwodów zasilanych z sieci elektroenergetycznej prądu przemiennego.</p>
        <p>W naszej standardowej ofercie proponujemy złącza kablowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL 7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV. Wszystkie złącza kablowe wyposażone są w zamek składający się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie złącza możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszyskie prefabrykowane przez nas złącza kablowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację zgodności.</p>
        </div>
        )
    },
    {
        name: 'Złącza kablowo-pomiarowe standard ENERGA',
        description:
        (
        <div className="flex flex-col gap-2">
        <p>W naszej ofercie posiadamy złącza kablowe, które są niezbędnym elementem struktury każdej sieci elektroenergetycznej. Złącza kablowe służą do rozdziału i zabezpieczenia przed skutkami zwarć i przeciązeń obwodów zasilanych z sieci elektroenergetycznej prądu przemiennego</p>
        <p>W naszej standardowej ofercie proponujemy złącza kablowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL 7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV. Wszystkie złącza kablowe wyposażone są w zamek składający się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie złącza możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszyskie prefabrykowane przez nas złącza kablowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację zgodności.</p>
        </div>
        )
    },
    {
        name: 'Pomiar półśredni ZPP',
        description:
        (
        <div className="flex flex-col gap-2">
        <p>W naszej ofercie posiadamy złącza kablowe, które są niezbędnym elementem struktury każdej bezpiecznej sieci elektroenergetycznej. Złącza kablowe służą do rozdziału i zabezpieczenia przed skutkami zwarć i przeciążeń obwodów zasilanych z sieci elektroenergetycznej prądu przemiennego</p>
        <p>W naszej standardowej ofercie proponujemy złącza kablowe w obudowie na bazie izolacyjnego trudnopalnego i samogasnącego kompozytu (poliester+włókno szklane) w kolorze RAL7035 odznaczajacym się odpornością na działanie warunków atmosferycznych UV.  Wszystkie złącza kablowe wyposażone są w zamek składajacy się z cięgieł i klamki przystosowanej do zamykania za pomocą energetycznej wkładki bębenkowej masterkey i/lub kłódki. Na życzenie złącza kablowe możemy dostosować do montażu naściennego, nasłupowego, wolnostojącego lub na fundamencie do wkopania w ziemię.</p>
        <p>Wszystkie prefabrykowane przez nas złącza kablowe wraz ze stosowanymi rozwiązaniami technicznymi są zgodne z normami i wytycznymi działów standaryzacji zakładów energetycznych poszczególnych rejonów na obszar których prowadzimy dystrybucję naszych wyrobów. Każde z oferowanych przez nas złączy kablowych posiada wszelkie wymagane certyfikaty oraz deklarację zgodności.</p>
        </div>
        )
    },
    {
        name: 'Szafy oświetlenia ulicznego SOU',
        description:
        (
        <div className="flex flex-col gap-2">
        <p>Szafa oświetlenia ulicznego SOU przeznaczona jest do sterowania oświetleniem ulicznym. Wyposażona jest w układ pomiarowy przystosowany do zabudowy licznika energii elektrycznej oraz automatyczny układ sterowania oświetleniem umożliwiającym gaszenie i zapalanie źródeł światłą.</p>
        <p>Wyposażenie szafy może być dowolnie modyfikowane i dobierane przez klienta według zapotrzebowania. Isnieje możliwość rozbudowy lub redukcji obwodów wyjściowych oraz zmiany konfiguracji układu sterowania. Różnorodność konfiguracji umożliwia elastyczne dostosowanie się do wymagań odbiorcy.</p>
        <p>Szafy oświetlenia ulicznego SOU wykonywane są w obudowach z poliestru termoutwardzalnego IP 44-54 w wersji do powieszenia na elewacji, z uchytami na słup lub na fundamencie do wkopania w ziemię.</p>
        </div>
        )
    },
    {
        name: 'Kompensacja mocy biernej BK',
        description: 
        (
        <div className="flex flex-col gap-2">
        <p>Pobór mocy biernej należy dostosować do wymogów dostawcy energii elektrycznej. Odbywa się to bez ingerencji w ilość pracujących urządzeń i bez zmniejszenia obciążenia mocą czynną. Moc bierna o charakterze indukcyjnym pobierają przede wszystkim odbiorniki silnikowe. Wielkość pobieranej mocy biernej indukcyjnej kompensujemy poprzez wprowadzenie odbiorników o charakterze pojemnościowym. W ten sposób moc pobierana przez urządzenia indukcyjne jest kompensowana przez odbiory pojemnościowe. Możemy to uzyskać dzięki zastosowaniu automatycznej bateri kompensacyjnej.</p>
        <p>Rozdzielnice do kompensacji mocy biernej BK są inteligentnymi urządzeniami do automatycznego utrzymywania zadanego współczynnika mocy oraz do utrzymywania minimum pobranej mocy biernej poprzez automatyczne załączanie i wyłączanie kondesatorów.</p>
        <p>Rozdzielnice BK wykonywane są w wielu zakresach mocy, różnych wersjach stopniowania i wyposażenia zgodnie z indywidualnymi wymogami technicznymi.</p>
        </div>
        )
    }
]

const realizationsData = [
    {
        heading: "Rozdzielnica budowlana 630A z układem pomiaru półpośredniego",
        paragraph: "Rozdzielnica budowlana 630A stanowi punkt głównego zasilania placu budowy. Wyposażona jest w układ pomiarowy półpośredni służący do rozliczeń za zużytą energie. Rozłączniki bezpiecznikowe umożliwiają podłączenie mniejszych rozdzielni budowlanych rozlokowanych po terenie budowy.",
        image: "realizacje1.jpg"
    },
    {
        heading: "Rozdzielnica mechaniki scenicznej",
        paragraph: "Rozdzielnica automatyki sterowania mechaniki scenicznej . Falowniki napędów sterowane przez programowany sterownik PLC za pomocą protokołu CANBUS. Układ sterowania wyposażony w UPS gwarantujący zasilanie.",
        image: "realizacje2.jpg"
    },
    {
        heading: "Rozdzielnica główna RG 1250A",
        paragraph: "Rozdzielnica o prądzie znamionowym szyn zbiorczych 1250A wyposażona w wyłącznik mocy NZMN 1250A z cewką wzrostową popoż. Przedział wyłącznika mocy zawiera również zabezpieczenie przeciwprzepięciowe stopnia T1+T2. Przedział pola odpływowego zawiera szereg listwowych rozłączników bezpiecznikowych 400A i 160A. Dodatkowo pole odpływowe zawiera część administracyjną. Rozdzielnica została zbudowana na bazie obudowy typu XVTL firmy EATON.",
        image: "realizacje3.jpg"
    },
    {
        heading: "Rozdzielnica do kompensacji mocy biernej",
        paragraph: "Maksymalna moc automatycznej baterii kondensatorów wynosi 120kVar. Układ sterowania oparty na sterowniku DCRG-8 firmy LOVATO. Sterownik  posiada najnowocześniejsze funkcje niezbędne w przypadku zastosowań w zakresie kompensacji współczynnika mocy.",  
        image: "realizacje4.jpg"
    },
    {
        heading: "Rozdzielnica do fotowoltaiki model RPV",
        paragraph: "Rozdzielnica służy do ochrony przeciwprzepięciowej strony prądu stałego instalacji fotowoltaicznej. W tym szczególnym przypadku generator fotowoltaiczny składa się z dwóch stringów – łańcuchów paneli. Inwerter – falownik posiada dwa osobne wejścia tzw. trackery. Prezentowana rozdzielnica do fotowoltaiki posiada zainstalowane ochronniki stopnia T1+T2 dawniej B+C.",
        image: "realizacje5.jpg"
    },
    {
        heading: "Rozdzielnica budowlana + ZK3",
        paragraph: "Rozdzielnica budowlana wykonana w wersji przelotowej zrealizowanej poprzez zastosowanie przedziału odgałęźnego w postaci złącza kablowego ZK3. Gniazda do zasilania odbiorników zabudowano na ścianach bocznych rozdzielnicy budowlanej.",
        image: "realizacje6.jpg"
    },
    {
        heading: "Rozdzielnica elektryczna ze sprzęgłem 1250A",
        paragraph: "Rozdzielnica elektryczna posiadająca dwa dopływy zasilane z osobnych transformatorów oraz sprzęgło łączące obie sekcje. Za pomocą sprzęgła sterowanego manualnie można łączyć lub rozdzielać sekcje odpływowe w przypadku awarii i braku zasilania z któregoś z transformatorów.",
        image: "realizacje7.png"
    },
    {
        heading: "Rozdzielnica pomiaru półpośredniego prądu",
        paragraph: "W pierwszym przedziale zabudowano rozłącznik główny wraz z blokiem rozdzielczym 400A. W przedziale drugim zabudowano układ przekładników prądowych wraz z zabezpieczeniami odpływów.",
        image: "realizacje8.jpg"
    },
    {
        heading: "Rozdzielnica główna 400A – rozdzielnica metalowa",
        paragraph: "Rozdzielnica główna zasilająca wykonana na bazie metalowej rozdzielnicy Schneider Electric. Wewnątrz rozdzielnicy na metalowej płycie montażowej zabudowano wyłącznik główny firmy ETI oraz aparaturę modułową firmy ABB oraz EATON.",
        image: "realizacje9.jpg"
    },
]

export {
    customerReviews, connectionStandards, realizationsData
}