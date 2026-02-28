import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Delice Desserts | Patisserie Artisanale a Namur",
  description:
    "Crepes, gaufres et desserts artisanaux au coeur de Namur. Une experience gourmande unique, preparee avec passion et des ingredients de qualite.",
  keywords: [
    "patisserie",
    "Namur",
    "crepes",
    "gaufres",
    "desserts",
    "Delice Desserts",
    "artisanal",
  ],
  openGraph: {
    title: "Delice Desserts | Patisserie Artisanale a Namur",
    description:
      "Crepes, gaufres et desserts artisanaux au coeur de Namur.",
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
      <body
        className={`${playfair.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
