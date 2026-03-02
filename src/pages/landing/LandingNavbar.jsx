import { useEffect, useRef, useState } from "react";

import LandingNavDrawer from "./LandingNavDrawer.jsx";
import LandingTopNav from "./LandingTopNav.jsx";

import { navLinks } from "./landingData.js";
import { useNavigate } from "react-router-dom";

const LandingNavbar = ({
  navLinks: navLinksOverride,
  ctaLabel,
  ctaTarget,
  variant,
} = {}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const previousBodyOverflowRef = useRef(null);

  const connectWalletUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  const resolvedNavLinks = navLinksOverride ?? navLinks;
  const topNavLinks = resolvedNavLinks.filter(
    (link) => link?.target !== "download-apk",
  );

  useEffect(() => {
    if (isNavOpen) {
      if (previousBodyOverflowRef.current === null) {
        previousBodyOverflowRef.current = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    } else {
      if (previousBodyOverflowRef.current !== null) {
        document.body.style.overflow = previousBodyOverflowRef.current;
        previousBodyOverflowRef.current = null;
      }
    }

    return () => {
      if (previousBodyOverflowRef.current !== null) {
        document.body.style.overflow = previousBodyOverflowRef.current;
        previousBodyOverflowRef.current = null;
      }
    };
  }, [isNavOpen]);

  const handleNavClick = (target) => {
    setIsNavOpen(false);

    if (typeof target === "string" && target.startsWith("/")) {
      navigate(target);
      return;
    }

    if (target === "connect-wallet") {
      window.open(connectWalletUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (target === "download-apk") {
      window.open(connectWalletUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (target === "home") {
      navigate("/");
      return;
    }

    if (target === "download-app") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("app-promo");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
      return;
    }

    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <LandingTopNav
        handleNavClick={handleNavClick}
        isNavOpen={isNavOpen}
        navLinks={topNavLinks}
        setIsNavOpen={setIsNavOpen}
        ctaLabel={ctaLabel}
        ctaTarget={ctaTarget}
        variant={variant}
      />

      <div className="wallet-nav-spacer" aria-hidden="true" />

      <LandingNavDrawer
        handleNavClick={handleNavClick}
        isNavOpen={isNavOpen}
        navLinks={resolvedNavLinks}
        setIsNavOpen={setIsNavOpen}
        variant={variant}
      />
    </>
  );
};

export default LandingNavbar;
