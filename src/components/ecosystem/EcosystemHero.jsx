const EcosystemHero = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section
      className="w-full px-4 pt-[45px] pb-[55px] text-center sm:px-6 sm:pt-[100px] sm:pb-[120px] lg:px-8"
      style={{
        backgroundColor: "#16100A",
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,140,0,0.08) 0%, #16100A 60%), linear-gradient(90deg, rgba(255,140,0,0.05), #16100A 40%, #16100A 60%, rgba(255,140,0,0.04))",
      }}
    >
      <div
        className="mx-auto flex w-full max-w-[1000px] flex-col items-center"
        data-animate
      >
        <span className="inline-flex rounded-full border border-[rgba(255,140,0,0.35)] bg-[rgba(255,140,0,0.08)] px-[22px] py-2 text-[13px] font-semibold tracking-[2px] text-[#FF9A2E]">
          FINUX ECOSYSTEM
        </span>

        <h1 className="mx-auto mt-7 max-w-[1000px] text-balance text-[28px] font-bold leading-[1.1] tracking-[-1px] text-[#F5F5F5] sm:text-[42px] lg:text-[64px]">
          A Connected Financial Ecosystem Built for Participation
        </h1>

        <p className="mx-auto mt-[18px] max-w-[720px] text-pretty text-[15px] leading-[1.7] text-[#92805D] sm:mt-[30px] sm:text-[18px]">
          Seamlessly integrate your digital assets with the power of the FINUX
          Token, Wallet, and Decentralized Exchange. The future of finance,
          unified.
        </p>

        <div className="mt-[32px] inline-flex flex-col items-center justify-center gap-4 sm:mt-[50px] sm:gap-5 sm:flex-row">
          <button
            type="button"
            className="ecosystem-hero__primary-cta inline-flex items-center justify-center rounded-[14px] px-[38px] py-[18px] text-[17px] font-semibold text-[#1A120B] transition duration-300 ease-out hover:scale-[1.05]"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
            style={{
              background: "linear-gradient(180deg, #FF9A1F, #E67A00)",
              boxShadow:
                "0 0 25px rgba(255,140,0,0.5), 0 0 60px rgba(255,140,0,0.25)",
            }}
          >
            Explore Ecosystem →
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[14px] border border-[rgba(255,140,0,0.2)] bg-[#2A1E14] px-[38px] py-[18px] text-[17px] font-semibold text-[rgba(255,255,255,0.85)] transition duration-300 ease-out hover:border-[#FF8A00] hover:bg-[rgba(255,140,0,0.05)]"
          >
            Read Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;
