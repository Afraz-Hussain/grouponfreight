"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  Users,
  Star,
  Target,
  Zap,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  FileText,
  Mail,
  Phone,
  Search,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description:
      "We generate international auto transport leads for carriers and brokers operating across global shipping routes — not limited to domestic markets.",
  },
  {
    icon: Zap,
    title: "Real-Time Delivery",
    description:
      "Leads are delivered instantly — no time delays, no stale contacts sitting in a queue. Your team reaches prospects while their intent is at its strongest.",
  },
  {
    icon: ShieldCheck,
    title: "Not Widely Shared",
    description:
      "Our international leads are not mass-distributed to dozens of brokers. Limited distribution means less competition for every opportunity you receive.",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Qualified",
    description:
      "Every lead goes through a qualification process to confirm genuine interest in international vehicle shipping before it ever reaches your sales team.",
  },
  {
    icon: Target,
    title: "Informed Prospects",
    description:
      "Our leads come from customers who have engaged with content specific to international auto transport — not generic form fills collected from unrelated websites.",
  },
  {
    icon: TrendingUp,
    title: "High Conversion Rate",
    description:
      "Because our prospects are informed and engaged before they reach you, GrouponFreight consistently delivers international leads with strong conversion potential.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Targeted Content & SEO",
    description:
      "Our writers and search engine marketers create content built around international car shipping terms, attracting prospects who are actively researching overseas vehicle transport.",
  },
  {
    number: "02",
    icon: Users,
    title: "Prospect Engages",
    description:
      "A customer researching international auto shipping finds our content, engages with it, and expresses genuine interest in speaking with a carrier or broker.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Lead Is Qualified",
    description:
      "Our team confirms the prospect has a real international shipping need. Only qualified, verified leads make it into our delivery pipeline.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Delivered to You",
    description:
      "The lead is routed directly to your sales team in real time. No delays — your team connects with the prospect when their interest is highest.",
  },
];

const stats = [
  { value: "Global", label: "Worldwide reach" },
  { value: "Real-Time", label: "Instant delivery" },
  { value: "Limited", label: "Distribution per lead" },
  { value: "$300", label: "Minimum order" },
];

export default function InternationalLeadsPage() {
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
              <Globe size={14} className="text-orange-400" />
              International Lead Generation — GrouponFreight
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              International Car{" "}
              <span className="text-orange-400">Shipping Leads</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              High-converting auto transport leads for international vehicle
              shippers. We deliver highly targeted, real-time prospects to
              carriers and brokers operating worldwide — no artificial delays,
              no mass distribution.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/product-pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
              >
                Order International Leads
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:info@grouponfreight.org"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <Mail size={17} />
                Contact Our Team
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 px-4 py-4 text-center backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <p className="text-2xl font-extrabold text-orange-400">{s.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO — LEADS THAT CONVERT
      ══════════════════════════════════════ */}
      <section className="border-b border-slate-100 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Built for International Carriers & Brokers
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Leads That Convert for International Auto Transport
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  GrouponFreight generates top-tier sales leads and delivers
                  highly targeted customers for auto transport companies,
                  brokers, and carriers operating across global shipping routes.
                  International auto transport lead generation is one of our
                  specialties — and our approach is a time-tested, industry-proven
                  method of delivering quality prospects in real time.
                </p>
                <p>
                  Unlike services that water down lead quality through excessive
                  sharing or time delays, we limit distribution and deliver
                  leads the moment they&apos;re qualified. Your sales team
                  receives prospects who are informed, engaged, and actively
                  seeking international vehicle shipping solutions.
                </p>
                <p>
                  Whether you&apos;re handling vehicle exports, imports, or
                  overseas relocations, GrouponFreight connects you with the
                  customers your business needs to grow in the international
                  market.
                </p>
              </div>
            </div>

            {/* Feature highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Global shipping customers",
                  body: "Prospects actively researching international vehicle transport — not generic inquiries.",
                },
                {
                  icon: Clock,
                  title: "No time delays",
                  body: "Real-time delivery means you reach prospects before a competitor does.",
                },
                {
                  icon: FileText,
                  title: "Industry-specific content",
                  body: "Our SEO and content teams attract customers searching for international auto shipping terms.",
                },
                {
                  icon: Star,
                  title: "Proven track record",
                  body: "GrouponFreight consistently delivers high-volume, high-quality overseas transport prospects.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-orange-200 hover:bg-orange-50/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <Icon size={19} />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INFORMED CUSTOMERS
      ══════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Quality Over Quantity
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Informed Customers Simplify the Sales Process
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We don&apos;t just collect names and phone numbers. Our dedicated
              team of writers and search engine marketers work together to
              attract customers who already understand international auto
              transport — making your sales team&apos;s job significantly easier.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
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
          HOW WE GENERATE LEADS
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              How We Generate International Leads
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50">
              A proven, end-to-end process that attracts, qualifies, and
              delivers international shipping prospects directly to your team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span className="absolute right-4 top-3 text-7xl font-extrabold leading-none text-white/5 select-none">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-900/30">
                    <Icon size={22} />
                  </div>

                  {i < process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight size={18} className="text-orange-500/40" />
                    </div>
                  )}

                  <h3 className="mt-6 text-base font-extrabold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GET STARTED — CTA
      ══════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Get Started Today
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Contact GrouponFreight and{" "}
                <span className="text-orange-500">Start Receiving Leads Today</span>
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  If you&apos;re ready to grow your international auto transport
                  business with high-quality, real-time leads, GrouponFreight is
                  ready to help. Our team is standing by to answer your questions,
                  walk you through available lead options, and find a package that
                  fits your sales capacity and budget.
                </p>
                <p>
                  We can also help you explore how our real-time lead delivery
                  integrates with your existing sales workflow and customer
                  management process — so your team spends less time managing
                  lists and more time closing international shipments.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/product-pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-400 active:scale-95"
                >
                  View International Packages
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="mailto:info@grouponfreight.org?subject=International%20Auto%20Transport%20Lead%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-8 py-3.5 font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  <Mail size={17} />
                  Email Our Team
                </a>
              </div>
            </div>

            {/* Checklist card */}
            <div className="rounded-2xl border border-slate-200 bg-[#0f1f33] p-8 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                International leads include
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Shared and exclusive international options available",
                  "Prospects informed about overseas vehicle shipping",
                  "Real-time delivery — no delays, no stale contacts",
                  "Limited distribution per lead — less competition",
                  "Customers sourced through industry-specific content",
                  "Verified shipping intent before delivery",
                  "Personalized support from GrouponFreight team",
                  "$300 minimum order to get started",
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                  <Globe size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/35">Reach our team</p>
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