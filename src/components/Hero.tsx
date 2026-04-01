"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 300]);

  const scrollToRegister = () => {
    const el = document.querySelector("#register");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Loading Fallback */}
      {!videoLoaded && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #0d0d0d, #1a3a2a)",
          }}
        />
      )}

      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="w-full h-[130%] object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-accent text-xs tracking-[0.3em] uppercase mb-6"
        >
          Ruaka, Nairobi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-(family-name:--font-playfair) text-6xl md:text-8xl font-bold text-white tracking-wider mb-6"
        >
          LUMENS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mb-10"
        >
          Luxury Residences Along the Limuru Super Highway
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToRegister}
          className="px-8 py-3.5 bg-accent text-background font-medium tracking-wide rounded hover:bg-accent-light transition-colors"
        >
          Register Your Interest
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
