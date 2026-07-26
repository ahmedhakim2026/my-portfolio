"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectDetails({
  project,
}: {
  project: Project;
}) {
  const { lang } = useLanguage() as { lang: "ar" | "en" };
  const isAr = lang === "ar";

  const t = {
    en: {
      eyebrow: "// project overview",
      features: "Features",
      stack: "Tech stack",
      github: "GitHub",
      live: "Live Demo",
    },
    ar: {
      eyebrow: "// نظرة على المشروع",
      features: "المميزات",
      stack: "التقنيات المستخدمة",
      github: "جيت هاب",
      live: "عرض مباشر",
    },
  }[lang];

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white py-20 px-6"
      style={isAr ? { fontFamily: "'Tajawal', sans-serif" } : {}}
    >
      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-18px) } }
        @keyframes floatSlower { 0%,100% { transform: translateY(0) translateX(0) } 50% { transform: translateY(14px) translateX(10px) } }
        @keyframes glowPulse { 0%,100% { opacity:.35 } 50% { opacity:.7 } }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px) } to { opacity:1; transform: translateY(0) } }
        @keyframes borderSpin { to { --angle: 360deg } }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .fade-up { animation: fadeUp .7s ease both; }
        .blob-a { animation: floatSlow 9s ease-in-out infinite; }
        .blob-b { animation: floatSlower 11s ease-in-out infinite; }
        .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }

        .conic-border {
          background: conic-gradient(from var(--angle), #22d3ee, #2563eb, #22d3ee);
          animation: borderSpin 6s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .blob-a, .blob-b, .glow-pulse, .conic-border {
            animation: none !important;
          }
        }
      `}</style>

      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-a glow-pulse absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="blob-b glow-pulse absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="fade-up text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-cyan-400 text-sm font-mono tracking-wide mb-4">
            {t.eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {project.title[lang].split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {project.title[lang].split(" ").slice(-1).join(" ")}
            </span>
          </h1>
        </div>

        {/* Project image */}
        <div className="fade-up rounded-2xl p-[2px] conic-border" style={{ animationDelay: ".1s" }}>
          <div className="rounded-2xl bg-slate-900 overflow-hidden border border-slate-800">
            <img
              src={project.image_url}
              alt={project.title[lang]}
              className="w-full h-[260px] md:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Gallery */}
        <div
          className="mt-8 fade-up bg-slate-900 border border-slate-800 rounded-2xl p-6"
          style={{ animationDelay: ".28s" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-5">
            Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-700"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid gap-8">
          {/* Description */}
          <div
            className="fade-up bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8"
            style={{ animationDelay: ".15s" }}
          >
            <p className="text-gray-300 leading-8 text-base md:text-lg">
              {project.longDescription[lang]}
            </p>
          </div>

          {/* Tech stack */}
          <div
            className="fade-up bg-slate-900 border border-slate-800 rounded-2xl p-6"
            style={{ animationDelay: ".2s" }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-5">
              {t.stack}
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-cyan-300 border border-cyan-400/20 px-4 py-2 rounded-full text-sm hover:border-cyan-400/40 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div
            className="fade-up bg-slate-900 border border-slate-800 rounded-2xl p-6"
            style={{ animationDelay: ".25s" }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-5">
              {t.features}
            </h2>

            <ul className={`space-y-3 text-gray-300 ${isAr ? "pr-1" : "pl-1"}`}>
              {project.features[lang].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className="leading-7">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div
            className="fade-up flex flex-wrap gap-4"
            style={{ animationDelay: ".3s" }}
          >
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition"
              >
                {t.github}
              </Link>
            )}

            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 bg-slate-900 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-full font-medium transition"
              >
                {t.live}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
