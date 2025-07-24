import Technology from "@/components/home/technology.tsx";

const technologies = [
  {
    name: "Javascript",
    description: "Programming Language",
    rating: 60,
  },
  {
    name: "Java",
    description: "Programming Language",
    rating: 50,
  },
  {
    name: "Typescript",
    description: "Programming Language",
    rating: 70,
  },
  {
    name: "NodeJS",
    description: "Runtime Environment",
    rating: 70,
  },
  {
    name: "Arduino",
    description: "C++ Arduino Programming",
    rating: 50,
  },
  {
    name: "SpringBoot",
    description: "Backend Development",
    rating: 40,
  },
  {
    name: "NestJS",
    description: "Backend Development",
    rating: 70,
  },
  {
    name: "React",
    description: "Frontend Development",
    rating: 70,
  },
];
function Technologies() {
  return (
    <>
      <h1
        className={"text-white text-center my-6 text-3xl md:text-4xl font-bold"}
      >
        Some{" "}
        {
          <span
            className={
              "font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white animate-gradient-x"
            }
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            stuff
          </span>
        }{" "}
        i know
      </h1>
      <div
        className={
          "flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 m-6 my-12 md:mb-24"
        }
      >
        {technologies.map((tech, i) => {
          return (
            <Technology
              key={i}
              name={tech.name}
              description={tech.description}
              rating={tech.rating}
            />
          );
        })}
      </div>
    </>
  );
}
export default Technologies;
