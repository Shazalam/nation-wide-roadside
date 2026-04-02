import { Button } from "@/app/components/common/Button";
import Image from "next/image";
import { MoveRight, Phone, ChevronRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck-1.jpg"
          alt="Fleet Emergency Service"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md mb-8"
          >
            <Clock className="h-4 w-4" />
            <span>DISPATCH AVAILABLE 24/7</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-7xl mb-6"
          >
            NATIONWIDE <br /> <span className="text-blue-500">ROADSIDE</span> ASSISTANCE
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 text-sm md:text-base font-semibold tracking-widest text-slate-300 uppercase"
          >
            Commercial Dispatch & Fleet Recovery • All 50 States
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-200 mb-10 leading-relaxed max-w-2xl text-balance pl-4 border-l-2 border-blue-500"
          >
            Providing high-priority roadside assistance services exclusively for Nationwide Trans 
            Inc.&apos;s logistics shipping fleet — covering heavy-duty, medium-duty, and passenger light 
            utility vehicles across all 50 states, around the clock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
          >
            <a href="tel:+18556133131">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all font-semibold cursor-pointer"
              >
                <Phone className="mr-2 h-5 w-5 fill-current" />
                CALL DISPATCH: (855) 613-3131
              </Button>
            </a>

            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-all group font-semibold text-white"
            >
              View Service Area
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-6 items-center"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight leading-none mb-1">50</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">States<br className="hidden sm:block"/>Covered</span>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight leading-none mb-1">24/7</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Live<br className="hidden sm:block"/>Dispatch</span>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight leading-none mb-1">3</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Vehicle<br className="hidden sm:block"/>Classes</span>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight leading-none mb-1">HDT</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Heavy-Duty<br className="hidden sm:block"/>Certified</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="h-6 w-px bg-white" />
      </div>
    </section>
  );
}
