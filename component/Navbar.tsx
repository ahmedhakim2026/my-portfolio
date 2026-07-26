"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage() as {
    lang: "en" | "ar";
    toggleLang: () => void;
  };

  const typedLang = lang;
  const pathname = usePathname();
  const isAr = typedLang === "ar";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems: Record<"en" | "ar", { name: string; path: string }[]> = {
    en: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "من أنا", path: "/about" },
      { name: "مشاريعي", path: "/projects" },
      { name: "تواصل", path: "/contact" },
    ],
  };

  const t: Record<
    "en" | "ar",
    {
      brandTop: string;
      brandBottom: string;
      menu: string;
    }
  > = {
    en: {
      brandTop: "Ahmed Hakim",
      brandBottom: "Frontend / Full Stack Developer",
      menu: "Menu",
    },
    ar: {
      brandTop: "أحمد عبد الحكيم",
      brandBottom: "مطور واجهات وتطوير متكامل",
      menu: "القائمة",
    },
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header
      dir={isAr ? "rtl" : "ltr"}
      className="w-full border-b border-slate-800 bg-[#0b1220]"
      style={isAr ? { fontFamily: "'Tajawal', sans-serif" } : {}}
    >
      <nav className="max-w-7xl mx-auto h-20 px-4 md:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-700">
            <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AH
            </span>
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-sm md:text-base font-semibold text-white">
              {t[typedLang].brandTop}
            </p>
            <p className="text-xs text-slate-400">
              {t[typedLang].brandBottom}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems[typedLang].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive(item.path)
                    ? "text-white bg-slate-800 border border-cyan-400/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <button
            onClick={toggleLang}
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
            className="relative flex items-center w-[96px] h-10 rounded-full bg-slate-900 border border-slate-700 p-1 transition hover:border-cyan-400/30"
          >
            <span
              className={`absolute top-1 h-8 w-[42px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                isAr ? "left-1" : "left-[50px]"
              }`}
            />
            <span className="relative z-10 flex w-full justify-between px-3 text-xs font-semibold">
              <span className={!isAr ? "text-white" : "text-slate-400"}>EN</span>
              <span className={isAr ? "text-white" : "text-slate-400"}>AR</span>
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-white"
            aria-label={t[typedLang].menu}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-2">
            {navItems[typedLang].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive(item.path)
                    ? "bg-slate-800 text-cyan-300 border border-cyan-400/20"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
