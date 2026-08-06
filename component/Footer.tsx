"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE_RAW = "01151127192"; // Egyptian local format
const PHONE_INTL = "201151127192"; // wa.me / international: drop leading 0, prepend 20
const PHONE_DISPLAY = "+20 115 112 7192";

export default function Footer() {
  const { lang, toggleLang } = useLanguage() as {
    lang: "en" | "ar";
    toggleLang: () => void;
  };

  const typedLang = lang;
  const pathname = usePathname();
  const isAr = typedLang === "ar";
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahmed.hakim@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  const t: Record<
    "en" | "ar",
    {
      tagline: string;
      builtBy: string;
      rights: string;
      sections: string;
      explore: string;
      getInTouch: string;
      callWhatsApp: string;
      callDirect: string;
      callHint: string;
      available: string;
      openToWork: string;
      backToTop: string;
      copyEmail: string;
      copied: string;
      emailLabel: string;
      nav: { name: string; path: string }[];
    }
  > = {
    en: {
      tagline:
        "Frontend & Full-Stack developer crafting fast, accessible, bilingual web experiences.",
      builtBy: "Crafted with care by",
      rights: "All rights reserved.",
      sections: "Sections",
      explore: "Explore the site",
      getInTouch: "Get in touch",
      callWhatsApp: "WhatsApp me",
      callDirect: "Call",
      callHint: "Direct line — 24/7 voice & WhatsApp",
      available: "Available for new projects",
      openToWork: "Open to work · Remote · Worldwide",
      backToTop: "Back to top",
      copyEmail: "Copy email",
      copied: "Copied ✓",
      emailLabel: "ahmedhakimgamal98@gmail.com",
      nav: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ],
    },
    ar: {
      tagline:
        "مطور واجهات أمامية ومتطور متكامل، أصنع تجارب ويب سريعة ومتجاوبة .",
      builtBy: "صُمم بحب من قِبل",
      rights: "جميع الحقوق محفوظة.",
      sections: "الأقسام",
      explore: "تصفّح الموقع",
      getInTouch: "تواصل معي",
      callWhatsApp: "راسلني على واتساب",
      callDirect: "اتصال",
      callHint: "خط مباشر — صوت وواتساب على مدار الساعة",
      available: "متاح لمشاريع جديدة",
      openToWork: "متاح للعمل · عن بُعد · حول العالم",
      backToTop: "إلى الأعلى",
      copyEmail: "نسخ البريد",
      copied: "تم النسخ ✓",
      emailLabel: "ahmedhakimgamal98@gmail.com",
      nav: [
        { name: "الرئيسية", path: "/" },
        { name: "من أنا", path: "/about" },
        { name: "مشاريعي", path: "/projects" },
        { name: "تواصل", path: "/contact" },
      ],
    },
  };

  const tx = t[typedLang];

  // ============================================================
  // PASTE YOUR REAL PROFILES HERE ↓
  // Replace "#" placeholders with your actual profile URLs.
  // ============================================================
  const socials = {
    x: "#",                         // https://x.com/your-handle
    linkedin: "#",                  // https://www.linkedin.com/in/your-handle
    devto: "https://dev.to/ahmedhakim", // ✅ your dev.to profile
    whatsapp: `https://wa.me/${PHONE_INTL}`,
  };

  const socialsConfig = [
    {
      key: "x",
      labelEn: "X",
      labelAr: "إكس",
      href: socials.x,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M18.244 2H21.5l-7.5 8.567L22.5 22h-6.844l-5.36-7.013L4.3 22H1.04l8.02-9.16L1.5 2h7.012l4.848 6.4L18.244 2zm-2.4 18h1.812L7.27 4H5.34l10.504 16z" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      labelEn: "LinkedIn",
      labelAr: "لينكدإن",
      href: socials.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      key: "devto",
      labelEn: "dev.to",
      labelAr: "دف.تو",
      href: socials.devto,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.42 10.39c.18.14.31.34.379.564.069.224.069.49 0 .714-.069.224-.2.424-.379.564-.18.14-.42.21-.58.21H4.84V10.18h2.06c.16 0 .4.07.58.21zm-3.207 5.65h3v-1.5h-1.5v-6h-1.5v7.5zm5.001 0h3.55c.7 0 1.37-.21 1.838-.55.476-.34.7-.898.7-1.522V10.79c0-.624-.224-1.106-.7-1.446-.467-.339-1.137-.549-1.838-.549h-3.55v7.246zm1.5-6h2.05c.71 0 1.215.45 1.215 1.106v2.624c0 .656-.505 1.106-1.215 1.106h-2.05v-4.836zm9.413 6h2.5c.7 0 1.371-.21 1.838-.55.476-.34.7-.898.7-1.522 0-.625-.224-1.181-.7-1.522-.467-.339-1.137-.548-1.838-.548h-2.5v1.5h2.5c.275 0 .5.225.5.5s-.225.5-.5.5h-2.5v1.5h2.5c.275 0 .5.225.5.5s-.225.5-.5.5h-2.5v1.642zm-3.961-9.711h6.911v6.711h-2.5v-5.211h-2.001v1.5h-2.41v-3z" />
        </svg>
      ),
    },
    {
      key: "whatsapp",
      labelEn: "WhatsApp",
      labelAr: "واتساب",
      href: socials.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.27l-.999 3.648 3.978-.617zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      ),
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      style={isAr ? { fontFamily: "'Tajawal', sans-serif" } : {}}
      className="relative w-full border-t border-slate-800 bg-[#0b1220] text-slate-300"
    >
      {/* Animated gradient hairline on hover */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-8">
        {/* Top row: status + lang switch + back-to-top */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">
                {tx.available}
              </p>
              <p className="text-xs text-slate-400">{tx.openToWork}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 
                <button
              onClick={toggleLang}
              aria-label={
                isAr ? "Switch to English" : "التبديل إلى العربية"
              }
              className="relative flex items-center w-[96px] h-10 rounded-full bg-slate-900 border border-slate-700 p-1 transition hover:border-cyan-400/30"
            >
              <span
                className={`absolute top-1 h-8 w-[42px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  isAr ? "left-1" : "left-[50px]"
                }`}
              />
              <span className="relative z-10 flex w-full justify-between px-3 text-xs font-semibold">
                <span
                  className={!isAr ? "text-white" : "text-slate-400"}
                >
                  EN
                </span>
                <span className={isAr ? "text-white" : "text-slate-400"}>
                  AR
                </span>
              </span>
            </button>
            
            */}
          

            <button
              onClick={scrollTop}
              aria-label={tx.backToTop}
              className={`group flex h-10 items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white ${
                showTop ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              {tx.backToTop}
            </button>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-700">
                <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AH
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-base md:text-lg font-semibold text-white">
                  {typedLang === "ar" ? "أحمد عبد الحكيم" : "Ahmed Hakim"}
                </p>
                <p className="text-xs text-slate-400">
                  {typedLang === "ar"
                    ? "مطور واجهات وتطوير متكامل"
                    : "Frontend / Full Stack Developer"}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              {tx.tagline}
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socialsConfig.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={isAr ? s.labelAr : s.labelEn}
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800 hover:text-white"
                >
                  <span className="text-cyan-300 transition group-hover:text-white">
                    {s.icon}
                  </span>
                  <span className="hidden sm:inline">
                    {isAr ? s.labelAr : s.labelEn}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              {tx.explore}
            </h4>
            <ul className="space-y-2">
              {tx.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`group inline-flex items-center gap-2 text-sm transition ${
                      isActive(item.path)
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        isActive(item.path)
                          ? "bg-cyan-400"
                          : "bg-slate-600 group-hover:bg-cyan-400"
                      }`}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              {tx.getInTouch}
            </h4>

            <div className="space-y-3">
              {/* Phone — WhatsApp + Call */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold text-white" dir="ltr">
                  {PHONE_DISPLAY}
                </p>
                <p className="mt-1 text-xs text-slate-400">{tx.callHint}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold text-slate-900 transition hover:brightness-110"
                  >
                    {socialsConfig[3].icon}
                    {tx.callWhatsApp}
                  </a>
                  <a
                    href={`tel:+${PHONE_INTL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {tx.callDirect} · {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Email + copy */}
              <button
                onClick={copyEmail}
                className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-start transition hover:border-cyan-400/40"
              >
                <span className="flex flex-col">
                  <span className="text-xs text-slate-400">
                    {tx.emailLabel}
                  </span>
                  <span className="text-sm font-semibold text-white" dir="ltr">
                    ahmedhakimgamal98@gmail.com
                  </span>
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
                  {copied ? tx.copied : tx.copyEmail}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ahmed Hakim · {tx.rights}
          </p>
          <p className="text-xs text-slate-500">
            {tx.builtBy}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold text-transparent">
              Ahmed Hakim
            </span>
          </p>
        </div>
      </div>

      {/* Floating back-to-top (mobile-friendly alternative) */}
      <button
        onClick={scrollTop}
        aria-label={tx.backToTop}
        className={`fixed bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 md:hidden ${
          isAr ? "left-6" : "right-6"
        } ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
