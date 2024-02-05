"use client"
import { useState, useRef, useEffect } from 'react';
import { SmallHero, CheckInShopBtn } from '@/components'
import { TbSquareChevronRight } from "react-icons/tb";
import { connectionStandards } from '@/constants/data';

const RozdzielniceElektryczne = () => {

    const [currentIndex, setCurrentIndex] = useState(null)

    function updateIndex(idx) {
        if(currentIndex===idx) {
            setCurrentIndex(null)
        }
        else {
            setCurrentIndex(idx)
        }
    }

    const ListItem = ({ title, description, idx }) => {

        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);
        const isActive = currentIndex === idx;
    
        useEffect(() => {
            if (contentRef.current) {
                setHeight(isActive ? contentRef.current.scrollHeight : 0);
            }
        }, [isActive]);

        return (

        <li onClick={() => updateIndex(idx)} className="border-b-[1px] border-gray-300 flex flex-col group cursor-pointer transition-all duration-200">
        <div className="flex items-center p-6 border-b-[1px] border-gray-300">
            <span className="mr-6 font-semibold">{title}</span>
            <button className="text-gray-500 ml-auto group-hover:text-blue-500 transition-all duration-200 text-3xl">
                <TbSquareChevronRight />
            </button>
        </div>
        <div
            ref={contentRef}
            style={{
                maxHeight: `${height}px`,
                transition: 'max-height 0.5s ease',
                overflow: 'hidden'
            }}
        >
            <div className="p-6 bg-gray-100">
                {description}
            </div>
        </div>
    </li>
        )
    }
    

  return (
    <main className="bg-white">
        <SmallHero text="Rozdzielnice elektryczne"/>
        <section className="max-w-[80rem] mx-auto py-12 px-8 text-gray-950 flex flex-col xl:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center gap-3 items-center w-full xl:w-1/2">
        <img src="/oferta_elektryczne.png" alt="Rozdzielnice budowlane" className="w-full max-w-[25rem] mb-8"/>
        <p>Firma EL-BIG specjalizuje się w prefabrykacji różnego typu rozdzielnic elektrycznych, które wykonujemy zgodnie z obowiązującymi normami i zaleceniami. Każda rozdzielnica poddawana jest szczegółowym pomiarom i testom powykonawczym na podstawie których opracowywane są protokoły pomiarowe oraz potwierdza się spełnienie wymogów obowiązujących norm technicznych- deklaracja zgodności.</p>
        <p>Oferujemy prefabrykacje rozdzielnic w pełnym zakresie prądowym i w różnych wykonaniach, na podstawie dostarczonej dokumentacji technicznej, bądź szczegółowych uzgodnień z klientem. Wykonujemy urządzenia rozdzielcze różnych typów: pomiarowe, sterownicze i specjalne w obudowach meatlowych i z tworzyw sztucznych SMC wykorzystując aparaturę sprawdzonych na rynku producentów.</p>
        <CheckInShopBtn link="https://www.rozdzielnie-elektryczne.com.pl/pl/c/Rozdzielnice-budowlane-RB/13"/>
        </div>
        <div className="flex flex-col justify-center items-center w-full xl:w-1/2">
        <ul className="bg-gray-200 flex flex-col my-2 md:mr-auto transition-all duration-200">
        {connectionStandards.map((item, idx) =>
        (<ListItem title={item.name} description={item.description} idx={idx}/>)
        )}
        </ul>
        </div>
        </section>
    </main>
  )
}

export default RozdzielniceElektryczne