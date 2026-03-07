import { CheckCircle2, Wallet } from "lucide-react";

const features = [
  "High quality encryption for private keyss",
  "Built-in dApp browser and Web3 support",
  "Multi-chain asset management",
  "One-click staking and rewards",
];

const NonCustodialSecurity = () => {
  return (
    <section
      className="w-full px-4 py-[60px] sm:px-6 sm:py-[120px] lg:px-8"
      style={{
        backgroundColor: "#1A120B",
        backgroundImage:
          "radial-gradient(circle at 25% 50%, rgba(255,140,0,0.08), transparent 60%), linear-gradient(90deg, #1A120B 0%, #20160E 50%, #1A120B 100%)",
      }}
    >
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[28px] sm:gap-[50px] lg:flex-row lg:items-center lg:gap-[80px]"
        data-animate
      >
        <div className="w-full lg:w-[55%]">
          <div className="ecosystem-wallet__card group relative rounded-[28px] border border-[rgba(255,140,0,0.2)] bg-[#20160E] p-[18px] shadow-[0_0_60px_rgba(255,140,0,0.06)] transition duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,140,0,0.1)] sm:p-[22px]">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_20%_35%,rgba(255,140,0,0.10),transparent_58%)] opacity-70" />

            <div className="relative overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.06)] bg-[#1B130C] shadow-[inset_0_0_0_1px_rgba(255,140,0,0.08)]">
              <div className="flex h-[44px] items-center justify-between border-b border-[rgba(255,255,255,0.06)] bg-[#24180F] px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <span className="h-8 w-8 rounded-full bg-[rgba(255,255,255,0.08)]" />
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-6 h-3 w-36 rounded-full bg-[rgba(255,255,255,0.08)]" />

                <div className="rounded-[16px] border border-[rgba(255,140,0,0.18)] bg-[#1A120B] px-6 py-7 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  <p className="text-[13px] text-[rgba(255,255,255,0.65)]">
                    Total Balance
                  </p>
                  <p className="mt-2 text-[34px] font-bold leading-none text-white">
                    $24,593.00
                  </p>
                </div>

                <div className="mt-6 space-y-[14px]">
                  <div className="h-[54px] rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[#22170F]/55" />
                  <div className="h-[54px] rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[#22170F]/45" />
                  <div className="h-[54px] rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[#22170F]/38" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center lg:w-[45%] lg:text-left">
          <div className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[1.5px] text-[#FF8A00]">
            <Wallet className="h-4 w-4" />
            <span>THE WALLET</span>
          </div>

          <h2 className="mt-4 text-balance text-[26px] font-bold leading-[1.15] text-[#F5F5F5] sm:text-[36px] lg:whitespace-nowrap lg:text-[48px]">
            Non-Custodial <span className="text-[#FF8A00]">Security</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.8] text-[rgba(255,255,255,0.75)] sm:mt-6 lg:mx-0">
            Experience true ownership. A non-custodial wallet built for
            security, speed, and seamless interaction with the blockchain. Your
            keys, your crypto.
          </p>

          <div className="mx-auto mt-8 w-full max-w-[520px] space-y-3 lg:mx-0">
            {features.map((text) => (
              <div
                key={text}
                className="flex items-center justify-start gap-3 text-left"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center text-[#FF8A00] drop-shadow-[0_0_10px_rgba(255,140,0,0.4)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="m-0 text-[15px] leading-[1.55] text-[rgba(255,255,255,0.85)] md:whitespace-nowrap">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonCustodialSecurity;
