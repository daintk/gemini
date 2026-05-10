import { useRef } from "react";
// Ostatní importy přidej, až je vytvoříš. Zatím tu necháme jen Hero.
import { Hero } from "@/components/Hero";

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* <Navbar /> */}
      <main>
        <Hero scrollRef={heroRef} />
        {/*
        <ServicesBento />
        <Pourquoi />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <CtaFooter />
        */}
      </main>
    </div>
  );
}