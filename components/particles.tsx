"use client";

import { useEffect, useState } from "react";

interface ParticlesProps {
  count?: number;
}

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  dx: number;
  alpha: number;
}

export default function Particles({ count = 18 }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 12,
        size: 2 + Math.random() * 4,
        dx: (Math.random() - 0.5) * 200,
        alpha: 0.3 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={
            {
              position: "absolute",
              bottom: "-10px",
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: `rgba(238,170,0,${p.alpha})`,
              "--dx": `${p.dx}px`,
              animation: `particleDrift ${p.duration}s ${p.delay}s linear infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
