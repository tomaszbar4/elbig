"use client"
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from 'framer-motion';

export default function ServiceItem({img, title, link, description, delay}) {
  return (
    <Link 
    href={`oferta/${link}`}>
    <motion.div 
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.25, delay: delay}}
    className="bg-white flex flex-col items-center text-gray-950 shadow-md cursor-pointer border-2 border-gray-300/50 hover:shadow-xl hover:border-b-2 group">
    <div className="h-56 p-8">
    <Image src={img} alt="Zdjęcie" width={150} height={150} className="p-6 w-full h-full transition-translate duration-200"/>
    </div>
    <div className="w-full p-6 h-60 flex flex-col border-t-[1px] gap-2 bg-gray-700 text-white justify-center group-hover:bg-gray-800 transition-all duration-200">
        <p className="transition-all duration-200 font-bold text-lg">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <button className="text-left mt-4 w-fit text-sm font-semibold flex items-center gap-1 hover:text-red-500 duration-200 transition-all group">Zobacz więcej
        <MdArrowRightAlt className="group-hover:translate-x-1 text-xl transition-transform duration-200"/>
        </button>
    </div>
    </motion.div>
    </Link>
  )
}
