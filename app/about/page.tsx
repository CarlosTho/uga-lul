"use client";

import { useState } from "react";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import Particles from "@/components/particles";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', serif";
const BEBAS = "var(--font-bebas), 'Bebas Neue', sans-serif";

interface Pillar {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

const PILLARS: Pillar[] = [
  {
    num: "01",
    icon: "📚",
    title: "Academics",
    desc: "We are committed to scholarship and intellectual growth, supporting students through our national PATHE initiative and holding ourselves to the highest academic standards.",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Brotherhood",
    desc: "We cultivate unity, accountability, and lifelong bonds — supporting one another as brothers on campus and beyond.",
  },
  {
    num: "03",
    icon: "🌎",
    title: "Culture",
    desc: "We celebrate diversity and foster cultural awareness — promoting understanding, inclusion, and pride in Latino heritage both on campus and beyond.",
  },
  {
    num: "04",
    icon: "🫱🏽‍🫲🏽",
    title: "Service",
    desc: "We work alongside organizations like U-Lead Athens to uplift underrepresented communities and create lasting positive impact through service, mentorship, and outreach.",
  },
];

interface QuickFact {
  label: string;
  value: string;
  italic?: boolean;
}

const QUICK_FACTS: QuickFact[] = [
  { label: "Founded", value: "February 19, 1982 — Cornell University" },
  { label: "Beta Tau Chartered", value: "2017 — University of Georgia" },
  { label: "Colors", value: "Brown, Gold, Red, White" },
  { label: "Motto", value: "La Unidad Para Siempre", italic: true },
];

function PageHero() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "140px 40px 60px",
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
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: BEBAS,
          fontSize: "clamp(100px, 18vw, 240px)",
          letterSpacing: "0.2em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(238,170,0,0.08)",
          background:
            "linear-gradient(180deg, rgba(238,170,0,0.07) 0%, rgba(238,170,0,0.01) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        ABOUT
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        <div
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
            Who We Are
          </span>
          <div style={{ height: 1, width: 40, background: "#EEAA00" }} />
        </div>

        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(40px,5vw,72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#FFFFFF",
            letterSpacing: -1,
            marginBottom: 24,
            opacity: visible ? 1 : 0,
            animation: visible ? "heroTextIn 0.9s 0.1s ease both" : "none",
          }}
        >
          About <em style={{ color: "#EEAA00" }}>Beta Tau</em>
        </h1>

        <p
          style={{
            color: "#D4B88A",
            fontSize: 17,
            lineHeight: 1.8,
            maxWidth: 620,
            margin: "0 auto",
            fontFamily: SERIF,
            fontStyle: "italic",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.8s 0.4s ease both" : "none",
          }}
        >
          A small group of dedicated men can achieve what others deem
          impossible. This is our philosophy, our purpose, our pact.
        </p>
      </div>
    </section>
  );
}

function Philosophy() {
  const [ref, visible] = useScrollReveal();
  return (
    <section style={{ padding: "100px 80px", position: "relative" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          Our Mindset
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 32,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
          }}
        >
          Philosophy
        </h2>
        <div
          style={{
            width: 60,
            height: 2,
            background: "#EEAA00",
            margin: "0 auto 32px",
            opacity: visible ? 1 : 0,
            animation: visible ? "lineGrow 0.8s 0.2s ease both" : "none",
          }}
        />
        <p
          style={{
            color: "#D4B88A",
            fontSize: 18,
            lineHeight: 1.9,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.3s ease both" : "none",
          }}
        >
          We believe in defining our own path and shaping our own destiny. What
          sets us apart is not just our drive to succeed but our commitment to
          inspire greatness in one another. Through relentless work ethic and
          shared purpose, we prove that a small group of dedicated men can
          achieve what others deem{" "}
          <strong style={{ color: "#FFD040" }}>impossible</strong>.
        </p>
      </div>
    </section>
  );
}

function PillarsSection() {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section
      id="pillars"
      style={{
        padding: "120px 80px",
        background: "linear-gradient(180deg, #1A0D06 0%, #100D08 100%)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Our Foundation
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(36px,4vw,58px)",
              fontWeight: 700,
              color: "#FFFFFF",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
            }}
          >
            The Four Pillars
          </h2>
          <p
            style={{
              color: "#C4A06A",
              fontSize: 16,
              marginTop: 16,
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.2s ease both" : "none",
            }}
          >
            These pillars guide our mission and define our success.
          </p>
        </div>

        <div
          className="lul-pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 2,
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              onClick={() => setActive(i)}
              style={{
                cursor: "pointer",
                padding: "48px 32px",
                background:
                  active === i
                    ? "rgba(238,170,0,0.1)"
                    : "rgba(255,255,255,0.02)",
                borderTop:
                  active === i
                    ? "2px solid #EEAA00"
                    : "2px solid rgba(238,170,0,0.15)",
                transition: "all 0.4s",
                opacity: visible ? 1 : 0,
                animation: visible
                  ? `fadeUp 0.6s ${0.1 * i + 0.2}s ease both`
                  : "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 64,
                  fontWeight: 700,
                  color:
                    active === i
                      ? "rgba(238,170,0,0.15)"
                      : "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  marginBottom: 24,
                  transition: "color 0.3s",
                }}
              >
                {p.num}
              </div>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 22,
                  fontWeight: 600,
                  color: active === i ? "#FFFFFF" : "#D4B88A",
                  marginBottom: 16,
                  lineHeight: 1.3,
                  transition: "color 0.3s",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: active === i ? "#A89878" : "#8A6030",
                  transition: "color 0.4s",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ULead() {
  const [ref, visible] = useScrollReveal();
  return (
    <section style={{ padding: "120px 80px", position: "relative" }}>
      <div
        ref={ref}
        className="lul-about-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s ease both" : "none",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#EEAA00",
              marginBottom: 20,
            }}
          >
            Community Partnership
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(32px,3.5vw,48px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            U-Lead <em style={{ color: "#EEAA00" }}>Athens</em>
          </h2>
          <a
            href="https://uleadathens.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#EEAA00",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 24,
              borderBottom: "1px solid rgba(238,170,0,0.4)",
              paddingBottom: 2,
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#EEAA00")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "rgba(238,170,0,0.4)")
            }
          >
            uleadathens.com →
          </a>
          <p style={{ color: "#D4B88A", fontSize: 16, lineHeight: 1.9, marginBottom: 16 }}>
            We are proud to support and collaborate with U-Lead Athens, an
            organization dedicated to ensuring equal access to higher education
            for all students, regardless of immigration status.
          </p>
          <p style={{ color: "#D4B88A", fontSize: 16, lineHeight: 1.9 }}>
            Through mentorship, tutoring, and community engagement, we work
            alongside U-Lead Athens to empower local high school students to
            pursue their academic goals and overcome barriers to success.
          </p>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.8s 0.3s ease both" : "none",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(238,170,0,0.25)",
              borderRadius: 4,
              padding: 48,
              position: "relative",
              background: "rgba(238,170,0,0.03)",
              animation: "borderGlow 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -24,
                left: 40,
                fontFamily: SERIF,
                fontSize: 100,
                color: "#EEAA00",
                lineHeight: 1,
                opacity: 0.4,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 24,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1.6,
                marginTop: 20,
                marginBottom: 24,
              }}
            >
              Together, we strive to create lasting opportunities that reflect
              our shared values of equality, education, and empowerment.
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(238,170,0,0.2)",
                paddingTop: 20,
                fontSize: 13,
                color: "#EEAA00",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Beta Tau × U-Lead Athens
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundingHistory() {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      style={{
        padding: "120px 80px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(238,170,0,0.08)",
        borderBottom: "1px solid rgba(238,170,0,0.08)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Our Beginning
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 700,
              color: "#FFFFFF",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
            }}
          >
            Founding History
          </h2>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 0.7s 0.3s ease both" : "none",
          }}
        >
          <p style={{ color: "#D4B88A", fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
            La Unidad Latina, Lambda Upsilon Lambda Fraternity, Incorporated was
            established at{" "}
            <strong style={{ color: "#FFD040" }}>
              Cornell University on February 19, 1982
            </strong>
            .
          </p>
          <p style={{ color: "#D4B88A", fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
            The Beta Tau Chapter was founded at the{" "}
            <strong style={{ color: "#FFD040" }}>
              University of Georgia in 2017
            </strong>{" "}
            by three founding members:{" "}
            <strong style={{ color: "#FFFFFF" }}>Brian Noble</strong>,{" "}
            <strong style={{ color: "#FFFFFF" }}>Ronaldo Reyes</strong>, and{" "}
            <strong style={{ color: "#FFFFFF" }}>
              Carlos Alberto Hernandez Jr.
            </strong>
          </p>
          <p style={{ color: "#D4B88A", fontSize: 17, lineHeight: 1.9 }}>
            The Founders established the chapter to provide Latino men with a
            vehicle through which they could serve their community and
            strengthen the representation of Latinos in higher education. Since
            then, we have worked hard to address the needs of more
            underrepresented communities on and off campus by building
            community, promoting cultural awareness, and practicing community
            service.
          </p>
        </div>
      </div>
    </section>
  );
}

function QuickFactsSection() {
  const [ref, visible] = useScrollReveal();
  return (
    <section style={{ padding: "120px 80px" }}>
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            At a Glance
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 700,
              color: "#FFFFFF",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : "none",
            }}
          >
            Quick Facts
          </h2>
        </div>

        <div
          className="lul-pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 24,
          }}
        >
          {QUICK_FACTS.map((f, i) => (
            <div
              key={f.label}
              style={{
                padding: "32px 36px",
                border: "1px solid rgba(238,170,0,0.15)",
                borderRadius: 4,
                background: "rgba(238,170,0,0.02)",
                opacity: visible ? 1 : 0,
                animation: visible
                  ? `fadeUp 0.6s ${0.1 * i + 0.2}s ease both`
                  : "none",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#EEAA00",
                  marginBottom: 12,
                }}
              >
                {f.label}
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  fontStyle: f.italic ? "italic" : "normal",
                  lineHeight: 1.3,
                }}
              >
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="lul-site-root" style={{ background: "#1A0D06", minHeight: "100vh" }}>
      <SiteNavbar />
      <PageHero />
      <Philosophy />
      <PillarsSection />
      <ULead />
      <FoundingHistory />
      <QuickFactsSection />
      <SiteFooter />
    </div>
  );
}
