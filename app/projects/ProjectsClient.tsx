"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsClient() {
 const { lang } = useLanguage() as { lang: "en" | "ar" };
  const isAr = lang === "ar";

  const t = {
    en: {
      eyebrow: "// featured work",
      title: "Things I've",
      titleAccent: "built.",
      sub: "A selection of projects I've worked on — crafted with attention to performance, design, and user experience.",
    },
    ar: {
      eyebrow: "// أعمال مختارة",
      title: "بعض الأشياء اللي",
      titleAccent: "بنيتها.",
      sub: "مجموعة من المشاريع اللي اشتغلت عليها — مع اهتمام بالتفاصيل، الأداء، والتجربة البصرية للمستخدم.",
    },
  }[lang];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white py-20 px-6"
      style={isAr ? { fontFamily: "'Tajawal', sans-serif" } : {}}
    >
      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-18px) } }
        @keyframes floatSlower { 0%,100% { transform: translateY(0) translateX(0) } 50% { transform: translateY(14px) translateX(10px) } }
        @keyframes glowPulse { 0%,100% { opacity:.35 } 50% { opacity:.7 } }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px) } to { opacity:1; transform: translateY(0) } }

        .fade-up { animation: fadeUp .7s ease both; }
        .blob-a { animation: floatSlow 9s ease-in-out infinite; }
        .blob-b { animation: floatSlower 11s ease-in-out infinite; }
        .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .blob-a, .blob-b, .glow-pulse { animation: none !important; }
        }
      `}</style>

      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-a glow-pulse absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="blob-b glow-pulse absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="fade-up text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cyan-400 text-sm font-mono tracking-wide mb-4">
            {t.eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            {t.sub}
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div
          className="fade-up grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{ animationDelay: ".15s" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
