import NavBar from "./components/navBar.tsx";
import Intro from "./components/intro.tsx";
import Skill from "./components/skill.tsx";
import {
  Atom,
  Code,
  Coffee,
  Database,
  FileCode,
  Microchip,
} from "lucide-react";
import { type JSX } from "react";
function App() {
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
      level: 30,
    },
    {
      icon: <Microchip color={"white"} />,
      name: "Electronics",
      description: "Embedded Systems & Microcontrollers",
      level: 50,
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
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className={"md:flex mt-12 mx-4 justify-between"}>
          <Intro />
          <div
            className={
              "bg-primary/20 border border-primary rounded-2xl shadow-[0_0_50px] md:shadow-[0_0_35px] md:max-w-[48%] backdrop-blur-xs shadow-primary/50 p-4 mb-8 md:mb-0 md:p-8 flex gap-4 flex-wrap"
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
      </main>
    </>
  );
}

export default App;
