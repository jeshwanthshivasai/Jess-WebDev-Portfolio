import React from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../../components/ContainerBlock";
import ProjectDetails from "../../components/ProjectDetails";
import userData from "../../constants/data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by id
  const project = userData.projects.find((proj) => proj.id === id);

  return (
    <ContainerBlock title={`${project?.title || "Project"} - Jeshwanth Shiva Sai`}>
      <ProjectDetails project={project} />
    </ContainerBlock>
  );
}

