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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            About the Project
          </p>
          <h2 className="font-(family-name:--font-playfair) text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
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

          {/* Gold Divider */}
          <div className="w-16 h-px bg-accent my-6" />

          <p className="text-text-muted/60 text-sm">
            Developed by Ovation Residences Limited | Designed by Karenge and
            Associates
          </p>
        </motion.div>

        {/* Gold vertical separator — desktop only */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-accent/20" />

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderTopWidth: "6px",
              }}
              className="bg-background-surface border border-white/5 border-t-4 border-t-accent rounded-lg p-8 text-center transition-all"
            >
              <p className="font-(family-name:--font-playfair) text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-text-muted text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
