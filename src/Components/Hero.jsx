import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../Utils'


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    }
    window.addEventListener('resize', handleResize)


    gsap.to('.hero-title', {
      opacity: 1,
      delay: 2,
    })
    gsap.to('.cta', {
      opacity: 1,
      y:-50,
      delay: 2,
    })
  

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section data-scroll className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title' aria-label="iPhone 15 pro">iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline key={videoSrc} className='pointed-events-none'>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
        <div className='cta flex flex-col items-center opacity-0 translate-y-20'>
          <a href="#highlights" className='btn'>Buy</a>
          <p className='font-normal para'>From $199/Month or $999</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
