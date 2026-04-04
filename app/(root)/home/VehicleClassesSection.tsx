"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu } from "lucide-react";

/**
 * VEHICLE CLASS CONFIGURATION
 */
const classes = [
  {
    id: "4",
    title: "Class 4",
    weight: "14,001 TO 16,000 LBS",
    vehicles: ["Large Walk-In Van", "City Delivery", "Box Truck"],
    color: "#2D6A4F", // Dark Green
    column: "left",
  },
  {
    id: "8",
    title: "Class 8",
    weight: "33,001+ LBS",
    vehicles: ["Truck Tractor", "Cement Truck", "Dump Truck", "Sleeper Cab"],
    color: "#660708", // Dark Red
    column: "right",
  },
  {
    id: "3",
    title: "Class 3",
    weight: "10,001 TO 14,000 LBS",
    vehicles: ["Heavy-Duty Pickup", "Walk-In Van", "City Delivery", "Box Truck"],
    color: "#023E8A", // Deep Blue
    column: "left",
  },
  {
    id: "7",
    title: "Class 7",
    weight: "26,001 TO 33,000 LBS",
    vehicles: ["City Bus", "Furniture Truck", "Refuse Truck", "Truck Tractor"],
    color: "#BC4749", // Red-Orange
    column: "right",
  },
  {
    id: "2",
    title: "Class 2",
    weight: "6,001 TO 10,000 LBS",
    vehicles: ["Full-Size Pickup", "Cargo Van", "Step Van", "Mini-Van"],
    color: "#0077B6", // Bright Blue
    column: "left",
  },
  {
    id: "6",
    title: "Class 6",
    weight: "19,501 TO 26,000 LBS",
    vehicles: ["School Bus", "Beverage Truck", "Rack Truck", "Single-Axle"],
    color: "#D97706", // Darker Orange
    column: "right",
  },
  {
    id: "1",
    title: "Class 1",
    weight: "6,000 LBS OR LESS",
    vehicles: ["Pickup Truck", "Cargo Van", "SUV", "Mini-Van"],
    color: "#0891B2", // Cyan/Teal
    column: "left",
  },
  {
    id: "5",
    title: "Class 5",
    weight: "16,001 TO 19,500 LBS",
    vehicles: ["Bucket Truck", "Large Walk-In Van", "City Delivery"],
    color: "#F59E0B", // Gold/Amber
    column: "right",
  },
];

/**
 * PERFECT VEHICLE SILHOUETTE DATA
 * Designed to match the provided classification guide image exactly
 */
const VEHICLE_DATA: Record<string, { path: string, width: number }> = {
  "Pickup Truck": {
    path: "M10,25 h20 l5,-8 h35 l3,8 h37 v10 h-110 z M30,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z M90,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z",
    width: 110
  },
  "Full-Size Pickup": {
    path: "M5,25 h35 l7,-10 h30 l5,10 h33 v10 h-110 z M35,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "Heavy-Duty Pickup": {
    path: "M5,25 h40 l8,-12 h35 l5,12 h32 v10 h-120 z M40,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M100,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z",
    width: 120
  },
  "Cargo Van": {
    path: "M5,35 V18 L25,10 H105 L110,18 V35 Z M30,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "Walk-In Van": {
    path: "M5,35 V12 L15,8 H105 V35 Z M25,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "Large Walk-In Van": {
    path: "M5,35 V10 L15,5 H115 V35 Z M25,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M100,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z",
    width: 120
  },
  "Step Van": {
    path: "M5,35 V15 L20,8 H110 V35 Z M30,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "Mini-Van": {
    path: "M10,35 V22 L25,12 H95 L110,22 V35 Z M30,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z M85,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z",
    width: 110
  },
  "Mini-VN": { // Small variant name from image
    path: "M15,35 V25 L30,15 H90 L105,25 V35 Z M35,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z M80,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z",
    width: 110
  },
  "SUV": {
    path: "M10,35 V25 L25,15 H100 V35 Z M35,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M85,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "City Delivery": {
    path: "M5,35 V20 L25,15 H40 V35 Z M42,8 H115 V35 H42 Z M25,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Box Truck": {
    path: "M5,35 V20 L20,15 H35 V35 Z M37,5 H115 V35 H37 Z M20,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M95,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z",
    width: 115
  },
  "Beverage Truck": {
    path: "M5,35 V22 L15,15 H35 V35 Z M37,10 H115 V35 H37 M45,15 V30 M65,15 V30 M85,15 V30 M105,15 V30 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Rack Truck": {
    path: "M5,35 V20 L20,15 H35 V35 Z M37,25 H115 V35 H37 M45,10 V25 M65,10 V25 M85,10 V25 M105,10 V25 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "School Bus": {
    path: "M5,15 h20 v20 h-20 z M25,10 H115 V35 H25 Z M40,15 H55 V25 H40 Z M65,15 H80 V25 H65 Z M90,15 H110 V25 H90 Z M15,35 a4,4 0 1,1 -8,0 a4,4 0 0,1 8,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "City Bus": {
    path: "M5,8 H115 V35 H5 Z M15,12 H35 V22 H15 Z M45,12 H65 V22 H45 Z M75,12 H95 V22 H75 Z M25,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Single-Axle": {
    path: "M5,35 V20 L20,10 H45 V35 Z M50,32 H100 V35 H50 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M65,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M80,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 110
  },
  "Truck Tractor": {
    path: "M5,35 V20 L20,10 H50 V35 Z M55,30 H110 V35 H55 Z M15,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M35,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M85,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z",
    width: 110
  },
  "Sleeper Cab": {
    path: "M5,35 V20 L15,10 H60 V35 Z M65,30 H115 V35 H65 Z M15,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M35,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z M90,35 a6,6 0 1,1 -12,0 a6,6 0 0,1 12,0 z",
    width: 115
  },
  "Bucket Truck": {
    path: "M5,35 V20 L20,15 H35 V35 Z M37,30 H115 V35 H37 M70,5 L110,12 L110,25" + " M105,25 L115,25 L115,30 L105,30 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M85,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Furniture Truck": {
    path: "M5,35 V20 L20,15 H35 V35 Z M37,5 H115 V35 H37 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Refuse Truck": {
    path: "M5,35 V20 L15,15 H30 V35 Z M32,5 H100 L115,15 V35 H32 M100,5 V15 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M70,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M90,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Cement Truck": {
    path: "M5,35 V20 L15,15 H30 V35 Z H115 V35 H32 M50,10 A25,12 0 0,1 105,25 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  },
  "Dump Truck": {
    path: "M5,35 V20 L15,15 H30 V35 Z M32,10 H115 V35 H32 M32,10 L115,5 Z M20,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M75,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z M95,35 a5,5 0 1,1 -10,0 a5,5 0 0,1 10,0 z",
    width: 115
  }
};

const VehicleIcon = ({ type, color }: { type: string, color: string }) => {
  const data = VEHICLE_DATA[type] || VEHICLE_DATA["Pickup Truck"];

  return (
    <svg
      viewBox={`0 0 ${data.width} 40`}
      className="w-full h-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
      style={{ fill: color }}
    >
      <path d={data.path} />
    </svg>
  );
};

const VehicleSilhouette = ({ type, color }: { type: string, color: string }) => {
  return (
    <div className="flex flex-col items-center group flex-shrink-0">
      <div className="h-16 w-32 relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
        <VehicleIcon type={type} color={color} />
      </div>
      <span className="text-[9px] md:text-[11px] mt-1.5 whitespace-nowrap text-slate-800 font-black uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
        {type}
      </span>
    </div>
  );
};

const VehicleClassesSection = () => {
  return (
    <section className="relative bg-[#ced4da] py-20 px-4 md:py-24 overflow-hidden font-sans border-t border-slate-900/10">
      {/* METALLIC BACKGROUND TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/brushed-alum.png')" }} />

      {/* INDUSTRIAL OVERLAYS */}
      <div className="absolute top-10 left-[-100px] opacity-10 animate-spin-slow">
        <Compass className="w-96 h-96 text-slate-900" />
      </div>
      <div className="absolute bottom-[-100px] right-[-100px] opacity-5">
        <Cpu className="w-[500px] h-[500px] text-slate-900" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* HEADER BAR */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-white/40 border border-slate-900/10 px-8 py-1.5 rounded-full mb-6 shadow-sm backdrop-blur-sm">
            <span className="text-[10px] md:text-[12px] font-black text-slate-800 tracking-[0.4em] uppercase">
              PROFESSIONAL TOWING SOLUTIONS - CAPACITY GUIDE
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-[900] text-slate-900 tracking-tighter uppercase leading-[0.9] drop-shadow-md pb-2">
            VEHICLE TOWING & <br className="hidden md:block" /> CLASSIFICATION GUIDE
          </h2>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12">
          {/* Left Column (4, 3, 2, 1) */}
          <div className="space-y-8">
            {classes.filter(c => c.column === "left").map((vClass) => (
              <ClassCard key={vClass.id} vClass={vClass} />
            ))}
          </div>

          {/* Right Column (8, 7, 6, 5) */}
          <div className="space-y-8">
            {classes.filter(c => c.column === "right").sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((vClass) => (
              <ClassCard key={vClass.id} vClass={vClass} />
            ))}
          </div>
        </div>

        {/* FOOTER BAR */}
        {/* <div className="mt-20 flex justify-center">
          <div className="text-[11px] font-black text-slate-700 bg-white/60 px-12 py-3 rounded-full border border-slate-900/10 tracking-[0.5em] uppercase backdrop-blur-md shadow-lg group hover:bg-slate-900 hover:text-white transition-all cursor-default scale-90 md:scale-100">
            NATIONWIDE ROADSIDE | TOWEXPERT.COM
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const ClassCard = ({ vClass }: { vClass: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white/95 border border-slate-900/10 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),0_10px_15px_-5px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 group hover:translate-y-[-6px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]"
    >
      <div className="flex items-center h-16 bg-gradient-to-r from-slate-50 to-white border-b border-slate-900/5 relative">
        {/* TAB TITLE */}
        <div
          className="h-full px-8 flex items-center justify-center min-w-[140px] relative transition-all duration-500 overflow-visible"
          style={{ backgroundColor: vClass.color }}
        >
          <span className="text-white text-base md:text-2xl font-black italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] relative z-10">
            {vClass.title.toUpperCase()}
          </span>
          {/* Angle cut / Tab effect */}
          <div className="absolute right-[-18px] top-0 bottom-0 w-10 skew-x-[-15deg] origin-left shadow-[6px_0_15px_rgba(0,0,0,0.15)] z-0" style={{ backgroundColor: vClass.color }} />
        </div>

        {/* WEIGHT INFO */}
        <div className="flex-grow flex items-center pl-14 pr-4">
          <span className="text-slate-900 text-[11px] md:text-[18px] font-black tracking-widest uppercase opacity-90 drop-shadow-sm">
            | {vClass.weight}
          </span>
        </div>

        {/* HOOK ICON BUTTON */}
        <div className="flex items-center pr-6">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-slate-900/10 shadow-lg group-hover:scale-110 transition-transform duration-500 ring-2 ring-transparent group-hover:ring-slate-900/5">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current transition-transform duration-500 group-hover:rotate-12" style={{ color: vClass.color }}>
              <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4 10.5V14a4 4 0 1 1-8 0v-4.5a1.5 1.5 0 0 1 3 0V11a2.5 2.5 0 0 0 5 0v-2.5a5.5 5.5 0 1 0-11 0V14a7 7 0 1 0 14 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* VEHICLES GRID */}
      <div className="p-8 md:p-14 overflow-x-auto scrollbar-hide bg-gradient-to-br from-white via-slate-50/50 to-white relative">
        <div className="flex items-center justify-start md:justify-around space-x-12 md:space-x-16 min-w-max px-4 relative z-10">
          {vClass.vehicles.map((v: string) => (
            <VehicleSilhouette key={v} type={v} color={vClass.color} />
          ))}
        </div>
        {/* Subtle decorative background line */}
        <div className="absolute left-0 bottom-6 right-0 h-[1px] bg-slate-900/5" />
      </div>

      {/* RIVETS / ACCENTS */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200 shadow-inner border border-slate-300 opacity-50" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200 shadow-inner border border-slate-300 opacity-50" />
    </motion.div>
  );
};

export default VehicleClassesSection;
