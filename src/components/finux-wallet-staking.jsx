import { useEffect, useRef, useState } from "react";

import { CheckCircle2, Coins } from "lucide-react";

const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const bullets = [
  "Auto-compounding rewards",
  "One-click validator delegation",
  "Real-time APY tracking",
];

const Staking = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`mt-20 lg:mt-24 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div
        className="relative overflow-hidden rounded-[36px] border border-[#d96500]/20 px-8 py-10 shadow-[0_34px_90px_rgba(0,0,0,0.18)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        style={{
          background:
            "linear-gradient(180deg, var(--stakingBgFrom), var(--stakingBgTo))",
          // tweak these 2 values with your color picker
          "--stakingBgFrom": "#302319",
          "--stakingBgTo": "#302319",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(217,101,0,0.10),transparent_55%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(0,0,0,0.22) 1px, transparent 1px), linear-gradient(-45deg, rgba(0,0,0,0.22) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d96500]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#d96500]/8 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:pr-4">
            <div className="inline-flex items-center rounded-full border border-[#d96500]/30 bg-black/25 px-5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-[#d96500]">
              SEAMLESS INTEGRATION
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Connect to Staking &amp;
              <br />
              Rewards
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#cbb59c]">
              The FINUX Wallet is more than storage—it&apos;s your active
              participant pass. Automatically detect staking opportunities,
              claim rewards instantly, and participate in community governance
              directly from your dashboard.
            </p>

            <ul className="mt-10 grid w-full justify-items-start gap-4 text-left text-[15px] text-white">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex w-full items-start justify-start gap-3 text-left"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#d96500]" />
                  <span className="block text-left">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#d96500]/22 via-[#d96500]/5 to-transparent blur" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_28px_70px_rgba(0,0,0,0.6)]">
              <div className="relative h-[230px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-[#14100b] via-[#14100b]/95 to-[#0f0a06]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(217,101,0,0.14),transparent_58%)]" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <span className="-mt-8 text-sm font-semibold tracking-[0.28em] text-white/20">
                    BLOCKCHAIN
                  </span>
                </div>

                <div className="absolute bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.22))] px-6 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(217,101,0,0.35),transparent_60%)] blur-md" />
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#d96500] text-black shadow-[0_12px_30px_rgba(217,101,0,0.22)]">
                          <Coins className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-white/45">
                          Staking Earnings
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-white">
                          + 485.20 FNX
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="cursor-pointer rounded-full bg-white/10 px-5 py-2 text-xs font-semibold text-white/80 shadow-md transition duration-300 hover:bg-white/15 hover:shadow-[0_18px_40px_rgba(217,101,0,0.12)]"
                    >
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
