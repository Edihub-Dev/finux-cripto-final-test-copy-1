const StayInformed = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section
      id="download-app"
      className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-16 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#231B11] px-6 py-12 text-center shadow-[0_22px_70px_rgba(0,0,0,0.6)] sm:px-10">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/12 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-orange-500/25 via-orange-500/10 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-l from-orange-500/18 via-orange-500/6 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-orange-500/14 via-orange-500/6 to-transparent" />

        <div className="relative">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Stay Informed with FINUX
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#CBAD90] sm:text-base">
            Join the community and get real-time alerts directly to your device.
            Don’t miss critical security updates.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_12px_32px_rgba(249,115,22,0.35)] transition duration-300 hover:shadow-[0_16px_40px_rgba(249,115,22,0.45)] sm:w-auto"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
          >
            Download FINUX Wallet
          </button>

          <p className="mt-4 text-xs text-[#CBAD90]/60">
            Available on iOS, Android &amp; Chrome
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayInformed;
