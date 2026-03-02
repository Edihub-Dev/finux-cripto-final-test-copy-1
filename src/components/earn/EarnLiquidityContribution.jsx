import { ArrowRight, Droplets } from "lucide-react";

const EarnLiquidityContribution = () => {
  return (
    <section
      className="w-full bg-[#231A10]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,140,0,0.06), transparent 40%), radial-gradient(circle at 32% 52%, rgba(255,140,0,0.08), transparent 62%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-[80px] sm:px-6 sm:py-[120px] lg:px-8">
        <div className="grid items-center gap-8 sm:gap-[50px] lg:grid-cols-2 lg:gap-[70px]">
          <div
            data-animate
            className="order-2 flex justify-center lg:order-1 lg:justify-start"
          >
            <div className="w-full max-w-[560px] rounded-[28px] border border-[rgba(255,140,0,0.25)] bg-[linear-gradient(180deg,rgba(255,140,0,0.05),rgba(0,0,0,0.25))] p-5 shadow-[0_0_40px_rgba(255,140,0,0.08)] backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(255,140,0,0.12)] sm:p-[30px] lg:p-[40px]">
              <div className="flex items-start gap-4">
                <div className="mt-[2px] h-[40px] w-[3px] rounded-[2px] bg-[#FF8A00]" />
                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold text-white sm:text-[22px]">
                    Risk-Aware Pairing
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#CBAD90]">
                    Strategic liquidity provision with clear transparency on
                    pair mechanics. We prioritize stable pairings to minimize
                    impermanent loss exposure for our providers.
                  </p>
                </div>
              </div>

              <div className="my-[30px] h-px w-full bg-[rgba(255,140,0,0.2)]" />

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <div className="flex-1 rounded-[18px] border border-[rgba(255,140,0,0.2)] bg-[rgba(255,140,0,0.04)] p-5">
                  <p className="text-[13px] text-[rgba(255,255,255,0.6)]">
                    Pair Type
                  </p>
                  <p className="mt-[6px] text-[18px] font-semibold text-white">
                    Standard
                  </p>
                </div>
                <div className="flex-1 rounded-[18px] border border-[rgba(255,140,0,0.2)] bg-[rgba(255,140,0,0.04)] p-5">
                  <p className="text-[13px] text-[rgba(255,255,255,0.6)]">
                    Reward Type
                  </p>
                  <p className="mt-[6px] text-[18px] font-semibold text-white">
                    LP Tokens
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-animate className="order-1 text-left lg:order-2">
            <div className="flex items-center justify-start">
              <div className="mb-5 grid h-[60px] w-[60px] place-items-center rounded-full border border-[rgba(255,140,0,0.4)] bg-[rgba(255,140,0,0.1)] text-[#FF8A00] shadow-[0_0_24px_rgba(255,140,0,0.14)]">
                <Droplets className="h-6 w-6" />
              </div>
            </div>

            <h2 className="font-bold text-[#F5F5F5] text-[26px] leading-[1.2] md:text-[32px] lg:text-[44px]">
              Liquidity Contribution
            </h2>

            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#CBAD90]">
              Provide essential liquidity to the ecosystem pairs. Understanding
              the mechanics of liquidity provision allows for deeper ecosystem
              integration and increased reward potential through transaction
              fees.
            </p>

            <a
              href="#"
              className="group mt-[30px] inline-flex items-center gap-4 text-[16px] font-semibold text-[#FF8A00] no-underline transition duration-300 hover:no-underline hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.25)] focus:no-underline"
            >
              <span className="transition duration-300">View Active Pools</span>
              <ArrowRight
                className="h-[20px] w-[20px] flex-none transition duration-300 group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnLiquidityContribution;
