import { BadgeCheck, Eye, ShieldCheck, Users, UserCheck } from "lucide-react";

const highlights = [
  { label: "Ethical Ecosystem\nGrowth", Icon: Users },
  { label: "Verified User\nParticipation", Icon: UserCheck },
  { label: "Structured\nProgression Model", Icon: Eye },
  { label: "Long-term\nSustainability", Icon: ShieldCheck },
  { label: "Transparent\nParticipation Rules", Icon: BadgeCheck },
];

const CommunityHighlights = () => {
  return (
    <section className="w-full bg-[#1A120B] py-10 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-300">
                <item.Icon className="h-5 w-5" />
              </span>
              <p className="whitespace-pre-line text-xs font-semibold leading-snug text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
