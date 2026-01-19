// components/home/ServicesStrip.tsx
"use client";

import {
  CarFront,
  Truck,
  Wrench,
  KeyRound,
  BatteryCharging,
  Fuel
} from "lucide-react";

const items = [
  { label: "TOWING", Icon: Truck },
  { label: "WINCHING", Icon: CarFront },
  { label: "TIRE CHANGE", Icon: Wrench },
  { label: "LOCKOUT", Icon: KeyRound },
  { label: "BATTERY CHARGE", Icon: BatteryCharging },
  { label: "FUEL DELIVERY", Icon: Fuel }
];

export function ServicesStrip() {
  return (
    <section className="relative overflow-hidden">
      {/* Strong flat blue background for maximum readability */}
      <div className="absolute inset-0 -z-10 bg-blue-700" />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:py-14 md:py-16">
        {/* Heading */}
        <h2 className="text-lg font-semibold tracking-[0.22em] text-white sm:text-xl">
          NO PROBLEM IS TOO BIG OR SMALL
        </h2>

        {/* Icons row */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 text-white sm:grid-cols-3 md:grid-cols-6 md:gap-x-10">
          {items.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 text-xs sm:text-sm"
            >
              <div className="flex h-18 w-18 items-center justify-center rounded-full border border-white/80 bg-white/10 shadow-soft backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:bg-white/15">
                <Icon className="h-10 w-10 text-white" strokeWidth={1.8} />
              </div>
              <span className="font-medium tracking-[0.16em]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
