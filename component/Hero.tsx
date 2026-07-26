"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const { lang } = useLanguage();

  // المصفوفتين منفصلين: واحدة للديسكتوب وواحدة للموبايل
  const desktopImages = ["/hero1.png", "/hero2.png", "/hero3.jpeg"];
  const mobileImages  = ["/hero2.png", "/hero3.jpeg"];

  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  // متابعة عرض الشاشة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // قيمة أولية
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // المحتوى يختفي فقط على أول slide في الديسكتوب (hero1.png intro),
  // الموبايل المحتوى يفضل ظاهر من أول slide لأن مفيش slide تمهيدية.
  const hideContent = !isMobile && current === 0;

  // إعادة ضبط الـ slider كل ما الجهاز يتغير
  useEffect(() => {
    setCurrent(0);
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(slider);
  }, [isMobile, images.length]);

  return (
    <section className="relative h-[95vh] overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          // key مميّز حسب الجهاز عشان React يعمل remount صح
          key={`${isMobile ? "m" : "d"}-${index}`}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            current === index ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center scale-110 animate-[slowZoom_8s_linear_infinite]"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-30" />

      {/* Content */}
      <div
        className={`relative z-40 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          hideContent
            ? "opacity-0 translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fadeUp"
          style={lang === "ar" ? { fontFamily: "'Tajawal', sans-serif" } : {}}
        >
          {lang === "en" ? "Hi, I'm Ahmed" : "مرحباً بك في موقعي الرسمي"}
        </h1>

        <p
          className="text-gray-300 mt-6 text-lg md:text-2xl max-w-2xl animate-fadeUp delay-200"
          style={lang === "ar" ? { fontFamily: "'Tajawal', sans-serif" } : {}}
        >
          {lang === "en"
            ? "Frontend / Full Stack Developer crafting modern digital experiences."
            : "مطور واجهات أمامية وتطبيقات متكاملة أقوم ببناء تجارب رقمية حديثة."}
        </p>

        <div className="cursor-pointer mt-8 flex gap-4 flex-wrap justify-center animate-fadeUp delay-500">
          <Link href="/projects">
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500
              text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              {lang === "en" ? "View Projects" : "مشاريعي"}
            </button>
          </Link>

          <Link href="/contact">
            <button
              className="cursor-pointer px-8 py-3 rounded-full border border-white/30 bg-white/10
              backdrop-blur-md text-white hover:bg-white/20 transition duration-300"
            >
              {lang === "en" ? "Contact Me" : "تواصل معي"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
