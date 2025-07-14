import { type JSX } from "react";
import { Code, Cpu, Languages } from "lucide-react";
import Specialty from "@/components/home/specialty.tsx";

function Overview() {
  const specialties: {
    icon: JSX.Element;
    name: string;
    description: string;
  }[] = [
    {
      icon: <Cpu color={"white"} size={36} />,
      name: "Electronic Engineering",
      description:
        "Currently Studying at UFPS (Colombia) and working on personal projects",
    },
    {
      icon: <Code color={"white"} size={36} />,
      name: "Programming",
      description:
        "Specialized in backend services and simple front-end interfaces",
    },
    {
      icon: <Languages color={"white"} size={36} />,
      name: "English",
      description:
        "Advanced level, able to communicate effectively in both professional and informal situations",
    },
  ];
  return (
    <>
      <h1
        className={"text-white text-center my-6 text-3xl md:text-4xl font-bold"}
      >
        Overview
      </h1>
      <p className={"text-gray-400 mb-2 text-xl text-center px-3"}>
        I am a Electronic Engineering student with a passion for web development
        and mostly API design.
      </p>
      <div
        className={
          "pb-6 flex flex-col md:flex-row justify-center items-center gap-4 m-6"
        }
      >
        {specialties.map((specialty, i) => {
          return (
            <Specialty
              key={i}
              name={specialty.name}
              description={specialty.description}
              icon={specialty.icon}
            />
          );
        })}
      </div>
    </>
  );
}
export default Overview;
