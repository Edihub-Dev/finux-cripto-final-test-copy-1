import { ArrowRight } from "lucide-react";

const HeroResources = () => {
  const documentationUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/pdf/finuxpdf.pdf";

  return (
    <section aria-labelledby="resources-hero-title" className="w-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#221910]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,190,140,0.14),rgba(34,25,16,0.92)_52%,rgba(34,25,16,1)_100%)]" />
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] text-orange-200">
              FINUX RESOURCES
            </span>

            <h1
              id="resources-hero-title"
              className="mt-6 text-balance text-4xl font-semibold leading-[1.06] text-white sm:text-6xl"
            >
              Knowledge, Security, and
              <span className="block">Official Updates</span>
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-[#CBAD90]/80 sm:text-base">
              Access official documentation, learn about ecosystem security, and
              follow responsible participation guidelines for the FINUX
              protocol.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition duration-300 hover:bg-white/90 sm:w-auto"
                onClick={() =>
                  window.open(documentationUrl, "_blank", "noopener,noreferrer")
                }
              >
                View Documentation
              </button>

              <button
                type="button"
                className="group w-full rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Latest Audits
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroResources;
