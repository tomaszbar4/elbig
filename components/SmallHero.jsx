import React from 'react'

export default function SmallHero({img, text}) {
  return (
    <section className="h-48 bg-black relative">
        <img src={img || "/contact.jpg"} alt="Hero image" className="w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
        <h2 className="text-white text-4xl font-bold p-6 text-center uppercase">{text}</h2>
        </div>
    </section>
  )
}
