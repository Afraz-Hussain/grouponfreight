"use client";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
        <path d="M5 3 3 5m16-2 2 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-Time Lead Delivery",
    description:
      "Connect with potential customers while their vehicle shipping needs are still fresh. Our real-time lead delivery helps your team respond quickly and make the most of every opportunity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <circle cx="9" cy="8" r="4" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4.5a4 4 0 0 1 0 7.5M18 15a5 5 0 0 1 3 4.5V21" strokeLinecap="round" />
      </svg>
    ),
    title: "Reach Qualified Customers",
    description:
      "Connect with people actively looking for auto transport services. Our lead generation approach helps your brokerage focus its time and resources on relevant shipping inquiries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <path d="M3 7h18v13H3zM3 11h18M7 7V4h10v3M7 15h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Flexible Lead Solutions",
    description:
      "Choose lead solutions that align with your business goals, target customers, and sales strategy. Whether you operate a growing brokerage or an established team, our approach can support your needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quality-Focused Validation",
    description:
      "We use lead validation processes designed to improve the accuracy of customer contact details and help your team follow up with greater confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <path d="M4 5h16v14H4zM8 9h8M8 13h5M8 17h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Transparent Business Approach",
    description:
      "Understand your lead options, pricing, and service terms before getting started. Our goal is to make choosing a lead solution straightforward and aligned with your expectations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
        <path d="M3 17 9 11l4 4 8-9M15 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Built to Support Your Growth",
    description:
      "Spend less time searching for new inquiries and more time building customer relationships. Our lead solutions are designed to support your sales efforts as your brokerage grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Why Choose Us
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Right Leads.{" "}
            <span className="text-orange-500">The Right Opportunity.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Growing an auto transport brokerage starts with connecting with the
            right customers at the right time. We help you discover shipping
            opportunities through timely lead delivery, quality-focused
            validation, and flexible solutions built around your business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-md bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Explore Our Lead Solutions
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}