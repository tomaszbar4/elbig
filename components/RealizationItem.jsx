"use client"
import { motion } from "framer-motion"

export default function RealizationItem({heading, paragraph, image, reversed, rotate, }) {
  return (
    <motion.div 
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    transition={{delay: 0.25}}
    className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 border-b-2 border-gray-400 py-12`}>
      <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-center lg:p-6">
      <h3 className="font-bold uppercase text-lg md:text-2xl text-red-500">{heading}</h3>
      <p className="font-medium">{paragraph}</p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
      <img src={image} alt="Zdjęcie realizacji" className={`w-1/2 ${rotate && "rotate-1"}`} />
      </div>
    </motion.div>
  )
}
