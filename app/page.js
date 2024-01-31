"use client"
import React, {useState, useEffect} from 'react'
import { CustomerReviews, Hero, Info, Services, Partners } from '@/components'

export default function Home() {

  if(typeof window !== "undefined") {

  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  function getWindowWidth() {
    return window.innerWidth
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

}
  
  return (
    <main>
        <Hero/>
        <Info/>
        <Services/>
        <CustomerReviews windowWidth={windowWidth || undefined}/>
        <Partners windowWidth={windowWidth || undefined}/>
    </main>
  )
}


