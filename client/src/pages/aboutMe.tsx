import ProfilePicture from "@/components/aboutMe/pfp.tsx";
import SkillsRadar from "@/components/aboutMe/skillsChart.tsx";
import Stat from "@/components/aboutMe/stat.tsx";

const stats = [
  {
    description: "Age",
    value: `${new Date().getFullYear() - 2007} years`,
  },
  {
    description: "Experience",
    value: "5+ years",
  },
  {
    description: "Projects",
    value: "6+",
  },
  {
    description: "Open to work",
    value: "Currently",
  },
];

function AboutMe() {
  return (
    <>
      <h1
        className={
          "motion-blur-in-md text-center text-white text-4xl font-bold"
        }
      >
        Know me better
      </h1>
      <div className={"grid md:grid-cols-[1fr_3fr] gap-4 m-12 mx-4"}>
        <div>
          <ProfilePicture
            pictureUrl={
              "https://cdn.discordapp.com/avatars/752336035228418059/f405508c89367a73d167e22f13c465f1.webp?size=1024"
            }
          />
        </div>
        <div>
          <p
            className={
              "motion-preset-slide-up motion-delay-200 text-gray-400 text-xl px-3 md:text-xl text-justify"
            }
          >
            Hi! I'm an {new Date().getFullYear() - 2007}-year-old{" "}
            <span className={"text-primary font-semibold"}>
              Electronic Engineering
            </span>{" "}
            student with a lifelong passion for programming. Since I was a kid,
            I've been fascinated by how technology works, which led me to
            explore both hardware and software worlds. I enjoy building
            electronic systems and enhancing them with custom software
            interfaces. My favorite part is combining my knowledge of
            electronics with programming to create smart, interactive solutions.
            I often use technologies like React to develop user-friendly
            interfaces, and I code in languages such as{" "}
            <span className={"text-primary font-semibold"}>
              Java, JavaScript, TypeScript, and C++.
            </span>{" "}
            Over the years, I've developed strong logical thinking skills that
            help me approach problems creatively and efficiently. I'm always
            eager to learn, build, and bring ideas to life through code and
            circuits. My goal is to keep growing as an{" "}
            <span className={"text-primary font-semibold"}> engineer </span>and{" "}
            <span className={"text-primary font-semibold"}> developer</span>,
            always looking for new challenges that push me to think differently
            and improve both technically and creatively.
          </p>
        </div>
      </div>

      <div className={"md:flex flex-col md:flex-row flex-wrap"}>
        <div className={"mb-3"}>
          <h2
            className={
              "motion-blur-in-md text-center text-gray-300 text-2xl font-bold"
            }
          >
            Skills Chart
          </h2>
          <SkillsRadar />
        </div>
        <div className={"grow"}>
          <h2
            className={
              "motion-blur-in-md text-center text-gray-300 text-2xl font-bold"
            }
          >
            Quick Stats
          </h2>

          <div
            className={
              "grid grid-cols-2 grow m-4 p-2 border-1 border-gray-800 bg-background rounded-2xl shadow-background shadow-2xl motion-preset-slide-down motion-delay-200"
            }
          >
            {stats.map((stat, i) => {
              return (
                <Stat
                  key={i}
                  description={stat.description}
                  value={stat.value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
