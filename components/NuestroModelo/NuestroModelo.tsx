"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function NuestroModelo() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0, x: -80 }, {
        opacity: 1, x: 0, duration: 1,
        scrollTrigger: { trigger: imgRef.current, start: "top 85%" }
      });
      gsap.fromTo(rightRef.current, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.9,
        scrollTrigger: { trigger: rightRef.current, start: "top 85%" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bullets = [
    "Facturación directa desde bodega",
    "Gestión logística optimizada",
    "Posicionamiento de marca premium",
  ];

  return (
    <section ref={sectionRef} style={{
      background: "var(--color-bordo-dark)",
      padding: "100px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    }}>
      <div ref={imgRef} style={{ opacity: 0, position: "relative", width: "100%", height: "100%", minHeight: "500px", borderRadius: "4px", overflow: "hidden" }}>
        <Image
          src="/rock-vinos-2.png"
          alt="Nuestro modelo"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, var(--color-bordo-dark) 0%, transparent 60%)",
        }} />
      </div>

      <div ref={rightRef} style={{ opacity: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--color-gold)" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
            Nuestro modelo
          </span>
        </div>

        <h2 style={{
          fontFamily: "var(--font-title)",
          fontSize: "38px",
          fontWeight: 500,
          fontStyle: "italic",
          color: "var(--color-cream)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: "24px",
        }}>
          Más que representante,<br />
          <span style={{ color: "var(--color-gold)" }}>somos su socio estratégico.</span>
        </h2>

        <p style={{
          fontSize: "15px",
          color: "var(--color-cream)",
          lineHeight: 1.8,
          marginBottom: "16px",
          opacity: 0.85,
        }}>
          Buena Vida no opera bajo el esquema tradicional de distribución. Actuamos como el brazo comercial exclusivo, vendiendo por cuenta y orden de marcas de prestigio.
        </p>
        <p style={{
          fontSize: "15px",
          color: "var(--color-cream)",
          lineHeight: 1.8,
          marginBottom: "36px",
          opacity: 0.85,
        }}>
          Nuestra misión es conectar la pasión de las bodegas con los puntos de venta más exigentes de Buenos Aires, garantizando integridad en la cadena de valor y excelencia en el servicio.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {bullets.map((bullet) => (
            <div key={bullet} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-gold)",
                }} />
              </span>
              <span style={{ fontSize: "14px", color: "var(--color-cream)", opacity: 0.85 }}>
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}