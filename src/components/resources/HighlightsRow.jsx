import {
  BadgeCheck,
  Eye,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const highlights = [
  { label: "Official Docs Only", sublabel: "Verified sources", Icon: FileText },
  { label: "Security-First", sublabel: "Best practices", Icon: ShieldCheck },
  { label: "Verified Channels", sublabel: "Anti-phishing", Icon: BadgeCheck },
  { label: "Transparency", sublabel: "Open updates", Icon: Eye },
  { label: "User Responsibility", sublabel: "Self-custody", Icon: UserCheck },
];

const HighlightsRow = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="h-px w-full bg-orange-500/15" />

        <div className="grid gap-8 py-8 sm:grid-cols-3 sm:py-10 lg:grid-cols-5">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-orange-500/25 bg-orange-500/10 text-[#ff8c1a]">
                <item.Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="text-xs font-medium text-[#CBAD90]/70">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden h-px w-full bg-orange-500/15 lg:block" />
      </div>
    </section>
  );
};

export default HighlightsRow;
