"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 pl-2 list-disc">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>Postgres</li>
        <li>MongoDb</li>
        <li>Tailwind</li>
        <li>Entornos Agile</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Bootcamp Desarrollo Web Fullstack &apos;Soy Henry&apos;</li>
        <li>Universidad Tecnologica de México - Ingenieria comercial</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Fullstack Web Developer - Soy Henry</li>
        <li>Responsive Web Dessing - Freecodecamp</li>
        <li>English B1 Intermediate - EF-Set</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">Sobre mi</h2>

          <p className="text-base lg:text-lg">
            Soy Fullstack Developer especializado en Frontend, con una sólida
            base en desarrollo de aplicaciones funcionales adquirida a través
            del bootcamp intensivo Soy Henry. Mi pasión por la tecnología se
            centra en crear experiencias visuales e interactivas que conecten
            con los usuarios, aprovechando las últimas tendencias y herramientas
            del desarrollo web.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
