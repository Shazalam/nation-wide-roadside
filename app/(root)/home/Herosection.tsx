"use client";

import { Button } from "@/app/components/common/Button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {

  return (
    <section id="hero-section" className="relative isolate overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-truck-1.jpg" // put your truck image here
          alt="Roadside assistance van on highway"
          fill
          priority
          className="object-cover"
        />
        {/* subtle dark overlay to make text readable */}
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      {/* Top spacing so it sits nicely under your navbar */}
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-100/90">
          YOUR 24/7 COMMERCIAL ROADSIDE PARTNER
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-[0.12em] text-white sm:text-4xl lg:text-5xl">
          RELIABLE ROADSIDE
          <br />
          ASSISTANCE SINCE 19XX
        </h1>

        <p className="mt-4 text-sm text-slate-100/90 sm:text-base">
          24/7 roadside assistance. Anytime. Anywhere.
        </p>

        <div className="mt-8">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-[#f5c623] text-slate-900 hover:bg-[#f5c623] border border-black/10 cursor-pointer"
            >
              Contact US
            </Button>
          </Link>
          {/* <Button>
            CALL NOW: +1 (800) 000‑0000
          </Button> */}
        </div>
      </div>
    </section>
  );
}
