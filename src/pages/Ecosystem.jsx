import { useEffect } from "react";

import LandingNavbar from "./landing/LandingNavbar.jsx";
import { navLinks } from "./landing/landingData.js";

import EcosystemHero from "../components/ecosystem/EcosystemHero.jsx";
import EcosystemTokenSection from "../components/ecosystem/EcosystemTokenSection.jsx";
import NonCustodialSecurity from "../components/ecosystem/NonCustodialSecurity.jsx";
import LiquidityInteractions from "../components/ecosystem/LiquidityInteractions.jsx";
import SustainableEconomics from "../components/ecosystem/SustainableEconomics.jsx";
import FeatureHighlightsStrip from "../components/shared/FeatureHighlightsStrip.jsx";
import ExploreEcosystem from "../components/ecosystem/ExploreEcosystem.jsx";
import EcosystemFooter from "../components/ecosystem/EcosystemFooter.jsx";

import FloatingSocialButtons from "../components/shared/FloatingSocialButtons.jsx";

const Ecosystem = () => {
  useEffect(() => {
    document.documentElement.classList.add("ecosystem-page");
    document.body.classList.add("ecosystem-page");
    return () => {
      document.documentElement.classList.remove("ecosystem-page");
      document.body.classList.remove("ecosystem-page");
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="top"
      className="ecosystem-shell min-h-screen w-full overflow-x-hidden bg-transparent text-white"
    >
      <LandingNavbar
        navLinks={navLinks}
        ctaLabel="Connect Wallet"
        ctaTarget="connect-wallet"
      />

      <main className="w-full">
        <EcosystemHero />

        <div id="tokens" className="scroll-mt-28">
          <EcosystemTokenSection />
        </div>

        <div id="wallet" className="scroll-mt-28">
          <div id="security" />
          <NonCustodialSecurity />
        </div>

        <div id="dexs" className="scroll-mt-28">
          <LiquidityInteractions />
        </div>

        <div id="economics" className="scroll-mt-28">
          <SustainableEconomics />
        </div>

        <FeatureHighlightsStrip />

        <ExploreEcosystem />
      </main>

      <EcosystemFooter />
      <FloatingSocialButtons />
    </div>
  );
};

export default Ecosystem;
