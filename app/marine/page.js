'use client'

import HeroTitle from "@/app/components/marine/Hero";
import HeroCarrusel from "@/app/components/marine/HeroCarrusel";
import Header from "@/app/components/marine/Header";
import WhyUsTitle from "../components/marine/WhyUsTitle";
import WhyUsSection from "../components/marine/WhyUsSection";
import Team from "../components/Team";


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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className=" bg-marine-dark min-h-screen flex flex-col items-center text-white">
        <Header />
        <HeroTitle />
        <HeroCarrusel />
        <WhyUsTitle />
        <WhyUsSection />
        <div className=" bg-marine-gray w-full flex justify-center">

        <Team />
        </div>
      
      <section className="  bg-red-700 w-full h-svh z-10"></section>
      <section className="  bg-black w-full h-svh z-10"></section>
    </main>
  );
}
