import { useEffect, useState } from "react";
import axios from "../api/axios";
import {Funnel, Loader} from "lucide-react";
import Repository from "@/components/projects/repository.tsx";
import { Input } from "@/components/ui/input.tsx";
import { github } from "../../config.json";
import * as React from "react";
import { toast } from "sonner";

interface repo {
  name: string;
  description?: string;
  imageUrl: string;
  tags: string[];
  isPrivate: boolean;
}

const availableTags = [
  "electronics",
  "frontend",
  "backend",
  "bot",
  "ts",
  "js",
  "java",
  "cpp",
];

function Projects() {
  const [repos, setRepos] = useState<repo[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const toggleTag = (e: React.MouseEvent<HTMLSpanElement>) => {
    const tag = (e.target as HTMLSpanElement).innerText;
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  useEffect(() => {
    axios
      .get("/portfolio/projects")
      .then((res) => {
        if (res.status === 200) {
          const repos: repo[] =  res.data;
          setRepos(repos);
        } else {
          toast.error("Coudn't load repositories. Please try again.", {
            duration: 5000,
          });
        }
      })
      .catch(() =>
        toast.error("Something went wrong. Please try again.", {
          duration: 5000,
        }),
      ).finally(() => setLoading(false))
  }, []);

  return (
    <>
      <h1
        className={
          "motion-blur-in-md text-center text-white text-4xl font-bold"
        }
      >
        My projects
      </h1>
      <p
        className={
          "motion-preset-slide-up motion-delay-200 py-6 px-2 text-gray-400 text-xl md:text-xl text-center"
        }
      >
        Here are some of the projects I have worked on. You can find the source
        code of most of them on my{" "}
        <a
          target={"_blank"}
          href={`https://github.com/${github.username}/`}
          className={"text-primary font-semibold"}
        >
          GitHub profile
        </a>
        . Feel free to explore and contribute!
      </p>
      <div
        className={
          "flex flex-col md:flex-row p-2 rounded-xl justify-between bg-gray-800 mx-8"
        }
      >
        <div className={"flex flex-col md:flex-row"}>
          <h2
            className={
              "text-white text-xl font-semibold flex items-center gap-2 basis-1/2"
            }
          >
            <Funnel /> Filter Tags:
          </h2>
          <div className="flex flex-wrap md:flex-nowrap px-2 my-2 md:m-0">
            {availableTags.map((tag) => (
              <span
                onClick={toggleTag}
                key={tag}
                className={`cursor-pointer select-none px-3 py-1 m-1 text-sm text-white font-semibold hover:scale-105 active:scale-[99%] duration-200 ${tags.includes(tag) ? "bg-primary" : "bg-gray-600"} rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Input
          required={false}
          className={
            "text-white placeholder-white/30! border-primary max-w-sm focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary"
          }
          placeholder="Search for projects"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      { loading ? (<div className={"flex justify-center items-center"}>
        <Loader className={"text-gray-300 spin-icon mt-12"} size={64}/>
      </div>) : (
        <div
          className={
            "motion-blur-in-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8"
          }
        >
          {repos
            .filter((repo) =>
              repo.name.toLowerCase().includes(search.toLowerCase()),
            )
            .filter((repo) => {
              if (tags.length === 0) return true;
              return repo.tags.some((tag) => tags.includes(tag));
            })
            .map((repo) => {
              return (
                <Repository
                  key={repo.name}
                  imageUrl={repo.imageUrl}
                  name={repo.name}
                  tags={repo.tags}
                  description={repo.description}
                  isPrivate={repo.isPrivate}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
export default Projects;
