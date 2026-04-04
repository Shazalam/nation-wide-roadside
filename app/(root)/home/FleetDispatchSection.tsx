"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Truck, Zap, Target, Shield, Globe, Handshake, ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const fleetCategories = [
  {
    class: "CLASS 6 – 8",
    title: "Heavy-Duty",
    items: [
      "Semi-trucks & 18-wheelers",
      "Tractor-trailers & big rigs",
      "Large commercial buses",
      "Heavy construction equipment haulers",
      "Cement & dump trucks",
    ],
    badge: "Priority Dispatch",
    color: "amber",
    gradient: "from-amber-600/20 to-amber-900/10",
    border: "border-amber-500/20",
    accent: "bg-amber-500/10 text-amber-500",
    dot: "bg-amber-500/60",
  },
  {
    class: "CLASS 3 – 5",
    title: "Medium-Duty",
    items: [
      "Box trucks & straight trucks",
      "Flatbed & stake body trucks",
      "Delivery & sprinter vans",
      "School & shuttle buses",
      "Landscape & service vehicles",
    ],
    badge: "Fleet Recovery",
    color: "blue",
    gradient: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20",
    accent: "bg-blue-500/10 text-blue-400",
    dot: "bg-blue-400/60",
  },
  {
    class: "CLASS 1 – 2",
    title: "Passenger & Light Utility",
    items: [
      "Passenger cars & SUVs",
      "Pickup trucks & light vans",
      "Fleet sedans & company cars",
      "Utility & service vans",
      "Crossovers & minivans",
    ],
    badge: "Roadside Assist",
    color: "emerald",
    gradient: "from-emerald-600/20 to-emerald-900/10",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400/60",
  },
];

const whatSetsUsApart = [
  {
    icon: <Zap className="h-7 w-7 text-amber-400" />,
    title: "Rapid Response Dispatch",
    description:
      "Our live dispatchers are on call 24 hours a day, 365 days a year — coordinating the fastest possible response to every breakdown.",
  },
  {
    icon: <Target className="h-7 w-7 text-rose-500" />,
    title: "Dedicated Fleet Focus",
    description:
      "Serving a single logistics network means our team knows every route, every vehicle class, and every driver's needs inside and out.",
  },
  {
    icon: <Shield className="h-7 w-7 text-slate-300" />,
    title: "18+ Years of Expertise",
    description:
      "Built on nearly two decades of transportation industry experience, our operations are guided by field-proven knowledge and leadership.",
  },
  {
    icon: <Globe className="h-7 w-7 text-white" />,
    title: "All 50 States, Coast to Coast",
    description:
      "No dead zones. Whether a driver breaks down in rural Montana or downtown Miami, our dispatch network covers every corner of the country.",
  },
  {
    icon: <Truck className="h-7 w-7 text-emerald-500" />,
    title: "All Vehicle Classes Covered",
    description:
      "From heavy-duty Class 8 big rigs to light utility vans, our certified service capabilities span the full commercial vehicle spectrum.",
  },
  {
    icon: <Handshake className="h-7 w-7 text-amber-400" />,
    title: "Integrated Logistics Partnership",
    description:
      "As the in-house roadside arm of Nationwide Trans Inc., we operate with full alignment — keeping freight on time and drivers safe.",
  },
];

const FleetDispatchSection = () => {
  return (
    <section className="relative bg-[#0b1017] py-20 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* -- CATEGORIES SECTION -- */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-10"
          >
            Fleet Dispatch Categories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {fleetCategories.map((fleet, idx) => (
              <motion.div
                key={fleet.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`group relative flex flex-col rounded-2xl border ${fleet.border} bg-white/[0.02] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.04]`}
              >
                {/* Header with gradient strip */}
                <div className={`h-24 p-6 bg-gradient-to-br ${fleet.gradient}`}>
                  <span className="text-[10px] font-bold tracking-widest text-white/50 block mb-1">
                    {fleet.class}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                    {fleet.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <ul className="space-y-4 mb-8">
                    {fleet.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${fleet.dot} shadow-[0_0_8px_rgba(var(--tw-shadow-color),0.5)]`} />
                        <span className="text-sm text-slate-400 font-light leading-snug group-hover:text-slate-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest ${fleet.accent}`}>
                    {fleet.badge}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* -- WHAT SETS US APART SECTION -- */}
        <div className="pt-20 border-t border-white/[0.05]">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-12"
          >
            WHAT SETS US APART
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsUsApart.map((feature, idx) => (
              <motion.div
                key={feature.title}
                custom={idx + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col gap-6 p-10 rounded-2xl bg-[#111821] border border-white/[0.05] transition-all duration-300 hover:bg-[#151d29] hover:border-white/[0.1] group"
              >
                <div className="flex-shrink-0 mb-2">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetDispatchSection;
