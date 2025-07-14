import { Progress } from "@/components/ui/progress.tsx";
function Technology({
  name,
  description,
  rating,
}: {
  name: string;
  description: string;
  rating: number;
}) {
  return (
    <div
      className={`intersect-once md:intersect:motion-preset-slide-right md:motion-delay-200 bg-primary/20 border border-primary rounded-2xl shadow-[0_0_50px] md:shadow-[0_0_10px] backdrop-blur-xs shadow-primary/50 hover:scale-105 hover:shadow-secondary transition-transform duration-400 ease-in-out`}
    >
      <div className={"m-3"}>
        <div
          className={"flex flex-row items-center gap-2 px-2 justify-between"}
        >
          <h1 className={"text-white text-2xl md:text-3xl md:pb-2 font-bold"}>
            {name}
          </h1>
          <Progress
            value={rating}
            className={
              "w-[40%] [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-white"
            }
          />
          <span className={"text-gray-400 text-xl font-bold"}>{rating}%</span>
        </div>
        <p className={"text-gray-400 text-xl md:text-xl text-justify mx-2"}>
          {description}
        </p>
      </div>
    </div>
  );
}
export default Technology;
