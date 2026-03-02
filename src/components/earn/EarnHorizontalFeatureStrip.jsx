import {
  GanttChartSquare,
  Leaf,
  Layers3,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const items = [
  {
    label: "Multiple Earning\nMechanisms",
    Icon: Layers3,
  },
  {
    label: "System-defined\nReward Rules",
    Icon: SlidersHorizontal,
  },
  {
    label: "Controlled\nDistribution",
    Icon: GanttChartSquare,
  },
  {
    label: "Non-custodial\nReward Access",
    Icon: ShieldCheck,
  },
  {
    label: "Sustainability\nFocused Design",
    Icon: Leaf,
  },
];

const EarnHorizontalFeatureStrip = () => {
  return (
    <section
      className="w-full border-y border-[rgba(255,140,0,0.15)] bg-[#1E160E]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,140,0,0.05) 0%, #1E160E 40%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-[34px] sm:px-6 sm:py-[50px] lg:px-8">
        <div className="flex flex-col items-center justify-between gap-7 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 lg:flex-nowrap lg:justify-between">
          {items.map(({ label, Icon }) => (
            <div
              key={label}
              className="group flex max-w-[160px] flex-col items-center gap-[14px] text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(255,140,0,0.2)] bg-[rgba(255,140,0,0.08)] text-[#FF8A00] shadow-[0_0_12px_rgba(255,140,0,0.4)] transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(255,140,0,0.55)]">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <p className="whitespace-pre-line text-[14px] font-medium leading-[1.4] text-[rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarnHorizontalFeatureStrip;
