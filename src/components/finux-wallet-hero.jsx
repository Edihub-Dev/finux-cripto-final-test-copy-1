import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  History,
  Repeat2,
  Send,
  ShieldCheck,
  Wallet2,
} from "lucide-react";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";

import walletMock from "../assets/wef 1.svg";

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
      { threshold: 0.18 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const Hero = () => {
  const { ref, isInView } = useInView();
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  const avatars = useMemo(
    () => [
      { label: "A", bg: "bg-gradient-to-br from-orange-300 to-orange-600" },
      { label: "M", bg: "bg-gradient-to-br from-emerald-300 to-emerald-600" },
      { label: "R", bg: "bg-gradient-to-br from-slate-200 to-slate-400" },
    ],
    [],
  );

  return (
    <section
      ref={ref}
      className={`pt-4 sm:pt-20 lg:pt-28 ${isInView ? "reveal-in" : "reveal"}`}
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="w-full max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[rgb(242_127_13_/_1)] bg-black/20 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[rgb(242_127_13_/_1)] shadow-[0_0_0_1px_rgba(242,127,13,0.2),0_12px_30px_rgba(0,0,0,0.35)]">
            Introducing Finux
          </div>

          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Your Gateway
            <br />
            to the
            <br />
            <span className="bg-[linear-gradient(to_right,#ffffff,#f27f0d)] bg-clip-text text-transparent">
              FINUX Ecosystem
            </span>
          </h1>

          <p className="mt-5 max-w-[46ch] text-base leading-7 text-[rgb(203_173_144/1)] sm:text-[15px]">
            Experience true non-custodial control over the keys to your assets.
            Built for long-term security and seamless ecosystem access.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f27f0d] px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(242,127,13,0.28)] transition duration-300 hover:shadow-[0_18px_60px_rgba(242,127,13,0.42)] sm:w-auto"
              onClick={() =>
                window.open(apkUrl, "_blank", "noopener,noreferrer")
              }
            >
              Download Wallet
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-[#120b06]/55 px-8 py-3 text-sm font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-white/20 hover:bg-[#120b06]/70 sm:w-auto"
            >
              Learn More
            </button>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center">
              {avatars.map((avatar, idx) => (
                <div
                  key={avatar.label}
                  className={`-ml-2 grid h-9 w-9 place-items-center rounded-full border border-[#1a0d05] text-xs font-bold text-black ${avatar.bg} ${idx === 0 ? "ml-0" : ""}`}
                  aria-hidden="true"
                >
                  {avatar.label}
                </div>
              ))}
            </div>

            <p className="whitespace-nowrap text-sm text-[rgb(203_173_144/1)]">
              <span className="font-semibold">Trusted</span> by FINUX wallet
              users
            </p>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center">
          <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.32),transparent_55%)] blur-2xl" />

          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-b from-orange-500/35 via-orange-500/10 to-transparent blur" />

            <Sheet className="relative rounded-[34px] border border-white/10 bg-black/40 p-3 shadow-[0_28px_70px_rgba(0,0,0,0.65)]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-b from-[#140803] via-[#100602] to-[#0a0301]">
                <div className="flex items-center justify-between px-5 pt-5 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-orange-500/15 text-orange-400">
                      <Wallet2 className="h-4 w-4" />
                    </span>
                    <span>FINUX</span>
                  </div>

                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="px-5 pb-5 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-medium text-white/55">
                      Balance
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                      $42,853.00
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Chip
                        variant="soft"
                        color="success"
                        startDecorator={<ShieldCheck className="h-3.5 w-3.5" />}
                        className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/65"
                      >
                        Secure
                      </Chip>
                      <Chip
                        variant="soft"
                        color="warning"
                        className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/65"
                      >
                        Non-Custodial
                      </Chip>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold tracking-wide text-white/55">
                      Assets
                    </p>
                    <div className="mt-3 grid gap-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Bitcoin</span>
                        <span className="text-white">0.24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Litecoin</span>
                        <span className="text-white">8.4</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Ethereum</span>
                        <span className="text-white">1.2</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    <button className="group grid place-items-center gap-1 rounded-2xl border border-white/10 bg-white/5 py-2 text-[10px] font-medium text-white/65 transition duration-300 hover:bg-white/10">
                      <Send className="h-4 w-4 text-orange-400 transition duration-300 group-hover:scale-110" />
                      Send
                    </button>
                    <button className="group grid place-items-center gap-1 rounded-2xl border border-white/10 bg-white/5 py-2 text-[10px] font-medium text-white/65 transition duration-300 hover:bg-white/10">
                      <ArrowUpRight className="h-4 w-4 text-orange-400 transition duration-300 group-hover:scale-110" />
                      Receive
                    </button>
                    <button className="group grid place-items-center gap-1 rounded-2xl border border-white/10 bg-white/5 py-2 text-[10px] font-medium text-white/65 transition duration-300 hover:bg-white/10">
                      <Repeat2 className="h-4 w-4 text-orange-400 transition duration-300 group-hover:scale-110" />
                      Swap
                    </button>
                    <button className="group grid place-items-center gap-1 rounded-2xl border border-white/10 bg-white/5 py-2 text-[10px] font-medium text-white/65 transition duration-300 hover:bg-white/10">
                      <History className="h-4 w-4 text-orange-400 transition duration-300 group-hover:scale-110" />
                      History
                    </button>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </Sheet>

            <img
              src={walletMock}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 top-1/2 hidden w-[300px] -translate-y-1/2 opacity-70 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
