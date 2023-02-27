import Meta from "@/components/Meta";
import { path } from "@/config";
import { projects } from "@/projectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const project = ({ project }) => {
  return (
    <div className="project">
      <Meta title={`Projet ${project.title} de mon portfolio`} />
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.infos}</p>
      <Image
        src={path + project.img}
        alt={project.title}
        width={400}
        height={250}
      />
      <Link href="/portfolio">Revenir aux projets</Link>
    </div>
  );
};

export default project;

export const getStaticProps = (context) => {
  const filtered = projects.filter(
    (project) => project.id == context.params.id
  );

  if (filtered.length > 0) {
    return {
      props: {
        project: filtered[0],
      },
    };
  }
};

export const getStaticPaths = () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
