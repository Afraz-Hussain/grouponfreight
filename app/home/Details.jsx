import Image from "next/image";

const sections = [
  {
    eyebrow: "QUALITY LEADS. BETTER CONNECTIONS.",
    title: "Connect with the Right Customers at the Right Time",
    description:
      "At GrouponFreight, we help auto transport brokers connect with customers who are actively looking for vehicle shipping services. Our lead-generation approach focuses on timely delivery, reliable contact information, and meaningful customer inquiries—giving your team a stronger starting point for every conversation.",
    paragraphs: [
      "Whether customers need open or enclosed auto transport, motorcycle shipping, or other vehicle transportation services, reaching them at the right time can make a meaningful difference. We help brokers focus on relevant prospects so they can respond promptly and build lasting customer relationships.",
      "With a focus on lead quality, responsive communication, and practical business solutions, GrouponFreight helps you spend less time searching for opportunities and more time converting inquiries into customers.",
    ],
    image: "/imgs/truck6.jpg",
    alt: "Auto transport truck and vehicle shipping services",
    button: "Explore Our Leads",
    reverse: false,
  },
  {
    eyebrow: "EXPERIENCE THAT DRIVES RESULTS",
    title: "Our Expertise Helps Your Brokerage Move Forward",
    description:
      "Not all leads deliver the same value. At GrouponFreight, we understand that successful auto transport businesses need more than contact details—they need relevant prospects, timely follow-ups, and an effective approach to converting inquiries into bookings.",
    paragraphs: [
      "Our focus on the auto transport market helps us understand the needs of brokers and the expectations of customers seeking vehicle shipping services. We aim to make the process of connecting with prospective customers simpler, more efficient, and better aligned with your sales goals.",
      "From independent brokers to growing transport businesses, GrouponFreight is committed to helping our clients identify opportunities, strengthen customer communication, and build a foundation for sustainable growth.",
    ],
    image: "/imgs/truck7.jpg",
    alt: "Vehicle transportation and auto logistics expertise",
    button: "Contact Our Team",
    reverse: true,
  },
];

export default function GrouponFreightExpertise() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8 lg:space-y-32 lg:px-12">
        {sections.map((section) => (
          <div
            key={section.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              section.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                {section.eyebrow}
              </span>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[46px]">
                {section.title}
              </h2>

              <p className="text-base font-medium leading-8 text-slate-700 sm:text-lg">
                {section.description}
              </p>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-8 text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-md bg-orange-500 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-orange-600"
              >
                {section.button}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[420px] lg:min-h-[480px]">
              <Image
                src={section.image}
                alt={section.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            The GrouponFreight Difference
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Give Your Team Better Opportunities to Convert
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Discover lead solutions designed around your auto transport
            business. Let GrouponFreight help you connect with prospective
            customers and build stronger sales opportunities.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}