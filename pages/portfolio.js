import Meta from "@/components/Meta";
import { projects } from "@/projectsData";
import Link from "next/link";
import React from "react";

const portfolio = () => {
  return (
    <div>
      <Meta
        title="Portfolio dev, les derniers projets réalisés"
        description="Liste de sites développés avec react, nextjs..."
      />
      <h2>portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="projects/[id]" as={"projects/" + project.id}>
              <div>
                {project.title} <span>&rarr;</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
