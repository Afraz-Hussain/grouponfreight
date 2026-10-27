
import {
  Zap,
  ShieldCheck,
  Target,
  TrendingUp,
  SlidersHorizontal,
  Clock3,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Lead Delivery",
    description:
      "Receive lead opportunities as quickly as possible after a customer submits an inquiry. Timely delivery helps your sales team follow up while customer interest is fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Lead Quality Checks",
    description:
      "Our lead review process is designed to identify potential duplicates, incomplete details, and invalid contact information where possible, helping your team focus on better opportunities.",
  },
  {
    icon: Target,
    title: "Targeted Lead Generation",
    description:
      "Our approach combines relevant marketing channels to reach people looking for vehicle shipping services, helping connect your business with potential customers.",
  },
  {
    icon: TrendingUp,
    title: "Built for Sales Opportunities",
    description:
      "Give your sales team opportunities to engage with prospective customers, follow up consistently, and build a stronger pipeline. Actual conversion results depend on your sales process and market conditions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Lead Options",
    description:
      "Choose from shared leads, premium leads, exclusive leads, live calls, and specialty shipping opportunities to find options that suit your business.",
  },
];

const benefits = [
  "Prompt lead delivery to support timely follow-up",
  "Lead quality checks where applicable",
  "Options for different budgets and sales teams",
  "Domestic and international shipping opportunities",
];

export default function RealTimeLeads() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
        
      {/* Introduction */}
      <section className="relative bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700">
              <Zap size={16} />
              Auto Transport Lead Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              High-Quality Auto Transport Leads for{" "}
              <span className="text-orange-500">GrouponFreight</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600">
              GrouponFreight helps auto transport businesses connect with
              prospective customers through lead packages designed for
              different sales strategies and business needs. Our focus is
              timely delivery, useful customer information, and flexible
              options for growing your sales pipeline.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              When a customer expresses interest in vehicle shipping,
              responding promptly can make a difference. Our lead solutions
              are designed to help your team follow up as soon as possible
              and engage potential customers while their interest is fresh.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Looking for exclusive opportunities? Our exclusive packages
              are intended for one broker per lead, rather than sharing the
              same lead with multiple brokers. Package terms and availability
              should be confirmed with our team before ordering.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/product-pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Lead Pricing
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* Visual feature panel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl bg-[#0b2946] p-7 text-white shadow-2xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
                <Truck size={30} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                A smarter way to connect
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                More opportunities for your sales team.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Choose a lead package that fits your business, respond to
                inquiries, and build a consistent process for converting
                prospects into customers.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <p className="text-sm leading-6 text-slate-200">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Why GrouponFreight
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Real-Time Auto Transport Leads That Support Your Sales Process
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Give your team practical tools and lead options to engage
              prospective vehicle-shipping customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className={`group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 ${
                    index === 3 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}

            <article className="flex flex-col justify-between rounded-2xl bg-slate-50 p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b2946] text-white">
                  <Headphones size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Personalized Support
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Need help choosing a package? Contact our team to discuss
                  available lead types, pricing, and the options that best
                  match your sales operation.
                </p>
              </div>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Contact Us
                <ArrowRight size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Exclusive leads explanation */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Exclusive Lead Packages
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              A More Focused Opportunity to Reach Your Customers
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Shared leads can help businesses manage costs, while exclusive
              leads are designed to give one broker the opportunity to
              respond to a particular inquiry. The right choice depends on
              your budget, sales capacity, and preferred approach.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whichever option you choose, timely follow-up, clear
              communication, and a reliable sales process remain important
              parts of building customer relationships.
            </p>

            <a
              href="/product-pricing"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b2946] px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Compare Lead Packages
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Clock3 size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Respond While Interest Is Fresh
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Build a process for reviewing new inquiries and contacting
                  prospects promptly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-slate-100 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <ShieldCheck size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Understand Your Package
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Confirm how leads are shared, what information is
                  provided, and which quality checks apply to your package.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <TrendingUp size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Build a Consistent Sales Pipeline
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Track follow-ups, learn from your results, and refine your
                  approach over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#071c32] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <Headphones size={28} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Let&apos;s Get Started
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Find the Right Auto Transport Leads for Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Have questions about pricing, package options, lead delivery, or
            integrating leads with your sales management software? Contact
            GrouponFreight to discuss your requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Contact Us Today
              <ArrowRight size={18} />
            </a>

            <a
              href="/product-pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}