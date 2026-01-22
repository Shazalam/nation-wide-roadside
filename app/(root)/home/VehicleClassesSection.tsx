// components/home/VehicleClassesSection.tsx
import React from "react";
import Image from "next/image";

import VehicleClassGraphic1 from "../../../public/images/services/VehicleClassGraphic-1.webp";
import VehicleClassGraphic2 from "../../../public/images/services/VehicleClassGraphic-2.webp";
import VehicleClassGraphic3 from "../../../public/images/services/VehicleClassGraphic-3.webp";
import VehicleClassGraphic4 from "../../../public/images/services/VehicleClassGraphic-4.webp";
import VehicleClassGraphic5 from "../../../public/images/services/VehicleClassGraphic-5.webp";
import VehicleClassGraphic6 from "../../../public/images/services/VehicleClassGraphic-6.webp";
import VehicleClassGraphic7 from "../../../public/images/services/VehicleClassGraphic-7.webp";
import VehicleClassGraphic from "../../../public/images/services/VehicleClassGraphic.webp";

const images = [
  VehicleClassGraphic1,
  VehicleClassGraphic2,
  VehicleClassGraphic3,
  VehicleClassGraphic4,
  VehicleClassGraphic5,
  VehicleClassGraphic6,
  VehicleClassGraphic7,
  VehicleClassGraphic
];

const VehicleClassesSection = () => {
  return (
    <section className="bg-[#e8e8e8] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 text-center">
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-blue-600 sm:text-4xl uppercase">
          WE SERVICE ALL CLASSES OF VEHICLES
        </h2>

        {/* Images grid only */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-300"
            >
              <div className="relative h-30 w-full sm:h-35 md:h-40">
                <Image
                  src={img}
                  alt={`Vehicle class graphic ${index + 1}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleClassesSection;
