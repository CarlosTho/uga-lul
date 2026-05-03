"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/** Per-frame smoothing; lower = heavier “lag”, higher = snappier */
const SMOOTH = 0.085;

const FILTER_GLOW =
  "drop-shadow(0 0 6px rgba(238, 170, 0, 0.95)) drop-shadow(0 0 18px rgba(238, 170, 0, 0.65)) drop-shadow(0 0 36px rgba(238, 170, 0, 0.35))";

/** Tighter glow on narrow viewports so drop-shadow does not widen scrollable overflow */
const FILTER_GLOW_NARROW =
  "drop-shadow(0 0 4px rgba(238, 170, 0, 0.9)) drop-shadow(0 0 12px rgba(238, 170, 0, 0.5)) drop-shadow(0 0 20px rgba(238, 170, 0, 0.28))";

const FILTER_GLOW_REDUCED =
  "drop-shadow(0 0 8px rgba(238, 170, 0, 0.5)) drop-shadow(0 0 16px rgba(238, 170, 0, 0.25))";

export default function FloatingLulSymbol() {
  const reduced = usePrefersReducedMotion();
  const [narrow, setNarrow] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scrollBase = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (reduced) {
      el.style.transform = "translate3d(0, -50%, 0)";
      return;
    }

    const syncScrollBase = () => {
      const s = window.scrollY;
      const h = window.innerHeight;
      const w = window.innerWidth;
      const ampX = w < 640 ? 8 : 14;
      const ampY = w < 640 ? 18 : 28;
      const b = scrollBase.current;
      b.x = Math.sin(s * 0.0021) * ampX + Math.cos(s * 0.0017) * (ampX * 0.65);

      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - h);
      // Full-page progress: deeper scroll → lower on screen (monotonic)
      const u = Math.min(1, s / maxScroll);
      const eased = 1 - (1 - u) ** 1.4;

      const startLift = h * (w < 640 ? -0.18 : -0.24);
      const endDeep = h * (w < 640 ? 0.24 : 0.32);
      const travelY = startLift + (endDeep - startLift) * eased;

      b.y = travelY + Math.sin(s * 0.0026) * (ampY * 0.38);
    };

    const tick = () => {
      const now = performance.now();
      const w = window.innerWidth;
      const ix = w < 640 ? 5 : 9;
      const iy = w < 640 ? 3.2 : 5.5;
      const idleX =
        Math.sin(now * 0.0009) * ix + Math.cos(now * 0.00065) * (ix * 0.45);
      const idleY =
        Math.cos(now * 0.00052) * iy + Math.sin(now * 0.00066) * (iy * 0.6);

      const b = scrollBase.current;
      target.current.x = b.x + idleX;
      target.current.y = b.y + idleY;

      const t = target.current;
      const p = pos.current;
      p.x += (t.x - p.x) * SMOOTH;
      p.y += (t.y - p.y) * SMOOTH;
      el.style.transform = `translate3d(${p.x}px, calc(-50% + ${p.y}px), 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    syncScrollBase();
    pos.current.x = scrollBase.current.x;
    pos.current.y = scrollBase.current.y;

    const onScroll = () => syncScrollBase();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncScrollBase, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncScrollBase);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  return (
    <div
      ref={wrapRef}
      className="lul-floating-symbol"
      aria-hidden
      style={{
        position: "fixed",
        right: "max(12px, env(safe-area-inset-right, 0px), 2vw)",
        top: "50%",
        zIndex: 888,
        pointerEvents: "none",
        transform: "translate3d(0, -50%, 0)",
        willChange: reduced ? undefined : "transform",
        opacity: 0.92,
      }}
    >
      <Image
        src="/lul-gold-symbol.png"
        alt=""
        width={72}
        height={140}
        sizes="72px"
        style={{
          width: "clamp(48px, 5.5vw, 72px)",
          height: "auto",
          display: "block",
          filter: reduced
            ? FILTER_GLOW_REDUCED
            : narrow
              ? FILTER_GLOW_NARROW
              : FILTER_GLOW,
        }}
        priority={false}
      />
    </div>
  );
}
