"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Mail,
  Globe,
  Lock,
  Eye,
  Database,
  Users,
  FileText,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    id: 1,
    icon: Database,
    title: "Personal Information We Collect",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may collect personal information when you visit our
          website, submit a contact form, request information about our
          services, inquire about pricing, or communicate with our team.
        </p>
        <p>Depending on how you interact with us, the information collected may include:</p>
        <ul className="space-y-2 pl-1">
          {[
            "Your name and business name.",
            "Email address and telephone number.",
            "Business contact details.",
            "Information about your interest in our lead generation products and services.",
            "Details included in messages, inquiries, or other communications you send us.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We collect personal information that you voluntarily provide or that
          is otherwise collected through our website in accordance with
          applicable law. You may browse certain sections of our website without
          providing personal information. However, some services or features may
          require specific details to respond to your request.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: Eye,
    title: "Non-Personal Information",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          When you visit our website, certain technical information may be
          collected automatically. This information helps us understand how
          visitors use our website and identify opportunities to improve its
          performance.
        </p>
        <p>Such information may include:</p>
        <ul className="space-y-2 pl-1">
          {[
            "Browser type and version.",
            "Device type and operating system.",
            "IP address and general location information derived from it.",
            "Pages visited and time spent on the website.",
            "Referring websites and general browsing activity.",
            "Technical information about your connection.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We may use this information in aggregated form to analyze website
          traffic, troubleshoot technical issues, and improve the visitor
          experience.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    icon: Globe,
    title: "Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Our website may use cookies and similar technologies to support
          website functionality, remember certain preferences, analyze visitor
          activity, and improve our services.
        </p>
        <p>
          Cookies are small files stored by your browser that allow a website
          to recognize certain information about your visit.
        </p>
        <p>
          You can manage or disable cookies through your browser settings.
          Depending on your choices, some website features may not work as
          intended.
        </p>
        <p>
          Where required by applicable law, we will request consent before
          using non-essential cookies or tracking technologies.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    icon: FileText,
    title: "How We Use Your Information",
    content: (
      <div className="space-y-5 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may use the information we collect for legitimate
          business purposes, including:
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Responding to inquiries",
              desc: "To answer questions, provide requested information, and assist with service-related requests.",
            },
            {
              label: "Providing our services",
              desc: "To explain our lead generation products, process requests, prepare quotations, and coordinate orders.",
            },
            {
              label: "Communicating with you",
              desc: "To send service updates, respond to messages, and provide information relevant to your inquiries.",
            },
            {
              label: "Improving our website",
              desc: "To understand visitor behavior, improve website navigation, evaluate performance, and resolve technical issues.",
            },
            {
              label: "Maintaining security",
              desc: "To detect suspicious activity, prevent misuse, protect our website, and safeguard business operations.",
            },
            {
              label: "Meeting legal obligations",
              desc: "To comply with applicable laws, regulations, and lawful requests from relevant authorities.",
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
          We will use personal information for purposes consistent with the
          reason it was collected, or for other purposes permitted by applicable
          law.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    icon: Lock,
    title: "How We Protect Your Information",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          We take reasonable technical and organizational measures designed to
          protect personal information against unauthorized access, loss,
          misuse, alteration, or disclosure.
        </p>
        <p>
          These measures may include access controls, secure data handling
          practices, and appropriate safeguards for information stored or
          transmitted through our website and business systems.
        </p>
        <p>
          However, no method of transmitting information over the internet or
          storing electronic data can be guaranteed to be completely secure.
          Although we work to protect your information, we cannot guarantee
          absolute security.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    icon: Users,
    title: "Sharing and Disclosure of Information",
    content: (
      <div className="space-y-5 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight does not sell personal information in exchange for
          money. We may disclose information in limited circumstances when
          necessary to operate our business, provide requested services, or
          comply with legal requirements.
        </p>
        <p>Information may be shared with:</p>
        <div className="space-y-4">
          {[
            {
              label: "Service providers",
              desc: "Third-party companies that help us operate our website, manage communications, process payments where applicable, maintain systems, or provide analytics.",
            },
            {
              label: "Business partners",
              desc: "Where appropriate and permitted by law, information may be shared with relevant partners when necessary to provide a service you have requested or support a business transaction.",
            },
            {
              label: "Legal authorities",
              desc: "When disclosure is required by law, legal process, or a valid request from an authorized authority.",
            },
            {
              label: "Business transfers",
              desc: "In connection with a merger, acquisition, restructuring, or transfer of business assets, subject to applicable privacy requirements.",
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
          We take reasonable steps to ensure that third parties handling
          personal information on our behalf are subject to appropriate
          confidentiality and security obligations.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    icon: ShieldCheck,
    title: "Children's Privacy",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight&apos;s website and services are intended for businesses
          and adults. They are not designed to target children under the age of
          13.
        </p>
        <p>
          We do not knowingly collect personal information directly from
          children under 13. If we become aware that such information has been
          collected without appropriate authorization, we will take reasonable
          steps to delete it as required by applicable law.
        </p>
        <p>
          A parent or legal guardian who believes that a child has provided
          personal information to us may contact us using the details below.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    icon: Globe,
    title: "Third-Party Websites and Services",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Our website may contain links to third-party websites, platforms, or
          services. These external websites operate independently and may have
          their own privacy policies and data collection practices.
        </p>
        <p>
          GrouponFreight does not control the privacy practices of third-party
          websites. We encourage visitors to review the applicable privacy
          policies before providing personal information to those services.
        </p>
        <p>
          The inclusion of an external link does not necessarily imply
          endorsement of that website or its privacy practices.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    icon: FileText,
    title: "Your Privacy Rights and Choices",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          Depending on your location and applicable law, you may have rights
          concerning your personal information. These may include the right to:
        </p>
        <ul className="space-y-2 pl-1">
          {[
            "Request access to personal information we hold about you.",
            "Ask us to correct inaccurate or incomplete information.",
            "Request deletion of certain personal information.",
            "Withdraw consent where processing is based on consent.",
            "Opt out of marketing emails by following the unsubscribe instructions provided.",
            "Object to or restrict certain types of processing where applicable.",
            "Submit a privacy-related complaint to the relevant authority.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          These rights are subject to applicable legal requirements and
          exceptions. To submit a request, contact us using the information
          provided in the Contact Us section. We may need to verify your
          identity before processing certain requests.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    icon: AlertCircle,
    title: "Changes to This Privacy Policy",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          GrouponFreight may update this Privacy Policy from time to time to
          reflect changes in our business practices, website features, legal
          obligations, or privacy requirements.
        </p>
        <p>
          When we make changes, we will update the date shown at the beginning
          of this page. Where required by law, we will provide additional notice
          or obtain consent for material changes.
        </p>
        <p>
          We encourage you to review this page periodically to stay informed
          about how we handle personal information.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    icon: ShieldCheck,
    title: "Your Acceptance of This Policy",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          By accessing or using the GrouponFreight website, you acknowledge
          this Privacy Policy and its terms.
        </p>
        <p>
          If you do not agree with this policy, please discontinue use of the
          website. Where consent is legally required for a particular activity,
          using the website alone will not replace the need to obtain that
          consent.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    icon: Mail,
    title: "Contact Us",
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>
          If you have questions about this Privacy Policy, want to make a
          privacy-related request, or need further information about our data
          practices, please contact GrouponFreight through any of the following:
        </p>
        <div className="mt-2 space-y-3">
          <a
            href="https://grouponfreight.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-orange-600 font-medium hover:text-orange-700 transition"
          >
            <Globe size={16} />
            grouponfreight.org
          </a>
          <a
            href="https://grouponfreight.org/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-orange-600 font-medium hover:text-orange-700 transition"
          >
            <FileText size={16} />
            grouponfreight.org/contact
          </a>
          <a
            href="mailto:info@grouponfreight.org"
            className="flex items-center gap-2.5 text-orange-600 font-medium hover:text-orange-700 transition"
          >
            <Mail size={16} />
            info@grouponfreight.org
          </a>
        </div>
        <p>
          We will review privacy-related inquiries and respond as appropriate
          under applicable law.
        </p>
      </div>
    ),
  },
];

const tableOfContents = [
  "Personal Information We Collect",
  "Non-Personal Information",
  "Cookies and Tracking Technologies",
  "How We Use Your Information",
  "How We Protect Your Information",
  "Sharing and Disclosure of Information",
  "Children's Privacy",
  "Third-Party Websites and Services",
  "Your Privacy Rights and Choices",
  "Changes to This Privacy Policy",
  "Your Acceptance of This Policy",
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
            <span className="text-xs font-bold text-orange-500 tabular-nums">
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

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={14} className="text-orange-400" />
              Legal &amp; Privacy
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-base leading-7 text-white/60">
              At <span className="font-semibold text-white">GrouponFreight</span>,
              we respect your privacy and are committed to protecting the
              personal information you share with us.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/50">
              <AlertCircle size={14} className="text-orange-400 shrink-0" />
              Last Updated: <span className="font-semibold text-white/80 ml-1">October 27, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start xl:grid-cols-[320px_1fr]">

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
                    Questions about this policy?
                  </p>
                  <a
                    href="mailto:info@grouponfreight.org"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
                  >
                    <Mail size={14} />
                    info@grouponfreight.org
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Accordion content ── */}
            <div>
              <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Your privacy matters to us.
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      This policy explains how GrouponFreight collects, uses,
                      and protects the information you share when using our
                      website or lead generation services. By using our website,
                      you acknowledge that you have read this Privacy Policy.
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
              Privacy Questions?
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Reach Out to Our Team
            </h2>
            <p className="mt-2 text-sm text-white/50">
              We&apos;ll review your inquiry and respond as required under
              applicable law.
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