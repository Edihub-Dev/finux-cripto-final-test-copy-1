import finuxLogo from "../assets/Finux (1).svg";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[rgb(73_54_34/0.55)] bg-gradient-to-b from-[#2a1d11] to-[#1f140b] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div
        className="mx-auto grid w-full max-w-none grid-cols-1 items-center gap-6 py-5 text-white/70 lg:grid-cols-[auto_1fr_auto] lg:gap-8"
        style={{ paddingInline: "var(--layout-page-gutter)" }}
      >
        <div className="flex items-center justify-center lg:justify-start">
          <img src={finuxLogo} alt="Finux logo" className="h-7 w-auto" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm lg:flex-nowrap lg:gap-x-8">
          <a
            className="whitespace-nowrap text-[rgb(203_173_144/1)] no-underline transition duration-300 hover:text-[#d96500]"
            href="#privacy"
          >
            Privacy Policy
          </a>
          <a
            className="whitespace-nowrap text-[rgb(203_173_144/1)] no-underline transition duration-300 hover:text-[#d96500]"
            href="#terms"
          >
            Terms of Service
          </a>
          <a
            className="whitespace-nowrap text-[rgb(203_173_144/1)] no-underline transition duration-300 hover:text-[#d96500]"
            href="#support"
          >
            Contact Support
          </a>
        </nav>

        <div className="text-center text-[11px] text-white/45 sm:text-xs lg:text-right">
          © 2026 Finux.online. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
