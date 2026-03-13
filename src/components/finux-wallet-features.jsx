import { useEffect, useRef, useState } from "react";

import { Fingerprint, KeyRound, Layers3, Wand2 } from "lucide-react";

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

const items = [
  {
    title: "Non-Custodial",
    description:
      "You hold the keys. We never store them. Your assets remain under your sole control.",
    icon: KeyRound,
  },
  {
    title: "System-Generated",
    description:
      "Automated wallet creation ensures zero human error and maximum security protocols.",
    icon: Wand2,
  },
  {
    title: "One User, One Wallet",
    description:
      "Strictly one wallet per KYC-verified user to maintain ecosystem integrity and compliance.",
    icon: Fingerprint,
  },
  {
    title: "Ecosystem Access",
    description:
      "Your exclusive gateway to FINUX staking, rewards, and governance participation.",
    icon: Layers3,
  },
];

const Features = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`mt-20 lg:mt-24 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Automated Creation.{" "}
          <span className="text-[#f27f0d]">Absolute Ownership.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[rgb(203_173_144/1)] sm:text-[15px]">
          Your keys, your crypto. A system-generated wallet ensuring complete
          user autonomy within the FINUX ecosystem without manual intervention.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.12))] p-7 text-center shadow-[0_26px_70px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-transparent hover:shadow-[0_30px_85px_rgba(0,0,0,0.55)] md:text-left"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 0 0.7px rgba(242,127,13,0.75)" }}
              />
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/20 text-[#f27f0d] transition duration-300 group-hover:border-[#f27f0d] group-hover:bg-[#f27f0d] group-hover:text-black md:mx-0">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[rgb(203_173_144/1)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
