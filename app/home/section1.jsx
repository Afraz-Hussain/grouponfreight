"use client";

import Image from "next/image";

const sections = [
  {
    title: "Get Exclusive Auto Transport Leads",
    description:
      "In the auto transport industry, timing makes all the difference. The sooner you connect with a customer requesting a vehicle shipping quote, the greater your chances of turning that inquiry into a confirmed booking.Our real-time lead delivery system connects your business with potential customers quickly, helping you respond faster and maximize your return on investment. With fewer competing companies sharing the same leads, you can focus on building customer relationships, increasing conversions, and growing your business.",
    image: "/imgs/truck5.webp",
    button: "Get Started",
    reverse: false,
  },
  {
    title: "Grow Your Brokerage With Confidence",
    description:
      "Our exclusive lead solutions help you reach customers at the right time with accurate contact information, so you can follow up promptly and confidently. Whether you specialize in individual vehicle shipments or manage a large transport operation, our approach helps you streamline your sales process, use your resources efficiently, and build a stronger position in the auto transport market.",
    image: "/imgs/truck4.jpg",
    button: "Learn More",
    reverse: true,
  },
];

export default function TransportSections() {
  return (
    <section className="space-y-20 px-5 py-16 sm:px-8 lg:space-y-28 lg:px-16 lg:py-24">
      {sections.map((section) => (
        <div
          key={section.title}
          className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            section.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Auto Transport Solutions
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {section.title}
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {section.description}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-md bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              {section.button}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[400px] lg:h-[460px]">
            <Image
              src={section.image}
              alt={section.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
