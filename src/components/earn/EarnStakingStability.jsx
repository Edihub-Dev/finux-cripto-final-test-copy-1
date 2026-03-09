import { CheckCircle2, Lock, TrendingUp } from "lucide-react";

const EarnStakingStability = () => {
  return (
    <section
      className="w-full bg-[#1E160E]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 82% 45%, rgba(255,140,0,0.08), transparent 62%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-[80px] sm:px-6 sm:py-[120px] lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-[60px]">
          <div data-animate className="text-left max-lg:text-center">
            <div className="flex items-center justify-start max-lg:justify-center">
              <div className="grid h-[60px] w-[60px] place-items-center rounded-full border border-[rgba(255,140,0,0.4)] bg-[rgba(255,140,0,0.1)] text-[#FF8A00] shadow-[0_0_24px_rgba(255,140,0,0.12)]">
                <Lock className="h-6 w-6" />
              </div>
            </div>

            <h2 className="mt-5 font-bold text-[#F5F5F5] text-[26px] md:text-[32px] lg:text-[42px]">
              Staking
            </h2>

            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#e4ce9c72] max-lg:mx-auto">
              Users can stake FNX tokens directly.
            </p>

            <div className="mt-5 space-y-3 max-lg:mx-auto max-lg:w-fit max-lg:text-left">
              {[
                "up to 2% monthly reward rate",
                "instant reward withdrawals",
                "flexible staking participation",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-[14px] max-lg:justify-start"
                >
                  <CheckCircle2 className="h-[22px] w-[22px] text-[#FF8A00] drop-shadow-[0_0_10px_rgba(255,138,0,0.25)]" />
                  <p className="text-[15px] font-medium text-[#EDEDED]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-animate className="flex justify-center">
            <div className="w-full max-w-[520px] rounded-[28px] border border-[rgba(255,140,0,0.2)] bg-[linear-gradient(180deg,rgba(255,140,0,0.08),rgba(0,0,0,0.2))] p-6 shadow-[0_0_40px_rgba(255,140,0,0.1)] backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_54px_rgba(255,140,0,0.16)] md:p-8 lg:p-[50px]">
              <div className="flex flex-col items-center text-center">
                <div className="grid h-[60px] w-[60px] place-items-center rounded-full border border-[rgba(255,140,0,0.3)] bg-[rgba(255,140,0,0.1)] text-[#FF8A00] md:h-[80px] md:w-[80px]">
                  <TrendingUp className="h-7 w-7 md:h-9 md:w-9" />
                </div>

                <h3 className="mt-5 text-[22px] font-semibold text-white md:text-[28px]">
                  Stable Growth
                </h3>

                <p className="mt-4 text-[14px] leading-[1.6]  text-[rgba(228,206,156,0.72)] md:text-[15px]">
                  Earn rewards based on network validation and stability
                  contributions. No lock-up period required for basic tiers.
                </p>

                <div className="mt-10 w-full rounded-full border border-[rgba(255,140,0,0.3)] bg-[rgba(255,140,0,0.05)] px-6 py-[18px]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[14px] text-[rgba(228,206,156,0.72)]">
                      Current APY Estimate
                    </p>
                    <p className="text-[18px] font-semibold text-[#FF8A00]">
                      Dynamic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnStakingStability;
