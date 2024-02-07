import { SmallHero, CheckInShopBtn } from '@/components'

const FrezowanieCnc = () => {
  return (
    <main className="bg-white">
        <SmallHero text="Frezowanie CNC"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col-reverse xl:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center gap-3 w-full xl:w-1/2">
        <p>Proces profesjonalnej prefabrykacji rozdzielnic elektrycznych wymaga odpowiedniego zaplecza technicznego. Nasze produkty odznaczają się wysoką jakością dzięki zastosowania w procesie montażu rozdzielnic elektrycznych maszyn sterowanych numerycznie potocznie zwanych maszynami cnc. Posiadamy dwie obrabiarki cnc na których świadczymy również usługi zewnętrzne dla szerokiego sektora odbiorców. Świadczymy kompleksowe usługi w zakresie obróbki materiałów poprzez frezowanie CNC za pomocą sterowanych numerycznie obrabiarek / ploterów CNC takich jak:</p>
        <ul className="list-disc ml-5">
            <li>cięcie po dowolnym konturze</li>
            <li>frezowanie CNC</li>
            <li>obróbka CNC</li>
            <li>wiercenie</li>
            <li>nacinanie gwintów</li>
            <li>frezowanie-krzywoliniowe</li>
            <li>grawerowanie</li>
        </ul>
        <p>Obrabiane materiały to:</p>
        <ul className="list-disc ml-5">
        <li>tworzywa sztuczne (PVC) – wszystkie rodzaje</li>
        <li>kompozyty poliestrowe z włóknem szklanym SMC</li>
        <li>materiały drewnopochodne (MDF, sklejka, lite drewno)</li>
        <li>płyty warstwowe dibond i laminaty grawerskie</li>
        <li>aluminium, miedź i mosiądz</li>
        </ul>
        <p>Usługę obróbki materiałów wykonujemy na podstawie dostarczonego przez klienta wzoru i/lub dokumentacji technicznej na materiałach własnych lub powierzonych. Posiadamy duże możliwości techniczne oraz bogate doświadczenie w dziedzinie frezowania CNC także w obróbce materiałów trudno obrabialnych. Dzięki temu jesteśmy w stanie wykonać bardzo precyzyjnie każdy detal w krótkim czasie. Wyróżnia nas precyzja i powtarzalność procesu.</p>
        <p>Zapraszamy do kontaktu z nami, aby zapoznać się ze szczegółami naszej oferty na frezowanie CNC. Firma EL-BIG Tarnowskie Góry – Śląsk.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl"/>
        </div>
        <div className="flex xl:flex-col justify-center items-center w-full xl:w-1/2 gap-2 p-6">
            <img src="/cnc1.jpg" alt="Frezowanie cnc zdjęcie" className="w-1/2 xl:w-2/3  aspect-[16/11]"/>
            <img src="/cnc2.jpg" alt="Frezowanie cnc zdjęcie" className="w-1/2 xl:w-2/3 aspect-[16/11]"/>
        </div>
        </section>
    </main>
  )
}

export default FrezowanieCnc