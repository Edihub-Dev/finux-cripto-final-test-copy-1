import { BadgeCheck, Users, Wallet } from "lucide-react";

const bullets = [
  {
    title: "Performance rewards",
    Icon: BadgeCheck,
  },
  {
    title: "Rank progression",
    Icon: Users,
  },
  {
    title: "Leadership income",
    Icon: Wallet,
  },
];

const ReferralProgram = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-orange-300/80">
            ETHICAL GROWTH
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Referral Program
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Users can invite others to participate in ecosystem.
          </p>

          <div className="mt-6 space-y-3 text-center sm:text-left">
            {bullets.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-2 text-white/70 sm:flex-row sm:items-center sm:gap-4 sm:text-left md:whitespace-normal lg:whitespace-nowrap"
              >
                <span className="shrink-0 text-orange-300">
                  <item.Icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-6">{item.title}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-2.5 text-sm font-semibold text-orange-200 transition hover:bg-orange-500/15"
          >
            Learn about rewards
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.6)] sm:p-8">
            <div className="rounded-3xl border border-orange-500/20 bg-[#140a03]/60 p-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-orange-300/80">
                NETWORK GROWTH
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">+24%</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Verified community growth across referral channels.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold tracking-wide text-white/55">
                    Active refs
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    12,804
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold tracking-wide text-white/55">
                    Rewards
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">FINUX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
