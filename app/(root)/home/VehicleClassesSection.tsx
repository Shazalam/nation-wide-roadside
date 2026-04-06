"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, ArrowUpRight, Gauge } from "lucide-react";

/**
 * VEHICLE CLASS CONFIGURATION
 * Using the provided high-fidelity PNG images from the assets folder.
 */
const classImages = [
  { id: "1", title: "Class 1", src: "/images/vehicle-classes/class_1.PNG", range: "6,000 LBS OR LESS" },
  { id: "2", title: "Class 2", src: "/images/vehicle-classes/class_2.PNG", range: "6,001 TO 10,000 LBS" },
  { id: "3", title: "Class 3", src: "/images/vehicle-classes/class_3.PNG", range: "10,001 TO 14,000 LBS" },
  { id: "4", title: "Class 4", src: "/images/vehicle-classes/class_4.PNG", range: "14,001 TO 16,000 LBS" },
  { id: "5", title: "Class 5", src: "/images/vehicle-classes/class_5.PNG", range: "16,001 TO 19,500 LBS" },
  { id: "6", title: "Class 6", src: "/images/vehicle-classes/class_6.PNG", range: "19,501 TO 26,000 LBS" },
  { id: "7", title: "Class 7", src: "/images/vehicle-classes/class_7.PNG", range: "26,001 TO 33,000 LBS" },
  { id: "8", title: "Class 8", src: "/images/vehicle-classes/class_8.PNG", range: "33,001 LBS & ABOVE" },
];

const VehicleClassesSection = () => {
  return (
    <section id="vehicle-classes" className="relative bg-[#0a0f18] py-24 md:py-32 overflow-hidden selection:bg-brand-primary/30">
      {/* HIGH-TECH INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-transparent to-[#0a0f18]" />
      </div>

      {/* FLOATING DECORATIVE ELEMENTS */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* HEADER BLOCK - INDUSTRIAL MODERN */}
        <div className="flex flex-col mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-primary" />
            <span className="text-xs md:text-sm font-black text-brand-primary tracking-[0.4em] uppercase">
              Official Weight Standard Guide
            </span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-[1000] text-white leading-[0.85] tracking-tighter uppercase"
            >
              FLEET <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">CLASSIFICATIONS</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-xl text-slate-400 text-base md:text-lg font-medium leading-relaxed border-l-2 border-slate-800 pl-8"
            >
              Our operations adhere to strict North American GVWR standards, ensuring the correct equipment is dispatched for your specific vehicle class.
            </motion.p>
          </div>
        </div>

        {/* IMAGE-BASED GRID - NO STRETCHING, TITHER FRAMING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {classImages.map((vClass, index) => (
            <motion.div
              key={vClass.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* CARD CONTAINER */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-brand-primary/30 hover:bg-white/[0.04] p-6 lg:p-8 group h-full">
                
                {/* TOP LABELS */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-brand-primary transition-colors">GVWR RANGE</span>
                    <span className="text-sm md:text-base font-black text-white/90 tracking-tight">{vClass.range}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg backdrop-blur-xl group-hover:bg-brand-primary transition-all duration-500">
                    <span className="text-xs font-black text-white uppercase tracking-widest">{vClass.title}</span>
                  </div>
                </div>

                {/* THE IMAGE CONTAINER - ADJUSTED TO REMOVE GAP */}
                <div className="relative w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                  <Image
                    src={vClass.src}
                    alt={vClass.title}
                    width={800}
                    height={350}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    priority={index < 2}
                  />
                  
                  {/* Subtle Grain Overlay on Image */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                {/* INTERACTIVE FOOTER */}
                <div className="mt-8 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Certified Support Fleet</span>
                  </div>
                  <ArrowUpRight className="text-brand-primary w-4 h-4" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {[
            { label: "Dispatch Precision", value: "99.8%", icon: <Gauge className="w-4 h-4 text-brand-primary" /> },
            { label: "Fleet Coverage", value: "All 50 States", icon: <Truck className="w-4 h-4 text-blue-400" /> },
            { label: "Certifications", value: "FHWA / DOT", icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
            { label: "Response Time", value: "24/7 Priority", icon: <ArrowUpRight className="w-4 h-4 text-amber-400" /> },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">{metric.label}</span>
              </div>
              <span className="text-lg md:text-xl font-black text-white italic tracking-tight">{metric.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleClassesSection;
