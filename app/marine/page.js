'use client'

import HeroTitle from "@/app/components/marine/Hero";
import HeroCarrusel from "@/app/components/marine/HeroCarrusel";
import Header from "@/app/components/marine/Header";
import WhyUsTitle from "../components/marine/WhyUsTitle";
import WhyUsSection from "../components/marine/WhyUsSection";
import CardServices from "../components/marine/CardServices";


import { useEffect } from "react";
import Lenis from 'lenis'


export default function Home() {

/*   useEffect( () => {
    const lenis = new Lenis()
    window.scrollTo(0, 0);
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []) */

  return (
    <main className=" bg-marine-dark min-h-screen flex flex-col items-center text-white">
        <Header />
        <HeroTitle />
        <HeroCarrusel />
        <WhyUsTitle />
        <WhyUsSection />
        <CardServices />
      
      <section className="  bg-red-700 w-full h-svh z-10"></section>
      <section className="  bg-black w-full h-svh z-10"></section>
    </main>
  );
}
