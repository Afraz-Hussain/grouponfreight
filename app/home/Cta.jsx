export default function ContactCTA() {
  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-20 sm:min-h-[480px] sm:px-8"
      style={{ backgroundImage: "url('/imgs/truck1.jpg')" }}
    >
      {/* Light overlay for readable text */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-[44px]">
          Ready to Grow Your Auto Transport Business?
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-800 sm:text-xl">
          Connect with more potential customers through GrouponFreight.
          Contact our team today to explore our auto transport lead solutions
          and discover how we can help your brokerage grow.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="/order-leads"
            className="inline-flex min-h-16 min-w-[240px] items-center justify-center rounded-sm bg-orange-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-orange-600"
          >
            ORDER LEADS
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-16 min-w-[232px] items-center justify-center rounded-sm border border-slate-400 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}