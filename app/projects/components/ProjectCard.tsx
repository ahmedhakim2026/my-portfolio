"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/project";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
 const { lang } = useLanguage() as { lang: "ar" | "en" };

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg transition hover:scale-[1.03] hover:shadow-blue-500/20 flex flex-col"
    >
      {project.image_url ? (
        <img
          src={project.image_url}
          alt={project.title[lang]}
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="w-full h-52 flex items-center justify-center bg-[#0f172a] text-gray-500">
          No Image
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-xl font-bold">
          {project.title[lang]}
        </h2>

        <p className="text-gray-400 mt-3 line-clamp-3 flex-1">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}