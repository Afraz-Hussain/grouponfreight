"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Truck,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const phone = "17342622139";
    const text = encodeURIComponent(
      `Hello GrouponFreight,\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Company: ${form.company}\n` +
        `Service Interest: ${form.service}\n\n` +
        `Message:\n${form.message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "734-262-2139",
      href: "tel:7342622139",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@grouponfreight.org",
      href: "mailto:info@grouponfreight.org",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us on WhatsApp",
      href: "https://wa.me/17342622139",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ══════════════════════════════════════
          HERO — truck2.jpg background
      ══════════════════════════════════════ */}
      <section className="relative isolate flex min-h-[52vh] flex-col items-center justify-center overflow-hidden">
        <img
          src="/imgs/truck2.jpg"
          alt="Auto transport truck on the highway"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute -left-24 top-0 -z-10 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 py-24 text-center sm:px-10 sm:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-500/15 px-4 py-1.5 text-sm font-semibold text-orange-300 backdrop-blur-sm">
            <MessageCircle size={14} className="text-orange-400" />
            We&apos;re here to help
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            Have a question about our lead packages? Ready to place an order?
            Reach out — our team typically responds within one business day.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN — LEFT INFO / RIGHT FORM
      ══════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* ── LEFT — Image + contact info ── */}
            <div className="flex flex-col gap-8">

              {/* Photo card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/imgs/truck2.jpg"
                  alt="GrouponFreight auto transport"
                  className="h-72 w-full object-cover object-center sm:h-80 lg:h-96"
                />
                {/* Gradient overlay with brand stamp */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f33]/90 via-[#0f1f33]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                      <Truck size={19} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
                        GrouponFreight
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Auto Transport Lead Generation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact detail cards */}
              <div className="space-y-3">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.label === "WhatsApp" ? "_blank" : undefined}
                      rel={detail.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-300 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200 transition group-hover:bg-orange-600">
                        <Icon size={21} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 truncate text-base font-bold text-slate-900 group-hover:text-orange-600 transition">
                          {detail.value}
                        </p>
                      </div>
                      <ArrowRight
                        size={17}
                        className="ml-auto shrink-0 text-slate-300 transition group-hover:text-orange-500"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Hours & note */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Monday – Friday: 9:00 AM – 6:00 PM (EST)
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                      For urgent inquiries outside business hours, send us a
                      WhatsApp message and we&apos;ll respond as soon as
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT — Contact form ── */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Your message has been opened in WhatsApp. Our team will
                      get back to you shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                        <MessageCircle size={19} />
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-900">
                          Send Us a Message
                        </h2>
                        <p className="text-xs text-slate-400">
                          Opens directly in WhatsApp
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      Fill in your details below and we&apos;ll connect you
                      directly with our team on WhatsApp. All fields marked
                      with <span className="text-orange-500">*</span> are
                      required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Company */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                        >
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Brokerage LLC"
                          value={form.company}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                        >
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                      </div>
                    </div>

                    {/* Service interest */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                      >
                        Service Interest <span className="text-orange-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      >
                        <option value="" disabled>
                          Select a lead package…
                        </option>
                        <option value="Cheap Shared Leads">Cheap Shared Leads — $2.75/lead</option>
                        <option value="Premium Leads">Premium Leads — $5.00/lead</option>
                        <option value="Exclusive Leads">Exclusive Leads — $20.00/lead</option>
                        <option value="Auto Transport Calls">Auto Transport Calls — $25.00/call</option>
                        <option value="Heavy Haul Leads">Heavy Haul Leads — $25.00/lead</option>
                        <option value="Shared International Leads">Shared International Leads — $2.50/lead</option>
                        <option value="Exclusive International Leads">Exclusive International Leads — $10.00/lead</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wide text-slate-600"
                      >
                        Message <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your business, how many leads you need, and any questions you have…"
                        value={form.message}
                        onChange={handleChange}
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-[#1ebe5d] active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.522 5.851L.057 23.142a.75.75 0 0 0 .904.904l5.337-1.457A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.706 9.706 0 0 1-4.951-1.354l-.355-.211-3.676 1.004 1.018-3.564-.231-.368A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                      </svg>
                      Send via WhatsApp
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      Clicking the button will open WhatsApp with your message
                      pre-filled. Requires WhatsApp to be installed.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Ready to get started?
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Explore Our Lead Packages
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Domestic, international, exclusive, and live call options — starting at $300.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
            <a
              href="/product-pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-400 active:scale-95"
            >
              View Pricing
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:7342622139"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition hover:text-orange-400"
            >
              <Phone size={13} />
              734-262-2139
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}