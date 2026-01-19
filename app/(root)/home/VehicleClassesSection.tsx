// components/home/VehicleClassesSection.tsx
import React from "react";

const classes = [
  {
    range: "CLASS 1",
    weight: "6,000 lbs or less",
    vehicles: ["Pickup truck", "Cargo van", "SUV", "Minivan"]
  },
  {
    range: "CLASS 2",
    weight: "6,001 to 10,000 lbs",
    vehicles: ["Full-size pickup", "Cargo van", "Step van", "Minivan"]
  },
  {
    range: "CLASS 3",
    weight: "10,001 to 14,000 lbs",
    vehicles: ["Heavy-duty pickup", "Walk-in van", "City delivery", "Box truck"]
  },
  {
    range: "CLASS 4",
    weight: "14,001 to 16,000 lbs",
    vehicles: ["Large walk-in van", "City delivery", "Box truck"]
  },
  {
    range: "CLASS 5",
    weight: "16,001 to 19,500 lbs",
    vehicles: ["Bucket truck", "Large walk-in van", "City delivery"]
  },
  {
    range: "CLASS 6",
    weight: "19,501 to 26,000 lbs",
    vehicles: ["School bus", "Beverage truck", "Rack truck", "Single axle"]
  },
  {
    range: "CLASS 7",
    weight: "26,001 to 33,000 lbs",
    vehicles: ["City bus", "Furniture", "Refuse", "Truck tractor"]
  },
  {
    range: "CLASS 8",
    weight: "33,001+ lbs",
    vehicles: ["Truck tractor", "Cement truck", "Dump truck", "Sleeper cab"]
  }
];

const VehicleClassesSection = () => {
  return (
    <section className="bg-brand-mutedBg py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-base font-semibold uppercase tracking-[0.22em] text-brand-primary sm:text-lg">
          WE SERVICE ALL CLASSES OF VEHICLES
        </h2>

        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          From light‑duty pickups to heavy‑duty tractors and buses, our network supports
          every major vehicle class on the road.
        </p>

        {/* Classes grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          {classes.map((group) => (
            <div
              key={group.range}
              className="rounded-xl bg-white/90 p-4 text-left shadow-sm ring-1 ring-slate-200/70"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {group.range}
                </p>
                <p className="text-[11px] font-medium text-amber-700">
                  {group.weight}
                </p>
              </div>

              {/* Vehicle silhouettes (placeholder blocks; replace with SVG or images later) */}
              <div className="mt-4 flex flex-wrap gap-3">
                {group.vehicles.map((vehicle) => (
                  <div
                    key={vehicle}
                    className="flex flex-col items-center gap-1 text-[10px] text-slate-500"
                  >
                    {/* silhouette placeholder */}
                    <div className="h-8 w-14 rounded bg-slate-300/70" />
                    <span className="text-[10px] uppercase tracking-[0.14em]">
                      {vehicle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleClassesSection;
