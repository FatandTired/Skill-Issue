import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function Intro() {
  const skills = [
    "Electronic Engineering Student",
    "Web Development",
    "API Designer",
    "Vibe Coder",
  ];
  return (
    <div
      className={
        "p-2 mb-[5em] md:mb-0 md:m-2 md:p-4 md:pr-4 flex flex-col gap-4 md:max-w-[50%] "
      }
    >
      <h1
        className={
          "motion-blur-in-md text-white text-4xl md:text-6xl font-bold"
        }
      >
        Hi, I'm Fabio A.
      </h1>
      <h2
        className={
          "motion-blur-in-md text-white text-3xl md:text-4xl font-bold"
        }
      >
        Aka{" "}
        <span
          className={
            "font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white animate-gradient-x"
          }
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Fatand
        </span>
      </h2>
      <TypeAnimation
        sequence={[
          skills[0],
          2000,
          skills[1],
          2000,
          skills[2],
          2000,
          skills[3],
          2000,
        ]}
        wrapper="span"
        speed={50}
        className={"motion-blur-in-md text-gray-400 text-xl md:text-xl"}
        repeat={Infinity}
      />
      <p
        className={
          "motion-preset-slide-up motion-delay-200 text-gray-400 text-xl md:text-xl text-justify"
        }
      >
        I am a passionate developer with a focus on web development and API
        design. I love creating efficient and user-friendly applications that
        solve real-world problems. My goal is to continuously learn and improve
        my skills while contributing to meaningful projects.
      </p>
      <div
        className={
          "motion-preset-slide-up motion-delay-200 flex flex-row gap-4 pt-4"
        }
      >
        <Button
          className={
            "bg-primary shadow-lg shadow-primary/50 hover:scale-105 duration-200"
          }
        >
          <Link to={"/projects"}>See projects</Link>
        </Button>
        <Button
          className={
            "bg-primary shadow-lg shadow-primary/50 hover:scale-105 duration-200"
          }
        >
          <Link to={"/contact"}>Contact!</Link>
        </Button>
      </div>
    </div>
  );
}
export default Intro;
