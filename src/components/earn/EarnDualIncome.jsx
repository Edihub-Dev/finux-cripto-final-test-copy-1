const EarnDualIncome = () => {
  return (
    <section
      className="w-full bg-[#1E160E]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255,140,0,0.06), transparent 62%)",
      }}
    >
      <div className="mx-auto w-full px-4 py-[80px] sm:px-6 sm:py-[120px] lg:px-8">
        <div
          data-animate
          className="earn-dual-container mx-auto w-full max-w-[1100px] rounded-[36px] border border-[rgba(255,140,0,0.18)] px-5 py-8 text-center transition duration-300 hover:scale-[1.01] sm:px-10 sm:py-[60px] lg:px-[60px] lg:py-[80px]"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[rgba(255,140,0,0.3)] bg-[rgba(255,140,0,0.08)] px-[18px] py-2 text-[14px] text-[#FF9A2E]">
            <span>•</span>
            <span>Multi-pathway Rewards</span>
          </div>

          <h2 className="mt-[30px] font-bold text-[#F5F5F5] text-[26px] leading-[1.2] md:text-[36px] lg:text-[52px]">
            Dual Income System
          </h2>

          <p className="mx-auto mt-[25px] max-w-[750px] text-[15px] leading-[1.8] text-[#CBAD90] sm:text-[16px] lg:text-[17px]">
            Maximize your participation through multiple reward pathways. Our
            sustainable model ensures balanced distribution caps to maintain
            long-term ecosystem health, allowing you to earn from both staking
            yields and liquidity fees simultaneously.
          </p>

          <div className="mt-10 inline-flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <button
              type="button"
              className="w-full rounded-full border border-[rgba(255,140,0,0.3)] bg-[#1E160E] px-7 py-[14px] text-[15px] font-semibold text-white transition duration-300 hover:bg-[rgba(255,140,0,0.08)] hover:shadow-[0_0_0_1px_rgba(255,140,0,0.16),0_18px_55px_rgba(0,0,0,0.55)] sm:w-auto"
            >
              🔥 Staking Yields
            </button>

            <span className="text-[18px] text-[rgba(255,255,255,0.4)]">+</span>

            <button
              type="button"
              className="w-full rounded-full border border-[rgba(255,140,0,0.3)] bg-[#1E160E] px-7 py-[14px] text-[15px] font-semibold text-white transition duration-300 hover:bg-[rgba(255,140,0,0.08)] hover:shadow-[0_0_0_1px_rgba(255,140,0,0.16),0_18px_55px_rgba(0,0,0,0.55)] sm:w-auto"
            >
              💱 Transaction Fees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnDualIncome;
