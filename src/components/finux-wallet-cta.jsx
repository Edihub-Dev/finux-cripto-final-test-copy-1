import { useEffect, useRef, useState } from "react";

import { ArrowRight } from "lucide-react";

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

const CTA = () => {
  const { ref, isInView } = useInView();

  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section
      ref={ref}
      className={`mt-20 pb-12 lg:mt-24 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div className="relative overflow-hidden rounded-[40px] border border-[rgb(73_54_34/1)] bg-gradient-to-b from-[#3b2b1a] via-[#322313] to-[#2a1d11] px-6 py-16 text-center shadow-[0_34px_90px_rgba(0,0,0,0.55)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 rounded-[40px] shadow-[inset_0_0_0_1px_rgba(73,54,34,0.65)]" />
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-orange-500/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/6 blur-3xl" />

        <div className="relative mx-auto w-full max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Ready to take <span className="text-orange-500">Control?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[60ch] text-base leading-7 text-[rgb(203_173_144/1)] sm:text-lg">
            Join thousands of users in the secure, non-custodial FINUX ecosystem
            today.
          </p>

          <div className="mt-10">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/80 bg-orange-500 px-10 py-4 text-base font-semibold text-black shadow-[0_18px_55px_rgba(249,115,22,0.32)] transition duration-300 hover:border-black hover:bg-orange-400 hover:shadow-[0_18px_70px_rgba(249,115,22,0.45)] sm:w-auto"
              onClick={() => {
                const el = document.getElementById("download-app");
                if (el) {
                  const rect = el.getBoundingClientRect();
                  const inView =
                    rect.top >= 0 &&
                    rect.top <= window.innerHeight * 0.5 &&
                    rect.bottom > 0;

                  if (!inView) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    return;
                  }
                }

                window.open(apkUrl, "_blank", "noopener,noreferrer");
              }}
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* <p className="mt-10 text-sm text-[rgb(203_173_144/1)]">
            Available for iOS, Android, and Desktop.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
