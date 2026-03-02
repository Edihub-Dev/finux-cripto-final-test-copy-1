import { Rss } from "lucide-react";

const updates = [
  {
    category: "PROTOCOL",
    date: "Jul 24, 2023",
    title: "Protocol V2 Mainnet Launch",
    description:
      "The V2 upgrade introduced reduced gas fees and enhanced governance modules for all stakers.",
  },
  {
    category: "ECOSYSTEM",
    date: "Sep 12, 2023",
    title: "New Staking Pools Live",
    description:
      "Three new liquidity pools have been added with incentivized rewards for early participants.",
  },
  {
    category: "GOVERNANCE",
    date: "Aug 30, 2023",
    title: "Proposal 14 Passed",
    description:
      "Community voted to allocate treasury funds towards the new developer grant program.",
  },
];

const UpdatesSection = () => {
  return (
    <section id="updates" className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[28px] font-semibold leading-tight text-white sm:text-[32px]">
            Latest Updates
          </h2>
          <Rss className="h-5 w-5 text-[#ff8c1a]" />
        </div>

        <div className="mt-4 h-px w-full bg-orange-500/15" />

        <div className="mt-6 space-y-4">
          {updates.map((item) => (
            <article
              key={item.title}
              className="cursor-pointer rounded-[24px] border border-orange-500/15 bg-[#2D2216] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/25 hover:shadow-[0_0_0_1px_rgba(255,140,26,0.16),0_18px_50px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff8c1a]">
                  {item.category}
                </span>
                <span className="text-xs text-[#CBAD90]/70">{item.date}</span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#CBAD90]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
