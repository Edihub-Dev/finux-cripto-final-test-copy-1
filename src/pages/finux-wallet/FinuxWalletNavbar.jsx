import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import FinuxWalletNavDrawer from "./FinuxWalletNavDrawer.jsx";
import FinuxWalletTopNav from "./FinuxWalletTopNav.jsx";

const defaultLinks = [
  { label: "Home", target: "home" },
  { label: "Ecosystem", target: "/ecosystem" },
  { label: "Community", target: "/community" },
  { label: "Earn", target: "/earn" },
  { label: "Resources", target: "/resources" },
  { label: "Download APK", target: "download-apk" },
];

const FinuxWalletNavbar = ({ navLinks: navLinksOverride } = {}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const previousBodyOverflowRef = useRef(null);
  const navigate = useNavigate();

  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  const resolvedNavLinks = navLinksOverride ?? defaultLinks;
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

    if (target === "home") {
      navigate("/");
      return;
    }

    if (target === "download-app") {
      window.open(apkUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (target === "download-apk") {
      window.open(apkUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <FinuxWalletTopNav
        handleNavClick={handleNavClick}
        isNavOpen={isNavOpen}
        navLinks={topNavLinks}
        setIsNavOpen={setIsNavOpen}
      />

      <div className="wallet-nav-spacer" aria-hidden="true" />

      <FinuxWalletNavDrawer
        handleNavClick={handleNavClick}
        isNavOpen={isNavOpen}
        navLinks={resolvedNavLinks}
        setIsNavOpen={setIsNavOpen}
      />
    </>
  );
};

export default FinuxWalletNavbar;
