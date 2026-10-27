"use client";
import { useState } from "react";
import {
  Users,
  UserRound,
  PhoneCall,
  Ship,
  CheckCircle2,
  ArrowRight,
  Flame,
  Headphones,
  ShieldCheck,
  Sparkles,
  Truck,
  Globe,
  Mail,
  ChevronDown,
} from "lucide-react";

const MINIMUM_ORDER = 300;

const pricingSections = [
  {
    title: "Domestic Car Transport Leads",
    subtitle: "Connect with customers shipping vehicles within the country.",
    icon: Truck,
    products: [
      {
        id: "cheap-shared",
        name: "Cheap Shared Leads",
        price: 2.75,
        brokers: "10 Broker Max",
        icon: Users,
        description:
          "Designed for established brokerages with experienced sales teams. Budget-friendly leads with more competition — fast follow-up and a consistent sales process matter most here.",
        featured: false,
      },
      {
        id: "premium",
        name: "Premium Leads",
        price: 5,
        brokers: "4 Broker Max",
        icon: UserRound,
        description:
          "A balanced option for small and midsized brokerages seeking less competition than standard shared leads, with room to build a stronger pipeline.",
        featured: true,
      },
      {
        id: "exclusive",
        name: "Exclusive Leads",
        price: 20,
        brokers: "1 Broker Max",
        icon: ShieldCheck,
        description:
          "Built for brokerages that want maximum opportunity with each potential customer. Results depend on your sales process, follow-up speed, and market conditions.",
        featured: false,
      },
    ],
  },
  {
    title: "Domestic Car Shipping Calls",
    subtitle: "Speak directly with customers through live calls and transfers.",
    icon: PhoneCall,
    products: [
      {
        id: "live-calls",
        name: "Auto Transport Calls",
        price: 25,
        brokers: "1 Broker Max",
        icon: PhoneCall,
        description:
          "Live call opportunities for teams that prefer direct conversations with prospective vehicle-shipping customers and can respond promptly.",
        featured: true,
      },
    ],
  },
  {
    title: "Specialty Shipping",
    subtitle: "Explore opportunities in specialized transport categories.",
    icon: Ship,
    hot: true,
    products: [
      {
        id: "heavy-haul",
        name: "Heavy Haul Leads",
        price: 25,
        brokers: "1 Broker Max",
        icon: Truck,
        description:
          "Specialized opportunities covering heavy equipment, RV shipping, or boat transport — categories that may offer different pricing and stronger margin opportunities.",
        featured: false,
        specialty: true,
      },
    ],
  },
  {
    title: "International Auto Shipping Leads",
    subtitle: "Reach customers planning to ship vehicles internationally.",
    icon: Globe,
    products: [
      {
        id: "international-shared",
        name: "Shared International Leads",
        price: 2.5,
        brokers: "4 Broker Max",
        icon: Users,
        description:
          "A budget-conscious option for international auto transport brokerages with the capacity to handle shared opportunities and competitive environments.",
        featured: false,
      },
      {
        id: "international-exclusive",
        name: "Exclusive International Leads",
        price: 10,
        brokers: "1 Broker Max",
        icon: ShieldCheck,
        description:
          "International shipping opportunities delivered to one broker — designed for businesses building a focused, high-conversion international sales pipeline.",
        featured: true,
      },
    ],
  },
];

const stats = [
  { value: "10K+", label: "Leads Delivered" },
  { value: "500+", label: "Broker Partners" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "$300", label: "Min. Order" },
];

function money(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function getMinimumQuantity(price) {
  return Math.ceil(MINIMUM_ORDER / price);
}

export default function ProductPricingPage() {
  const [quantities, setQuantities] = useState({
    "cheap-shared": 120,
    premium: 60,
    exclusive: 15,
    "live-calls": 15,
    "heavy-haul": 12,
    "international-shared": 120,
    "international-exclusive": 30,
  });

  function updateQuantity(product, value) {
    const minimumQuantity = getMinimumQuantity(product.price);
    const parsedValue = parseInt(String(value), 10);
    setQuantities((prev) => ({
      ...prev,
      [product.id]: Math.max(
        minimumQuantity,
        Number.isFinite(parsedValue) ? parsedValue : minimumQuantity
      ),
    }));
  }

  function orderProduct(product) {
    const quantity = quantities[product.id];
    const total = quantity * product.price;
    const subject = encodeURIComponent(`Lead Order Inquiry - ${product.name}`);
    const body = encodeURIComponent(
      `Hello GrouponFreight,\n\nI would like to inquire about placing an order.\n\n` +
        `Product: ${product.name}\n` +
        `Price per lead: ${money(product.price)}\n` +
        `Quantity: ${quantity}\n` +
        `Estimated total: ${money(total)}\n\n` +
        `Please provide the next steps for ordering.\n\nThank you.`
    );
    window.location.href = `mailto:info@grouponfreight.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <Truck size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Groupon<span className="text-orange-400">Freight</span>
          </span>
        </div>
        <a
          href="mailto:info@grouponfreight.com"
          className="hidden items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:inline-flex"
        >
          <Mail size={14} />
          Contact Us
        </a>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/imgs/truck2.jpg"
          alt="Semi-truck on the open highway"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        {/* Orange glow accent */}
        <div className="absolute left-0 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:pt-36">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/15 px-4 py-1.5 text-sm font-semibold text-orange-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Trusted by 500+ U.S. Auto Transport Brokers
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Car Shipping Leads
              <br />
              <span className="text-orange-400">That Close Deals.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">
              Shared, premium, exclusive, and live-call packages for domestic
              and international auto transport — with real-time pricing and
              instant order inquiries.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
              >
                View All Packages
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                How It Works
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/8 px-4 py-4 text-center backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <p className="text-2xl font-extrabold text-orange-400">{s.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown size={26} className="text-white/40 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════ PRICING HEADER BAND ═══════════════════════ */}
      <section
        id="pricing"
        className="scroll-mt-16 bg-[#0f1f33] px-6 py-12 sm:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Transparent Pricing
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Choose the Right Package for Your Business
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
              Compare lead types, set your quantity, and get your estimated
              total instantly. Prices confirmed before your order is placed.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-5">
            <ShieldCheck size={34} className="text-orange-400" />
            <div>
              <p className="text-xs font-medium text-white/50">Minimum order</p>
              <p className="text-3xl font-extrabold leading-none text-white">$300</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-white/30">
          Suggested per-lead prices may change with market conditions, demand, and availability.
          Confirm current pricing and lead details with our team before placing your order.
        </p>
      </section>

      {/* ═══════════════════════ PRICING CARDS ═══════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl space-y-24">
          {pricingSections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.title}>
                {/* Section label */}
                <div className="mb-10 border-b border-slate-200 pb-7">
                  {section.hot && (
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                      <Flame size={13} />
                      Hot Products
                    </span>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f1f33] text-white shadow-md">
                      <SectionIcon size={22} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">{section.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div
                  className={`grid grid-cols-1 gap-7 ${
                    section.products.length === 1
                      ? "mx-auto max-w-md"
                      : "md:grid-cols-2 xl:grid-cols-3"
                  }`}
                >
                  {section.products.map((product) => {
                    const ProductIcon = product.icon;
                    const quantity = quantities[product.id];
                    const total = quantity * product.price;
                    const minimumQuantity = getMinimumQuantity(product.price);

                    return (
                      <article
                        key={product.id}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                          product.featured
                            ? "shadow-xl shadow-orange-900/10 ring-2 ring-orange-400"
                            : "shadow-md shadow-slate-200"
                        }`}
                      >
                        {/* Featured ribbon */}
                        {product.featured && (
                          <div className="flex items-center justify-center gap-1.5 bg-orange-500 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
                            <Sparkles size={12} />
                            Most Popular
                          </div>
                        )}

                        {/* Top accent bar for non-featured */}
                        {!product.featured && (
                          <div className="h-1 w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-orange-400 group-hover:via-orange-500 group-hover:to-orange-400 transition-all duration-500" />
                        )}

                        <div className="flex flex-1 flex-col p-7">
                          {/* Icon row */}
                          <div className="flex items-start justify-between">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                product.featured
                                  ? "bg-orange-500 text-white"
                                  : "bg-slate-100 text-[#0f1f33] group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300"
                              }`}
                            >
                              <ProductIcon size={24} />
                            </div>
                            {product.specialty && (
                              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600 ring-1 ring-orange-200">
                                Specialty
                              </span>
                            )}
                          </div>

                          {/* Name + price */}
                          <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                            {product.name}
                          </h3>
                          <div className="mt-3 flex items-baseline gap-1.5">
                            <span className="text-4xl font-extrabold tracking-tight text-[#0f1f33]">
                              {money(product.price)}
                            </span>
                            <span className="text-sm text-slate-400 font-medium">/ lead</span>
                          </div>

                          {/* Feature list */}
                          <ul className="mt-5 space-y-2.5 border-y border-slate-100 py-5">
                            <li className="flex items-center gap-3 text-sm text-slate-700">
                              <CheckCircle2 size={17} className="shrink-0 text-orange-500" />
                              {product.brokers}
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700">
                              <Headphones size={17} className="shrink-0 text-orange-500" />
                              Dedicated customer support
                            </li>
                            {product.specialty && (
                              <li className="flex items-start gap-3 text-sm text-slate-700">
                                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-500" />
                                Heavy equipment, RV &amp; boat transport
                              </li>
                            )}
                          </ul>

                          {/* Description */}
                          <p className="mt-5 flex-1 text-sm leading-7 text-slate-500">
                            {product.description}
                          </p>

                          {/* Quantity calculator */}
                          <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-5">
                            <label
                              htmlFor={`qty-${product.id}`}
                              className="block text-sm font-bold text-slate-800"
                            >
                              How many leads?
                            </label>

                            <div className="mt-3 flex items-center gap-2">
                              <button
                                type="button"
                                aria-label="Decrease quantity"
                                disabled={quantity <= minimumQuantity}
                                onClick={() => updateQuantity(product, quantity - 1)}
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-xl font-light text-slate-600 transition hover:border-orange-400 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
                              >
                                −
                              </button>

                              <input
                                id={`qty-${product.id}`}
                                type="number"
                                min={minimumQuantity}
                                step="1"
                                value={quantity}
                                onChange={(e) => updateQuantity(product, e.target.value)}
                                className="h-11 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-center font-bold text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                              />

                              <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => updateQuantity(product, quantity + 1)}
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-xl font-light text-slate-600 transition hover:border-orange-400 hover:text-orange-600"
                              >
                                +
                              </button>
                            </div>

                            <p className="mt-1.5 text-xs text-slate-400">
                              Minimum order: {minimumQuantity} leads
                            </p>

                            {/* Running total */}
                            <div className="mt-5 flex items-end justify-between border-t border-slate-200 pt-4">
                              <div>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                                  Estimated Total
                                </p>
                                <p className="mt-0.5 text-2xl font-extrabold text-slate-900">
                                  {money(total)}
                                </p>
                              </div>
                              <span className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600 ring-1 ring-orange-100">
                                {quantity} leads
                              </span>
                            </div>
                          </div>

                          {/* CTA button */}
                          <button
                            type="button"
                            onClick={() => orderProduct(product)}
                            className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold transition-all duration-200 active:scale-95 ${
                              product.featured
                                ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200"
                                : "bg-[#0f1f33] text-white hover:bg-orange-500"
                            }`}
                          >
                            Order Now
                            <ArrowRight size={17} />
                          </button>

                          <p className="mt-3 text-center text-xs text-slate-400">
                            Order inquiry · Confirmation required
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section id="how-it-works" className="scroll-mt-16 bg-[#0f1f33] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Getting Started Takes Minutes
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Choose a package, send your inquiry, and our team will confirm
              the details before your order ships.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: Truck,
                title: "Choose Your Leads",
                description:
                  "Browse domestic, specialty, and international packages. Select the tier that fits your sales team's capacity and budget.",
              },
              {
                step: "02",
                icon: Mail,
                title: "Submit Your Inquiry",
                description:
                  "Set your quantity, review your estimated total, and fire off an order inquiry in one click — no account needed.",
              },
              {
                step: "03",
                icon: CheckCircle2,
                title: "Confirm & Start Closing",
                description:
                  "Our team confirms current pricing, availability, and delivery details. You get leads. You close deals.",
              },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {/* Ghost step number */}
                  <span className="absolute right-4 top-4 text-8xl font-extrabold leading-none text-white/5 select-none">
                    {step.step}
                  </span>

                  {/* Icon circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-900/30">
                    <StepIcon size={22} />
                  </div>

                  {/* Connector arrow (not on last item) */}
                  {i < 2 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 sm:block">
                      <ArrowRight size={20} className="text-orange-500/40" />
                    </div>
                  )}

                  <h3 className="mt-6 text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10">
        {/* Reuse truck image */}
        <img
          src="/imgs/truck2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#0a1829]/88" />
        {/* Orange glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
            Get in Touch
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Not Sure Which Package Is Right?
            <br className="hidden sm:block" />
            <span className="text-orange-400"> Let&apos;s Talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/60">
            Our team works with brokerages of all sizes across the U.S. — from
            independent operators to national fleets. We&apos;ll help you find
            the right volume and lead type for your goals.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@grouponfreight.com?subject=Auto%20Transport%20Lead%20Pricing%20Inquiry"
              className="inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-9 py-4 text-base font-bold text-white shadow-xl shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
            >
              <Mail size={18} />
              Email Our Team
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              Back to Pricing
              <ArrowRight size={17} />
            </a>
          </div>

          <p className="mt-8 text-xs text-white/30">
            info@grouponfreight.org &nbsp;·&nbsp; Typically responds within one business day
          </p>
        </div>
      </section>

   
    </main>
  );
}