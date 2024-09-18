'use client'

import HeroTitle from "@/app/components/marine/Hero";
import HeroCarrusel from "@/app/components/marine/HeroCarrusel";
import Header from "@/app/components/marine/Header";

import { useEffect } from "react";
import Lenis from 'lenis'


import { useState } from "react";


export default function Home() {

  const [cursor, setCursor] = useState({active: false, part: 'default' })

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
    <main className=" bg-marine-dark min-h-screen flex flex-col items-center text-white">
        <Header />
        <HeroTitle />
        <HeroCarrusel />
      <section className="  bg-red-700 w-full h-svh z-10"></section>
      <section className="  bg-black w-full h-svh z-10"></section>
    </main>
  );
}
