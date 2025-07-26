import { FolderGit2 } from "lucide-react";
import { github } from "../../../config.json";
import { Button } from "@/components/ui/button.tsx";

function Repository({
  name,
  imageUrl,
  tags,
  description,
  isPrivate,
}: {
  name: string;
  imageUrl: string;
  description?: string;
  tags: string[];
  isPrivate: boolean;
}) {
  return (
    <div className=" flex flex-col p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] active:scale-[99%] transition-all duration-300">
      <div className="">
        <img
          src={
            imageUrl.length
              ? imageUrl
              : "/skill.png"
          }
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg shadow-md"
        />
      </div>
      <div className={"bg-gray-700 grow p-4 rounded-b-lg"}>
        <h3 className="text-xl font-semibold text-white">
          {String(name).charAt(0).toUpperCase() + String(name).slice(1)}{" "}
          <span
            className={`rounded-full px-2 ${isPrivate ? "bg-red-400/30 text-red-300" : "bg-green-400/30 text-green-300"} py-1 self-center text-sm font-semibold`}
          >
            {isPrivate ? "Private" : "Public"}
          </span>
        </h3>
        <p className={"text-gray-400"}>
          {description ? description : "No description available."}
        </p>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 m-1 text-sm text-white font-semibold hover:scale-105 duration-200 bg-gray-600 rounded-full cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          disabled={isPrivate}
          className={
            "bg-primary font-bold shadow-lg shadow-primary/50 mt-4 hover:scale-105 duration-200"
          }
        >
          <a
            className={"flex"}
            target="_blank"
            href={`https://github.com/${github.username}/${name.replace(/ /g, "-")}`}
          >
            <FolderGit2 className={"mr-1 mt-0.5"} /> Source Code
          </a>
        </Button>
      </div>
    </div>
  );
}
export default Repository;
