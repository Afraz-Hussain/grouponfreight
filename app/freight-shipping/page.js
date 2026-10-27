
import Link from "next/link";
import {
  Target,
  Clock,
  ShieldCheck,
  Search,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Timely Lead Delivery",
    description:
      "Connect with potential customers promptly when they submit inquiries about vehicle shipping services.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Checks",
    description:
      "We focus on lead relevance and checks for duplicate submissions and potential spam.",
  },
  {
    icon: Target,
    title: "Relevant Prospects",
    description:
      "Reach people looking for auto transport services through targeted lead generation strategies.",
  },
  {
    icon: TrendingUp,
    title: "Support Business Growth",
    description:
      "Spend more time following up with prospects and building relationships with potential customers.",
  },
  {
    icon: Search,
    title: "Targeted Marketing",
    description:
      "Our approach focuses on reaching audiences interested in car shipping and vehicle transportation.",
  },
  {
    icon: Users,
    title: "Flexible Lead Options",
    description:
      "Explore shared and exclusive leads based on your business goals, budget, and sales capacity.",
  },
];

export default function LeadGenerationPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate bg-[#071c32]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/imgs/truck3.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071c32] via-[#071c32]/90 to-[#071c32]/60" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <Target size={16} />
              Auto Transport Lead Generation
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find More Opportunities.
              <span className="mt-2 block text-orange-400">
                Grow Your Business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Finding customers takes time. GrouponFreight helps auto transport
              brokers and vehicle shipping companies connect with prospective
              customers through targeted, quality-focused lead generation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/product-pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Pricing <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-orange-500/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-white">
                <TrendingUp size={29} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                More Time for Your Customers
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Spend less time searching for prospects and more time
                understanding customer requirements, responding to inquiries,
                and building your auto transport business.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Industry-relevant inquiries",
                  "Shared and exclusive lead options",
                  "Quality-focused lead review",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-orange-400"
                    />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              The Lead Generation Challenge
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071c32] sm:text-4xl">
              Finding Auto Transport Customers Shouldn’t Consume Your Day
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Generating leads requires time, consistent marketing, and an
              understanding of the customers you want to reach. For busy auto
              transport professionals, managing every part of this process can
              take attention away from sales and daily operations.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              GrouponFreight provides lead generation options designed to help
              brokers connect with people seeking vehicle shipping services.
              Our approach emphasizes relevant inquiries, timely delivery, and
              checks intended to identify duplicate or suspicious submissions.
            </p>

            <Link
              href="/lead-quality"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Learn About Lead Quality <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-orange-100" />
            <div
              className="relative min-h-[340px] rounded-2xl bg-cover bg-center shadow-xl sm:min-h-[420px]"
              style={{ backgroundImage: "url('/imgs/truck3.jpg')" }}
              role="img"
              aria-label="Auto transport truck on the road"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Why GrouponFreight
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#071c32] sm:text-4xl">
              Lead Generation Built Around Your Business
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Explore practical lead solutions that help your sales team focus
              on connecting with potential vehicle shipping customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#071c32]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#071c32] sm:text-4xl">
              From Customer Inquiry to Sales Follow-Up
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Customers Show Interest",
                text: "Potential customers look for vehicle shipping services and submit an inquiry.",
                icon: Search,
              },
              {
                number: "02",
                title: "Leads Are Reviewed",
                text: "Lead checks focus on relevance and identifying possible duplicates or suspicious submissions.",
                icon: ShieldCheck,
              },
              {
                number: "03",
                title: "Your Team Follows Up",
                text: "Your sales team contacts prospects, discusses their requirements, and determines the next steps.",
                icon: MessageCircle,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative rounded-2xl border border-slate-200 p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold text-orange-500/30">
                      {step.number}
                    </span>
                    <Icon size={28} className="text-orange-500" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#071c32]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071c32] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Let’s Get Started
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Explore Auto Transport Leads?
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Talk to GrouponFreight about available lead types, pricing, and
              options for your business. We’ll help you understand the choices
              available so you can make an informed decision.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
            <Link
              href="/product-pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
