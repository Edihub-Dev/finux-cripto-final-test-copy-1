const LandingNavDrawer = ({
  handleNavClick,
  isNavOpen,
  navLinks,
  setIsNavOpen,
  variant: _variant,
}) => {
  return (
    <>
      <aside
        className={`wallet-nav-drawer ${isNavOpen ? "wallet-nav-drawer--open" : ""}`}
      >
        <div className="wallet-nav-drawer__header">
          <span>Menu</span>

          <button
            className="wallet-nav-drawer__close"
            onClick={() => setIsNavOpen(false)}
          >
            ×
          </button>
        </div>

        <nav
          className="wallet-nav-drawer__links"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="wallet-nav-drawer__link"
              onClick={() => handleNavClick(link.target)}
              aria-label={`Go to ${link.label}`}
            >
              <span className="inline-flex items-center gap-2">
                {link.Icon ? <link.Icon className="h-4 w-4" /> : null}
                {link.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <button
        type="button"
        className={`wallet-nav-drawer__backdrop ${isNavOpen ? "is-visible" : ""}`}
        aria-hidden={!isNavOpen}
        onClick={() => setIsNavOpen(false)}
      />
    </>
  );
};

export default LandingNavDrawer;
