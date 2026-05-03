"use client";

import { useEffect, useRef, useState } from "react";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import Particles from "@/components/particles";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import Image from "next/image";

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', serif";
const BEBAS = "var(--font-bebas), 'Bebas Neue', sans-serif";

// ── Hero ─────────────────────────────────────────────────────────
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [heroScrollT, setHeroScrollT] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const update = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const denom = Math.max(rect.height * 0.72, 1);
      const t = Math.min(1, Math.max(0, -rect.top / denom));
      setHeroScrollT(t);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const parallaxMul = reducedMotion ? 0.22 : 1;
  const orbFloat = heroScrollT * 42 * parallaxMul;
  const orbFloat2 = heroScrollT * -26 * parallaxMul;

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        overflowClipMargin: 0,
        paddingTop: narrow
          ? "calc(76px + env(safe-area-inset-top, 0px))"
          : "env(safe-area-inset-top, 0px)",
        paddingBottom: narrow
          ? "max(24px, env(safe-area-inset-bottom, 0px))"
          : "max(32px, env(safe-area-inset-bottom, 0px))",
        paddingLeft:
          "max(clamp(16px, 5vw, 40px), env(safe-area-inset-left, 0px))",
        paddingRight:
          "max(clamp(16px, 5vw, 40px), env(safe-area-inset-right, 0px))",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #1A0D06 0%, #1A1408 50%, #1A0D06 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "50%",
          transform: `translateX(50%) translateY(${orbFloat}px)`,
          width: narrow ? "min(96vw, 380px)" : 600,
          height: narrow ? "min(96vw, 380px)" : 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(238,170,0,0.12) 0%, transparent 70%)",
          zIndex: 0,
          animation: reducedMotion ? "none" : "float 6s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: narrow ? "-24%" : "-100px",
          width: narrow ? "min(88vw, 320px)" : 400,
          height: narrow ? "min(88vw, 320px)" : 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(238,170,0,0.06) 0%, transparent 70%)",
          zIndex: 0,
          transform: `translateY(${orbFloat2}px)`,
          willChange: "transform",
        }}
      />

      <Particles count={20} />

<div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <span
          className="hero-elite-bg"
          style={{
            fontFamily: BEBAS,
            fontSize: narrow
              ? "clamp(120px, 40vw, 240px)"
              : "clamp(180px, 28vw, 400px)",
            color: "#EEAA00",
            whiteSpace: "nowrap",
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          ELITE
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 800,
          minWidth: 0,
          marginInline: "auto",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: narrow ? 10 : 16,
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            marginTop: narrow ? 40 : 160,
            marginBottom: 24,
            opacity: titleVisible ? 1 : 0,
            animation: titleVisible ? "fadeUp 0.7s ease forwards" : "none",
          }}
        >
          <div
            style={{
              height: 1,
              width: narrow ? 24 : 40,
              background: "#EEAA00",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: narrow ? 13 : 12,
              letterSpacing: narrow ? 2.5 : 4,
              textTransform: "uppercase",
              color: "#EEAA00",
              fontWeight: 500,
              textAlign: "center",
              maxWidth: "100%",
            }}
          >
            Est. 2017 · University of Georgia
          </span>
          <div
            style={{
              height: 1,
              width: narrow ? 24 : 40,
              background: "#EEAA00",
              flexShrink: 0,
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            opacity: titleVisible ? 1 : 0,
            animation: titleVisible ? "heroTextIn 0.9s 0.1s ease both" : "none",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: narrow
                ? "clamp(20px, 5.4vw, 24px)"
                : "clamp(16px, 2vw, 18px)",
              fontStyle: "italic",
              color: "#EEAA00",
              fontWeight: 400,
              letterSpacing: narrow ? 1.5 : 2,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            The <span className="gold-shine">Beta Tau</span> Chapter of
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px,5.5vw,82px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: -1,
              margin: "0 0 8px",
              padding: 0,
              textAlign: "center",
            }}
          >
            La Unidad Latina,
          </h1>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(28px, 4.2vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -0.5,
              margin: "0 0 32px",
              padding: 0,
              textAlign: "center",
              background: `linear-gradient(90deg, #EEAA00, #FFD040, #EEAA00)`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
              maxWidth: "min(900px, 100%)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lambda Upsilon Lambda Fraternity, Inc.
          </h1>
        </div>

        <p
          style={{
            color: "#D4B88A",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 560,
            width: "100%",
            margin: "0 auto 40px",
            padding: 0,
            textAlign: "center",
            opacity: titleVisible ? 1 : 0,
            animation: titleVisible ? "fadeUp 0.8s 0.4s ease both" : "none",
          }}
        >
          A Latino-based fraternity built on four pillars:{" "}
          <strong>Academics</strong>, <strong>Brotherhood</strong>,{" "}
          <strong>Culture</strong>, and <strong>Service</strong>.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            opacity: titleVisible ? 1 : 0,
            animation: titleVisible ? "fadeUp 0.8s 0.6s ease both" : "none",
          }}
        >
          <a
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              background:
                "linear-gradient(180deg, #FFE9A0 0%, #FFC83D 22%, #E89A00 55%, #B97200 100%)",
              color: "#3A1F00",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
              borderRadius: 4,
              border: "1px solid #8C5A00",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(120,70,0,0.55), 0 4px 14px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,225,140,0.4)",
              textShadow: "0 1px 0 rgba(255,235,170,0.6)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background =
                "linear-gradient(180deg, #FFF6CC 0%, #FFD75A 22%, #F1A700 55%, #C57E00 100%)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(120,70,0,0.6), 0 14px 36px rgba(238,170,0,0.45), 0 0 0 1px rgba(255,235,160,0.55)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background =
                "linear-gradient(180deg, #FFE9A0 0%, #FFC83D 22%, #E89A00 55%, #B97200 100%)";
              el.style.transform = "none";
              el.style.boxShadow =
                "inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(120,70,0,0.55), 0 4px 14px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,225,140,0.4)";
            }}
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────
function About() {
  const [ref, visible] = useScrollReveal();
  /** Own observer so the slide runs when the photo is actually in view (grid fires too early on mobile). */
  const [photoRef, photoVisible] = useScrollReveal(0.05);
  const reducedMotion = usePrefersReducedMotion();
  const aboutPhotoAnim = reducedMotion
    ? "fadeUp 0.75s 0.2s ease both"
    : "lulAboutPhotoSideIn 0.85s 0.12s cubic-bezier(0.22, 1, 0.36, 1) both";

  return (
    <section
      id="about"
      className="lul-about-section"
      style={{
        padding: "clamp(64px, 12vw, 120px) clamp(16px, 5vw, 80px)",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        className="lul-about-gradient"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          maxWidth: "100%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(238,170,0,0.04), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.35fr)",
          gap: "clamp(28px, 5vw, 56px)",
          alignItems: "center",
        }}
        className="lul-about-grid"
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#EEAA00",
              marginBottom: 20,
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.6s ease both" : "none",
            }}
          >
            Who We Are
          </div>
          <h2
            className="lul-about-headline"
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(28px, 7.2vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#FFFFFF",
              marginBottom: 28,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
            }}
          >
            Brotherhood Rooted
            <br />
            <em style={{ color: "#EEAA00" }}>in Culture</em>
          </h2>
          <div
            style={{
              width: 60,
              height: 2,
              background: "#EEAA00",
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              animation: visible ? "lineGrow 0.8s 0.2s ease both" : "none",
              transformOrigin: "left",
            }}
          />
          <p
            className="lul-about-copy"
            style={{
              color: "#D4B88A",
              fontSize: "clamp(15px, 3.6vw, 16px)",
              lineHeight: 1.75,
              marginBottom: 20,
              overflowWrap: "break-word",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.3s ease both" : "none",
            }}
          >
            La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc. was founded
            in{" "}
            <strong style={{ color: "#FFD040" }}>
              1982 at Cornell University
            </strong>{" "}
            with a singular mission: to provide Latino men and their allies a
            brotherhood that uplifts, empowers, and unites.
          </p>
          <p
            className="lul-about-copy"
            style={{
              color: "#D4B88A",
              fontSize: "clamp(15px, 3.6vw, 16px)",
              lineHeight: 1.75,
              marginBottom: 20,
              overflowWrap: "break-word",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.35s ease both" : "none",
            }}
          >
            Nationwide, the fraternity includes{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>85</strong>{" "}
            active undergraduate chapters and is chartered at all{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>
              8 Ivy League
            </strong>{" "}
            universities.
          </p>
          <p
            className="lul-about-copy"
            style={{
              color: "#D4B88A",
              fontSize: "clamp(15px, 3.6vw, 16px)",
              lineHeight: 1.75,
              overflowWrap: "break-word",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.45s ease both" : "none",
            }}
          >
            The Beta Tau Chapter carries that legacy forward, building leaders
            who serve their communities with pride, integrity, and purpose.
          </p>
        </div>

        <div
          ref={photoRef}
          className="lul-about-photo-wrap"
          style={{
            minWidth: 0,
            opacity: photoVisible ? undefined : 0,
            transform: photoVisible
              ? undefined
              : "translate3d(64px, 0, 0)",
            animation: photoVisible ? aboutPhotoAnim : "none",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(238,170,0,0.25)",
              borderRadius: 4,
              padding: "clamp(16px, 4vw, 28px)",
              position: "relative",
              background: "rgba(238,170,0,0.03)",
              animation: "borderGlow 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 11",
                minHeight: "clamp(200px, 48vw, 280px)",
                borderRadius: 4,
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 30% 20%, rgba(238,170,0,0.10), transparent 55%)",
              }}
            >
              <Image
                src="/lul-group-pic.png"
                alt="La Unidad Latina — group photo"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 680px"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.0) 55%, rgba(26,13,6,0.85) 100%)",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 40,
                height: 40,
                borderRight: "2px solid rgba(238,170,0,0.4)",
                borderBottom: "2px solid rgba(238,170,0,0.4)",
                borderRadius: "0 0 4px 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 40,
                height: 40,
                borderLeft: "2px solid rgba(238,170,0,0.4)",
                borderTop: "2px solid rgba(238,170,0,0.4)",
                borderRadius: "4px 0 0 0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Hermanos (landing): matches /hermanos undergrad roster · Eta → Theta ──
const LANDING_BROTHERS = [
  { name: "Nathan Valles", initial: "NV", role: "Brother", year: "Undergrad", line: "Eta" },
  { name: "Ivan Mendoza", initial: "IM", role: "Brother", year: "Undergrad", line: "Eta" },
  { name: "Carlos Cruz", initial: "CC", role: "Brother", year: "Undergrad", line: "Eta" },
  { name: "Bryan Acevedo Sierra", initial: "BS", role: "Brother", year: "Undergrad", line: "Eta" },
  { name: "JoseLuis Reyes", initial: "JR", role: "Brother", year: "Undergrad", line: "Eta" },
  { name: "Angelo Vallecillo", initial: "AV", role: "Brother", year: "Undergrad", line: "Theta" },
  { name: "Daniel Acosta", initial: "DA", role: "Brother", year: "Undergrad", line: "Theta" },
  { name: "Winston Chung", initial: "WC", role: "Brother", year: "Undergrad", line: "Theta" },
] as const;

type LandingBrother = {
  readonly name: string;
  readonly initial: string;
  readonly role: string;
  readonly year: string;
  readonly line: string;
};

function LandingHermanosCard({
  b,
  index,
  hovered,
  setHovered,
  visible,
}: {
  b: LandingBrother;
  index: number;
  hovered: number | null;
  setHovered: (n: number | null) => void;
  visible: boolean;
}) {
  return (
    <div
      className="lul-landing-brother-card"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(238,170,0,0.15)",
        borderRadius: 4,
        padding: "40px 32px",
        cursor: "pointer",
        transition: "all 0.4s",
        background:
          hovered === index ? "rgba(238,170,0,0.05)" : "transparent",
        transform: hovered === index ? "translateY(-4px)" : "none",
        boxShadow:
          hovered === index ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
        opacity: visible ? 1 : 0,
        animation: visible
          ? `fadeUp 0.6s ${0.08 * index + 0.2}s ease both`
          : "none",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(238,170,0,0.3), rgba(238,170,0,0.1))",
          border: "1px solid rgba(238,170,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          fontFamily: SERIF,
          fontSize: 22,
          fontWeight: 700,
          color: "#EEAA00",
        }}
      >
        {b.initial}
      </div>

      <div
        style={{
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#EEAA00",
          marginBottom: 8,
        }}
      >
        {b.role}
      </div>
      <h3
        style={{
          fontFamily: SERIF,
          fontSize: 24,
          fontWeight: 600,
          color: "#FFFFFF",
          marginBottom: 4,
        }}
      >
        {b.name}
      </h3>
      <div style={{ fontSize: 13, color: "#8A6030", marginBottom: 6 }}>{b.year}</div>
      <div
        style={{
          display: "inline-block",
          fontSize: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#EEAA00",
          border: "1px solid rgba(238,170,0,0.4)",
          borderRadius: 999,
          padding: "3px 10px",
        }}
      >
        {b.line} Line
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #EEAA00, transparent)",
          opacity: hovered === index ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );
}

function Hermanos() {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="hermanos" style={{ padding: "120px 80px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="lul-hermanos-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
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
              Current brothers
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(26px, 3.6vw, 48px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.12,
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
                maxWidth: 720,
              }}
            >
              Our Brothers of the{" "}
              <em className="gold-shine" style={{ fontStyle: "normal" }}>Beta Tau</em>{" "}
              Chapter
            </h2>
          </div>
          <a
            href="/hermanos"
            className="lul-view-all-btn"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.6s 0.2s ease both" : "none",
            }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div
          className="lul-hermanos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {LANDING_BROTHERS.map((b, i) => (
            <LandingHermanosCard
              key={b.name}
              b={b}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Timeline ─────────────────────────────────────────────────────
function Timeline() {
  const [ref, visible] = useScrollReveal();
  const events = [
    { year: "1982", title: "Founded", desc: "Lambda Upsilon Lambda established at Cornell University." },
    { year: "2017", title: "Beta Tau Chartered", desc: "The Beta Tau Chapter opens its doors at the University of Georgia, founded by Brian Noble, Ronaldo Reyes, and Carlos Alberto Hernandez Jr." },
    { year: "2025", title: "Community Impact", desc: "Partnered with U-Lead Athens to advance equal access to higher education." },
  ];

  return (
    <section
      className="lul-timeline-section"
      style={{ padding: "120px 80px", background: "rgba(255,255,255,0.01)" }}
    >
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          className="lul-timeline-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div style={{ textAlign: "left", minWidth: 0 }}>
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
              Current brothers
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(28px, 4vw, 58px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.12,
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
                maxWidth: 560,
              }}
            >
              A Legacy in Time
            </h2>
          </div>
          <a
            href="/about"
            className="lul-view-all-btn"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.6s 0.2s ease both" : "none",
            }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="lul-timeline-track" style={{ position: "relative" }}>
          <div
            className="lul-timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, transparent, rgba(238,170,0,0.4), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {events.map((e, i) => (
            <div
              key={e.year}
              className="lul-timeline-row"
              style={{
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                gap: "clamp(6px, 2.5vw, 48px)",
                marginBottom: "clamp(22px, 5vw, 48px)",
                alignItems: "center",
                opacity: visible ? 1 : 0,
                animation: visible
                  ? `fadeUp 0.6s ${0.12 * i + 0.2}s ease both`
                  : "none",
              }}
            >
              <div
                className="lul-timeline-card"
                style={{
                  flex: 1,
                  textAlign: i % 2 === 0 ? "right" : "left",
                  padding:
                    "clamp(10px, 2.2vw, 28px) clamp(8px, 2.8vw, 32px)",
                  border: "1px solid rgba(238,170,0,0.15)",
                  borderRadius: 4,
                  background: "rgba(238,170,0,0.02)",
                  position: "relative",
                  minWidth: 0,
                }}
              >
                <div
                  className="lul-timeline-year"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(22px, 6vw, 40px)",
                    fontWeight: 700,
                    color: "rgba(238,170,0,0.2)",
                    lineHeight: 1,
                  }}
                >
                  {e.year}
                </div>
                <h3
                  className="lul-timeline-title"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(15px, 3.8vw, 22px)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "clamp(4px, 1.2vw, 8px) 0",
                  }}
                >
                  {e.title}
                </h3>
                <p
                  className="lul-timeline-desc"
                  style={{
                    fontSize: "clamp(11px, 2.8vw, 14px)",
                    color: "#C4A06A",
                    lineHeight: 1.65,
                  }}
                >
                  {e.desc}
                </p>
              </div>
              <div
                className="lul-timeline-dot"
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#EEAA00",
                  flexShrink: 0,
                  boxShadow: "0 0 20px rgba(238,170,0,0.5)",
                }}
              />
              <div className="lul-timeline-spacer" style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Join ─────────────────────────────────────────────────────────
function Join() {
  const [ref, visible] = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="join"
      className="lul-join-section"
      style={{ padding: "120px 80px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(238,170,0,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(238,170,0,0.4), transparent)",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(36px,4vw,64px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#FFFFFF",
            marginBottom: 20,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
          }}
        >
          Want to become{" "}
          <span
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "1.2em",
              lineHeight: 1.15,
              color: "#FFD040",
              letterSpacing: "-0.02em",
              display: "inline-block",
              verticalAlign: "baseline",
              textShadow: "0 0 48px rgba(238, 170, 0, 0.18)",
            }}
          >
            ELITE?
          </span>
        </h2>
        <p
          style={{
            color: "#C4A06A",
            fontSize: 17,
            lineHeight: 1.8,
            marginBottom: 48,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.2s ease both" : "none",
          }}
        >
          If you&rsquo;d like to learn more about joining, leave your email below
          and we&rsquo;ll reach out.
        </p>

        {!submitted ? (
          <div
            className="lul-join-email-row"
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 460,
              margin: "0 auto",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.3s ease both" : "none",
            }}
          >
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "16px 24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(238,170,0,0.3)",
                borderRight: "none",
                color: "#FFFFFF",
                fontSize: 15,
                outline: "none",
                borderRadius: "2px 0 0 2px",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={() => {
                if (email) setSubmitted(true);
              }}
              style={{
                padding: "16px 32px",
                background: "#EEAA00",
                border: "none",
                cursor: "pointer",
                color: "#1A0D06",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                borderRadius: "0 2px 2px 0",
                transition: "all 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FFD040")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#EEAA00")
              }
            >
              Send
            </button>
          </div>
        ) : (
          <div
            style={{
              padding: "24px 40px",
              border: "1px solid rgba(238,170,0,0.3)",
              borderRadius: 4,
              background: "rgba(238,170,0,0.05)",
              color: "#EEAA00",
              fontSize: 15,
              fontFamily: SERIF,
              fontStyle: "italic",
              animation: "fadeUp 0.5s ease both",
            }}
          >
            ¡Bienvenido, hermano! We&rsquo;ll be in touch soon.
          </div>
        )}

        <p
          style={{
            marginTop: 36,
            marginBottom: 0,
            textAlign: "center",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "lowercase",
            color: "#C4A06A",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.55s 0.48s ease both" : "none",
          }}
        >
          siempz - lul
        </p>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "hermanos", "join"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="lul-site-root" style={{ background: "#1A0D06", minHeight: "100vh" }}>
      <SiteNavbar activeSection={activeSection} />
      <Hero />
      <About />
      <Hermanos />
      <Timeline />
      <Join />
      <SiteFooter />
    </div>
  );
}
