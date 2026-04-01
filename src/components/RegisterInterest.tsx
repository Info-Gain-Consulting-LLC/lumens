"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import {
  FaGoogle,
  FaLinkedin,
  FaCheckCircle,
  FaLock,
  FaUsers,
  FaExclamationCircle,
} from "react-icons/fa";

type RegisterState = "default" | "loading" | "success" | "error";

export default function RegisterInterest() {
  const [state, setState] = useState<RegisterState>("default");
  const [loadingProvider, setLoadingProvider] = useState<
    "google" | "linkedin" | null
  >(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setState("success");
      window.history.replaceState({}, "", "/#register");
    }
    if (searchParams.get("error") === "auth") {
      setState("error");
      window.history.replaceState({}, "", "/#register");
    }
  }, [searchParams]);

  const handleOAuth = async (provider: "google" | "linkedin_oidc") => {
    try {
      setLoadingProvider(provider === "google" ? "google" : "linkedin");
      setState("loading");
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("OAuth error:", error);
      setState("error");
      setLoadingProvider(null);
    }
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #0d0d0d 0%, #1a3a2a 100%)",
            "linear-gradient(135deg, #1a3a2a 0%, #0d0d0d 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          {/* SUCCESS STATE */}
          {state === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <FaCheckCircle className="text-accent mx-auto mb-6" size={64} />
              </motion.div>
              <h2 className="font-(family-name:--font-playfair) text-4xl font-bold text-white mb-4">
                You&apos;re Registered!
              </h2>
              <p className="text-text-muted text-lg mb-8">
                Thank you for your interest in Lumens. We&apos;ll be in touch
                with exclusive updates, viewings, and pre-launch offers.
              </p>
              <div className="bg-background-card border border-primary rounded-lg p-6">
                <p className="text-text-muted text-sm">
                  <span className="text-accent font-semibold">
                    What happens next?
                  </span>
                  <br />
                  <br />
                  Our team at Ovation Residences Limited will reach out to you
                  personally with details about unit availability, pricing, and
                  scheduled viewings.
                </p>
              </div>
            </motion.div>
          )}

          {/* ERROR STATE */}
          {state === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <FaExclamationCircle
                className="text-red-400 mx-auto mb-6"
                size={48}
              />
              <h2 className="font-(family-name:--font-playfair) text-3xl font-bold text-white mb-4">
                Something went wrong
              </h2>
              <p className="text-text-muted mb-8">
                We couldn&apos;t complete your registration. Please try again.
              </p>
              <button
                onClick={() => setState("default")}
                className="border border-accent text-accent px-8 py-3 rounded hover:bg-accent hover:text-background transition-all"
              >
                Try Again
              </button>
            </motion.div>
          )}

          {/* DEFAULT + LOADING STATE */}
          {(state === "default" || state === "loading") && (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Urgency pill */}
              <div className="inline-flex items-center gap-2 border border-accent/40 bg-background/50 rounded-full px-5 py-2 mb-8">
                <span className="text-accent text-sm">
                  8-Floor Development &middot; Limited Units
                </span>
              </div>

              {/* Header */}
              <p className="text-accent uppercase tracking-widest text-sm mb-4">
                REGISTER YOUR INTEREST
              </p>
              <h2 className="font-(family-name:--font-playfair) text-4xl md:text-5xl font-bold text-text mb-6">
                Be First in Line
              </h2>
              <p className="text-text-muted text-lg mb-12 max-w-xl mx-auto">
                Be the first to receive updates on availability, viewings, and
                exclusive pre-launch offers for Lumens.
              </p>

              {/* Auth buttons */}
              <div className="flex flex-col gap-4 mb-8">
                <button
                  onClick={() => handleOAuth("google")}
                  disabled={state === "loading"}
                  className="flex items-center justify-center gap-3 w-full bg-white text-gray-800 font-medium py-4 px-6 rounded-lg hover:bg-gray-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loadingProvider === "google" ? (
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-800 rounded-full animate-spin" />
                  ) : (
                    <FaGoogle className="text-red-500" size={20} />
                  )}
                  Continue with Google
                </button>

                {/* OR divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-text-muted text-sm">or</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <button
                  onClick={() => handleOAuth("linkedin_oidc")}
                  disabled={state === "loading"}
                  className="flex items-center justify-center gap-3 w-full bg-[#0077B5] text-white font-medium py-4 px-6 rounded-lg hover:bg-[#006399] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loadingProvider === "linkedin" ? (
                    <div className="w-5 h-5 border-2 border-blue-300 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FaLinkedin size={20} />
                  )}
                  Continue with LinkedIn
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-6">
                <FaUsers className="text-accent" />
                <span>
                  Join others who have already registered their interest
                </span>
              </div>

              {/* Privacy note */}
              <div className="flex items-center justify-center gap-2 text-text-muted text-xs">
                <FaLock className="text-accent" size={10} />
                <span>
                  Your information is secure and will only be used to send you
                  Lumens project updates. We will never share your details.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
