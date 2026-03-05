import { ContactForm } from "@/app/components/forms/ContactForm";
import { HelpCircle, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <section id="contact" className="relative mesh-gradient py-20 sm:py-28 overflow-hidden scroll-mt-20">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20 pointer-events-none">
        <div className="h-96 w-96 rounded-full bg-brand-primary blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-20 pointer-events-none">
        <div className="h-96 w-96 rounded-full bg-brand-accent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-accent backdrop-blur-sm mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Priority Fleet Support</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Instant Dispatch <span className="text-brand-accent">&</span> Queuing
          </h2>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Need emergency assistance now? Join our priority queuing system to get a dispatch specialist assigned to your vehicle in under 60 seconds.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 text-white font-semibold">
              <PhoneCall className="h-5 w-5 text-brand-accent" />
              <span>Direct Emergency: +1 (800) XXX-XXXX</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}