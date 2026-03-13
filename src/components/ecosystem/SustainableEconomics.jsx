const metrics = [
  {
    title: "Total Supply",
    value: "100M",
    description: "Fixed supply cap to prevent inflation.",
  },
  {
    title: "Staking APY",
    value: "Up to 12%",
    description: "Dynamic rewards for securing the network.",
  },
  {
    title: "Liquidity Lock",
    value: "5 Years",
    description: "Ensuring long-term project stability.",
  },
  {
    title: "Burn Rate",
    value: "2% / txn",
    description: "Deflationary pressure on every trade.",
  },
];

const SustainableEconomics = () => {
  return (
    <section
      className="w-full px-4 pb-[70px] pt-[60px] sm:px-6 sm:pb-[140px] sm:pt-[120px] lg:px-8"
      style={{
        backgroundColor: "#221910",
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,140,0,0.05), transparent 65%), linear-gradient(180deg, #221910 0%, #251B12 50%, #221910 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] text-center" data-animate>
        <h2 className="text-[26px] font-bold leading-[1.2] text-[#F5F5F5] sm:text-[36px] lg:text-[48px]">
          Tokenomics
        </h2>

        <div className="mx-auto mb-6 mt-4 h-1 w-[120px] rounded bg-[linear-gradient(90deg,#FF8A00,#FFA733)]" />

        <p className="mx-auto max-w-[700px] text-[17px] leading-[1.8] text-[rgba(255,255,255,0.75)]">
          The FINUX token model uses several mechanisms to maintain long-term
          growth and stability, our tokenomics model rewards holders and fuels
          the ecosystem..
        </p>

        <div className="mt-[32px] grid grid-cols-1 gap-[20px] sm:mt-[70px] sm:gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[20px] border border-[rgba(255,140,0,0.2)] bg-[#2A1E14] p-10 text-center transition duration-300 ease-out hover:-translate-y-[6px] hover:border-[#FF8A00] hover:shadow-[0_0_30px_rgba(255,140,0,0.15)] sm:text-left"
            >
              <span className="absolute left-0 right-0 top-0 h-1 bg-[#FF8A00]" />
              <p className="text-[18px] font-semibold text-[rgba(255,255,255,0.85)]">
                {item.title}
              </p>
              <p className="mt-[14px] text-[32px] font-bold text-[#FF8A00]">
                {item.value}
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] text-[rgba(255,255,255,0.65)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableEconomics;
