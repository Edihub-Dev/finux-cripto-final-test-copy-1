import { Download } from "lucide-react";

const JoinCommunity = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,140,50,0.14),transparent_52%),radial-gradient(circle_at_50%_60%,rgba(0,0,0,0.30),rgba(0,0,0,0.92)_78%),linear-gradient(135deg,#1a0b05_0%,#3b1d0c_55%,#150f0a_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,25,16,0)_0%,#150f0a_100%)] opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl opacity-30" />

      <div className="relative mx-auto w-full max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Join the FINUX Community
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#FFFFFF99] sm:text-base">
          Download the wallet and start participating in the FINUX ecosystem.
        </p>

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/50"
          onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
        >
          Download APK
          <Download className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
