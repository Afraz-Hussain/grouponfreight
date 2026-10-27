"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  LayoutGrid,
  Headphones,
  TrendingUp,
  Users,
  ShieldCheck,
  PhoneCall,
  Star,
  Truck,
  Mail,
} from "lucide-react";

const valueProps = [
  {
    icon: Users,
    title: "Relevant Customer Inquiries",
    description:
      "Reach potential customers who have expressed interest in vehicle transportation services, helping your team focus on conversations that matter to your business.",
  },
  {
    icon: Clock,
    title: "Timely Lead Delivery",
    description:
      "Access lead information through an efficient delivery process so your sales representatives can follow up promptly and respond to customer inquiries.",
  },
  {
    icon: FileText,
    title: "Useful Shipping Details",
    description:
      "Where available, customer and shipment information can help your team better understand transportation requirements, prepare quotes, and recommend appropriate services.",
  },
  {
    icon: LayoutGrid,
    title: "Flexible Lead Options",
    description:
      "Choose lead solutions that align with your business objectives, sales capacity, and customer acquisition strategy.",
  },
  {
    icon: Headphones,
    title: "Business-Focused Support",
    description:
      "We aim to build long-term relationships with our clients by helping them understand their lead options and choose solutions that fit their operational needs.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Pipeline Growth",
    description:
      "Without a consistent approach to lead generation, businesses may struggle to keep their sales teams productive. GrouponFreight helps you stay ahead.",
  },
];

const leadTypes = [
  {
    icon: Users,
    label: "Shared Leads",
    desc: "Budget-friendly leads shared with multiple brokers — best for high-volume sales teams.",
  },
  {
    icon: Star,
    label: "Premium Leads",
    desc: "Less competition, higher intent — suited for growing brokerages building a stronger pipeline.",
  },
  {
    icon: ShieldCheck,
    label: "Exclusive Leads",
    desc: "One broker per lead — maximum opportunity with every prospective customer.",
  },
  {
    icon: PhoneCall,
    label: "Live Transport Calls",
    desc: "Speak directly with customers in real time — ideal for teams that close over the phone.",
  },
];

const stats = [
  { value: "10K+", label: "Leads Delivered" },
  { value: "500+", label: "Broker Partners" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$300", label: "Minimum Order" },
];

export default function Premiumleads() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#0f1f33]">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-600/8 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Auto Transport Lead Generation
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              High-Quality Auto Transport{" "}
              <span className="text-orange-400">Leads for Your Business</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              In the auto transport industry, timing matters. GrouponFreight
              helps auto transport companies connect with potential customers
              through lead generation solutions designed to support business
              growth and reduce the time spent searching for new opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/product-pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
              >
                View Lead Packages
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:info@grouponfreight.org"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <Mail size={17} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="border-b border-slate-100 bg-white px-6 py-10 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-orange-500">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 1 — SMARTER ALTERNATIVE
      ══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                A Smarter Approach
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A Smarter Alternative to Traditional Marketing
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Building a consistent flow of customers through traditional
                  marketing can be expensive and unpredictable. Businesses may
                  spend months optimizing websites, running advertising
                  campaigns, and developing marketing strategies before seeing
                  meaningful results — with no guarantee that every inquiry
                  turns into a genuine business opportunity.
                </p>
                <p>
                  GrouponFreight offers an alternative by helping auto transport
                  businesses access customer leads relevant to their services.
                  Instead of relying entirely on lengthy marketing campaigns,
                  your sales team can focus on connecting with prospective
                  customers, understanding their vehicle shipping requirements,
                  and providing suitable transportation solutions.
                </p>
                <p>
                  We understand that every shipping request is different.
                  Vehicle details, pickup and delivery locations, transportation
                  timelines, and service requirements can all influence a
                  customer&apos;s decision — that&apos;s why relevant
                  information matters when identifying opportunities and
                  preparing accurate quotes.
                </p>
              </div>
            </div>

            {/* Visual card stack */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: TrendingUp,
                  title: "Less time prospecting",
                  body: "Your sales team focuses on conversations, not cold outreach.",
                },
                {
                  icon: CheckCircle2,
                  title: "Qualified inquiries",
                  body: "Leads come from customers who've already expressed interest in vehicle shipping.",
                },
                {
                  icon: Clock,
                  title: "Faster follow-up",
                  body: "Timely delivery means your team responds while customer intent is highest.",
                },
                {
                  icon: Truck,
                  title: "Shipment-ready details",
                  body: "Relevant customer and vehicle information helps you quote with confidence.",
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
                    <p className="mt-1.5 text-sm leading-6 text-slate-500">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — WHAT MAKES OUR LEADS VALUABLE
      ══════════════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Lead Quality
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Makes GrouponFreight Leads Valuable?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Lead quality is just as important as lead quantity. A large list
              of contacts isn&apos;t valuable if those contacts don&apos;t
              match your services or target audience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <div
                  key={vp.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200 transition group-hover:bg-orange-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{vp.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{vp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — GROW WITH CONFIDENCE
      ══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Lead types list */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {leadTypes.map((lt) => {
                  const Icon = lt.icon;
                  return (
                    <div
                      key={lt.label}
                      className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-orange-200"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f1f33] text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{lt.label}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{lt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Business Growth
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Grow Your Auto Transport Business with Confidence
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  The auto transport market is competitive, and maintaining a
                  steady pipeline of potential customers can be challenging.
                  Without a consistent approach to lead generation, businesses
                  may struggle to keep their sales teams productive and their
                  operations growing.
                </p>
                <p>
                  GrouponFreight helps businesses approach customer acquisition
                  with a more focused strategy. By providing access to relevant
                  lead solutions, we help auto transport companies spend more
                  time engaging with prospects and less time depending solely on
                  traditional advertising methods.
                </p>
                <p>
                  Whether you&apos;re an independent auto transport broker, a
                  growing vehicle shipping company, or an established
                  transportation business, the right lead strategy can support
                  your efforts to reach new customers and expand your market
                  presence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/product-pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-400 active:scale-95"
                >
                  Explore Lead Packages
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — TAKE THE NEXT STEP (CTA)
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
                Get Started Today
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Take the Next Step with{" "}
                <span className="text-orange-400">GrouponFreight</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-white/60">
                Your business deserves a consistent approach to finding new
                customers. With the right lead generation strategy, your team
                can focus on responding to inquiries, providing competitive
                shipping quotes, and building trust with potential customers.
              </p>
              <p className="mt-4 text-base leading-8 text-white/60">
                Partner with GrouponFreight to explore auto transport lead
                solutions tailored to your business needs — whether you&apos;re
                looking for shared leads, premium options, exclusive leads, or
                live transportation calls.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@grouponfreight.org?subject=Auto%20Transport%20Lead%20Inquiry"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
                >
                  <Mail size={17} />
                  Contact GrouponFreight
                </a>
                <Link
                  href="/product-pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-8 py-3.5 font-semibold text-white transition hover:bg-white/15"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  View Pricing
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            {/* Checklist card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                What you get
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Shared, premium, and exclusive lead options",
                  "Live auto transport call transfers",
                  "International vehicle shipping leads",
                  "Specialty & heavy haul lead packages",
                  "Straightforward ordering process",
                  "Personalized team support",
                  "Minimum order from just $300",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs text-white/35">
                  Ready to find the right leads for your business?
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  info@grouponfreight.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </main>
  );
}