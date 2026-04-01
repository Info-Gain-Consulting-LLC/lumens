"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8", label: "Floors" },
  { value: "2", label: "Unit Types" },
  { value: "Prime", label: "Location" },
];

export default function About() {
  return (
    <section id="about" className="bg-background-card py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            About the Project
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
            A New Standard of Living in Ruaka
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Lumens is a premium residential development by Ovation Residences
            Limited, offering an elevated living experience along the Limuru
            Super Highway in Ruaka, Nairobi. Designed to blend modern
            architecture with everyday comfort, Lumens rises 8 floors above a
            rapidly growing urban corridor.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            Choose from thoughtfully designed 1 and 2 bedroom units, each
            crafted to maximize natural light and functional space. With
            world-class amenities and a prime location, Lumens redefines what it
            means to call Ruaka home.
          </p>
          <p className="text-text-muted/60 text-sm mt-8">
            Developed by Ovation Residences Limited | Designed by Karenge and
            Associates
          </p>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background-surface border border-white/5 rounded-lg p-8 text-center"
            >
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-text-muted text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
