import {
  Atom,
  Code,
  Coffee,
  Database,
  FileCode,
  Microchip,
} from "lucide-react";
import { type JSX } from "react";

import Intro from "@/components/home/intro.tsx";
import Skill from "@/components/home/skill.tsx";
import Overview from "@/components/home/overview.tsx";
import Technologies from "@/components/home/technologies.tsx";
import Contact from "@/components/home/contact.tsx";

const skills: {
  icon: JSX.Element;
  name: string;
  description: string;
  level: number;
}[] = [
  {
    icon: <Database color={"white"} />,
    name: "MongoDB",
    description: "Main Database",
    level: 20,
  },
  {
    icon: <Microchip color={"white"} />,
    name: "Electronics",
    description: "Embedded Systems & Microcontrollers",
    level: 40,
  },
  {
    icon: <Atom color={"white"} />,
    name: "React",
    description: "Frontend Development",
    level: 50,
  },
  {
    icon: <Code color={"white"} />,
    name: "NestJS",
    description: "Backend Development",
    level: 40,
  },
  {
    icon: <FileCode color={"white"} />,
    name: "Typescript",
    description: "Main Language",
    level: 30,
  },
  {
    icon: <Coffee color={"white"} />,
    name: "Java",
    description: "Backend Development & Microservices",
    level: 50,
  },
];

function Home() {
  return (
    <>
      <section className={"md:flex m-12 mx-4 md:m-24 md:mx-4 justify-between"}>
        <Intro />
        <div
          className={
            "motion-preset-slide-up bg-primary/20 border border-primary rounded-2xl shadow-[0_0_50px] md:shadow-[0_0_35px] md:max-w-[48%] backdrop-blur-xs shadow-primary/50 p-4 mb-8 md:mb-0 md:p-8 flex gap-4 flex-wrap"
          }
        >
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              level={skill.level}
            />
          ))}
        </div>
      </section>
      <section className={"bg-background/90 md:my-12 md:py-6"}>
        <Overview />
      </section>
      <section className={"md:my-8 md:py-3"}>
        <Technologies />
      </section>
      <section className={"bg-background/80 md:mt-8 md:pt-6"}>
        <Contact />
      </section>
    </>
  );
}

export default Home;
