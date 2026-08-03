import About from "@/components/About";
import Education from "@/components/Education";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import PortfolioTeaser from "@/components/PortfolioTeaser";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Expertise />
        <Education />
        <PortfolioTeaser />
      </main>
      <Footer />
    </>
  );
}
