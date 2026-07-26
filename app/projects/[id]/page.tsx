import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}