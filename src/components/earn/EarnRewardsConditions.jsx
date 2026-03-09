import { BadgeCheck, Clock3, Coins } from "lucide-react";

const items = [
  {
    title: "Minimum Deposit",
    description: "$20 minimum participation amount.",
    Icon: Clock3,
  },
  {
    title: "Withdrawal Minimum",
    description: "Minimum withdrawal limit  1 USDC",
    Icon: Coins,
  },
  {
    title: "Performance Limit",
    description:
      "Rewards are limited to 3x the deposit amount.After reaching the limit, users must re-top-up to continue earning.",
    Icon: BadgeCheck,
  },
];

const EarnRewardsConditions = () => {
  return (
    <section
      className="w-full bg-[#231A10]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255,140,0,0.05), transparent 62%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-[80px] sm:px-6 sm:py-[120px] lg:px-8">
        <div data-animate className="text-center">
          <h2 className="font-bold text-[#F5F5F5] text-[26px] md:text-[36px] lg:text-[44px]">
            Rewards &amp; Conditions
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] text-[#CBAD90] sm:text-[16px] lg:text-[17px]">
            Transparent mechanisms ensuring fair play and long-term
            sustainability for all participants.
          </p>
        </div>

        <div className="mt-[45px] grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {items.map(({ title, description, Icon }) => (
            <article
              data-animate
              key={title}
              className="rounded-[28px] border border-[rgba(255,140,0,0.15)] bg-[#1E160E] p-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-[#FF8A00] hover:shadow-[0_0_30px_rgba(255,140,0,0.2)] sm:p-8 lg:p-10"
            >
              <div className="grid h-[50px] w-[50px] place-items-center rounded-full border border-[rgba(255,140,0,0.3)] bg-[rgba(255,140,0,0.08)] text-[#FF8A00] sm:h-[60px] sm:w-[60px]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-[20px] font-semibold text-white sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-[14px] text-[15px] leading-[1.7] text-[#CBAD90]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarnRewardsConditions;
