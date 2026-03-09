const EarnFooter = () => {
  return (
    <footer
      className="w-full border-t border-[#1A140F] bg-[#0F0B07]"
      style={{ backgroundColor: "#0F0B07" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-[14px] bg-[#0F0B07] px-6 py-7 text-center md:flex-row md:text-left">
        <p className="m-0 p-0 text-[14px] leading-normal text-[rgba(255,255,255,0.65)]">
          © 2026 Finux.online. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-8 text-[14px] text-[rgba(255,255,255,0.7)] md:justify-end">
          <a
            href="#"
            className="text-[14px] text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 ease-in-out hover:text-[#FF8A00]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[14px] text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 ease-in-out hover:text-[#FF8A00]"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-[14px] text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 ease-in-out hover:text-[#FF8A00]"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default EarnFooter;
