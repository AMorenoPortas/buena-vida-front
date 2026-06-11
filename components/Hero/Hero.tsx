"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3",
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      );
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div
        style={{
          background: "var(--color-bordo-dark)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 56px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          ref={tagRef}
          style={{
            opacity: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "1px",
              background: "var(--color-gold)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}
          >
            Vinoteca · Rock
          </span>
        </div>

        <h1
          ref={titleRef}
          style={{
            opacity: 0,
            fontFamily: "var(--font-title)",
            fontSize: "52px",
            fontWeight: 500,
            fontStyle: "italic",
            color: "var(--color-cream)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          Donde el vino
          <br />
          encuentra su{" "}
          <span style={{ color: "var(--color-gold)" }}>acorde</span>
        </h1>

        <p
          ref={subRef}
          style={{
            opacity: 0,
            fontSize: "15px",
            color: "var(--color-gold)",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Vinos seleccionados con la misma pasión
          <br />
          que se elige un disco. Para los que saben
          <br />
          lo que quieren.
        </p>

        <div ref={btnsRef} style={{ opacity: 0, display: "flex", gap: "14px" }}>
          <button
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
              (e.target as HTMLButtonElement).style.color = "var(--color-gold)";
              (e.target as HTMLButtonElement).style.border =
                "0.5px solid var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background =
                "var(--color-gold)";
              (e.target as HTMLButtonElement).style.color =
                "var(--color-bordo-dark)";
              (e.target as HTMLButtonElement).style.border = "none";
            }}
            style={{
              background: "var(--color-gold)",
              color: "var(--color-bordo-dark)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "13px 24px",
              borderRadius: "2px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Ver la colección
          </button>

          <button
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background =
                "var(--color-gold)";
              (e.target as HTMLButtonElement).style.color =
                "var(--color-bordo-dark)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
              (e.target as HTMLButtonElement).style.color = "var(--color-gold)";
            }}
            style={{
              background: "transparent",
              color: "var(--color-gold)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "13px 24px",
              borderRadius: "2px",
              border: "0.5px solid var(--color-gold)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Nuestra historia
          </button>
        </div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/rock-vinos.png"
          alt="Vinos y rock"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-bordo-dark) 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
