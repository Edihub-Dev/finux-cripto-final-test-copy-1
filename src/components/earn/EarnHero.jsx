import { useEffect, useState } from "react";

const EarnHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  useEffect(() => {
    const id = window.setTimeout(() => setIsVisible(true), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      className="relative flex w-full items-start justify-center overflow-hidden bg-[#281C10] px-4 pt-[45px] pb-12 sm:h-[90vh] sm:items-center sm:pt-0 sm:pb-0 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(255, 140, 0, 0.08), transparent 60%)",
      }}
    >
      <div
        className={`mx-auto flex w-full max-w-4xl flex-col items-center text-center transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="rounded-full border border-[rgba(255,140,0,0.4)] bg-[rgba(255,140,0,0.12)] px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[1px] text-[#FF9A2E]">
          EARN WITH FINUX
        </span>

        <h1 className="mt-6 text-balance font-bold leading-[1.1] text-[#F5F5F5]">
          <span className="block text-[32px] md:text-[42px] lg:text-[64px]">
            Multiple Participation Paths.
          </span>
          <span
            className="mt-[10px] block text-[32px] font-extrabold md:text-[42px] lg:text-[64px]"
            style={{
              backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            One Ecosystem.
          </span>
        </h1>

        <p className="mt-6 max-w-[650px] text-pretty text-[16px] leading-[1.6] text-[rgba(255,255,255,0.65)]">
          Unlock the full potential of your assets through secure staking and
          liquidity provision mechanisms designed for long-term stability and
          ecosystem health.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-center">
          <button
            type="button"
            className="w-full rounded-full bg-[linear-gradient(90deg,#FF8A00,#FF6A00)] px-7 py-[14px] text-[15px] font-semibold text-white transition duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,138,0,0.4)] lg:w-auto"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
          >
            Start Earning {"\u2192"}
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-[rgba(255,138,0,0.4)] bg-transparent px-7 py-[14px] text-[15px] font-semibold text-[#FFA23A] transition duration-300 hover:border-[#FF8A00] hover:bg-[rgba(255,138,0,0.08)] lg:w-auto"
          >
            Read Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarnHero;
