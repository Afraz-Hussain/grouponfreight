export default function BackgroundText() {
  return (
    <section
      className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-20 sm:min-h-[450px] lg:min-h-[500px]"
      style={{
        backgroundImage: "url('/imgs/truck3.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Text */}
      <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-base">
          GrouponFreight
        </p>

        <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Drive Your Business Forward
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-100 sm:text-xl">
          Connect with quality auto transport prospects, build stronger
          customer relationships, and discover new opportunities to grow
          your brokerage with GrouponFreight.
        </p>
      </div>
    </section>
  );
}