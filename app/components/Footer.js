import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Truck,
} from "lucide-react";

const services = [
  { name: "All Leads", href: "/leads" },
  { name: "Exclusive Leads", href: "/exclusive-leads" },
  { name: "Product Pricing", href: "/product-pricing" },
  { name: "Lead Quality", href: "/ourleads/lead-quality" },
  { name: "Premium Leads", href: "/ourleads/premium-leads" },
  { name: "Exclusive Premium Leads", href: "/ourleads/exclusive-premium-leads" },
  { name: "Hot Live Call Transfer Leads", href: "/ourleads/Hot-Live-Call-Transfer-Leads" },
  { name: "Car Service Leads", href: "/ourleads/car-service" },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "All Leads", href: "/leads" },
  { name: "Exclusive Leads", href: "/exclusive-leads" },
  { name: "Product Pricing", href: "/product-pricing" },

  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#071c32] text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                <Truck size={23} className="text-white" />
              </span>
              Groupon<span className="text-orange-500">Freight</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Helping auto transport brokers and vehicle shipping businesses
              connect with potential customers through flexible lead generation
              solutions.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Get Started
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white">Our Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white">Contact Us</h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have questions about our lead generation services? Get in touch
              with our team.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:info@grouponfreight.org"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-orange-400"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-orange-500" />
                <span>info@grouponfreight.org</span>
              </a>

              <a
                href="tel:7342622139"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-orange-400"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-orange-500" />
                <span>734-262-2139</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" />
                <span>Serving auto transport businesses across the U.S.</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Fb
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                In
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Ig
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-500">
            © {currentYear} GrouponFreight. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy-policy"
              className="text-slate-400 transition hover:text-orange-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-slate-400 transition hover:text-orange-400"
            >
              Terms & Conditions
            </Link>
            <a
              href="mailto:info@grouponfreight.org"
              className="text-slate-400 transition hover:text-orange-400"
            >
              info@grouponfreight.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}