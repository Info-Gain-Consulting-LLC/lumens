"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface UnitCard {
  badge: string;
  title: string;
  image: string;
  imageAlt: string;
  features: string[];
}

const units: UnitCard[] = [
  {
    badge: "1 BEDROOM",
    title: "One Bedroom Apartment",
    image: "/images/june27-07.jpg",
    imageAlt: "Lumens 1 bedroom apartment living room",
    features: [
      "Open plan living & dining area",
      "Fully fitted kitchen",
      "Master bedroom with ensuite",
      "Private balcony",
      "Ceramic tile finishes throughout",
      "Permanent ventilation (pv) openings",
    ],
  },
  {
    badge: "2 BEDROOM",
    title: "Two Bedroom Apartment",
    image: "/images/june27-09.jpg",
    imageAlt: "Lumens 2 bedroom apartment lounge",
    features: [
      "Spacious open plan living & dining",
      "Fully fitted kitchen with island",
      "Master bedroom with ensuite",
      "Second bedroom",
      "Two bathrooms",
      "Private balcony",
      "Ceramic tile finishes throughout",
      "Permanent ventilation (pv) openings",
    ],
  },
];

export default function UnitTypes() {
  return (
    <section id="units" className="py-24 px-6 bg-background-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            THE RESIDENCES
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-text mb-4">
            Choose Your Home
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Thoughtfully designed 1 and 2 bedroom apartments
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.badge}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background-surface rounded-lg overflow-hidden border-t-4 border-accent"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={unit.image}
                  alt={unit.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">
                  {unit.badge}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-text mb-6">
                  {unit.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {unit.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FaCheck className="text-accent mt-1 flex-shrink-0 text-sm" />
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Pricing</span>
                    <span className="text-accent font-medium">Contact Us</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#register"
                  className="block w-full text-center bg-accent text-background font-medium py-3 rounded-lg hover:bg-accent-light transition-colors duration-300"
                >
                  Enquire About This Unit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
