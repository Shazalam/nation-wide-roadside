// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ButtonHTMLAttributes } from "react";
// import { clsx } from "clsx";

// // Simple button for the hero (or reuse your existing Button component)
// function HeroButton(
//   props: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }
// ) {
//   const { className, variant = "primary", ...rest } = props;
//   const base =
//     "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
//   const variants: Record<string, string> = {
//     primary:
//       "bg-[#1769aa] text-white hover:bg-[#0f3557] focus-visible:ring-[#1769aa]",
//     secondary:
//       "bg-white/90 text-[#0f3557] border border-white/80 hover:bg-white focus-visible:ring-[#1769aa]"
//   };
//   return <button className={clsx(base, variants[variant], className)} {...rest} />;
// }

// export function HeroSection() {
//   return (
//     <section className="relative isolate overflow-hidden bg-slate-900 text-white">
//       {/* Background image */}
//       <div className="absolute inset-0 -z-10">
//         {/* <Image
//           src="https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg"
//           alt="Roadside assistance van on highway"
//           fill
//           priority
//           className="object-cover"
//         /> */}
//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-slate-900/55" />
//       </div>

//       {/* Top utility bar (you can move this into layout later) */}
//       <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-2 px-4 py-4 text-xs text-slate-100/80 md:flex-row md:text-sm">
//         <div className="font-semibold uppercase tracking-[0.18em] text-[#ffcc33]">
//           24/7 roadside assistance · anytime · anywhere
//         </div>
//         <div className="flex flex-wrap gap-4">
//           <a href="tel:+18000000000" className="flex items-center gap-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#ffcc33]" />
//             Call roadside: +1 (800) 000‑0000
//           </a>
//           <a href="tel:+18000000001" className="flex items-center gap-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//             Call sales: +1 (800) 000‑0001
//           </a>
//         </div>
//       </div>

//       {/* Main hero content */}
//       <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col px-4 pb-20 pt-8 md:flex-row md:items-center md:pb-28 md:pt-6">
//         <div className="max-w-xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-100/80">
//             Your 24/7 commercial roadside assistance partner
//           </p>

//           <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
//             Reliable roadside assistance for fleets & drivers.
//           </h1>

//           <p className="mt-4 text-sm text-slate-100/85 sm:text-base">
//             Fast, professional help for breakdowns, tire changes, lockouts, jump starts,
//             towing, and more—wherever your vehicles are on the road.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <Link href="/contact">
//               <HeroButton>Get roadside help now</HeroButton>
//             </Link>
//             <Link href="/services">
//               <HeroButton variant="secondary">View services</HeroButton>
//             </Link>
//           </div>

//           <p className="mt-4 text-xs text-slate-100/70 sm:text-sm">
//             Nationwide coverage · Light, medium & heavy‑duty vehicles · 24/7 live dispatch
//           </p>
//         </div>

//         {/* Optional stats / trust panel on the right */}
//         <div className="mt-10 w-full max-w-sm md:ml-auto md:mt-0">
//           <div className="rounded-2xl bg-slate-900/75 p-5 shadow-xl backdrop-blur">
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//               Why fleets choose us
//             </p>
//             <dl className="mt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
//               <div>
//                 <dt className="text-slate-300">Average response</dt>
//                 <dd className="mt-1 text-lg font-semibold text-white">30–60 min</dd>
//               </div>
//               <div>
//                 <dt className="text-slate-300">Service events / year</dt>
//                 <dd className="mt-1 text-lg font-semibold text-white">100K+</dd>
//               </div>
//               <div>
//                 <dt className="text-slate-300">Coverage</dt>
//                 <dd className="mt-1 text-lg font-semibold text-white">Nationwide</dd>
//               </div>
//               <div>
//                 <dt className="text-slate-300">Support</dt>
//                 <dd className="mt-1 text-lg font-semibold text-white">24/7/365</dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { Button } from "@/app/components/common/Button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-white">
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
              className="bg-[#f5c623] text-slate-900 hover:bg-[#f5c623] border border-black/10"
            >
              LEARN MORE
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
