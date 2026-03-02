import { Coins, Globe, ShieldCheck, Users, Zap } from "lucide-react";

const items = [
  { label: "Lightning Fast", Icon: Zap },
  { label: "Low Fees", Icon: Coins },
  { label: "Audited Security", Icon: ShieldCheck },
  { label: "Global Access", Icon: Globe },
  { label: "Community Driven", Icon: Users },
];

const FeatureHighlightsStrip = () => {
  return (
    <section
      className="w-full border-y border-[rgba(255,140,0,0.15)] px-4 py-[60px] sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#1A120B",
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,140,0,0.05), transparent 70%), linear-gradient(180deg, #1A120B 0%, #1E140C 50%, #1A120B 100%)",
      }}
    >
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-[30px] text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 lg:flex-nowrap lg:justify-between"
        data-animate
      >
        {items.map(({ label, Icon }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-4 text-center transition duration-300 ease-out hover:-translate-y-1"
          >
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[rgba(255,140,0,0.25)] bg-[#24180F] text-[#FF8A00] shadow-[0_0_15px_rgba(255,140,0,0.25)] transition duration-300 ease-out group-hover:border-[#FF8A00] group-hover:shadow-[0_0_25px_rgba(255,140,0,0.4)] sm:h-[70px] sm:w-[70px]">
              <Icon className="h-[26px] w-[26px]" />
            </div>
            <p className="m-0 text-[15px] font-medium text-[rgba(255,255,255,0.85)] transition duration-300 ease-out group-hover:text-white sm:text-[16px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlightsStrip;
