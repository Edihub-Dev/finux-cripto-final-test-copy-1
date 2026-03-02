const ExploreEcosystem = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section id="download-app" className="mx-auto w-full">
      <div className="border border-white/10 bg-[#1F170E] px-6 pt-12 pb-12 text-center shadow-[0_22px_70px_rgba(0,0,0,0.6)] sm:px-10 sm:pb-16">
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Explore the FINUX Ecosystem
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Join the ecosystem, stake responsibly, and stay informed with
            verified updates from official channels.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_12px_32px_rgba(249,115,22,0.35)] transition duration-300 hover:shadow-[0_16px_40px_rgba(249,115,22,0.45)] sm:w-auto"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
          >
            Download FINUX Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreEcosystem;
