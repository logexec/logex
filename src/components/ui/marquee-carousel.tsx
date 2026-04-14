"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import abinveb from "@/assets/companies/abinveb.png";
import andina from "@/assets/companies/andina.png";
import arcacontinental from "@/assets/companies/arcacontinental.png";
import natura from "@/assets/companies/natura.png";
import bakels from "@/assets/companies/bakels.png";
import cerveceria from "@/assets/companies/cn.png";
import cocacola from "@/assets/companies/cocacola.png";
import condor from "@/assets/companies/condor.png";
import edesa from "@/assets/companies/edesa.png";
import ge from "@/assets/companies/GE.png";
import jaboneriawilson from "@/assets/companies/jaboneriawilson.png";
import ordeno from "@/assets/companies/ordeno.png";
import mabe from "@/assets/companies/mabe.png";
import promesa from "@/assets/companies/promesa.png";
import sw from "@/assets/companies/Sherwin-Williams.png";
import sika from "@/assets/companies/sika.png";
import acnur from "@/assets/companies/acnur.png";
import un from "@/assets/companies/un.png";
import holcim from "@/assets/companies/holcim.png";
import swissgas from "@/assets/companies/swissgas.png";
import intcomex from "@/assets/companies/intcomex.png";
import reforma from "@/assets/companies/reforma.png";
import lactalis from "@/assets/companies/lactalis.png";
import moderna from "@/assets/companies/moderna.png";
import nestle from "@/assets/companies/nestle.png";
import unicef from "@/assets/companies/unicef.png";

const images = [
  abinveb,
  andina,
  arcacontinental,
  natura,
  bakels,
  cerveceria,
  cocacola,
  condor,
  edesa,
  acnur,
  ordeno,
  ge,
  jaboneriawilson,
  mabe,
  promesa,
  sw,
  sika,
  un,
  holcim,
  swissgas,
  intcomex,
  reforma,
  lactalis,
  moderna,
  nestle,
  unicef
];

export default function MarqueeCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative h-24 w-full overflow-hidden">
      <motion.div className="flex w-max animate-[marquee_55s_linear_infinite] hover:[animation-play-state:paused]">
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-24 mx-4 flex items-center justify-center"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              src={src}
              alt="carousel image"
              className={cn(
                "max-h-24 max-w-36 object-center object-cover grayscale transition-all duration-200",
                hoveredIndex === idx ? "grayscale-0" : ""
              )}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
