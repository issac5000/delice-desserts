"use client";

import { useState, useCallback } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WaveDivider from "./WaveDivider";
import Story from "./Story";
import Marquee from "./Marquee";
import Specialties from "./Specialties";
import Menu from "./Menu";
import QuoteSection from "./QuoteSection";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

export default function PageContent() {
  const [splashDone, setSplashDone] = useState(false);
  const handleComplete = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleComplete} />}
      <main>
        <Navbar />
        <Hero />
        <WaveDivider
          bgColor="transparent"
          fillColor="#FFF5F6"
          variant={3}
          className="h-[60px] md:h-[100px] -mt-[60px] md:-mt-[100px] relative z-10"
        />
        <Story />
        <Marquee />
        <Specialties />
        <Menu />
        <QuoteSection />
        <Gallery />
        <Testimonials />
        <Contact />
        <Faq />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
