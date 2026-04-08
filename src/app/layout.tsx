import type { Metadata, Viewport } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const circles = [
  { left: 6, top: 14, size: 120, drift: 18, delay: 0, opacity: 0.17 },
  { left: 15, top: 42, size: 68, drift: 15, delay: 3, opacity: 0.15 },
  { left: 24, top: 68, size: 150, drift: 20, delay: 1, opacity: 0.14 },
  { left: 36, top: 24, size: 96, drift: 16, delay: 5, opacity: 0.16 },
  { left: 49, top: 52, size: 176, drift: 22, delay: 2, opacity: 0.13 },
  { left: 63, top: 18, size: 84, drift: 14, delay: 7, opacity: 0.15 },
  { left: 76, top: 61, size: 132, drift: 19, delay: 4, opacity: 0.14 },
  { left: 89, top: 33, size: 72, drift: 13, delay: 6, opacity: 0.17 },
];

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF5F6",
};

export const metadata: Metadata = {
  title: "Délice Desserts | Pâtisserie Artisanale à Namur",
  description:
    "Crêpes, gaufres et desserts artisanaux au cœur de Namur. Une expérience gourmande unique, préparée avec passion et des ingrédients de qualité.",
  keywords: [
    "pâtisserie",
    "Namur",
    "crêpes",
    "gaufres",
    "desserts",
    "Delice Desserts",
    "artisanal",
  ],
  openGraph: {
    title: "Délice Desserts | Pâtisserie Artisanale à Namur",
    description:
      "Crêpes, gaufres et desserts artisanaux au cœur de Namur.",
    type: "website",
    locale: "fr_BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head />
      <body
        className={`${playfair.variable} ${raleway.variable} antialiased`}
      >
        <div className="overflow-x-hidden-wrapper">
          <div className="circle-layer" aria-hidden="true">
            {circles.map((c, i) => (
              <span
                key={`${c.left}-${c.size}-${i}`}
                className="circle-item"
                style={{
                  left: `${c.left}%`,
                  top: `${c.top}%`,
                  animationDuration: `${c.drift}s`,
                  animationDelay: `${c.delay}s`,
                }}
              >
                <span
                  className="circle-orb"
                  style={{
                    width: `${c.size}px`,
                    height: `${c.size}px`,
                    opacity: c.opacity,
                    animationDuration: `${c.drift + 6}s`,
                    animationDelay: `${c.delay}s`,
                  }}
                />
              </span>
            ))}
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
