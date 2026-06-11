import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RepresentacionSection from "@/components/RepresentacionSection/RepresentacionSection";
import NuestroModelo from "@/components/NuestroModelo/NuestroModelo";
import MarcasCarrusel from "@/components/MarcasCarrusel/MarcasCarrusel";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RepresentacionSection />
      <NuestroModelo />
      <MarcasCarrusel />
    </main>
  );
}