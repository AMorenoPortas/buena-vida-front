"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestro Modelo", href: "#nuestro-modelo" },
  { label: "Marcas", href: "#marcas" },
  { label: "Accesos", href: "#accesos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.logo}>
        <Image
          src="/buenavida-logo.webp"
          alt="Buena Vida"
          width={90}
          height={90}
          style={{ objectFit: "contain" }}
        />
        <span className={styles.logoText}>Buena Vida State</span>
      </div>

      <div className={styles.links}>
        {links.map((item) => (
          <a key={item.label} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </div>

      <span onClick={() => router.push("/auth/login")} className={styles.cta}>
        Ingresar
      </span>
    </nav>
  );
}