"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Truck, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="relative bg-[#0b1017] py-16 sm:py-24 overflow-hidden scroll-mt-24"
    >
      {/* Subtle radial glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-amber-500/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* ── Founder Card ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="rounded-2xl border border-[#1a2233] bg-gradient-to-br from-[#111827]/80 to-[#0f141b]/90 backdrop-blur-sm p-6 sm:p-10"
        >
          {/* Top row — avatar + name + bio */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            {/* Initials Avatar */}
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-amber-500/70 bg-amber-500/10 shadow-[0_0_30px_rgba(245,198,35,0.08)]">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-wide select-none">
                  KL
                </span>
              </div>
            </div>

            {/* Name + Bio */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase mb-1">
                Founder &amp; Owner
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                KONG LEE
              </h3>
              <p className="text-[15px] sm:text-base leading-[1.8] text-slate-400 font-light max-w-2xl">
                Kong Lee is a seasoned transportation industry leader with over{" "}
                <strong className="font-semibold text-slate-200">
                  18 years of hands-on experience
                </strong>{" "}
                in freight, logistics, and commercial fleet operations. As the
                founder of both Nationwide Roadside Assistance and Nationwide
                Trans Inc., he has built a vertically integrated operation —
                ensuring his logistics fleet always has dedicated, reliable
                roadside support on the road.
              </p>
            </div>
          </div>

          {/* Experience Badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="mt-8 sm:mt-10"
          >
            <div className="inline-flex items-center gap-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-6 py-4 sm:px-8 sm:py-5">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 leading-none tracking-tight">
                18+
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-amber-400/90 uppercase leading-snug">
                  Years in the
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-amber-400/90 uppercase leading-snug">
                  Transportation Industry
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Sister Company Card ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
          variants={fadeUp}
          className="mt-10 sm:mt-12"
        >
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">
            Sister Company &amp; Logistics Partner
          </p>
          <a 
            href="https://www.nationwide-trans.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group relative rounded-2xl border border-[#1a2233] bg-gradient-to-r from-[#111827]/60 to-[#0f141b]/80 p-5 sm:p-7 flex items-center gap-5 sm:gap-6 max-w-2xl transition-all duration-300 hover:border-amber-500/20 hover:shadow-[0_0_40px_rgba(245,198,35,0.04)] cursor-pointer">
              {/* Truck icon badge */}
              <div className="flex-shrink-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={1.8} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Nationwide Trans Inc.
                </h4>
                <p className="text-[13px] sm:text-sm text-slate-400 mt-0.5">
                  Full-service freight carrier &amp; logistics broker - Also owned by Kong Lee
                </p>
              </div>

              {/* Chevron */}
              <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-amber-500/60 transition-colors flex-shrink-0" />
            </div>
          </a>
        </motion.div>

        {/* ── Current Service Scope ────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={3}
          variants={fadeUp}
          className="mt-14 sm:mt-16 border-t border-[#1a2233] pt-10 sm:pt-12"
        >
          <div className="flex gap-5 sm:gap-6 items-start max-w-3xl">
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                <FileText className="h-6 w-6 text-amber-400" strokeWidth={1.8} />
              </div>
            </div>

            {/* Text */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-amber-500 mb-2">
                Current Service Scope
              </h4>
              <p className="text-[14px] sm:text-[15px] leading-[1.8] text-slate-400 font-light">
                At this time, Nationwide Roadside Assistance exclusively serves
                the logistics shipping trucks operating under{" "}
                <strong className="font-semibold text-white">
                  Nationwide Trans Inc.
                </strong>{" "}
                This dedicated model ensures our fleet drivers receive
                prioritized, fast-response support with zero delays — keeping
                every shipment on schedule.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
