import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import UnitTypes from "@/components/UnitTypes";
import Location from "@/components/Location";
import RegisterInterest from "@/components/RegisterInterest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <UnitTypes />
      <Location />
      <RegisterInterest />
      <Footer />
    </>
  );
}
