const CommunityHero = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section className="relative flex w-full items-start justify-center overflow-hidden pt-[45px] pb-12 text-center sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_92%_14%,rgba(255,140,50,0.16),transparent_26%),radial-gradient(ellipse_at_78%_32%,rgba(255,140,50,0.08),transparent_22%),radial-gradient(ellipse_at_22%_48%,rgba(255,140,50,0.06),transparent_24%),radial-gradient(circle_at_50%_18%,rgba(255,140,50,0.06),transparent_58%),radial-gradient(circle_at_50%_52%,rgba(0,0,0,0.66),rgba(0,0,0,0.96)_74%),linear-gradient(135deg,#1a0b05_0%,#3b1d0c_55%,#0f0603_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,25,16,0)_0%,#150f0a_100%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl opacity-25" />

      <div className="relative mx-auto w-full max-w-4xl px-6">
        <span className="mb-6 inline-flex rounded-full border border-orange-500/25 bg-orange-500/10 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-400">
          FINUX COMMUNITY
        </span>

        <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Built on Participation.
          <span className="block text-white/60">Driven by Trust.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#FFFFFF99]">
          Join an exclusive ecosystem built on verified participation and
          ethical contribution. We are shaping the future of decentralized
          finance, together.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/50"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
          >
            Explore Community
          </button>

          <button
            type="button"
            className="rounded-full border border-gray-600 bg-white/5 px-8 py-4 font-semibold text-gray-300 transition-all duration-300 hover:border-orange-400 hover:text-orange-400"
          >
            Read Manifesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
