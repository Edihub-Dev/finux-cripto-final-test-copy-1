import { useEffect, useRef, useState } from "react";

import { Check } from "lucide-react";

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

const cards = [
  {
    title: "One Wallet Per Identity",
    description:
      "To ensure fair distribution and security, only one wallet is generated per verified KYC identity.",
  },
  {
    title: "Mandatory Backup",
    description:
      "Users are required to confirm backup of their seed phrase during the initial setup process.",
  },
  {
    title: "Device Security",
    description:
      "Wallet access is tied to device biometrics (FaceID/TouchID) where available for added layer of protection.",
  },
];

const WalletRequirements = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`mt-20 lg:mt-24 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Wallet Usage Requirements
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#d96500]/35 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(217,101,0,0.25)]" />
          {cards.map((card, idx) => (
            <div key={card.title}>
              <div className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-[#d96500] text-black shadow-[0_10px_26px_rgba(217,101,0,0.22)]">
                    <Check className="h-4 w-4" />
                  </div>

                  <h3 className="min-w-0 flex-1 truncate whitespace-nowrap text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-0.5 pl-11 text-xs leading-[1.5] text-[rgb(203_173_144/1)] sm:text-[13px]">
                  {card.description}
                </p>
              </div>

              {idx !== cards.length - 1 ? (
                <div className="h-px w-full bg-[#d96500]/20" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletRequirements;
