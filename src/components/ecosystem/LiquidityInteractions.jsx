import {
  ArrowLeftRight,
  ArrowUpRight,
  Droplets,
  PiggyBank,
} from "lucide-react";

const cards = [
  {
    title: "Instant Swaps",
    description:
      "Execute trades in milliseconds with our optimized matching engine.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Deep Liquidity",
    description:
      "Access pools with transparent metrics and on-chain accounting.",
    Icon: Droplets,
  },
  {
    title: "Yield Farming",
    description:
      "Provide liquidity to pairs and earn FINUX tokens as a reward.",
    Icon: PiggyBank,
  },
];

const LiquidityInteractions = () => {
  return (
    <section
      className="w-full px-4 py-[60px] sm:px-6 sm:py-[120px] lg:px-8"
      style={{
        backgroundColor: "#2D2115",
        backgroundImage:
          "radial-gradient(circle at 20% 40%, rgba(255,140,0,0.08), transparent 60%), linear-gradient(90deg, #2D2115 0%, #332417 50%, #2D2115 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px]" data-animate>
        <div className="flex flex-col items-start justify-between gap-[30px] lg:flex-row lg:items-center">
          <div className="w-full lg:w-[70%]">
            <div className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[1.5px] text-[#FF8A00]">
              <ArrowLeftRight className="h-4 w-4" />
              <span>DECENTRALIZED EXCHANGE</span>
            </div>

            <h2 className="mt-[18px] max-w-[720px] text-[26px] font-bold leading-[1.15] text-[#F5F5F5] sm:text-[36px] lg:text-[52px]">
              Seamless Liquidity &amp; Internal Interactions
            </h2>

            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.8] text-[rgba(255,255,255,0.75)]">
              Our DEX is designed to ensure liquidity stability and low slippage
              for all participants. Swap instantly between ecosystem assets with
              minimal fees.
            </p>
          </div>

          <div className="w-full lg:flex lg:w-[30%] lg:justify-end">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-[rgba(255,140,0,0.4)] bg-transparent px-[30px] py-4 text-[16px] font-semibold text-[#FF8A00] transition duration-300 ease-out hover:bg-[rgba(255,140,0,0.08)] hover:shadow-[0_0_20px_rgba(255,140,0,0.3)] sm:w-auto"
            >
              Launch DEX
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-6 sm:mt-[70px] sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="relative rounded-[24px] border border-[rgba(255,140,0,0.2)] bg-[#332417] p-10 text-center transition duration-300 ease-out hover:-translate-y-[6px] hover:border-[#FF8A00] hover:shadow-[0_0_30px_rgba(255,140,0,0.15)] sm:text-left"
            >
              <span className="mx-auto block w-fit text-[#FF8A00] drop-shadow-[0_0_12px_rgba(255,140,0,0.4)] sm:mx-0">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-[20px] font-semibold text-white">
                {title}
              </h3>
              <p className="mt-[10px] text-[15px] leading-[1.7] text-[rgba(255,255,255,0.7)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidityInteractions;
