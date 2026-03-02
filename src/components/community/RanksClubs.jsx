import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Exclusive access to governance votes",
  "Higher staking APY for ranked members",
  "Private club networking events",
  "Verified user onboarding",
];

const RanksClubs = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,25,16,0)_0%,#150f0a_100%)] opacity-60" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="pointer-events-none absolute -right-12 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl opacity-40" />

          <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#2a1408] to-[#140a05] p-8 shadow-2xl sm:p-12 lg:p-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-white">
                    Platinum Member
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Earn rank through verified participation and community
                    impact.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-200">
                  Current
                </span>
              </div>

              <div className="mt-7">
                <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                  <div className="h-full w-[60%] rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-widest text-orange-400">
            PROGRESSION PATH
          </p>

          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Ranks &amp; Clubs
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
            Unlock rewards in the FINUX community based on participation,
            reputation, and consistent contribution.
          </p>

          <div className="space-y-4">
            {points.map((title) => (
              <div
                key={title}
                className="flex items-center gap-4 text-gray-300 md:whitespace-normal lg:whitespace-nowrap"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-400" />
                <p className="flex-1">{title}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-10 inline-flex appearance-none items-center gap-2 border-0 bg-transparent p-0 text-white transition duration-300 hover:text-orange-400"
          >
            View Ranks Structure
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RanksClubs;
