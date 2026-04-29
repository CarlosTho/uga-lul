"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pillars", href: "/about#pillars" },
  { label: "Hermanos", href: "/hermanos" },
  { label: "Join", href: "/#join" },
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        padding: "48px 80px",
        borderTop: "1px solid rgba(238,170,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        background: "#1A0D06",
      }}
    >
      <div>
        <div
          className="font-serif-display"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#EEAA00",
            letterSpacing: 2,
          }}
        >
          ΛΥΛ — Beta Tau
        </div>
        <div style={{ fontSize: 11, color: "#8A6030", letterSpacing: 1 }}>
          University of Georgia
        </div>
      </div>

      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            style={{
              color: "#8A6030",
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#EEAA00")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#8A6030")
            }
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div style={{ fontSize: 12, color: "#653819", letterSpacing: 1 }}>
        © {new Date().getFullYear()} La Unidad Latina, ΛΥΛ
      </div>
    </footer>
  );
}
