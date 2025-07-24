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
      style={{ flexBasis: `${level}%` }}
      className={`bg-background border border-primary/90 backdrop-blur-sm rounded-2xl shadow-2xs m-2 p-4 grow hover:scale-105 hover:shadow-xs hover:shadow-secondary transition-transform duration-400 ease-in-out`}
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
