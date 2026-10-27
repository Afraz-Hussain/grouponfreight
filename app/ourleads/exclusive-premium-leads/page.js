"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  DollarSign,
  Lock,
  Star,
  Zap,
  Target,
  BadgeCheck,
  Mail,
  Truck,
} from "lucide-react";

const exclusiveBenefits = [
  {
    icon: Lock,
    title: "Yours Alone",
    description:
      "Every exclusive lead is delivered to one broker only — you. No other GrouponFreight client receives the same contact, giving you an uncontested path to close the sale.",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Qualified",
    description:
      "Each lead goes through a thorough verification process before it reaches you. We confirm intent, contact accuracy, and shipment relevance so your team can act with confidence.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description:
      "The moment your order is confirmed, leads are sent directly to your team. Fast delivery means you can reach the customer while their interest is highest.",
  },
  {
    icon: Target,
    title: "Highest Conversion Potential",
    description:
      "Exclusive leads are selected from our highest-intent inquiries. These are customers actively seeking auto transport — not casual browsers.",
  },
  {
    icon: Users,
    title: "Personalized Customer Service",
    description:
      "We don't just send a list and disappear. GrouponFreight works alongside your team to understand your sales process and help you get the most from every lead.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Partnership",
    description:
      "Our best clients work with us as a true partner — not just a vendor. We learn your workflow, streamline lead delivery, and help your pipeline grow over time.",
  },
];

const comparisons = [
  {
    feature: "Brokers receiving the same lead",
    shared: "Up to 10",
    premium: "Up to 4",
    exclusive: "Only you",
  },
  {
    feature: "Competition on each lead",
    shared: "High",
    premium: "Moderate",
    exclusive: "None",
  },
  {
    feature: "Verification depth",
    shared: "Standard",
    premium: "Enhanced",
    exclusive: "In-depth",
  },
  {
    feature: "Conversion potential",
    shared: "Good",
    premium: "Better",
    exclusive: "Best",
  },
  {
    feature: "Best for",
    shared: "High-volume teams",
    premium: "Growing pipelines",
    exclusive: "Maximum close rate",
  },
];

export default function ExclusiveLeadsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#0f1f33]">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/8 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              <Star size={14} className="fill-orange-400 text-orange-400" />
              Exclusive Lead Packages — GrouponFreight
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              One Lead.{" "}
              <span className="text-orange-400">One Broker.</span>
              <br className="hidden sm:block" /> No Competition.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Exclusive leads from GrouponFreight go to a single broker — you.
              No competing against other companies for the same customer. Just
              a direct, verified connection with someone actively looking to
              ship their vehicle.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/product-pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
              >
                Order Exclusive Leads
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:info@grouponfreight.org"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <Mail size={17} />
                Talk to Our Team
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-5">
              {[
                { icon: ShieldCheck, label: "1 Broker Per Lead" },
                { icon: BadgeCheck, label: "Verified Contacts" },
                { icon: Zap, label: "Instant Delivery" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-sm"
                  >
                    <Icon size={16} className="text-orange-400" />
                    {b.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEM STATEMENT
      ══════════════════════════════════════ */}
      <section className="border-b border-slate-100 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                The Problem with Shared Lists
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Competing Blind Is a Losing Strategy
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  The auto transport market is crowded. Many brokers spend
                  thousands of dollars every month on search ads, SEO, and
                  marketing campaigns — often ranking for less competitive
                  keywords and still not knowing who else is chasing the same
                  customers. That&apos;s a lot of budget with very little
                  certainty.
                </p>
                <p>
                  Even when shared leads do come in, there&apos;s no way of
                  knowing how many other brokers received the same contact.
                  You&apos;re fighting for the customer&apos;s attention
                  without knowing who your competitors are — a classic
                  hit-and-hope strategy that burns resources without
                  predictable results.
                </p>
                <p>
                  GrouponFreight&apos;s exclusive leads solve this entirely.
                  When you order exclusive leads, that customer&apos;s
                  information belongs to you — and only you. No guesswork, no
                  blind competition, just a focused opportunity to close.
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: DollarSign,
                  stat: "Thousands",
                  label: "Spent monthly on marketing by average brokers — often with unpredictable returns.",
                },
                {
                  icon: Users,
                  stat: "Up to 10x",
                  label: "More competitors sharing the same lead on a standard shared list.",
                },
                {
                  icon: Target,
                  stat: "#1",
                  label: "GrouponFreight ranks among the highest conversion rates for exclusive leads in the industry.",
                },
                {
                  icon: ShieldCheck,
                  stat: "100%",
                  label: "Exclusive — no other GrouponFreight client receives your lead.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-orange-200 hover:bg-orange-50/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <Icon size={19} />
                    </div>
                    <p className="mt-4 text-2xl font-extrabold text-[#0f1f33]">{card.stat}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{card.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT EXCLUSIVE MEANS FOR YOU
      ══════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              What You Get
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Exclusive Leads Mean for Your Business
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Exclusivity isn&apos;t just a selling point — it changes the
              entire dynamic of your sales conversation. When a customer
              hears only from you, the relationship starts differently.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exclusiveBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200 transition group-hover:bg-orange-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Side by Side
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How Exclusive Compares
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              See why brokers who want the highest close rate choose exclusive
              leads over shared alternatives.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#0f1f33] text-center text-xs font-bold uppercase tracking-widest text-white">
              <div className="px-4 py-4 text-left text-white/50">Feature</div>
              <div className="px-4 py-4">Shared</div>
              <div className="px-4 py-4">Premium</div>
              <div className="bg-orange-500 px-4 py-4">Exclusive</div>
            </div>

            {comparisons.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-t border-slate-100 text-center text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="px-4 py-4 text-left font-semibold text-slate-700">
                  {row.feature}
                </div>
                <div className="px-4 py-4 text-slate-500">{row.shared}</div>
                <div className="px-4 py-4 text-slate-500">{row.premium}</div>
                <div className="bg-orange-50 px-4 py-4 font-bold text-orange-600 ring-1 ring-inset ring-orange-100">
                  {row.exclusive}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHOOSE QUALITY — CTA SECTION
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
                Choose Quality
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Stop Guessing.{" "}
                <span className="text-orange-400">Start Closing.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-white/60">
                Auto transport brokers who rely on shared lists are always
                fighting battles they can&apos;t see. GrouponFreight&apos;s
                exclusive leads give your team a clear, direct path to the
                customer — no unknown competitors, no wasted follow-ups.
              </p>
              <p className="mt-4 text-base leading-8 text-white/60">
                Our team takes great care in verifying every exclusive lead
                before delivery. We&apos;re proud to offer the highest
                conversion rates in the industry — because we believe quality
                is worth paying for, and so do our clients.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/product-pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
                >
                  Order Exclusive Leads
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="mailto:info@grouponfreight.org?subject=Exclusive%20Lead%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Mail size={17} />
                  Contact Our Team
                </a>
              </div>
            </div>

            {/* Checklist */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                Exclusive leads include
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Delivered to one broker only — no shared distribution",
                  "In-depth verification before every delivery",
                  "Customer contact and shipment details included",
                  "Instant delivery upon order confirmation",
                  "Domestic and international options available",
                  "Personalized support from the GrouponFreight team",
                  "Minimum order starting at just $300",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
                  <Truck size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/35">Get in touch</p>
                  <p className="text-sm font-semibold text-white">
                    info@grouponfreight.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}