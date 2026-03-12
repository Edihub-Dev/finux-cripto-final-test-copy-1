import { useEffect } from "react";

import LandingNavbar from "./landing/LandingNavbar.jsx";
import { navLinks } from "./landing/landingData.js";

import EarnHero from "../components/earn/EarnHero.jsx";
import EarnStakingStability from "../components/earn/EarnStakingStability.jsx";
import EarnLiquidityContribution from "../components/earn/EarnLiquidityContribution.jsx";
import EarnDualIncome from "../components/earn/EarnDualIncome.jsx";
import EarnRewardsConditions from "../components/earn/EarnRewardsConditions.jsx";
import EarnHorizontalFeatureStrip from "../components/earn/EarnHorizontalFeatureStrip.jsx";
import EarnCommunity from "../components/earn/EarnCommunity.jsx";
import EarnAudits from "../components/earn/EarnAudits.jsx";
import EarnStart from "../components/earn/EarnStart.jsx";
import EarnFooter from "../components/earn/EarnFooter.jsx";

import FloatingSocialButtons from "../components/shared/FloatingSocialButtons.jsx";

const Earn = () => {
  useEffect(() => {
    document.documentElement.classList.add("earn-page");
    document.body.classList.add("earn-page");
    return () => {
      document.documentElement.classList.remove("earn-page");
      document.body.classList.remove("earn-page");
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
      className="earn-shell min-h-screen w-full overflow-x-hidden bg-transparent text-white"
    >
      <LandingNavbar
        navLinks={navLinks}
        ctaLabel="Connect Wallet"
        ctaTarget="connect-wallet"
      />

      <main className="w-full">
        <EarnHero />

        <div id="staking" className="scroll-mt-28">
          <EarnStakingStability />
          <EarnLiquidityContribution />
        </div>

        <div id="income" className="scroll-mt-28">
          <EarnDualIncome />
        </div>

        <div id="rewards" className="scroll-mt-28">
          <EarnRewardsConditions />
        </div>
        <EarnHorizontalFeatureStrip />

        <div id="community" className="scroll-mt-20 sm:scroll-mt-28">
          <EarnCommunity />
        </div>

        <div id="audits" className="scroll-mt-28">
          <EarnAudits />
        </div>

        <EarnStart />
      </main>

      <EarnFooter />
      <FloatingSocialButtons />
    </div>
  );
};

export default Earn;
