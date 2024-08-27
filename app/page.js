import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCarrusel from "./components/HeroCarrusel";

export default function Home() {
  return (
    <main className="bg-cream-200 min-h-screen flex flex-col items-center">
      <Header />
      <Hero />
      <HeroCarrusel />
    </main>
  );
}
