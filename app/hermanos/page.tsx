"use client";

import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import Particles from "@/components/particles";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', serif";
const BEBAS = "var(--font-bebas), 'Bebas Neue', sans-serif";

interface LineRecord {
  season: string;
  /** Optional factline, e.g. class firsts (no crossing dates) */
  note?: string;
  /** Plain names (sorted alphabetically when rendered) */
  hermanos: string[];
  /** Gold title + soft glow (e.g. upcoming line) */
  titleGold?: boolean;
}

const LINE_HISTORY: LineRecord[] = [
  {
    season: "Spring 2017 — Alpha Line",
    hermanos: [
      "Brian Noble",
      "Carlos Alberto Hernandez Jr.",
      "Ronaldo Reyes",
    ],
  },
  {
    season: "Spring 2018 — Beta Line",
    hermanos: ["Flavio Salgado-Avila", "Joshua Duarte", "Noel Gonzalez"],
  },
  {
    season: "Spring 2019 — Gamma Line",
    note: "first solo in BT history",
    hermanos: ["Michael Stone Jr."],
  },
  {
    season: "Spring 2021 — Delta Line",
    hermanos: [
      "Cesar Miguel Hernandez",
      "Michael Adrian Lira",
      "Richard Ramos Jr.",
    ],
  },
  {
    season: "Fall 2023 — Epsilon Line",
    note: "second solo in BT history",
    hermanos: ["Jason Steve Pineda"],
  },
  {
    season: "Spring 2024 — Zeta Line",
    hermanos: ["Eric Ezekiel Tovar", "Michael Garcia"],
  },
  {
    season: "Spring 2025 — Eta Line",
    note: "largest line in BT history",
    hermanos: [
      "Bryan Acevedo Sierra",
      "Carlos Cruz",
      "Ivan Mendoza",
      "Jose Luis Reyes",
      "Nathan Valles",
    ],
  },
  {
    season: "Spring 2026 — Theta Line",
    hermanos: ["Angelo Vallecillo", "Daniel Acosta", "Winston Chung"],
  },
  {
    season: "Upcoming… IOTA Line",
    hermanos: [],
    titleGold: true,
  },
];

function sortNamesAlpha(names: string[]): string[] {
  return [...names].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );
}

function PageHero() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="lul-hermanos-page-hero"
      style={{
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "140px clamp(16px, 5vw, 40px) 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #1A0D06 0%, #1A1408 50%, #1A0D06 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "50%",
          transform: "translateX(50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(238,170,0,0.10) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Particles count={14} />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -46%)",
          width: "min(100%, 100vw)",
          paddingLeft: 16,
          paddingRight: 16,
          boxSizing: "border-box",
          fontFamily: BEBAS,
          fontSize: "clamp(48px, 16vw, 220px)",
          letterSpacing: "clamp(0.04em, 1.4vw, 0.14em)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(238,170,0,0.16)",
          background:
            "linear-gradient(180deg, rgba(238,170,0,0.14) 0%, rgba(238,170,0,0.04) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        HERMANOS
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 800,
          width: "100%",
          paddingLeft: 12,
          paddingRight: 12,
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div
          className="lul-hermanos-hero-brotherhood-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "center",
            marginBottom: 24,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s ease forwards" : "none",
          }}
        >
          <div style={{ height: 1, width: 40, background: "#EEAA00" }} />
          <span
            style={{
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#EEAA00",
              fontWeight: 500,
            }}
          >
            Brotherhood
          </span>
          <div style={{ height: 1, width: 40, background: "#EEAA00" }} />
        </div>

        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(28px, 5.5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.12,
            color: "#FFFFFF",
            letterSpacing: -0.5,
            marginBottom: 0,
            opacity: visible ? 1 : 0,
            animation: visible ? "heroTextIn 0.9s 0.1s ease both" : "none",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            hyphens: "manual",
          }}
        >
          Our Brothers of the{" "}
          <em className="gold-shine" style={{ fontStyle: "normal" }}>Beta Tau</em>{" "}
          Chapter
        </h1>
      </div>
    </section>
  );
}

function CrossingHistory() {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      className="lul-hermanos-crossing-section"
      style={{ padding: "120px 80px" }}
    >
      <div ref={ref} style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          className="lul-hermanos-crossing-header"
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div
            className="lul-hermanos-brotherhood-pretitle"
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
            Brotherhood
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px, 4.6vw, 44px)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
              lineHeight: 1.15,
              paddingLeft: 8,
              paddingRight: 8,
              overflowWrap: "break-word",
            }}
          >
            Our Brothers of the{" "}
            <em style={{ color: "#EEAA00", fontStyle: "normal" }}>Beta Tau</em>{" "}
            Chapter
          </h2>
          <p
            className="lul-hermanos-crossing-sub"
            style={{
              marginTop: 16,
              marginBottom: 0,
              color: "#8A6030",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.65s 0.15s ease both" : "none",
            }}
          >
            Crossing history · Beta Tau
          </p>
        </div>

        <div
          className="lul-hermanos-crossing-lines"
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          {LINE_HISTORY.map((line, i) => {
            const names = sortNamesAlpha(line.hermanos);
            return (
              <div
                key={line.season}
                style={{
                  padding: "28px 28px 32px",
                  border: line.titleGold
                    ? "1px solid rgba(238,170,0,0.42)"
                    : "1px solid rgba(238,170,0,0.18)",
                  borderRadius: 4,
                  background: line.titleGold
                    ? "rgba(238,170,0,0.07)"
                    : "rgba(238,170,0,0.03)",
                  boxShadow: line.titleGold
                    ? "0 0 32px rgba(238, 170, 0, 0.14)"
                    : undefined,
                  opacity: visible ? 1 : 0,
                  animation: visible
                    ? `fadeUp 0.55s ${0.06 * i + 0.12}s ease both`
                    : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(22px,3vw,26px)",
                    fontWeight: 700,
                    color: line.titleGold ? "#EEAA00" : "#FFFFFF",
                    marginBottom: line.note
                      ? 8
                      : names.length > 0
                        ? 14
                        : 0,
                    lineHeight: 1.25,
                    textShadow: line.titleGold
                      ? "0 0 18px rgba(238, 170, 0, 0.85), 0 0 36px rgba(238, 170, 0, 0.45), 0 0 56px rgba(238, 170, 0, 0.22)"
                      : undefined,
                  }}
                >
                  {line.season}
                </h3>
                {line.note ? (
                  <p
                    style={{
                      color: "#C4A06A",
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: 0.3,
                      marginBottom: 16,
                    }}
                  >
                    ({line.note})
                  </p>
                ) : null}
                {names.length > 0 ? (
                  <ul
                    style={{
                      margin: 0,
                      padding: "4px 0 0",
                      listStyle: "none",
                    }}
                  >
                    {names.map((name) => (
                      <li
                        key={`${line.season}-${name}`}
                        style={{
                          color: "#E8DCC8",
                          fontSize: 16,
                          lineHeight: 1.85,
                          paddingLeft: 0,
                        }}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HermanosPage() {
  return (
    <div className="lul-site-root" style={{ background: "#1A0D06", minHeight: "100vh" }}>
      <SiteNavbar />
      <PageHero />
      <CrossingHistory />
      <SiteFooter />
    </div>
  );
}
