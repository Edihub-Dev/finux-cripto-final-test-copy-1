import { MessageSquareText, ShieldCheck, Users } from "lucide-react";

const points = [
  {
    title: "Verified Channels",
    description:
      "Follow announcements through official channels only to avoid impersonation.",
    Icon: ShieldCheck,
  },
  {
    title: "Community Governance",
    description:
      "Participate in proposals and track outcomes with on-chain transparency.",
    Icon: Users,
  },
  {
    title: "Support & Education",
    description:
      "Learn safe participation patterns and protect yourself from phishing.",
    Icon: MessageSquareText,
  },
];

const EarnCommunity = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 pb-14 sm:px-6 sm:pt-12 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#211307] to-[#120802] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.6)] sm:p-8">
        <p className="text-xs font-semibold tracking-[0.24em] text-orange-300/80">
          COMMUNITY
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          Participate Responsibly
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
          Earning opportunities are best paired with verified information,
          transparent governance, and safe participation practices.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {points.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-orange-500/20 bg-[#140a03]/55 p-5 text-center md:text-left"
            >
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/15 text-orange-300 md:mx-0">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarnCommunity;
