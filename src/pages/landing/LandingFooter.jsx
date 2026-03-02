import finuxLogo from "../../assets/icon with 672 safe zone.png";

const LandingFooter = () => {
  const scrollToAppPromo = () => {
    const element = document.getElementById("app-promo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer" data-animate>
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-cta">
            <p className="footer-cta__eyebrow">Ready to begin?</p>
            <h2>Start investing in crypto today</h2>
            <p>
              Download our app and join thousands shaping their financial future
              through cryptocurrency. Secure, intuitive, and built for momentum.
            </p>
            <button
              className="pill-button footer-cta__button"
              type="button"
              onClick={scrollToAppPromo}
            >
              Download app
            </button>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Main pages</h3>
              <ul>
                <li>
                  <a href="#preview">Preview</a>
                </li>
                <li>
                  <a href="#home-v1">Home V1</a>
                </li>
                <li>
                  <a href="#home-v2">Home V2</a>
                </li>
                <li>
                  <a href="#home-v3">Home V3</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#team">Team member</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>&nbsp;</h3>
              <ul>
                <li>
                  <a href="#cryptos">Cryptos</a>
                </li>
                <li>
                  <a href="#crypto-single">Crypto single</a>
                </li>
                <li>
                  <a href="#blog-v1">Blog V1</a>
                </li>
                <li>
                  <a href="#blog-v2">Blog V2</a>
                </li>
                <li>
                  <a href="#blog-v3">Blog V3</a>
                </li>
                <li>
                  <a href="#blog-post">Blog post</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>&nbsp;</h3>
              <ul>
                <li>
                  <a href="#career-single">Career single</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contact-v1">Contact V1</a>
                </li>
                <li>
                  <a href="#contact-v2">Contact V2</a>
                </li>
                <li>
                  <a href="#contact-v3">Contact V3</a>
                </li>
                <li>
                  <a href="#coming-soon">Coming soon</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Utility pages</h3>
              <ul>
                <li>
                  <a href="#404">404 not found</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="footer-newsletter__copy">
            <h3>Stay tuned for more updates</h3>
            <p>Receive the latest news and updates from us.</p>
          </div>

          <form
            className="footer-newsletter__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand" aria-label="Finux">
            <img src={finuxLogo} alt="Finux" />
          </div>
          <div className="footer-meta">
            © 2026 Finux.online. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
