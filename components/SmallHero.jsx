import React from 'react'

export default function SmallHero() {
  return (
    <section className="h-48 bg-black relative">
        <img src="/contact.jpg" alt="Contact image" className="w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
        <h2 className="text-white text-4xl font-bold">KONTAKT</h2>
        </div>
    </section>
  )
}
