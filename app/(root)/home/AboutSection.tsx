import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center">
      

        {/* Heading */}
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Roadside is in our DNA
        </h2>

        {/* Short supporting line */}
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Decades of nationwide roadside experience for drivers, fleets, and insurance partners.
        </p>

        {/* Body copy */}
        <div className="mt-8 space-y-5 text-left text-sm leading-relaxed text-slate-800 sm:text-base">
          <p>
            National Automobile Club is the premier provider of 24/7 roadside assistance in the USA.
            Our mission is to provide drivers with total road security and unparalleled support when
            and where they need it. Since 1924, our commitment to our customers has not changed and as
            a result, we are proud to support the majority of federal and state fleets, leading
            commercial insurance companies, and Fortune 500 companies throughout the nation.
          </p>

          <p>
            Our network is comprised of more than 18,000 of the nation&apos;s most responsive and
            professional service providers. Due to our long‑standing relationships and high volume, we
            are able to pass on exclusive negotiated pricing and unparalleled service levels to our
            partners and customers.
          </p>

          <p>
            National Automobile Club is your safest choice for reliable and affordable roadside
            assistance anywhere in the nation. Contact us to discuss any towing and/or roadside
            assistance needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
