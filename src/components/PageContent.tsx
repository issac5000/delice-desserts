"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WaveDivider from "./WaveDivider";
import { CartProvider } from "@/context/CartContext";

// Lazy load below-fold sections
const Story = dynamic(() => import("./Story"));
const Marquee = dynamic(() => import("./Marquee"));
const Specialties = dynamic(() => import("./Specialties"));
const Cocktails = dynamic(() => import("./Cocktails"));
const Ambiance = dynamic(() => import("./Ambiance"));
const Menu = dynamic(() => import("./Menu"));
const QuoteSection = dynamic(() => import("./QuoteSection"));
const Gallery = dynamic(() => import("./Gallery"));
const Testimonials = dynamic(() => import("./Testimonials"));
const Contact = dynamic(() => import("./Contact"));
const Faq = dynamic(() => import("./Faq"));
const Footer = dynamic(() => import("./Footer"));
const CookieBanner = dynamic(() => import("./CookieBanner"));
const CookieSection = dynamic(() => import("./CookieSection"));
const ReservationSection = dynamic(() => import("./ReservationSection"));

// Lazy load widgets (not needed at initial render)
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });
const CartWidget = dynamic(() => import("./CartWidget"), { ssr: false });

export default function PageContent() {
  const [splashDone, setSplashDone] = useState(false);
  const handleComplete = useCallback(() => setSplashDone(true), []);

  return (
    <CartProvider>
      {!splashDone && <SplashScreen onComplete={handleComplete} />}
      <main>
        <Navbar />
        <Hero ready={splashDone} />
        <WaveDivider
          bgColor="transparent"
          fillColor="#FFF5F6"
          variant={3}
          className="h-[60px] md:h-[100px] -mt-[60px] md:-mt-[100px] relative z-10"
        />
        <Story />
        <Marquee />
        <Specialties />
        <Cocktails />
        <QuoteSection />
        <CookieBanner />
        <Ambiance />
        <CookieSection />
        <Menu />
        <Gallery />
        <Testimonials />
        <ReservationSection />
        <Contact />
        <Faq />
        <Footer />
      </main>
      <CartWidget />
      <ChatWidget />
    </CartProvider>
  );
}
