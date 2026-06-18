import Navbar from "@/components/Navbar/Navbar";
import AccesosSection from "@/components/AccesosSection/AccesosSection";
import RepresentacionSection from "@/components/RepresentacionSection/RepresentacionSection";
import NuestroModelo from "@/components/NuestroModelo/NuestroModelo";
import MarcasCarrusel from "@/components/MarcasCarrusel/MarcasCarrusel";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="inicio"><AccesosSection /></section>
      <RepresentacionSection />
      <section id="nuestro-modelo"><NuestroModelo /></section>
      <section id="marcas"><MarcasCarrusel /></section>
      <section id="accesos"><Hero /></section>
      <Footer />
    </main>
  );
}