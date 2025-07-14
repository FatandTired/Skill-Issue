import { type JSX } from "react";

function Specialty({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div
      className={`intersect-once md:intersect:motion-translate-y-in-25 bg-background/20 border border-primary/90 backdrop-blur-sm rounded-2xl shadow-2xs m-2 p-4 flex flex-col md:max-w-[33.33%] items-center gap-4 hover:scale-105 hover:shadow-xs hover:shadow-secondary transition-transform duration-400 ease-in-out`}
    >
      {icon}
      <h1 className={"text-white text-center text-2xl md:text-3xl font-bold"}>
        {name}
      </h1>
      <p
        className={
          "text-gray-400 text-xl md:text-xl text-justify md:text-center"
        }
      >
        {description}
      </p>
    </div>
  );
}
export default Specialty;
