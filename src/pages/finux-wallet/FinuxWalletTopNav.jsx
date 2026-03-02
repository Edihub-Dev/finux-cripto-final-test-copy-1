import { useEffect, useState } from "react";
import { Download } from "lucide-react";

import finuxLogo from "../../assets/icon with 672 safe zone.png";

const FinuxWalletTopNav = ({
  handleNavClick,
  isNavOpen,
  navLinks,
  setIsNavOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let scrollStopTimer;

    const handleScroll = () => {
      const scrolled = window.scrollY > 8;
      setIsScrolled(scrolled);

      if (scrollStopTimer) window.clearTimeout(scrollStopTimer);

      if (!scrolled) {
        setIsHidden(false);
        return;
      }

      if (!isNavOpen) setIsHidden(false);

      scrollStopTimer = window.setTimeout(() => {
        if (!isNavOpen && window.scrollY > 8) setIsHidden(true);
      }, 800);
    };

    const handleMouseMove = () => {
      if (isNavOpen) return;
      setIsHidden(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (scrollStopTimer) window.clearTimeout(scrollStopTimer);
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (isNavOpen) setIsHidden(false);
  }, [isNavOpen]);

  return (
    <div
      className={`wallet-nav ${isNavOpen ? "wallet-nav--open" : ""}${isScrolled ? " wallet-nav--scrolled" : ""}${isHidden ? " wallet-nav--hidden" : ""}`}
    >
      <button
        type="button"
        className="wallet-nav__toggle"
        aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isNavOpen}
        onClick={() => setIsNavOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="wallet-brand" onClick={() => window.location.assign("/")}>
        <img src={finuxLogo} alt="Finux logo" className="wallet-brand__logo" />
        <span className="wallet-brand__name"></span>
      </div>

      <nav className="wallet-nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <button
            key={link.label}
            className="wallet-nav__link"
            onClick={() => handleNavClick(link.target)}
            aria-label={`Go to ${link.label}`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        className="pill-button wallet-nav__download"
        onClick={() => handleNavClick("download-app")}
      >
        <span className="inline-flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </span>
      </button>
    </div>
  );
};

export default FinuxWalletTopNav;
