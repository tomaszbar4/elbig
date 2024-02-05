import React from 'react'
import Link from 'next/link'

export default function CheckInShopBtn({link}) {
  return (
    <Link href={link} className="mt-3 bg-red-500 text-white py-2 px-6 mr-auto font-semibold hover:bg-red-300 transition-all duration-200">Sprawdź w sklepie</Link>
  )
}
