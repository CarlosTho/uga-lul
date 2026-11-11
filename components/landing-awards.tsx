"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', serif";

interface Award {
  /** Who presented the award, e.g. MGC */
  from: string;
  title: string;
  /** Optional event or hermano the award recognizes */
  detail?: string;
}

const AWARDS_YEAR = "2026";

const AWARDS: Award[] = [
  { from: "MGC", title: "Chapter of the Year", detail: "2025-2026" },
  {
    from: "MGC",
    title: "Event of the Year",
    detail: "Puerto Rican Discussion Panel",
  },
  {
    from: "UGA NAACP",
    title: "Sapphire Outstanding Community Advocacy Group Award",
  },
  {
    from: "National Board",
    title: "National Neophyte Hermano of the Year",
    detail: "Ivan Mendoza",
  },
  {
    from: "National Board",
    title: "Regional Hermano Excellence",
    detail: "Michael Stone Jr.",
  },
  {
    from: "National Board",
    title: "Nominated for Chapter of the Year",
  },
];

function AwardCard({ award, index, visible }: {
  award: Award;
  index: number;
  visible: boolean;
}) {
  return (
    <li
      style={{
        listStyle: "none",
        padding: "clamp(20px, 4vw, 28px) clamp(18px, 3.5vw, 26px)",
        border: "1px solid rgba(238,170,0,0.15)",
        borderRadius: 4,
        background: "rgba(238,170,0,0.02)",
        minWidth: 0,
        opacity: visible ? 1 : 0,
        animation: visible
          ? `fadeUp 0.6s ${0.08 * index + 0.2}s ease both`
          : "none",
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#EEAA00",
          marginBottom: 12,
        }}
      >
        {award.from}
      </div>
      <h3
        style={{
          fontFamily: SERIF,
          fontSize: "clamp(18px, 4.2vw, 22px)",
          fontWeight: 600,
          color: "#FFFFFF",
          lineHeight: 1.25,
          overflowWrap: "break-word",
        }}
      >
        {award.title}
      </h3>
      {award.detail && (
        <p
          style={{
            marginTop: 8,
            fontSize: "clamp(13px, 3.2vw, 14px)",
            color: "#C4A06A",
            lineHeight: 1.6,
          }}
        >
          {award.detail}
        </p>
      )}
    </li>
  );
}

export default function LandingAwards() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="awards" style={{ padding: "120px 80px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#EEAA00",
            marginBottom: 16,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.6s ease both" : "none",
          }}
        >
          Recognition
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(28px, 4vw, 58px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.12,
            marginBottom: 48,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
          }}
        >
          {AWARDS_YEAR} <em style={{ color: "#EEAA00" }}>Awards</em>
        </h2>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(14px, 2.5vw, 24px)",
            margin: 0,
            padding: 0,
          }}
        >
          {AWARDS.map((award, i) => (
            <AwardCard
              key={award.title}
              award={award}
              index={i}
              visible={visible}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
