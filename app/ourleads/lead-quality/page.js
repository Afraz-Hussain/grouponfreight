
import {
  Target,
  Search,
  Clock3,
  Users,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Truck,
  ChartNoAxesCombined,
  Handshake,
  ClipboardCheck,
} from "lucide-react";

const challenges = [
  {
    icon: Search,
    title: "The Challenge of Finding Customers",
    description:
      "Attracting the right customers takes time, marketing effort, and consistent investment. Purchased lead packages offer another way for auto transport businesses to reach people who have expressed interest in vehicle shipping.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Managing Marketing Costs",
    description:
      "Building a marketing strategy from scratch can involve website development, advertising, search optimization, and ongoing testing. Comparing lead providers alongside your existing marketing channels can help you make more informed budget decisions.",
  },
  {
    icon: Clock3,
    title: "Timing Matters",
    description:
      "Customer interest can change quickly. A process for receiving inquiries and contacting potential customers promptly helps your sales team make the most of each opportunity.",
  },
];

const leadBenefits = [
  {
    icon: Truck,
    title: "Relevant Shipping Inquiries",
    description:
      "Connect with people seeking vehicle transport services, with lead details depending on the package and information supplied by the customer.",
  },
  {
    icon: ClipboardCheck,
    title: "Useful Customer Details",
    description:
      "Lead records may include contact information, pickup and delivery locations, vehicle details, and shipping requirements when provided.",
  },
  {
    icon: Users,
    title: "Flexible Lead Options",
    description:
      "Choose from shared, premium, exclusive, live-call, and specialty shipping leads according to your sales capacity and business needs.",
  },
  {
    icon: Handshake,
    title: "Support for Your Sales Team",
    description:
      "Use incoming opportunities for direct follow-up, customer conversations, and organized sales workflows that fit your business.",
  },
];

const qualitySteps = [
  {
    number: "01",
    title: "Choose Your Lead Type",
    description:
      "Select a package that matches your budget, preferred level of competition, and sales team's capacity.",
  },
  {
    number: "02",
    title: "Receive Lead Information",
    description:
      "Lead delivery and available customer details depend on the package and the terms confirmed with GrouponFreight.",
  },
  {
    number: "03",
    title: "Follow Up Promptly",
    description:
      "Contact prospects, understand their shipping needs, and provide clear information about your services.",
  },
  {
    number: "04",
    title: "Measure Your Results",
    description:
      "Track contact rates, quotes, bookings, and acquisition costs to understand which lead packages work best for your business.",
  },
];

export default function LeadQuality() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-[#071c32]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071c32] via-[#0b2946] to-[#071c32]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              <Target size={16} className="text-orange-400" />
              Auto Transport Lead Solutions
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              What Makes a{" "}
              <span className="text-orange-400">
                Quality Lead?
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              In the auto transport industry, finding potential customers
              is an ongoing challenge. GrouponFreight helps businesses
              explore lead packages designed to connect their sales teams
              with people looking for vehicle shipping services.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Whether you run a growing brokerage or an established
              transport operation, the right lead strategy can complement
              your marketing efforts and help you build a more consistent
              sales pipeline.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/product-pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Lead Packages
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Speak With Our Team
              </a>
            </div>
          </div>

          {/* Hero information panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <Target size={28} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                Focus on Better Sales Opportunities
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Quality lead generation is about more than collecting
                names. Relevant customer details, clear package terms,
                timely delivery, and consistent follow-up all contribute
                to a more effective sales process.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                {[
                  "Lead packages for different business sizes",
                  "Shared and exclusive lead options",
                  "Domestic and international opportunities",
                  "Flexible quantities and pricing options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <span className="text-sm leading-6 text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges section */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              The business challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              An Alternative to Building Every Lead Yourself
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Marketing remains important, but businesses can explore
              different ways to find customers. Lead packages provide
              another option alongside organic search, advertising,
              referrals, and other customer acquisition strategies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead quality section */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                What you can expect
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                What Can Auto Transport Leads Offer Your Business?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Lead packages give your sales team a starting point for
                connecting with prospective customers. Instead of relying
                on a single marketing channel, you can evaluate purchased
                leads alongside your existing customer acquisition
                strategy.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Depending on the package, the information provided may help
                your team understand a customer's vehicle, route, and
                shipping requirements before making contact.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Lead quality, customer intent, contactability, and
                availability can vary. We recommend confirming the details
                of each package and tracking your results to find the best
                fit for your operation.
              </p>

              <a
                href="/product-pricing"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Compare Available Packages
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {leadBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b2946] text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Standard leads */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-[#0b2946]">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                  Shared Lead Packages
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  A Practical Starting Point for Growing Brokerages
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Shared leads can be an option for businesses that want
                  to manage their cost per opportunity while working with
                  a larger volume of inquiries. Because other brokers may
                  receive the same lead, response time and sales execution
                  can be especially important.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  GrouponFreight offers different package types so you
                  can evaluate the balance between price, lead sharing,
                  and your team's ability to follow up.
                </p>

                <a
                  href="/product-pricing"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  View Lead Pricing
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="flex flex-col justify-center border-t border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
                <h3 className="text-xl font-bold text-white">
                  Choosing a Package
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      title: "Shared leads",
                      text: "Consider cost and the competition for each inquiry.",
                    },
                    {
                      title: "Premium leads",
                      text: "Compare package terms and the level of lead sharing.",
                    },
                    {
                      title: "Exclusive leads",
                      text: "Consider the higher cost per lead and your sales capacity.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <CheckCircle2
                        size={21}
                        className="mt-0.5 shrink-0 text-orange-400"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Make every step count
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Turn Lead Opportunities Into a Repeatable Process
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A clear process helps your team respond to inquiries, manage
              follow-ups, and measure performance over time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-3xl font-bold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <Handshake size={28} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Take the next step
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Find a Lead Package That Fits Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Explore GrouponFreight's available auto transport lead options.
            Our team can help you understand package differences, pricing,
            delivery arrangements, and the details to consider before
            placing an order.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/product-pricing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Lead Packages
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
            >
              Contact GrouponFreight
            </a>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Lead availability, sharing limits, customer details, and
            delivery terms depend on the package. Lead purchases do not
            guarantee bookings or conversion rates.
          </p>
        </div>
      </section>
    </main>
  );
}
