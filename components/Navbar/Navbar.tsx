"use client";

export default function Navbar() {
  return (
    <nav style={{
      background: "var(--color-cream)",
      borderBottom: "0.5px solid var(--color-gold)",
      padding: "0 32px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <span style={{
        fontFamily: "var(--font-title)",
        fontSize: "25px",
        fontStyle: "italic",
        color: "var(--color-bordo-dark)",
        fontWeight: 500,
      }}>
        Buena Vida
      </span>

      <div style={{ display: "flex", gap: "28px" }}>
        {["Vinos", "Bodegas", "Nosotros"].map((item) => (
          <span key={item} style={{
            fontSize: "18px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-bordo)",
            cursor: "pointer",
          }}>
            {item}
          </span>
        ))}
      </div>

      <span style={{
        fontSize: "15px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-cream)",
        background: "var(--color-bordo)",
        padding: "8px 18px",
        borderRadius: "2px",
        cursor: "pointer",
      }}>
        Ingresar
      </span>
    </nav>
  );
}