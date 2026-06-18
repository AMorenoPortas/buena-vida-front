"use client";

import { useRouter } from "next/navigation";
import styles from "./AccesosSection.module.css";

const accesos = [
  {
    key: "owner",
    title: "Gestión Buena Vida",
    desc: "Control total de operaciones, métricas de ventas y gestión de portafolio.",
    link: "Ingresar",
    icon: "ti-chart-bar",
    featured: false,
  },
  {
    key: "winery",
    title: "Gestión Bodegas",
    desc: "Monitoreo de pedidos, stock en tiempo real y reportes de facturación.",
    link: "Ingresar",
    icon: "ti-building",
    featured: false,
  },
  {
    key: "seller",
    title: "Gestión Vendedor",
    desc: "Gestión de cartera de clientes, toma de pedidos y seguimiento de objetivos.",
    link: "Ingresar",
    icon: "ti-users",
    featured: false,
  },
  {
    key: "client",
    title: "Cliente Mayorista",
    desc: "Vinotecas y gastronomía. Realice sus pedidos directos a bodega de forma ágil.",
    link: "Tienda B2B",
    icon: "ti-crown",
    featured: true,
  },
];

export default function AccesosSection() {
  const router = useRouter();

  return (
    <section id="accesos" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>Plataforma</span>
          <span className={styles.tagLine} />
        </div>
        <h2 className={styles.title}>
          Acceso al <span className={styles.titleAccent}>Ecosistema</span>
        </h2>
        <p className={styles.sub}>Seleccioná tu perfil para ingresar a la plataforma</p>
      </div>

      <div className={styles.grid}>
        {accesos.map(item => (
          <div
            key={item.key}
            className={`${styles.card} ${item.featured ? styles.cardFeatured : ""}`}
            onClick={() => router.push(`/auth/login?role=${item.key}`)}
          >
            <div className={`${styles.iconWrapper} ${item.featured ? styles.iconWrapperFeatured : ""}`}>
              <i className={`ti ${item.icon} ${styles.icon} ${item.featured ? styles.iconFeatured : ""}`} aria-hidden="true" />
            </div>
            <div className={`${styles.cardTitle} ${item.featured ? styles.cardTitleFeatured : ""}`}>
              {item.title}
            </div>
            <div className={`${styles.cardDesc} ${item.featured ? styles.cardDescFeatured : ""}`}>
              {item.desc}
            </div>
            <div className={`${styles.cardLink} ${item.featured ? styles.cardLinkFeatured : ""}`}>
              {item.link} →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}