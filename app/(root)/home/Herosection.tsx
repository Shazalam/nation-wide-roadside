
import { Button } from "@/app/components/common/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ChevronRight, MapPin, Clock } from "lucide-react";

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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent backdrop-blur-md mb-8"
          >
            <Clock className="h-4 w-4" />
            <span>Operational Excellence 24/7/365</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 text-balance"
          >
            Nationwide <span className="text-brand-accent">Fleet</span> & <br /> Roadside Support
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl text-balance"
          >
            Providing high-priority commercial dispatch services across all 50 states. We specialize in heavy-duty towing, fleet recovery, and on-site mechanical support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-brand-accent text-slate-950 hover:bg-white hover:text-brand-accent transition-all group font-bold"
            >
              <Phone className="mr-2 h-5 w-5 fill-current" />
              CALL DISPATCH: (800) 555-0199
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-all group font-bold text-white"
            >
              View Service Area
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-8 items-center"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">45m</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Avg Response</span>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">25k+</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Fleet Partners</span>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">All</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">50 US States</span>
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
