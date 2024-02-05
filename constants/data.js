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

export {
    customerReviews, connectionStandards
}