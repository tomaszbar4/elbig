"use client"
import React, {useState, useEffect} from 'react'
import { CustomerReviews, Hero, Info, Services, Partners } from '@/components'

export default function Home() {

  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    function getWindowWidth() {
      return window.innerWidth
    }

    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <main>
        <Hero/>
        <Info/>
        <Services/>
        <CustomerReviews windowWidth={windowWidth}/>
        <Partners windowWidth={windowWidth}/>
    </main>
  )
}


