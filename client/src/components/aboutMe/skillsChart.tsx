import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart";

const chartData = [
  { skill: "Javascript", Level: 60 },
  { skill: "Typescript", Level: 70 },
  { skill: "Frontend", Level: 50 },
  { skill: "Backend", Level: 70 },
  { skill: "Electronics", Level: 40 },
  { skill: "Bots", Level: 70 },
];

const chartConfig = {
  desktop: {
    label: "Level",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function SkillsRadar() {
  return (
    <ChartContainer config={chartConfig} className="md:w-[500px]">
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          labelClassName={"text-primary"}
          content={<ChartTooltipContent />}
        />
        <PolarAngleAxis dataKey="skill" />
        <PolarGrid />
        <Radar dataKey="Level" fill="var(--color-primary)" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}
export default SkillsRadar;
