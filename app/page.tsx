import Image from "next/image";
import { HeroSection } from "./(root)/home/Herosection";
import AboutSection from "./(root)/home/AboutSection";
import { ServicesStrip } from "./(root)/home/ServicesStrip";
import VehicleClassesSection from "./(root)/home/VehicleClassesSection";
import ServicesGrid from "./(root)/home/ServicesGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesStrip />
      <ServicesGrid/>
      <VehicleClassesSection/>
    </>
  );
}
