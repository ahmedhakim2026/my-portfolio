"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function SidebarLayout() {
  const { lang, toggleLang } = useLanguage();

  return (
    <>
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-50 flex flex-col justify-between"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {/* Logo */}
        <div className="flex flex-col items-center pt-6">
          <div className="relative w-12 h-12">
            <Image
              src="/logos.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain rounded-full"
              priority
            />
          </div>

          <span className="text-sm mt-2 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hakim
          </span>
        </div>

        {/* Language Button */}
        <div className="p-3">
          <button
            onClick={toggleLang}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-xs"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>
      </aside>
    </>
  );
}