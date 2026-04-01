"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRoad, FaCity } from "react-icons/fa";

const locationDetails = [
  { icon: FaMapMarkerAlt, text: "Ruaka, Kiambu County" },
  { icon: FaRoad, text: "Limuru Super Highway" },
  { icon: FaCity, text: "Easy access to Nairobi CBD & Westlands" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            FIND US
          </p>
          <h2 className="font-(family-name:--font-playfair) text-4xl md:text-5xl font-bold text-text mb-6">
            Perfectly Located in Ruaka
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            Lumens sits along the prestigious Limuru Super Highway in Ruaka,
            Nairobi — offering residents seamless connectivity to the CBD,
            Westlands, and beyond. Plot LR No. KIAMBA/RUAKA/7598.
          </p>

          <div className="space-y-5">
            {locationDetails.map((detail) => (
              <div key={detail.text} className="flex items-center gap-4">
                <detail.icon className="text-accent text-lg shrink-0" />
                <span className="text-text">{detail.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden border border-primary"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d36.7172!3d-1.2089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f6b9977631f%3A0x9cd3fbb5bd3e9c55!2sRuaka!5e0!3m2!1sen!2ske!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lumens location — Ruaka, Nairobi"
          />
        </motion.div>
      </div>
    </section>
  );
}
