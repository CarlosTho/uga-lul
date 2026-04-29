"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SiteNavbarProps {
  activeSection?: string;
}

interface NavLink {
  label: string;
  hash: string;
  route: string;
}

const LINKS: NavLink[] = [
  { label: "Home", hash: "#hero", route: "/" },
  { label: "About", hash: "#about", route: "/about" },
  { label: "Hermanos", hash: "#hermanos", route: "/hermanos" },
  { label: "Join", hash: "#join", route: "/#join" },
];

export default function SiteNavbar({ activeSection }: SiteNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";

  const padH = isNarrow ? 16 : 48;
  const padV = scrolled ? (isNarrow ? 12 : 14) : isNarrow ? 16 : 22;

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: mobileMenuOpen && isNarrow ? 1002 : 1000,
    padding: `${padV}px ${padH}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    background: scrolled ? "rgba(26,13,6,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(238,170,0,0.15)"
      : "1px solid transparent",
    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
    animation: "navSlideDown 0.6s ease forwards",
  };

  const renderLink = (
    l: NavLink,
    opts?: {
      onNavigate?: () => void;
      stack?: boolean;
      mobileLinkClass?: string;
    }
  ) => {
    const sectionId = l.hash.slice(1);
    const isActive = isHome && activeSection === sectionId;

    const baseStyle: React.CSSProperties = {
      color: isActive ? "#EEAA00" : "#D4B88A",
      textDecoration: "none",
      fontSize: opts?.stack ? 15 : 13,
      fontWeight: 500,
      letterSpacing: opts?.stack ? 3 : 2,
      textTransform: "uppercase",
      transition: "color 0.3s",
      position: "relative",
      cursor: "pointer",
      ...(opts?.stack
        ? {
            display: "block",
            padding: "14px 0",
            borderBottom: "1px solid rgba(238,170,0,0.12)",
          }
        : {}),
    };

    const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
      (e.currentTarget as HTMLElement).style.color = "#EEAA00";
    };
    const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
      (e.currentTarget as HTMLElement).style.color = isActive
        ? "#EEAA00"
        : "#D4B88A";
    };

    const mobileCls = opts?.mobileLinkClass;

    if (isHome) {
      // Full chapter page, not the home #hermanos section
      if (l.route === "/hermanos") {
        const hermanosActive = activeSection === "hermanos";
        const hermanosStyle: React.CSSProperties = {
          ...baseStyle,
          color: hermanosActive ? "#EEAA00" : baseStyle.color,
        };
        return (
          <Link
            key={l.label}
            href="/hermanos"
            className={mobileCls}
            style={hermanosStyle}
            onMouseEnter={onEnter}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = hermanosActive
                ? "#EEAA00"
                : "#D4B88A";
            }}
            onClick={() => opts?.onNavigate?.()}
          >
            {l.label}
          </Link>
        );
      }
      return (
        <a
          key={l.label}
          href={l.hash}
          className={mobileCls}
          style={baseStyle}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={() => opts?.onNavigate?.()}
        >
          {l.label}
        </a>
      );
    }

    return (
      <Link
        key={l.label}
        href={l.route}
        className={mobileCls}
        style={baseStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={() => opts?.onNavigate?.()}
      >
        {l.label}
      </Link>
    );
  };

  const logoSize = isNarrow ? 36 : 44;

  return (
    <>
      <nav className="site-navbar" style={navStyle}>
        <Link
          href="/"
          className="site-navbar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isNarrow ? 10 : 12,
            textDecoration: "none",
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <Image
            src="/lul-logo.webp"
            alt="LUL Logo"
            width={logoSize}
            height={logoSize}
            style={{ height: logoSize, width: "auto", flexShrink: 0 }}
          />
          <div style={{ minWidth: 0 }}>
            <div
              className="font-serif-display"
              style={{
                fontSize: isNarrow ? 17 : 20,
                fontWeight: 700,
                color: "#EEAA00",
                letterSpacing: isNarrow ? 2 : 3,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              ΛΥΛ
            </div>
            <div
              style={{
                fontSize: isNarrow ? 8 : 9,
                color: "#D4B88A",
                letterSpacing: isNarrow ? 1.5 : 2,
                textTransform: "uppercase",
                lineHeight: 1.35,
                marginTop: 2,
                whiteSpace: "nowrap",
              }}
            >
              Beta Tau
            </div>
          </div>
        </Link>

        {!isNarrow && (
          <div
            style={{
              display: "flex",
              gap: 36,
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            {LINKS.map((l) => renderLink(l))}
          </div>
        )}

        {isNarrow && (
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="site-navbar-menu-btn"
            style={{
              flexShrink: 0,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: mobileMenuOpen
                ? "rgba(238,170,0,0.16)"
                : "rgba(238,170,0,0.08)",
              border: "1px solid rgba(238,170,0,0.35)",
              borderRadius: 4,
              cursor: "pointer",
              color: "#EEAA00",
              transition:
                "background 0.28s cubic-bezier(0.4, 0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s ease",
              boxShadow: mobileMenuOpen
                ? "0 4px 20px rgba(238, 170, 0, 0.15)"
                : "none",
              transform: mobileMenuOpen ? "scale(0.98)" : "scale(1)",
            }}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        )}
      </nav>

      {isNarrow && (
        <div
          className="site-navbar-mobile-backdrop"
          role="presentation"
          aria-hidden={!mobileMenuOpen}
          onClick={() => setMobileMenuOpen(false)}
          data-open={mobileMenuOpen ? "true" : "false"}
        />
      )}

      {isNarrow && (
        <aside
          className={`site-navbar-mobile-panel${mobileMenuOpen ? " site-navbar-mobile-panel--open" : ""}`}
          aria-hidden={!mobileMenuOpen}
          data-open={mobileMenuOpen ? "true" : "false"}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 1001,
            width: "min(320px, 88vw)",
            height: "100vh",
            maxHeight: "100dvh",
            background: "#1A0D06",
            borderLeft: "1px solid rgba(238,170,0,0.2)",
            padding: "88px 24px 32px",
            paddingBottom: "max(32px, env(safe-area-inset-bottom))",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            boxShadow: "-12px 0 40px rgba(0,0,0,0.45)",
            transform: mobileMenuOpen ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
            transition:
              "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
            willChange: "transform",
            pointerEvents: mobileMenuOpen ? "auto" : "none",
          }}
        >
          <div
            className="site-navbar-mobile-heading"
            data-open={mobileMenuOpen ? "true" : "false"}
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8A6030",
              marginBottom: 12,
            }}
          >
            Menu
          </div>
          <div className="site-navbar-mobile-links">
            {LINKS.map((l) =>
              renderLink(l, {
                stack: true,
                mobileLinkClass: "site-navbar-mobile-link",
                onNavigate: () => setMobileMenuOpen(false),
              })
            )}
          </div>
        </aside>
      )}
    </>
  );
}
