import React from 'react'

export default function Hamburger() {
  return (
    <div className="text-black flex flex-col gap-1 cursor-pointer md:hidden">
        <span className="block bg-gray-800 w-7 h-[0.25rem] rounded-full"></span>
        <span className="block bg-gray-800 w-7 h-[0.25rem] rounded-full"></span>
        <span className="block bg-gray-800 w-7 h-[0.25rem] rounded-full"></span>
    </div>
  )
}
