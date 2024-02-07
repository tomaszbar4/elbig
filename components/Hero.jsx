"use client"
import Image from 'next/image'
import { ImageSlider } from '@/components'
import { motion } from 'framer-motion'
import Link from 'next/link'


const Hero = () => {


  const heroContent = [
    {
      html: (
      <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay: 0.35}}
      className="lg:pl-24 text-center lg:text-left z-10 px-6 lg:px-0 text-white">
      <h1 className="font-black uppercase text-2xl md:text-3xl lg:text-5xl mb-4">Prefabrykacja 
      <span className="text-red-500"> rozdzielnic elektrycznych</span></h1>
      <p className="mb-8 font-medium text-lg px-8 lg:px-0">Jesteśmy na rynku już od 25 lat, dzięki czemu doskonale wiemy czego potrzebuje klient.</p>
      <Link href="https://www.rozdzielnie-elektryczne.com.pl/" className="uppercase font-semibold py-3 px-8 border-2">Odwiedź nasz sklep</Link>
      </motion.div>
      ),
      url: 'hero.jpg'
    },
    {
      html: (
        <motion.div 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.35}}
        className="lg:pl-24 text-center lg:text-left z-10 px-6 lg:px-0 text-white">
        <h1 className="font-black uppercase text-2xl md:text-3xl lg:text-5xl px-6 lg:px-0 mb-4">Mamy w swojej ofercie szeroki zakres usług.</h1>
        <p className="mb-4 font-medium text-lg px-8 lg:px-0">Wejdź w zakładkę oferta, aby skorzystać z konfiguratora rozdzielnic.</p>
        <button className="uppercase font-semibold py-3 px-4 bg-red-500">Zobacz więcej</button>
        </motion.div>
        ),
      url: 'hero2.jpg'
    },
  ]

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="relative bg-white">
        <ImageSlider imageUrls={heroContent}/>
    </motion.section>
  )
}

export default Hero
