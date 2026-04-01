"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin, FaLock } from "react-icons/fa";

export default function RegisterInterest() {
  return (
    <section
      id="register"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(to bottom, #0d0d0d, #1a3a2a)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Header */}
        <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
          LIMITED UNITS AVAILABLE
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-text mb-4">
          Register Your Interest
        </h2>
        <p className="text-text-muted mb-12 max-w-lg mx-auto">
          Be the first to receive updates on availability, viewings, and
          exclusive pre-launch offers.
        </p>

        {/* Auth Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => console.log("Google auth - coming Day 4")}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <FaGoogle className="text-red-500 text-xl" />
            Continue with Google
          </button>

          <button
            onClick={() => console.log("LinkedIn auth - coming Day 4")}
            className="w-full flex items-center justify-center gap-3 bg-[#0077B5] text-white font-medium py-4 rounded-lg hover:bg-[#006399] transition-colors duration-300"
          >
            <FaLinkedin className="text-white text-xl" />
            Continue with LinkedIn
          </button>
        </div>

        {/* Privacy Text */}
        <p className="text-text-muted text-sm mb-6">
          By registering, you agree to receive updates about Lumens. We respect
          your privacy and will never share your details.
        </p>

        <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
          <FaLock className="text-accent text-xs" />
          <span>
            Your information is secure and will only be used to send you project
            updates.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
