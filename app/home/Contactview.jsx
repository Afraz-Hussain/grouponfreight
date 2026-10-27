"use client";

import { useState } from "react";

export default function QuickInquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    transportType: "Open Auto Transport",
    pickup: "",
    delivery: "",
    message: "",
  });

  // Replace with your WhatsApp number including country code.
  // Example Pakistan: 923001234567
  const whatsappNumber = "734-262-2139";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello GrouponFreight! I'd like to make an inquiry.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Transport Type: ${form.transportType}
Pickup Location: ${form.pickup}
Delivery Location: ${form.delivery}
Message: ${form.message || "No additional message"}
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative flex min-h-[350px] flex-col justify-end overflow-hidden bg-slate-900 p-8 sm:min-h-[450px] sm:p-12 lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: "url('/imgs/truck1.jpg')" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

          <div className="relative z-10 text-white">
            <span className="inline-block rounded-full border border-orange-400/60 bg-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              GrouponFreight
            </span>

            <h2 className="mt-6 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Lets Get Your Vehicle Moving.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
              Looking for auto transport leads or vehicle shipping solutions?
              Tell us what you need, and connect with our team directly through
              WhatsApp.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-xl">
                ↗
              </div>
              <div>
                <p className="font-semibold">Quick & Easy Inquiry</p>
                <p className="mt-1 text-sm text-slate-300">
                  Get in touch with our team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-6 sm:p-10 lg:p-12">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
            Quick Inquiry
          </span>

          <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
            How Can We Help You?
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Fill in your details below. Your inquiry will be prepared in
            WhatsApp so you can send it directly to our team.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 234 567 8900"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="transportType" className="mb-2 block text-sm font-semibold text-slate-700">
                Service Interested In *
              </label>
              <select
                id="transportType"
                name="transportType"
                value={form.transportType}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option>Open Auto Transport</option>
                <option>Enclosed Auto Transport</option>
                <option>Auto Transport Leads</option>
                <option>Motorcycle Shipping</option>
                <option>Freight Transportation</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pickup" className="mb-2 block text-sm font-semibold text-slate-700">
                  Pickup Location *
                </label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  placeholder="City or ZIP code"
                  value={form.pickup}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="delivery" className="mb-2 block text-sm font-semibold text-slate-700">
                  Delivery Location *
                </label>
                <input
                  id="delivery"
                  name="delivery"
                  type="text"
                  placeholder="City or ZIP code"
                  value={form.delivery}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us more about your requirements..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-4 font-bold text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.98L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.78a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.46 9.89-9.94 9.89Zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.61.71.22 1.36.19 1.87.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Send Inquiry via WhatsApp
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              WhatsApp will open with your inquiry details. You will need to
              press Send in WhatsApp to submit your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}