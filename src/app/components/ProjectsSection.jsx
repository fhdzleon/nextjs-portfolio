"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stockify",
    description: "MVP Gestor de inventarios",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fhdzleon/stockDep.git",
    previewUrl: "https://stock-dep-xi.vercel.app/main",
  },
  {
    id: 2,
    title: "Telemed",
    description: "MVP Sistema de teleconsultas medicas",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fhdzleon/teleDeploy.git",
    previewUrl: "https://telemed-beta-nine.vercel.app/",
  },
  {
    id: 3,
    title: "BP - Ventures",
    description: "Sistema intranet, empresa de RRHH",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=OFu6ewsr_zg",
    previewUrl: "https://www.youtube.com/watch?v=OFu6ewsr_zg",
  },
  {
    id: 4,
    title: "Skull market",
    description: "E-Commerce Tech",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fhdzleon/skullMarket.git",
    previewUrl: "https://skull-gadgets-git-main-skulldevs-projects.vercel.app/",
  },
  {
    id: 5,
    title: "Dental App",
    description: "Sistema de turnos para consultorio dental",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fhdzleon/dentalApp.git",
    previewUrl: "https://dental-app-iota.vercel.app/",
  },
  {
    id: 6,
    title: "Skull Cinema",
    description: "Proyecto academico de cine",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fhdzleon/p2m1.git",
    previewUrl: "https://skulltech.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        Proyectos
      </h2>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
