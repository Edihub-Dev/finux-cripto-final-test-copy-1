import { CheckCircle2, Wallet } from "lucide-react";

import HomeImage from "../../assets/eco.png";

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
          <div className="mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px]">
            <img
              src={HomeImage}
              alt="Wallet preview"
              className="block h-[320px] w-full object-contain object-center sm:h-[380px] md:h-[450px] lg:h-[520px]"
            />
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

          <div className="mx-auto mt-8 w-full max-w-[520px] space-y-3 text-center sm:text-left lg:mx-0">
            {features.map((text) => (
              <div
                key={text}
                className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-start sm:gap-3 sm:text-left"
              >
                <span className="mt-[2px] grid h-5 w-5 shrink-0 place-items-center text-[#FF8A00] drop-shadow-[0_0_10px_rgba(255,140,0,0.4)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="m-0 text-[15px] leading-[1.55] text-[rgba(255,255,255,0.85)]">
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
