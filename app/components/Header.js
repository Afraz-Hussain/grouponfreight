"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
   { name: "All Leads", href: "/leads" },
     { name: "Exclusive Leads", href: "/exclusive-leads" },
      { name: "Product Pricing", href: "/product-pricing" },
         { name: "Freight shipping", href: "/freight-shipping" },
  {
    name: "Our Leads",
    children: [
     
    
     
      { name: "Lead Quality", href: "/ourleads/lead-quality" },
           { name: "Premium Leads", href: "/ourleads/premium-leads" },
                { name: "Exclusive Leads", href: "/ourleads/exclusive-premium-leads" },
                {name: "Hot Live Call Transfer Leads", href: "/ourleads/Hot-Live-Call-Transfer-Leads" },
                { name: "Car Service Leads", href: "/ourleads/car-service" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-[#0b2946]"
        >
          Groupon<span className="text-orange-500">Freight</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-orange-500"
                  aria-expanded={dropdownOpen}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full w-56 pt-3">
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-slate-700 transition hover:text-orange-500"
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="py-2">
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2 font-medium text-slate-800"
                  aria-expanded={dropdownOpen}
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="ml-3 mt-1 border-l-2 border-orange-200 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setDropdownOpen(false);
                        }}
                        className="block rounded-lg px-3 py-3 text-sm text-slate-600 transition hover:text-orange-500"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-medium text-slate-800 hover:text-orange-500"
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}