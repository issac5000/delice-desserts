import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Specialties from "@/components/Specialties";
import Menu from "@/components/Menu";
import QuoteSection from "@/components/QuoteSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

/*
  Color map
  ──────────────────────────────────────────────
  Hero            dark image
  Marquee         cream-dark  #FFE4E8
  Story           cream       #FFF5F6
  Specialties     vanilla     #FFF8F9
  Menu            cream       #FFF5F6
  Gallery         vanilla     #FFF8F9
  Testimonials    cream       #FFF5F6
  Contact         vanilla     #FFF8F9
  Footer          chocolate
*/

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Hero → Story (wave transition) */}
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
  );
}
