import finuxLogo from "../../assets/Finux (1).svg";

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
              <h3>Ecosystem</h3>
              <ul>
                <li>
                  <a href="/ecosystem#tokens">Tokens</a>
                </li>
                <li>
                  <a href="/ecosystem#wallet">Wallet</a>
                </li>
                <li>
                  <a href="/ecosystem#dexs">Dexs</a>
                </li>
                <li>
                  <a href="/ecosystem#economics">Economics</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Earn</h3>
              <ul>
                <li>
                  <a href="/earn#staking">Staking</a>
                </li>
                <li>
                  <a href="/earn#rewards">Rewards</a>
                </li>
                <li>
                  <a href="/earn#audits">Audits</a>
                </li>
                <li>
                  <a href="/earn#community">Community</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="/community#referral">Referral</a>
                </li>
                <li>
                  <a href="/community#guidelines">Guidelines</a>
                </li>
                <li>
                  <a href="/community#about">About</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="/resources#documentation">Documentation</a>
                </li>
                <li>
                  <a href="/resources#security">Security</a>
                </li>
                <li>
                  <a href="/resources#updates">Updates</a>
                </li>
                <li>
                  <a href="/resources#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Finux Wallet</h3>
              <ul>
                <li>
                  <a href="/finux-wallet#ownership">Ownership</a>
                </li>
                <li>
                  <a href="/finux-wallet#security-responsibility">
                    Sec. &amp; Respo.
                  </a>
                </li>
                <li>
                  <a href="/finux-wallet#staking-rewards">
                    Staking &amp; Rewards
                  </a>
                </li>
                <li>
                  <a href="/finux-wallet#wallet-requirement">
                    Wallet Requirement
                  </a>
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
