"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin, FaLock, FaUsers } from "react-icons/fa";

export default function RegisterInterest() {
  return (
    <section id="register" className="py-24 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to bottom, #0d0d0d, #1a3a2a)",
            "linear-gradient(to bottom, #0d0d0d, #1f4533)",
            "linear-gradient(to bottom, #0d0d0d, #1a3a2a)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        {/* Header */}
        <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
          LIMITED UNITS AVAILABLE
        </p>
        <h2 className="font-(family-name:--font-playfair) text-4xl md:text-5xl font-bold text-text mb-4">
          Register Your Interest
        </h2>
        <p className="text-text-muted mb-8 max-w-lg mx-auto">
          Be the first to receive updates on availability, viewings, and
          exclusive pre-launch offers.
        </p>

        {/* Urgency Nudge */}
        <div className="inline-block border border-accent/40 bg-background/50 rounded-full px-5 py-2 text-sm text-accent mb-8">
          8-Floor Development &middot; Limited Units
        </div>

        {/* Auth Buttons */}
        <div className="space-y-4 mb-4">
          <button
            onClick={() => console.log("Google auth - coming Day 4")}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <FaGoogle className="text-red-500 text-xl" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-text-muted text-sm">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <button
            onClick={() => console.log("LinkedIn auth - coming Day 4")}
            className="w-full flex items-center justify-center gap-3 bg-[#0077B5] text-white font-medium py-4 rounded-lg hover:bg-[#006399] transition-colors duration-300"
          >
            <FaLinkedin className="text-white text-xl" />
            Continue with LinkedIn
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-6 mt-6">
          <FaUsers className="text-accent" />
          <span>Join others who have already registered their interest</span>
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
