'use client'

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from './components/AboutUs'
import HeroCarrusel from "./components/HeroCarrusel";
import Cases from "./components/Cases";
import { useEffect, useRef } from "react";
import Lenis from 'lenis'

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
    window.scrollTo(0, 0);
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
   
    requestAnimationFrame(raf)
  }, [])
  return (
    <main className=" bg-black min-h-screen flex flex-col items-center text-white">
      <Header />
      <Hero />
      <HeroCarrusel />
      <AboutUs />
      <Cases />
      <section className="  bg-black w-full h-svh z-10"></section>
    </main>
  );
}
