"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RepresentacionSection() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const statRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(tagRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: tagRef.current, start: "top 85%" }
      });
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
      });
      gsap.fromTo(subRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: subRef.current, start: "top 85%" }
      });
      gsap.fromTo(statRef.current, { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 0.8,
        scrollTrigger: { trigger: statRef.current, start: "top 85%" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: "var(--color-cream)",
      padding: "100px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    }}>
      <div>
        <div ref={tagRef} style={{ opacity: 0, display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--color-bordo)" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-bordo)" }}>
            Quiénes somos
          </span>
        </div>

        <h2 ref={titleRef} style={{
          opacity: 0,
          fontFamily: "var(--font-title)",
          fontSize: "40px",
          fontWeight: 500,
          fontStyle: "italic",
          color: "var(--color-bordo-dark)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: "20px",
        }}>
          Representación Comercial<br />
          <span style={{ color: "var(--color-bordo)" }}>Exclusiva</span> de Bodegas Argentinas
        </h2>

        <p ref={subRef} style={{
          opacity: 0,
          fontSize: "15px",
          color: "#7a4060",
          lineHeight: 1.8,
        }}>
          Llevamos la excelencia de las mejores marcas a AMBA y PBA con un modelo de gestión directa y eficiente.
        </p>
      </div>

      <div ref={statRef} style={{
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bordo-dark)",
        borderRadius: "4px",
        padding: "56px 40px",
        textAlign: "center",
      }}>
        <span style={{
          fontFamily: "var(--font-title)",
          fontSize: "72px",
          fontWeight: 500,
          fontStyle: "italic",
          color: "var(--color-gold)",
          lineHeight: 1,
          marginBottom: "8px",
        }}>
          +10
        </span>
        <span style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-cream)",
          opacity: 0.7,
        }}>
          años de excelencia
        </span>
      </div>
    </section>
  );
}