import Image from "next/image";

const requirements = [
  {
    number: "01",
    title: "A Responsive Sales Team",
    description:
      "Turn inquiries into opportunities with a team that is ready to respond. Prompt phone calls, helpful answers, and consistent follow-ups help you build trust with customers looking for vehicle shipping services.",
  },
  {
    number: "02",
    title: "Professional Customer Communication",
    description:
      "First impressions matter. Clear conversations, professional emails, accurate information, and timely responses help your brokerage stand out and give potential customers confidence in your services.",
  },
  {
    number: "03",
    title: "Knowledge of Auto Transport",
    description:
      "Understand your customers' shipping needs, explain available transport options, and provide clear next steps. Industry knowledge helps your team handle inquiries effectively and work toward more confirmed bookings.",
  },
];

export default function LeadRequirements() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Is Your Business Ready?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Are GrouponFreight Leads Right for Your Business?
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Auto transport leads create opportunities, but successful
            conversions depend on how your business handles them. A responsive
            sales team, professional communication, and industry knowledge can
            help you make the most of every customer inquiry.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-12 h-[260px] overflow-hidden rounded-2xl sm:h-[380px] lg:h-[440px]">
          <Image
            src="/imgs/truck1.jpg"
            alt="GrouponFreight auto transport solutions"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Better Preparation. Stronger Opportunities.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
              Build a process that helps your team respond quickly and deliver
              a professional customer experience.
            </p>
          </div>
        </div>

        {/* Three Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {requirements.map((item) => (
            <article
              key={item.number}
              className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl sm:p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-lg font-extrabold text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                {item.number}
              </span>

              <h3 className="mt-6 text-xl font-bold leading-snug text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Closing Note */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base">
          Every business is different. GrouponFreight helps auto transport
          businesses explore lead solutions that align with their sales
          processes, customer service capabilities, and growth objectives.
        </p>
      </div>
    </section>
  );
}