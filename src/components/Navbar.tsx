"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem, NavbarProps } from "@/interfaces";

export default function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "#about" },
    { label: "OFFERINGS", href: "#offerings" },
  ];

  const rightNavItems: NavItem[] = [
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className={`w-full bg-[#c84f60] text-[#fff5f6] z-50 sticky top-0 transition-colors shadow-sm ${className}`}>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 h-16 md:h-[70px] flex items-center justify-between">
        {/* Left Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-9 xl:space-x-12 flex-1">
          {leftNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.22em] text-[#ffe6ea] hover:text-white transition-opacity duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center - JUST the Name: The Expression Events (No logo or extra elements) */}
        <div className="flex-1 lg:flex-initial text-center flex justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center tracking-wide hover:opacity-90 transition-opacity"
          >
            <span className="font-serif text-lg sm:text-xl md:text-[23px] tracking-[0.22em] sm:tracking-[0.26em] font-normal uppercase text-white whitespace-nowrap drop-shadow-sm">
              The Expression Events
            </span>
          </Link>
        </div>

        {/* Right Links - Desktop */}
        <nav className="hidden lg:flex items-center justify-end space-x-9 xl:space-x-12 flex-1">
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.22em] text-[#ffe6ea] hover:text-white transition-opacity duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#fff5f6] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#b84052] border-t border-[#d86273] px-6 py-8 flex flex-col space-y-6 text-center">
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium tracking-[0.25em] text-[#fff5f6] hover:text-white py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
