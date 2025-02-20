"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";
import abinveb from "@/assets/companies/abinveb.png";
import andina from "@/assets/companies/andina.png";
import arcacontinental from "@/assets/companies/arcacontinental.png";
import avon from "@/assets/companies/avon.png";
import bakels from "@/assets/companies/bakels.png";
import cerveceria from "@/assets/companies/cn.png";
import cocacola from "@/assets/companies/cocacola.png";
import condor from "@/assets/companies/condor.png";
import durex from "@/assets/companies/durex.png";
import edesa from "@/assets/companies/edesa.png";
import ge from "@/assets/companies/GE.png";
import jaboneriawilson from "@/assets/companies/jaboneriawilson.png";
import mabe from "@/assets/companies/mabe.png";
import promesa from "@/assets/companies/promesa.png";
import sw from "@/assets/companies/Sherwin-Williams.png";
import sika from "@/assets/companies/sika.png";

const images = [
  abinveb,
  andina,
  arcacontinental,
  avon,
  bakels,
  cerveceria,
  cocacola,
  condor,
  durex,
  edesa,
  ge,
  jaboneriawilson,
  mabe,
  promesa,
  sw,
  sika,
];

export default function MarqueeCarousel() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!paused) {
      controls.start({
        transform: ["translateX(0%)", "translateX(-100%)"],
        transition: { duration: 75, repeat: Infinity, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <div
      className="relative w-full overflow-hidden h-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div className="flex w-max" ref={marqueeRef} animate={controls}>
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
