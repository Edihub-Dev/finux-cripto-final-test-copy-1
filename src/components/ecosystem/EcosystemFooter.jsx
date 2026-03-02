import finuxLogo from "../../assets/Finux (1).svg";

const EcosystemFooter = () => {
  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Support", href: "#" },
  ];

  return (
    <footer
      className="w-full border-t border-[#2A1E14] pt-[30px] pb-[30px]"
      style={{
        background: "linear-gradient(180deg, #1A120B 0%, #1E140C 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-[18px] px-6 md:flex-row md:gap-6">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={finuxLogo} alt="Finux logo" className="h-6 w-auto" />
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-9 lg:gap-[36px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-white/75 transition-colors duration-300 hover:text-[#FF8A00] no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right - Copyright */}
        <p className="text-[14px] text-white/60 md:text-right">
          © 2026 Finux.online. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default EcosystemFooter;
