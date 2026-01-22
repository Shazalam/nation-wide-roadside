// components/home/ServicesGrid.tsx
import React from "react";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "INSURANCE",
    description:
      "Roadside assistance for commercial and personal policyholders.",
  },
  {
    title: "FLEET SUPPORT",
    description:
      "Roadside support for businesses of any size, from local fleets to national networks.",
  },
  {
    title: "INDIVIDUALS",
    description:
      "Membership options designed for individual drivers and families.",
  },
  {
    title: "ALL VEHICLE SUPPORT",
    description:
      "Support for all vehicle classes and sizes, for any number of vehicles.",
  },
  {
    title: "HELP ON-THE-GO",
    description:
      "Roadside assistance for anyone, anywhere, anytime across the country.",
  },
  {
    title: "NON‑PROFIT & GOVT.",
    description:
      "Affordable roadside programs for government agencies and non‑profit organizations.",
  },
  {
    title: "MIXED FLEET",
    description:
      "Reduce downtime and keep mixed fleets productive and safely on the road.",
  },
  {
    title: "LIVE SUPPORT",
    description: "Get 24/7 live dispatch and customer support 365 days a year.",
  },
  {
    title: "PARTNERS",
    description: "Join our network and grow your towing or service business.",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-blue-600 sm:text-4xl uppercase">
            OUR SERVICES
          </h2>
          {/* <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Flexible roadside programs for drivers, fleets, insurers, and
            partners.
          </p> */}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-6 py-10 text-center shadow-[0_8px_24px_rgba(15,24,40,0.06)] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,24,40,0.12)]"
            >
              <h3
                className="
    text-base
    font-semibold
    uppercase
    tracking-[0.20em]
    text-[#1786d4]        // stronger blue
    sm:text-lg
  "
              >
                {service.title}
              </h3>

              <div className="mt-3 h-px w-12 bg-slate-200" />
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-600 sm:text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
