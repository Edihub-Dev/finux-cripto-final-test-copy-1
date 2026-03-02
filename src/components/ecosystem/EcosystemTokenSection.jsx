import { Cuboid, Flame, Vote } from "lucide-react";

const EcosystemTokenSection = () => {
  return (
    <section
      className="w-full px-4 py-[60px] sm:px-6 sm:py-[120px] lg:px-8"
      style={{
        backgroundColor: "#221910",
        backgroundImage:
          "radial-gradient(circle at 75% 50%, rgba(255,140,0,0.08), transparent 60%), linear-gradient(90deg, #221910 0%, #261B12 50%, #221910 100%)",
      }}
    >
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[28px] sm:gap-[50px] lg:flex-row lg:items-center lg:gap-[80px]"
        data-animate
      >
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <div className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[1.5px] text-[#FF8A00]">
            <Cuboid className="h-4 w-4" />
            <span>THE TOKEN</span>
          </div>

          <h2 className="mt-5 text-[26px] font-bold leading-[1.2] text-[#F5F5F5] sm:text-[36px] lg:text-[48px]">
            The Heart of the <span className="text-[#FF8A00]">Network</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.8] text-[rgba(255,255,255,0.75)] lg:mx-0">
            The FINUX Token is engineered for scarcity and utility. It powers
            governance, rewards participation, and serves as the primary medium
            of exchange across the entire ecosystem.
          </p>

          <div className="mt-6 space-y-[18px] sm:mt-10 sm:space-y-[30px]">
            <div className="flex items-start gap-[18px] text-left">
              <span className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[14px] border border-[rgba(255,140,0,0.25)] bg-[rgba(255,140,0,0.08)] text-[#FF8A00]">
                <Flame className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  Deflationary Mechanism
                </h3>
                <p className="mt-[6px] text-[14px] leading-[1.7] text-[rgba(255,255,255,0.65)]">
                  Automatic buy-back and burn protocols reduce supply over time,
                  increasing value for holders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[18px] text-left">
              <span className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[14px] border border-[rgba(255,140,0,0.25)] bg-[rgba(255,140,0,0.08)] text-[#FF8A00]">
                <Vote className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  Governance Rights
                </h3>
                <p className="mt-[6px] text-[14px] leading-[1.7] text-[rgba(255,255,255,0.65)]">
                  Token holders shape the future of the protocol by voting on
                  key proposals and upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="group relative mx-auto aspect-square w-full max-w-[520px] rounded-[32px] border border-[rgba(255,140,0,0.2)] bg-[#1A130C] p-[30px] shadow-[0_0_60px_rgba(255,140,0,0.08)] transition duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,140,0,0.12)] sm:p-10 lg:p-[60px]">
            <div className="ecosystem-token__rings pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute rounded-full border border-[rgba(255,140,0,0.4)] h-[110px] w-[110px] sm:h-[140px] sm:w-[140px]" />
              <div className="absolute rounded-full border border-[rgba(255,140,0,0.25)] h-[170px] w-[170px] sm:h-[220px] sm:w-[220px]" />
              <div className="absolute rounded-full border border-[rgba(255,140,0,0.15)] h-[230px] w-[230px] sm:h-[300px] sm:w-[300px]" />
            </div>

            <div className="relative flex h-full w-full items-center justify-center">
              <Cuboid className="h-16 w-16 text-[#FF8A00] sm:h-20 sm:w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemTokenSection;
