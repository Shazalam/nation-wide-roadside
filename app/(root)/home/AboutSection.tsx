import React from "react";
import { ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#0f141b] py-16 sm:py-24 relative border-t border-[#1e2632] scroll-mt-24">
      {/* Background linear gradient similar to image subtly showing */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Heading */}
        <h2 className="mb-8 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
          About Nationwide Roadside Assistance
        </h2>

        {/* Body copy */}
        <div className="space-y-6 sm:space-y-7 text-left text-[15px] sm:text-[17px] leading-[1.8] text-slate-300 font-light tracking-wide">
          <p>
            At <strong className="font-semibold text-white">Nationwide Roadside Assistance</strong>, roadside support isn&apos;t a service we offer — it&apos;s the
            foundation we were built on. Founded by <strong className="font-semibold text-white">Kong Lee</strong>, a transportation industry veteran with over <strong className="font-semibold text-white">18
              years of hands-on experience</strong> in freight, logistics, and commercial fleet operations, our company
            was born from a simple but powerful belief: every truck on the road deserves fast, dependable, and
            professional support — no matter the hour, no matter the state.
          </p>

          <p>
            We currently provide dedicated, high-priority roadside assistance exclusively to the logistics
            shipping fleet of <strong className="font-semibold text-white">Nationwide Trans Inc.</strong> — a full-service freight carrier and trusted logistics partner,
            also founded by Kong Lee. This focused model is intentional. By serving a dedicated fleet, we
            deliver <strong className="font-semibold text-white">unmatched response times, consistent service quality, and zero-compromise
              reliability</strong> that a general-market operation simply cannot match.
          </p>

          <p>
            Our dispatch team operates around the clock, coordinating support for <strong className="font-semibold text-white">heavy-duty, medium-duty,
              and passenger light utility vehicles</strong> — from Class 8 semi-trucks and 18-wheelers to box
            trucks, sprinter vans, and fleet sedans. Wherever our drivers are across the country, Nationwide
            Roadside Assistance is on the line, ready to respond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
