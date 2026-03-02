import LandingNavbar from "./landing/LandingNavbar.jsx";
import { navLinks } from "./landing/landingData.js";

import Hero from "../components/finux-wallet-hero.jsx";
import Features from "../components/finux-wallet-features.jsx";
import Security from "../components/finux-wallet-security.jsx";
import Staking from "../components/finux-wallet-staking.jsx";
import WalletRequirements from "../components/finux-wallet-requirements.jsx";
import CTA from "../components/finux-wallet-cta.jsx";
import Footer from "../components/finux-wallet-footer.jsx";

const Landing = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[rgb(35_26_16_/_0.9)] text-white">
      <LandingNavbar
        navLinks={navLinks}
        ctaLabel="Download"
        ctaTarget="download-app"
      />

      <div
        role="main"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="scroll-mt-28" id="home">
          <Hero />
        </div>

        <div className="scroll-mt-28" id="ecosystem">
          <Features />
        </div>

        <div className="scroll-mt-28" id="community">
          <Security />
        </div>

        <div className="scroll-mt-28" id="earn">
          <Staking />
        </div>

        <div className="scroll-mt-28" id="resources">
          <WalletRequirements />
        </div>

        <div className="scroll-mt-28" id="download-app">
          <CTA />
        </div>
      </div>

      <div className="scroll-mt-28" id="legal">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
