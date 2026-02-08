"use client";
import { HeroSection } from "./(root)/home/Herosection";
import AboutSection from "./(root)/home/AboutSection";
import { ServicesStrip } from "./(root)/home/ServicesStrip";
import VehicleClassesSection from "./(root)/home/VehicleClassesSection";
import ServicesGrid from "./(root)/home/ServicesGrid";
import ContactPage from "./(root)/home/Contact";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Home() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesStrip />
      <ServicesGrid />
      <VehicleClassesSection />
      <ContactPage />

      {/* Floating Scroll To Top Button */}
      {showButton && (
        <Link
          href="#hero-section"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c623] text-slate-900 shadow-lg transition hover:scale-110 hover:bg-[#e6b81f]"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </Link>
      )}
    </>
  );
}
