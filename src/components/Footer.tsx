"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Units", href: "#units" },
  { label: "Location", href: "#location" },
  { label: "Register", href: "#register" },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <div className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-(family-name:--font-playfair) text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Ready to Make Lumens Your Home?
          </h3>
          <a
            href="#register"
            className="px-8 py-3 bg-accent text-background font-medium rounded hover:bg-accent-light transition-colors shrink-0"
          >
            Register Interest
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="font-(family-name:--font-playfair) text-accent text-lg font-bold tracking-widest">
            LUMENS
          </p>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-accent hover:text-accent-light transition-colors text-lg"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Ovation Residences Limited. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
