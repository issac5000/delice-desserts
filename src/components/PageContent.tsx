"use client";

import { useState, useCallback } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WaveDivider from "./WaveDivider";
import Story from "./Story";
import Marquee from "./Marquee";
import Specialties from "./Specialties";
import Cocktails from "./Cocktails";
import Ambiance from "./Ambiance";
import Menu from "./Menu";
import QuoteSection from "./QuoteSection";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";
import CartWidget from "./CartWidget";
import CookieBanner from "./CookieBanner";
import CookieSection from "./CookieSection";
import ReservationSection from "./ReservationSection";
import { CartProvider } from "@/context/CartContext";

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
