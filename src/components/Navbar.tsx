"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-outline/10">
      <div className="section-container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-neutral">
            ANGIO
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral/70 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" className="btn-primary py-2 px-6">
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-outline/10 py-6 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg text-neutral/80"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="block btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
