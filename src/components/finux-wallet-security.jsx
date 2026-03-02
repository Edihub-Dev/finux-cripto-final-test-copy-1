import { useEffect, useRef, useState } from "react";

import { KeyRound, Lock, Repeat, Shield } from "lucide-react";

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

const infoCards = [
  {
    title: "Loss of Keys is Permanent",
    description:
      "We cannot recover your private keys or seed phrase. If you lose them, you lose access to your funds forever.",
    icon: KeyRound,
    tone: "danger",
  },
  {
    title: "Offline Storage Recommended",
    description:
      "Write down your recovery phrase and store it in a secure, physical location. Do not store it digitally.",
    icon: Shield,
    tone: "warning",
  },
  {
    title: "Irreversible Transactions",
    description:
      "Blockchain transactions are final. Verify every detail before sending any assets.",
    icon: Repeat,
    tone: "info",
  },
];

const Security = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`mt-20 lg:mt-24 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Security &amp; <span className="text-[#f27f0d]">Responsibility</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(203_173_144/1)] sm:text-[15px]">
          With great power comes great responsibility. Since FINUX is
          non-custodial, you are the sole guardian of your private keys.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon;

              const toneClass =
                card.tone === "danger"
                  ? "bg-red-500/10 text-red-400"
                  : card.tone === "warning"
                    ? "bg-[#f27f0d]/10 text-[#f27f0d]"
                    : "bg-blue-500/10 text-blue-400";

              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-[22px] border border-[#f27f0d]/20 bg-gradient-to-b from-[#1a120b]/55 to-[#2a1a10]/35 px-6 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.35)] transition-all duration-500 ease-in-out hover:scale-[1.01] hover:border-[#d96500] hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] transition duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(242,127,13,0.12)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(217,101,0,0.42)]" />
                  <div className="flex items-start gap-4">
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-full ${toneClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[rgb(203_173_144/1)]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-[#f27f0d]/20 bg-gradient-to-b from-[#1a120b] to-[#2a1a10] p-8 shadow-[0_26px_70px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_34px_90px_rgba(0,0,0,0.65)]">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(242,127,13,0.18)]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f27f0d]/12 blur-3xl" />

            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(242,127,13,0.28),transparent_60%)] blur-lg" />
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0f0a06]/40 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                  <Lock className="h-8 w-8 text-[#f27f0d] drop-shadow-[0_10px_24px_rgba(242,127,13,0.25)]" />
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-bold tracking-tight text-[#f5f5f4] sm:text-4xl">
                Your Vault. Your Rules.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[rgb(203_173_144/1)] sm:text-[15px]">
                Unlike traditional banks, FINUX gives you mathematical proof of
                ownership. This security model relies 100% on your ability to
                keep your secrets safe.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 px-4 py-2 text-[11px] font-semibold text-emerald-300 shadow-md transition duration-300 hover:shadow-[0_18px_40px_rgba(16,185,129,0.18)]">
                  AES-256 Encryption
                </span>
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#f27f0d]/25 to-[#f27f0d]/10 px-4 py-2 text-[11px] font-semibold text-[#f27f0d] shadow-md transition duration-300 hover:shadow-[0_18px_40px_rgba(242,127,13,0.18)]">
                  Biometric Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
