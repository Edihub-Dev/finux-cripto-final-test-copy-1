import { Landmark, ShieldCheck } from "lucide-react";

const HeartOfNetwork = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-orange-300/80">
            NETWORK
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            The Heart of the Network
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            FINUX runs on a transparent, non-custodial network where community
            participation drives growth. Built for speed, security, and
            predictable interactions.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-10 w-10 place-items-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <Landmark className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Deflationary Mechanism
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Designed to promote long-term participation with transparent
                    issuance and predictable supply dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-10 w-10 place-items-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Governance on-chain
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Token holders can propose and vote with verifiable outcomes
                    and auditable execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#211307] to-[#120802] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.6)] sm:p-8">
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#140a03]/60 p-8">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_60%_20%,rgba(249,115,22,0.25),transparent_55%)]" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-orange-300/80">
                NETWORK STATUS
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">99.98%</p>
              <p className="mt-2 text-sm text-white/65">
                Uptime across validators with real-time monitoring and
                throttling.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold tracking-wide text-white/55">
                    Confirmations
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">2.1s</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold tracking-wide text-white/55">
                    Finality
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">&lt; 1m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartOfNetwork;
