import { useEffect } from "react";

import LandingNavbar from "./landing/LandingNavbar.jsx";
import { navLinks } from "./landing/landingData.js";

import CommunityHero from "../components/community/CommunityHero.jsx";
import ReferralProgram from "../components/community/ReferralProgram.jsx";
import RanksClubs from "../components/community/RanksClubs.jsx";
import CommunityGuidelines from "../components/community/CommunityGuidelines.jsx";
import CommunityHighlights from "../components/community/CommunityHighlights.jsx";
import JoinCommunity from "../components/community/JoinCommunity.jsx";
import CommunityFooter from "../components/community/CommunityFooter.jsx";

import FloatingSocialButtons from "../components/shared/FloatingSocialButtons.jsx";

const Community = () => {
  useEffect(() => {
    document.documentElement.classList.add("community-page");
    document.body.classList.add("community-page");
    return () => {
      document.documentElement.classList.remove("community-page");
      document.body.classList.remove("community-page");
    };
  }, []);

  return (
    <div
      id="top"
      className="community-shell min-h-screen w-full overflow-x-hidden bg-transparent text-white"
    >
      <LandingNavbar
        navLinks={navLinks}
        ctaLabel="Connect Wallet"
        ctaTarget="connect-wallet"
      />

      <main className="w-full">
        <CommunityHero />

        <div id="referral" className="scroll-mt-20 sm:scroll-mt-28">
          <ReferralProgram />
        </div>

        <RanksClubs />

        <div id="guidelines" className="scroll-mt-20 sm:scroll-mt-28">
          <CommunityGuidelines />
        </div>

        <div id="about" className="scroll-mt-20 sm:scroll-mt-28">
          <CommunityHighlights />
        </div>

        <JoinCommunity />
      </main>

      <CommunityFooter />
      <FloatingSocialButtons />
    </div>
  );
};

export default Community;
