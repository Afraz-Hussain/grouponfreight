"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ChevronDown,
  ChevronUp,
  Mail,
  Globe,
  Lock,
  ShieldCheck,
  Users,
  CreditCard,
  Package,
  PhoneCall,
  RefreshCcw,
  AlertTriangle,
  Scale,
  Handshake,
  Eye,
  Link2,
  AlertCircle,
  ArrowRight,
  Truck,
} from "lucide-react";

const sections = [
  {
    id: 1,
    icon: FileText,
    title: "Acceptance of Terms",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          These Terms and Conditions form an agreement between you and
          GrouponFreight regarding your use of our website and services.
        </p>
        <p>
          By browsing our website, submitting an inquiry, placing an order, or
          using any of our services, you confirm that you have read and
          understood these terms and agree to comply with them.
        </p>
        <p>
          If you are using our services on behalf of a company or another
          business entity, you confirm that you are authorized to accept these
          terms on its behalf.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: Truck,
    title: "Our Services",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight provides lead generation solutions designed to help
          auto transport brokers, vehicle shipping companies, and related
          businesses connect with prospective customers.
        </p>
        <p>Our services may include:</p>
        <ul className="space-y-2 pl-1">
          {[
            "Shared auto transport leads.",
            "Premium lead packages.",
            "Exclusive auto transport leads.",
            "Live call transfers.",
            "International vehicle shipping leads.",
            "Heavy haul leads.",
            "Other lead generation products introduced on our website.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          The availability, pricing, delivery method, and features of each
          service may vary by product or package. We reserve the right to
          update, modify, suspend, or discontinue any service, subject to
          applicable law and any existing order commitments.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    icon: Users,
    title: "User Eligibility and Responsibilities",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          You must be legally capable of entering into a binding agreement to
          purchase our services.
        </p>
        <p>When using GrouponFreight, you agree to:</p>
        <ul className="space-y-2 pl-1">
          {[
            "Provide accurate and complete information when placing an order.",
            "Maintain the accuracy of your account and business contact details, where applicable.",
            "Use the leads and services for lawful business purposes.",
            "Follow applicable privacy, marketing, consumer protection, and telecommunications laws.",
            "Respect the rights and privacy of prospective customers.",
            "Ensure that your employees or representatives who use our services comply with these terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          You are responsible for ensuring that your business is appropriately
          authorized or licensed to provide the transportation or brokerage
          services you advertise.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Orders and Payments",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Orders for GrouponFreight products and services are subject to the
          applicable pricing, package details, minimum purchase requirements,
          and order terms presented at the time of purchase.
        </p>
        <p>
          Before submitting an order, you are responsible for reviewing the
          selected products, quantities, prices, and any applicable conditions.
        </p>
        <p>Unless otherwise stated in writing:</p>
        <ul className="space-y-2 pl-1">
          {[
            "Prices are listed in the currency specified on the applicable pricing page or order confirmation.",
            "Minimum order amounts or quantity requirements may apply to certain products.",
            "Additional charges, taxes, or payment processing fees may apply where disclosed or required by law.",
            "An order may require confirmation before it is considered accepted.",
            "You must provide valid payment information and pay amounts due according to the agreed payment terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We reserve the right to correct pricing or listing errors and to
          contact you if an order requires clarification. If an error materially
          affects your order, we will work with you on an appropriate
          resolution, subject to applicable law.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    icon: Package,
    title: "Lead Quality and Delivery",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight aims to provide lead generation products that help
          businesses identify potential vehicle shipping customers and sales
          opportunities. Lead information and delivery times may vary depending
          on the product, source, availability, and package selected.
        </p>
        <p>You acknowledge that:</p>
        <ul className="space-y-2 pl-1">
          {[
            "A lead represents a potential sales opportunity and does not guarantee a completed booking or sale.",
            "Customer requirements, availability, responsiveness, and purchase decisions may change.",
            "The accuracy and completeness of individual lead details may vary.",
            "Delivery timing depends on the agreed product and delivery method.",
            "You are responsible for reviewing and appropriately managing leads after delivery.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We do not guarantee a specific conversion rate, number of completed
          shipments, revenue level, or return on investment unless expressly
          agreed in writing.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Shared and Exclusive Leads",
    content: (
      <div className="space-y-5 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may offer different lead distribution models, including
          shared and exclusive leads.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Shared Leads",
              desc: "These leads may be supplied to more than one eligible business, according to the package purchased. Purchasing a shared lead does not provide exclusive rights to contact the prospective customer.",
            },
            {
              label: "Exclusive Leads",
              desc: "These leads are intended for distribution under the exclusivity conditions specified in the applicable product description or order confirmation. The scope and duration of exclusivity, where offered, will depend on the terms of that product.",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              </span>
              <p>
                <span className="font-semibold text-slate-800">{item.label}:</span>{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p>
          You are responsible for reviewing the specific package details before
          purchasing. We will not represent a lead as exclusive unless the
          applicable product or order terms provide for exclusivity.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    icon: PhoneCall,
    title: "Live Call Transfer Services",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may offer live call transfer services that connect
          prospective customers with participating auto transport businesses.
          Call transfer availability, qualification criteria, routing
          procedures, operating hours, and pricing may vary by campaign or
          package.
        </p>
        <p>
          By purchasing or using live call transfer services, you acknowledge
          that:
        </p>
        <ul className="space-y-2 pl-1">
          {[
            "Call volume and availability may fluctuate.",
            "A transferred call does not guarantee a booking or sale.",
            "Call quality may depend on the customer's requirements and the information provided.",
            "You are responsible for answering calls, communicating accurate service information, and following up appropriately.",
            "You must comply with applicable telemarketing, call recording, consent, privacy, and do-not-call requirements.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Any specific requirements concerning call duration, qualification,
          invalid calls, or credits must be stated in the applicable product
          terms or written agreement.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    icon: RefreshCcw,
    title: "Refunds and Cancellations",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Refund eligibility depends on the product purchased, the
          circumstances of the request, and any applicable refund policy or
          written agreement.
        </p>
        <p>
          Because lead generation services may involve the delivery of
          time-sensitive information or completed call transfers, refunds are
          not automatically available for every order once delivery or service
          performance has occurred, except where required by law or expressly
          agreed otherwise.
        </p>
        <p>
          If you believe a lead or transferred call does not meet the
          requirements expressly stated for the product you purchased, contact
          GrouponFreight with your order details and supporting information.
          Where applicable, requests should be submitted within the review
          period specified in your order confirmation or product-specific
          policy.
        </p>
        <p>
          We will review eligible requests according to the applicable terms.
          Any approved refund, replacement, or account credit will be handled
          in accordance with the relevant policy or agreement.
        </p>
        <p>
          Cancellation of an ongoing or recurring service, if offered, must
          follow the cancellation procedure communicated at the time of
          purchase.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: "Acceptable Use",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          You agree not to use GrouponFreight&apos;s website, products, or
          services to:
        </p>
        <ul className="space-y-2 pl-1">
          {[
            "Violate applicable laws or regulations.",
            "Misuse, resell, or redistribute lead data contrary to your agreement or applicable law.",
            "Send unlawful, deceptive, unsolicited, or misleading communications.",
            "Harass, threaten, or mislead prospective customers.",
            "Attempt unauthorized access to our systems or interfere with website operations.",
            "Upload or transmit malicious software or harmful material.",
            "Misrepresent your business, services, pricing, or qualifications.",
            "Use customer information in a manner inconsistent with applicable privacy or marketing laws.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We may restrict or suspend access to our services if we reasonably
          believe that a user has violated these terms, subject to applicable
          law and any relevant contractual obligations.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    icon: Lock,
    title: "Intellectual Property",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          All website content, branding, logos, text, graphics, design
          elements, and other materials owned by or licensed to GrouponFreight
          are protected by applicable intellectual property laws.
        </p>
        <p>
          You may view and use our website for legitimate business purposes.
          However, you may not reproduce, republish, distribute, modify, sell,
          or commercially exploit our website content or branding without prior
          written permission, except where permitted by law.
        </p>
        <p>
          Purchasing a lead or service does not transfer ownership of
          GrouponFreight&apos;s intellectual property.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    icon: Link2,
    title: "Third-Party Services and Links",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Our website may contain links to external websites or rely on
          third-party providers for certain functions, such as communications,
          payment processing, hosting, or analytics.
        </p>
        <p>
          Third-party services may be governed by separate terms and privacy
          policies. GrouponFreight does not control all third-party services
          and is not responsible for their independent policies, availability,
          or operations, except where liability cannot be excluded under
          applicable law.
        </p>
        <p>
          Your use of third-party services is subject to the terms that apply
          to those services.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    icon: AlertCircle,
    title: "Disclaimer of Warranties",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          To the extent permitted by law, our website and services are provided
          on an &quot;as available&quot; basis.
        </p>
        <p>
          We make reasonable efforts to maintain our website and provide
          services as described. However, we do not guarantee that the website
          will always be available, uninterrupted, error-free, or compatible
          with every device or system.
        </p>
        <p>
          We also do not guarantee that leads will result in sales, that every
          prospective customer will respond, or that a particular business
          outcome will be achieved.
        </p>
        <p>
          Nothing in these terms excludes any warranty or consumer right that
          cannot lawfully be excluded.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          To the maximum extent permitted by applicable law, GrouponFreight
          will not be liable for indirect, incidental, special, consequential,
          or punitive losses, including lost profits, lost business
          opportunities, or loss of anticipated revenue arising from the use of
          our website or services.
        </p>
        <p>
          To the extent permitted by law, our total liability for a claim
          relating to a specific paid service will not exceed the amount you
          paid for that service during the period relevant to the claim, unless
          a different limit is required by applicable law or expressly agreed
          in writing.
        </p>
        <p>
          These limitations do not apply to liabilities that cannot legally be
          limited or excluded.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    icon: Handshake,
    title: "Indemnification",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          To the extent permitted by law, you agree to indemnify and hold
          GrouponFreight and its personnel harmless from third-party claims,
          losses, and reasonable expenses arising from your unlawful use of our
          services, your breach of these terms, or your violation of another
          person&apos;s rights.
        </p>
        <p>
          This provision does not apply to the extent a claim results from
          GrouponFreight&apos;s own conduct for which it is legally responsible.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    icon: Eye,
    title: "Privacy",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Your use of our website and services is also governed by our Privacy
          Policy, which explains how we collect, use, and protect personal
          information. Please review our Privacy Policy for further details
          about our data practices.
        </p>
        <Link
          href="/privacy-policy"
          className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600 transition"
        >
          <FileText size={15} />
          View Privacy Policy
          <ArrowRight size={14} />
        </Link>
      </div>
    ),
  },
  {
    id: 16,
    icon: RefreshCcw,
    title: "Changes to These Terms",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may revise these Terms and Conditions to reflect
          changes to our services, business practices, or legal obligations.
        </p>
        <p>
          Updated terms will be posted on this page along with a revised
          &quot;Last Updated&quot; date. Where required by law, we will provide
          notice of material changes or obtain your consent.
        </p>
        <p>
          Your continued use of our website after revised terms take effect
          constitutes acceptance of the updated terms to the extent permitted
          by law. Changes will not retroactively alter existing contractual
          rights where prohibited by law.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    icon: Scale,
    title: "Governing Law",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          These Terms and Conditions will be governed by the laws applicable to
          the contractual relationship between you and GrouponFreight, subject
          to any mandatory legal protections that apply to you.
        </p>
        <p>
          Any dispute arising from these terms will be handled by the courts or
          other dispute resolution forum with appropriate jurisdiction, as
          determined by applicable law.
        </p>
      </div>
    ),
  },
  {
    id: 18,
    icon: Mail,
    title: "Contact Us",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          If you have questions about these Terms and Conditions, our lead
          generation products, order requirements, or service policies, please
          contact GrouponFreight through our website.
        </p>
        <div className="mt-2 space-y-3">
          <a
            href="https://grouponfreight.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-medium text-orange-600 transition hover:text-orange-700"
          >
            <Globe size={16} />
            grouponfreight.org
          </a>
          <a
            href="https://grouponfreight.org/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-medium text-orange-600 transition hover:text-orange-700"
          >
            <FileText size={16} />
            grouponfreight.org/contact
          </a>
          <a
            href="mailto:info@grouponfreight.org"
            className="flex items-center gap-2.5 font-medium text-orange-600 transition hover:text-orange-700"
          >
            <Mail size={16} />
            info@grouponfreight.org
          </a>
        </div>
        <p>We will review your inquiry and respond as appropriate.</p>
      </div>
    ),
  },
];

const tableOfContents = [
  "Acceptance of Terms",
  "Our Services",
  "User Eligibility and Responsibilities",
  "Orders and Payments",
  "Lead Quality and Delivery",
  "Shared and Exclusive Leads",
  "Live Call Transfer Services",
  "Refunds and Cancellations",
  "Acceptable Use",
  "Intellectual Property",
  "Third-Party Services and Links",
  "Disclaimer of Warranties",
  "Limitation of Liability",
  "Indemnification",
  "Privacy",
  "Changes to These Terms",
  "Governing Law",
  "Contact Us",
];

function AccordionItem({ section, index }) {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;

  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-200 ${
        open
          ? "border-orange-300 shadow-md shadow-orange-900/5"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left transition hover:bg-slate-50"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
              open ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            <Icon size={17} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tabular-nums text-orange-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold text-slate-900 sm:text-base">
              {section.title}
            </span>
          </div>
        </div>
        <div
          className={`shrink-0 rounded-full p-1 transition ${
            open ? "bg-orange-100 text-orange-500" : "text-slate-400"
          }`}
        >
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 pt-5 pl-[4.5rem]">
          {section.content}
        </div>
      )}
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#0f1f33]">
        <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-600/8 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              <Scale size={14} className="text-orange-400" />
              Legal &amp; Compliance
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Terms and Conditions
            </h1>

            <p className="mt-5 text-base leading-7 text-white/60">
              These Terms and Conditions govern your access to and use of{" "}
              <span className="font-semibold text-white">GrouponFreight</span>
              &apos;s website, products, and services, including auto transport
              lead generation, shared and exclusive leads, premium leads, and
              live call transfer services.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/50">
              <AlertCircle size={14} className="shrink-0 text-orange-400" />
              Last Updated:{" "}
              <span className="ml-1 font-semibold text-white/80">
                October 27, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start xl:grid-cols-[340px_1fr]">

            {/* ── Sticky sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  Table of Contents
                </p>
                <nav className="mt-5 space-y-1">
                  {tableOfContents.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-orange-600 cursor-default"
                    >
                      <span className="text-xs font-bold tabular-nums text-orange-400/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </div>
                  ))}
                </nav>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="text-xs text-slate-500 leading-5">
                    Questions about these terms?
                  </p>
                  <a
                    href="mailto:info@grouponfreight.org"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition hover:text-orange-600"
                  >
                    <Mail size={14} />
                    info@grouponfreight.org
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Accordion ── */}
            <div>
              {/* Notice banner */}
              <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <FileText size={20} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Please read these terms carefully.
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      By accessing our website or using our services, you agree
                      to be bound by these Terms and Conditions. If you do not
                      agree with any part of these terms, please discontinue
                      use of our website and services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {sections.map((section, i) => (
                  <AccordionItem key={section.id} section={section} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section className="bg-[#0f1f33] px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Have a Question?
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Contact Our Team
            </h2>
            <p className="mt-2 text-sm text-white/50">
              We&apos;ll review your inquiry and respond as appropriate.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:items-end">
            <a
              href="mailto:info@grouponfreight.org"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-400 active:scale-95"
            >
              <Mail size={16} />
              info@grouponfreight.org
            </a>
            <a
              href="https://grouponfreight.org/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition hover:text-orange-400"
            >
              grouponfreight.org/contact
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}