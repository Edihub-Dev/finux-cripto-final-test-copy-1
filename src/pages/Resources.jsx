import { useEffect } from "react";
import HeroResources from "../components/resources/HeroResources.jsx";
import SafetyNotice from "../components/resources/SafetyNotice.jsx";
import FAQSection from "../components/resources/FAQSection.jsx";
import UpdatesSection from "../components/resources/UpdatesSection.jsx";
import HighlightsRow from "../components/resources/HighlightsRow.jsx";
import StayInformed from "../components/resources/StayInformed.jsx";
import ResourcesFooter from "../components/resources/ResourcesFooter.jsx";

import LandingNavbar from "./landing/LandingNavbar.jsx";
import { navLinks } from "./landing/landingData.js";

import FloatingSocialButtons from "../components/shared/FloatingSocialButtons.jsx";

const Resources = () => {
  useEffect(() => {
    document.documentElement.classList.add("resources-page");
    document.body.classList.add("resources-page");
    return () => {
      document.documentElement.classList.remove("resources-page");
      document.body.classList.remove("resources-page");
    };
  }, []);

  return (
    <div className="resources-shell min-h-screen w-full overflow-x-hidden bg-transparent text-white">
      <LandingNavbar
        navLinks={navLinks}
        ctaLabel="Connect Wallet"
        ctaTarget="connect-wallet"
      />

      <main className="w-full">
        <div id="documentation" className="scroll-mt-28">
          <HeroResources />
        </div>

        <div id="security" className="scroll-mt-28">
          <SafetyNotice />
        </div>

        <section className="w-full bg-[#201810] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid gap-10 lg:grid-cols-2">
              <FAQSection />
              <UpdatesSection />
            </div>

            <div className="mt-16 hidden h-px w-full bg-orange-500/15 lg:block" />
          </div>
        </section>

        <HighlightsRow />
        <StayInformed />
      </main>

      <ResourcesFooter />
      <FloatingSocialButtons />
    </div>
  );
};

export default Resources;
