"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Gallery", href: "#gallery", sectionId: "gallery" },
  { label: "Units", href: "#units", sectionId: "units" },
  { label: "Location", href: "#location", sectionId: "location" },
  { label: "Register", href: "#register", sectionId: "register" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((link) => {
      const el = document.getElementById(link.sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.sectionId);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-(family-name:--font-playfair) text-2xl font-bold tracking-widest text-accent"
        >
          LUMENS
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-sm tracking-wide uppercase transition-colors relative pb-1 ${
                  activeSection === link.sectionId
                    ? "text-accent"
                    : "text-text-muted hover:text-accent"
                }`}
              >
                {link.label}
                {activeSection === link.sectionId && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          onClick={() => handleClick("#register")}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block px-5 py-2.5 bg-accent text-background text-sm font-medium tracking-wide rounded hover:bg-accent-light transition-colors"
        >
          Register Interest
        </motion.button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text text-2xl"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    activeSection === link.sectionId
                      ? "text-accent"
                      : "text-text-muted hover:text-accent"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleClick("#register")}
                className="px-5 py-2.5 bg-accent text-background text-sm font-medium tracking-wide rounded hover:bg-accent-light transition-colors"
              >
                Register Interest
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
