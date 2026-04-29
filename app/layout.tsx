import type React from "react";
import type { Viewport } from "next";
import "./globals.css";
import FloatingLulSymbol from "@/components/floating-lul-symbol";
import {
  Cormorant_Garamond,
  DM_Sans,
  Bebas_Neue,
  Caveat,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "ΛΥΛ — Beta Tau Chapter",
  description:
    "The Beta Tau Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc. — Brotherhood, Culture, Service, Excellence.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a0d06",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${bebas.variable} ${caveat.variable}`}
        suppressHydrationWarning
      >
        {children}
        <FloatingLulSymbol />
      </body>
    </html>
  );
}
