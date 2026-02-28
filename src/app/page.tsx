import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Specialties from "@/components/Specialties";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/*
  Color map — kept here for easy wave reference
  ──────────────────────────────────────────────
  Hero            dark image
  Marquee         cream-dark  #FFE4E8
  Story           cream       #FFF5F6
  Specialties     cream-dark  #FFE4E8
  Menu            vanilla     #FFF8F9
  Gallery         cream       #FFF5F6
  Testimonials    cream-dark  #FFE4E8
  Contact         vanilla     #FFF8F9
  Footer          cream-dark  #FFE4E8
*/

const C = {
  cream:     "#FFF5F6",
  creamDark: "#FFE4E8",
  vanilla:   "#FFF8F9",
} as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Hero → Marquee  (dramatic asymmetric swoop) */}
      <WaveDivider
        bgColor="transparent"
        fillColor={C.creamDark}
        variant={3}
        className="h-[60px] md:h-[100px] -mt-[60px] md:-mt-[100px] relative z-10"
      />

      <Marquee />

      {/* Marquee → Story  (elegant minimal arc) */}
      <WaveDivider
        bgColor={C.creamDark}
        fillColor={C.cream}
        variant={6}
        flip
        className="h-[50px] md:h-[80px]"
      />

      <Story />

      {/* Story → Specialties  (layered double wave) */}
      <WaveDivider
        bgColor={C.cream}
        fillColor={C.creamDark}
        variant={2}
        className="h-[70px] md:h-[110px]"
      />

      <Specialties />

      {/* Specialties → Menu  (soft triple ripple) */}
      <WaveDivider
        bgColor={C.creamDark}
        fillColor={C.vanilla}
        variant={4}
        flip
        className="h-[60px] md:h-[100px]"
      />

      <Menu />

      {/* Menu → Gallery  (gentle double hill) */}
      <WaveDivider
        bgColor={C.vanilla}
        fillColor={C.cream}
        variant={1}
        className="h-[50px] md:h-[80px]"
      />

      <Gallery />

      {/* Gallery → Testimonials  (triple layered, richest) */}
      <WaveDivider
        bgColor={C.cream}
        fillColor={C.creamDark}
        variant={5}
        flip
        className="h-[70px] md:h-[110px]"
      />

      <Testimonials />

      {/* Testimonials → Contact  (asymmetric swoop, flipped) */}
      <WaveDivider
        bgColor={C.creamDark}
        fillColor={C.vanilla}
        variant={3}
        flip
        className="h-[60px] md:h-[90px]"
      />

      <Contact />

      {/* Contact → Footer  (layered double, flipped) */}
      <WaveDivider
        bgColor={C.vanilla}
        fillColor={C.creamDark}
        variant={2}
        flip
        className="h-[60px] md:h-[100px]"
      />

      <Footer />
    </>
  );
}
