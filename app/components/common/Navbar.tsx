"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Truck } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-slate-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-dark transition-colors">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-black tracking-tighter transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              NATIONWIDE<span className="text-brand-primary">ROADSIDE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-primary",
                  isScrolled ? "text-slate-600" : "text-slate-200"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button
              className="rounded-full px-6 font-bold"
              size="sm"
            >
              <Phone className="mr-2 h-4 w-4 fill-current" />
              (800) XXX-XXXX
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-slate-900" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-900 px-4 py-2 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full h-12 rounded-xl mt-4 font-bold">
              <Phone className="mr-2 h-5 w-5 fill-current" />
              GET HELP NOW
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
