"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Info() {
  return (
    <section className="bg-white text-black">
        <div className="flex flex-col-reverse lg:flex-row max-w-[80rem] mx-auto items-center lg:py-16 lg:px-12">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.25, delay: 0.15}}
        className="lg:w-1/3 lg:mr-12 w-full relative">
            <img src="/handshake.jpg" alt="Handshake img" className="w-full h-80 lg:h-auto object-cover"/>
            <div className="lg:block w-20 h-4 bg-red-600 absolute -top-4 -left-4 hidden"/>
            <div className="lg:block w-4 h-20 bg-red-600 absolute -top-4 -left-4 hidden"/>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, }}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.25, delay: 0.35}}
        className="px-8 py-10 lg:px-4 md:py-8 lg:w-2/3 flex flex-col justify-center">
			<h3 className="mb-2 text-lg font-bold text-red-500 uppercase md:text-xl lg:text-2xl">Parę słów o firmie</h3>
			<h2 className="text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-black mb-8 text-gray-800" >
                Specjalizujemy się w prefabrykacji rozdzielnic elektrycznych niskiego napięcia.
            </h2>
			<h4 className="mb-4 font-extrabold lg:text-xl">Jakość wykonania</h4>
			    <p className="lg:text-lg">Oferowane przez nas produkty charakteryzują sie wysoką jakością
				i dokładnością wykonania przy zachowaniu korzystnych i konkurencyjnych cen.</p>
					<h4 className="my-4 font-extrabold lg:text-xl">Profesjonalizm</h4>
					<p className="lg:text-lg">Jesteśmy firmą z długoletnim doświadczeniem, dzięki czemu nasi klienci mogą liczyć na kompleksową obsługę.
						Posiadamy własny park maszyn, co pozwala nam sprostać każdemu
						zleceniu w zakresie projektowania i prefabrykacji rozdzielnic elektrycznych.</p>
                    
				</motion.div>

                </div>
    </section>
  )
}
