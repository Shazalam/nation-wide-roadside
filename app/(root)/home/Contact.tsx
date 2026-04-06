import { ContactForm } from "@/app/components/forms/ContactForm";
import { HelpCircle, PhoneCall, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section id="contact" className="relative mesh-gradient py-24 md:py-32 overflow-hidden scroll-mt-20 border-t border-white/5">
      {/* Decorative patterns */}

      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20 pointer-events-none">
        <div className="h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-20 pointer-events-none">
        <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="mb-16 md:mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-blue-500" />
            <span className="text-xs md:text-sm font-black text-blue-400 tracking-[0.4em] uppercase">
              24/7 Priority Fleet Response
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-[1000] text-white leading-[0.85] tracking-tighter uppercase mb-8">
            INSTANT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">DISPATCH</span> SUPPORT
          </h2>

          <p className="max-w-2xl text-slate-300 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-blue-500/30 pl-8 mb-10">
            Need emergency assistance now? Our nationwide network ensures your fleet stays moving. Fill out the form and get prioritised queuing in under 60 seconds.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-white/5">
            <a href="tel:+18556133131" className="flex items-center gap-3 text-white/80 font-bold hover:text-white transition-all group">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-white/20 transition-all">
                <PhoneCall className="h-5 w-5 text-blue-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Direct Dial</span>
                <span className="text-sm md:text-lg tracking-tight">+1 (855) 613-3131</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-white/50 font-bold">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Headphones className="h-5 w-5 text-slate-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Avg response</span>
                <span className="text-sm md:text-lg tracking-tight">&lt; 45 Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
