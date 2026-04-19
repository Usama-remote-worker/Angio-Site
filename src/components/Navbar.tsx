"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
      <div className="section-container flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-serif text-primary tracking-tight">
            Foaz-o-Falah Foundation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-on-surface-variant font-medium hover:text-primary transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" className="bg-primary-container text-on-primary-container px-6 py-2.5 font-bold hover:opacity-90 transition-all">
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-on-surface-variant hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="block bg-primary text-on-primary text-center py-3 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
