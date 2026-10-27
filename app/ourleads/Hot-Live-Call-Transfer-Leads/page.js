"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  PhoneIncoming,
  Clock,
  MessageSquare,
  TrendingUp,
  Zap,
  Users,
  Star,
  Target,
  Headphones,
  BadgeCheck,
  Mail,
  Flame,
} from "lucide-react";

const whyChoose = [
  {
    icon: MessageSquare,
    title: "Direct Customer Conversations",
    description:
      "Speak with potential customers in real time instead of waiting on email replies or form submissions. A live conversation closes faster than any inbox.",
  },
  {
    icon: Clock,
    title: "Timely Connection",
    description:
      "Connect with callers while their vehicle shipping need is active. Reaching a prospect at the right moment dramatically increases your chances of booking the shipment.",
  },
  {
    icon: Headphones,
    title: "Personalized Service",
    description:
      "Walk through pickup and delivery locations, vehicle details, timelines, and pricing — all in one call. Customers appreciate being handled as individuals, not ticket numbers.",
  },
  {
    icon: TrendingUp,
    title: "More Sales Opportunities",
    description:
      "Give your sales team the chance to answer questions, overcome objections, and move qualified prospects toward booking — all before a competitor gets a word in.",
  },
  {
    icon: Target,
    title: "One Broker Per Call",
    description:
      "Each live call transfer is directed to a single brokerage. No shared distribution, no competing against other companies for the same caller on the same line.",
  },
  {
    icon: Zap,
    title: "Instant Pipeline Boost",
    description:
      "Add live calls to your existing marketing and lead acquisition strategy. They complement shared and exclusive leads by filling your pipeline with real-time inbound interest.",
  },
];

const steps = [
  {
    number: "01",
    icon: PhoneIncoming,
    title: "Customer Calls In",
    description:
      "A potential customer looking to ship their vehicle reaches one of our advertising channels and expresses interest in auto transport services.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Call Is Qualified",
    description:
      "Our team confirms the caller has a genuine vehicle shipping need — verifying intent before the transfer is made to your brokerage.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Transferred to You",
    description:
      "The live call is routed directly to your designated phone line. Your sales rep picks up and the conversation — and the opportunity — begins immediately.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "You Close the Deal",
    description:
      "Discuss requirements, provide a quote, and guide the customer toward booking. No delays, no back-and-forth — just a direct path to revenue.",
  },
];

const stats = [
  { value: "Live", label: "Real-time transfer" },
  { value: "1:1", label: "One broker per call" },
  { value: "$25", label: "Per call" },
  { value: "$300", label: "Minimum order" },
];

export default function LiveCallsPage() {
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

            {/* Hot badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-bold text-orange-300">
              <Flame size={14} className="text-orange-400" />
              Hot Product — High Demand
            </div>

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              <Star size={14} className="fill-orange-400 text-orange-400" />
              Live Call Transfer Leads — GrouponFreight
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hot, Live Call Transfer{" "}
              <span className="text-orange-400">Leads for Your</span>
              <br className="hidden sm:block" /> Auto Transport Brokerage
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Stop waiting on form fills and email threads. Live call transfers
              connect your sales team directly with customers who are actively
              looking to ship their vehicle — right now, on the phone.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/product-pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
              >
                Order Live Call Leads
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
          INTRO — CONNECT IN REAL TIME
      ══════════════════════════════════════ */}
      <section className="border-b border-slate-100 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Real-Time Connections
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Connect with Potential Customers in Real Time
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  When a customer is searching for an auto transport company,
                  timing is everything. A prospect who doesn&apos;t hear from
                  a broker immediately will simply call the next name on their
                  list. Live call transfers put your team on the phone with
                  that customer before anyone else gets the chance.
                </p>
                <p>
                  Instead of relying only on email inquiries or online forms,
                  GrouponFreight&apos;s live transfer solutions connect
                  prospective customers directly to your designated phone line.
                  Your sales representatives can engage with callers right
                  away, understand their transportation needs, and present your
                  brokerage&apos;s services while the customer&apos;s interest
                  is at its peak.
                </p>
                <p>
                  Whether a customer needs to transport a car across the
                  country or arrange specialty vehicle shipping, a direct
                  conversation gives your team the best possible chance to
                  identify the opportunity, answer questions, and close the
                  booking.
                </p>
              </div>
            </div>

            {/* Feature highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: PhoneCall,
                  title: "Phone-first approach",
                  body: "Conversations convert faster than emails. Live calls put your team in the driver's seat.",
                },
                {
                  icon: Clock,
                  title: "Right-moment contact",
                  body: "Reach customers while they're actively searching — not hours or days later.",
                },
                {
                  icon: Users,
                  title: "1 broker per call",
                  body: "No sharing. Every transfer goes exclusively to your brokerage.",
                },
                {
                  icon: Target,
                  title: "Qualified callers only",
                  body: "Calls are screened for genuine shipping intent before reaching your line.",
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
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              The Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              How Live Call Transfers Work
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50">
              From the moment a customer expresses interest to the second your
              phone rings — here&apos;s what happens.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {/* Ghost number */}
                  <span className="absolute right-4 top-3 text-7xl font-extrabold leading-none text-white/5 select-none">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-900/30">
                    <Icon size={22} />
                  </div>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight size={18} className="text-orange-500/40" />
                    </div>
                  )}

                  <h3 className="mt-6 text-base font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE LIVE CALLS — 6 CARDS
      ══════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Why Live Calls
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Live Call Transfers?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Live calls are one of the highest-converting lead types in the
              auto transport industry. Here&apos;s why GrouponFreight brokers
              rely on them.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200 transition group-hover:bg-orange-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GROW YOUR BROKERAGE — CTA
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
                Ready to Generate More Sales?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Grow Your Brokerage with{" "}
                <span className="text-orange-400">GrouponFreight</span>
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-white/60">
                <p>
                  Every auto transport brokerage needs a reliable way to connect
                  with potential customers. Live call transfers complement your
                  existing lead generation strategy by creating real-time
                  opportunities with people who are actively seeking vehicle
                  transportation services.
                </p>
                <p>
                  Whether you&apos;re expanding your customer base or looking to
                  improve your sales team&apos;s pipeline, GrouponFreight&apos;s
                  live call transfer leads are a proven addition to any
                  brokerage&apos;s growth strategy.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/product-pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-400 active:scale-95"
                >
                  Order Live Call Leads
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="mailto:info@grouponfreight.org?subject=Live%20Call%20Transfer%20Lead%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Mail size={17} />
                  Contact GrouponFreight
                </a>
              </div>
            </div>

            {/* Checklist card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                Live call transfers include
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Real-time transfer to your designated phone line",
                  "One broker per call — no shared distribution",
                  "Callers screened for genuine shipping intent",
                  "Domestic vehicle shipping calls available",
                  "Instant connection while customer interest is highest",
                  "Dedicated GrouponFreight team support",
                  "$25 per call · $300 minimum order",
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
                  <PhoneCall size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/35">Questions? Reach us at</p>
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