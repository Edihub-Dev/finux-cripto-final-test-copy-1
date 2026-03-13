import { CheckCircle2, Lock, ShieldAlert, ShieldCheck } from "lucide-react";

const SafetyNotice = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-12 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-orange-500/20 bg-[#281A0F] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.55)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_25%,rgba(255,190,140,0.16),rgba(40,26,15,0.92)_58%,rgba(40,26,15,1)_100%)]" />
        <div className="pointer-events-none absolute right-6 top-6 z-0 lg:hidden">
          <div className="relative">
            <ShieldCheck className="h-44 w-44 text-orange-500/10" />
            <Lock className="absolute inset-0 m-auto h-14 w-14 text-white/25" />
          </div>
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.6fr_0.4fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-orange-500/15 text-orange-300">
                <ShieldAlert className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-semibold leading-tight text-white">
                Critical Safety Notice
              </h2>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgb(203_173_144)] sm:text-base">
              Your seed phrase is the master key to your funds.{" "}
              <span className="font-semibold text-white">
                Never share it with anyone,
              </span>{" "}
              including FINUX support staff. Official admins will never DM you
              first asking for private keys or wallet validation.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[rgb(203_173_144)] sm:text-base">
              <div className="flex flex-wrap items-center gap-3">
                <span className="shrink-0 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div className="flex min-w-0 flex-1 items-center gap-2 leading-6">
                  <span>
                    FINUX never asks for private keys.
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="shrink-0 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div className="flex min-w-0 flex-1 items-center gap-2 leading-6">
                  <span>
                    Only download wallets from official sources.
                  </span>
                  <span className="shrink-0 inline-flex items-center rounded-full border border-orange-500/30 bg-black/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-orange-200">
                    finux.online
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="shrink-0 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="min-w-0 flex-1 leading-6">
                  Avoid suspicious links or third-party applications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-3xl bg-orange-500/10 blur-3xl lg:block" />

            <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="relative">
                <ShieldCheck className="h-40 w-40 text-orange-500/10" />
                <Lock className="absolute inset-0 m-auto h-12 w-12 text-orange-500/8" />
              </div>
            </div>

            <div className="relative flex items-center justify-start lg:min-h-[180px] lg:justify-end">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600/70 bg-[#2D2216] px-7 py-3 text-sm font-semibold text-orange-500 backdrop-blur-sm transition duration-300 hover:border-orange-500/85 hover:bg-[#332416] hover:ring-1 hover:ring-orange-500/20"
              >
                <ShieldAlert className="h-4 w-4" />
                Security Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyNotice;
