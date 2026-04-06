"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, Users, Zap, ShieldCheck, DollarSign } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.5 + i * 0.1,
      ease: "easeOut",
    },
  }),
};

const NetworkAdvantage = () => {
  const badges = [
    { text: "Exclusive Contracted Rates", active: true, icon: <DollarSign className="w-3 h-3" /> },
    { text: "Faster Dispatch", active: true, icon: <Zap className="w-3 h-3" /> },
    { text: "Coast-to-Coast Coverage", active: false, icon: <Globe className="w-3 h-3" /> },
    { text: "No Hidden Fees", active: false, icon: <ShieldCheck className="w-3 h-3" /> },
    { text: "Volume-Based Savings", active: false, icon: <Users className="w-3 h-3" /> },
  ];

  return (
    <section id="network-advantage" className="relative bg-[#0b1017] py-20 lg:py-32 overflow-hidden scroll-mt-24">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-8 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Big Stat */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:border-r lg:border-white/10 py-8 lg:py-0">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-8xl lg:text-[120px] font-black text-amber-500 leading-none tracking-tighter"
              >
                800+
              </motion.span>
              <div className="mt-4 flex flex-col items-center">
                <div className="h-px w-12 bg-amber-500/50 mb-4" />
                <span className="text-xs lg:text-sm font-bold tracking-[0.3em] text-amber-500/80 uppercase">
                  Contracted Tow Companies
                </span>
                <span className="mt-2 text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                  Strategically Positioned
                </span>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                The Network Advantage
              </h2>

              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-base lg:text-lg max-w-2xl">
                <p>
                  Our strength lies in our reach. Nationwide Roadside Assistance is contracted with{" "}
                  <strong className="font-bold text-slate-200">over 800 professional towing and roadside service companies</strong> strategically positioned across all 50 states.
                </p>
                <p>
                  These deep-rooted partnerships give us the leverage to negotiate{" "}
                  <strong className="font-bold text-amber-500/90 text-shadow-glow">exclusive, competitive rates</strong> — savings we pass directly to our partners.
                  More providers mean faster response, broader coverage, and{" "}
                  <strong className="font-bold text-slate-200">consistently affordable pricing</strong> no matter where the breakdown occurs.
                </p>
              </div>

              {/* Badges Container */}
              <div className="mt-10 flex flex-wrap gap-3">
                {badges.map((badge, idx) => (
                  <motion.div
                    key={badge.text}
                    custom={idx}
                    variants={badgeVariants}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300
                      ${badge.active
                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/30 shadow-[0_0_15px_rgba(245,198,35,0.1)]"
                        : "bg-white/[0.03] text-slate-500 border border-white/10"
                      }
                    `}
                  >
                    {badge.icon}
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkAdvantage;
