import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

const FAQSection = () => {
  const items = useMemo(
    () => [
      {
        id: "secure-wallet",
        title: "How do I secure my FINUX wallet?",
        body: "Beyond keeping your seed phrase offline, we recommend using a hardware wallet for long holdings. Ensure you only interact with contracts verified on our official explorer.",
      },
      {
        id: "staking-rewards",
        title: "How are staking rewards calculated?",
        body: "Staking rewards depend on pool emissions, total staked liquidity, and the time you remain staked. Check each pool dashboard for up-to-date APR and reward schedules.",
      },
      {
        id: "contract-address",
        title: "What is the official contract address?",
        body: "Always use the contract address listed in the official FINUX documentation and verified announcements. Never trust contract addresses shared via unsolicited DMs.",
      },
      {
        id: "audit-reports",
        title: "Where can I find audit reports?",
        body: "Audit reports are published in the Latest Audits section and linked from the official documentation repository for transparency.",
      },
    ],
    [],
  );

  const [expanded, setExpanded] = useState(items[0]?.id ?? null);

  return (
    <section id="faq" className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[28px] font-semibold leading-tight text-white sm:text-[32px]">
            Frequently Asked Questions
          </h2>
          <button
            type="button"
            className="cursor-pointer appearance-none border-0 bg-transparent p-0 text-xs font-semibold tracking-wide text-[#ff8c1a] transition-colors duration-300 hover:text-orange-200 focus:outline-none"
          >
            View all
          </button>
        </div>

        <div className="mt-4 h-px w-full bg-orange-500/15" />

        <div className="mt-6 space-y-4">
          {items.map((item) => {
            const isOpen = expanded === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-[32px] border bg-[#2D2216] px-5 py-5 transition-all duration-300 sm:px-8 sm:py-7 ${isOpen ? "border-orange-500/45 shadow-[0_0_0_1px_rgba(255,140,26,0.26),0_22px_60px_rgba(0,0,0,0.60)]" : "border-orange-500/18 hover:border-orange-500/28 hover:shadow-[0_0_0_1px_rgba(255,140,26,0.18),0_18px_50px_rgba(0,0,0,0.55)]"}`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                  className="flex w-full cursor-pointer appearance-none items-center justify-between gap-6 border-0 bg-transparent p-0 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[18px] font-semibold leading-snug ${isOpen ? "text-[#ff8c1a]" : "text-white"}`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#ff8c1a]" : "rotate-0 text-white/70"}`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-5 text-sm leading-7 text-[#CBAD90]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
