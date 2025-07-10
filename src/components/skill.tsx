import { type JSX } from "react";

function Skill({
  name,
  icon,
  description,
  level,
}: {
  name: string;
  icon: JSX.Element;
  description: string;
  level: number;
}) {
  return (
    <div
      className={`bg-background border animate-gradient-x border-primary/90 backdrop-blur-sm rounded-2xl shadow-2xs m-2 p-4 basis-[23%] md:basis-[${level}%] grow hover:scale-105 hover:shadow-xs hover:shadow-secondary transition-transform duration-400 ease-in-out`}
    >
      <div className={"flex items-center gap-2 mb-2"}>
        {icon}
        <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
          {name}
        </h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
export default Skill;
