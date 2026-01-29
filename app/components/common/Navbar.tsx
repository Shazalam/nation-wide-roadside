"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="top-0 z-30 bg-white">
      {/* Top utility bar */}
      <div className="border-b border-slate-200 bg-slate-50/95 text-[11px] text-slate-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-primary">
            24/7 roadside assistance · anytime · anywhere
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+18000000000" className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium">Call Roadside: +1 (800) 000‑0000</span>
            </a>
            <a href="tel:+18000000001" className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span className="font-medium">Call Sales: +1 (800) 000‑0001</span>
            </a>
          </div>
        </div>
      </div>      
    </header>
  );
}
