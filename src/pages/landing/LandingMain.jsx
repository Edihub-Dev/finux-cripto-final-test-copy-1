const LandingMain = ({
  activeHowItWorksStep,
  appRatings,
  cryptoAccessImage,
  featureRows,
  howItWorksSteps,
  investBannerStyle,
  investShape,
  orbitIcons,
  renderFeaturePanel,
  setActiveHowItWorksStep,
  ToolkitFeatureCard,
}) => {
  const scrollToAppPromo = (e) => {
    e.preventDefault();
    const element = document.getElementById("app-promo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div id="ecosystem" className="scroll-mt-28">
        <section className="features" id="features">
          <div className="features__intro" data-animate>
            <p className="eyebrow">Why this app for you?</p>
            <h2>Explore how Finux fits your workflow</h2>
            <p>
              Discover the features that make our application a dependable
              option for investors who demand security, clarity, and control.
            </p>
          </div>

          <div className="feature-rows">
            {featureRows.map((row) => (
              <article key={row.id} className="feature-row" data-animate>
                <div className="feature-card">
                  <div className="feature-card__text">
                    <h3>{row.title}</h3>
                    <p>{row.description}</p>
                  </div>
                  <div className="feature-card__footer">
                    <img
                      src={row.icon}
                      alt=""
                      aria-hidden="true"
                      className="feature-card__icon"
                    />
                    <button
                      className="icon-button"
                      aria-label="Learn more about feature"
                    >
                      ↗
                    </button>
                  </div>
                </div>
                <div className={`feature-panel panel--${row.panel}`}>
                  {renderFeaturePanel(row.panel)}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div id="earn" className="scroll-mt-28">
        <section className="toolkit" id="toolkit">
          <div className="toolkit__header" data-animate>
            <div className="toolkit__title">
              <h2>Everything you need for crypto</h2>
            </div>
            <p className="toolkit__description">
              Our platform provides tools for all your crypto needs, from
              advanced trading to strong security, all in one easy-to-use place.
            </p>
          </div>

          <div className="toolkit__grid" data-animate>
            <ToolkitFeatureCard cardId="encryption" />
            <div className="toolkit__right-column">
              <ToolkitFeatureCard cardId="payments" />
              <div className="toolkit__row">
                <ToolkitFeatureCard cardId="visualization" />
                <ToolkitFeatureCard cardId="realtime" />
              </div>
            </div>
          </div>

          <div className="toolkit__actions" data-animate>
            <button className="pill-button" onClick={scrollToAppPromo}>
              Download
            </button>
            <button className="ghost-pill">Browse all features</button>
          </div>
        </section>
      </div>

      <div id="community" className="scroll-mt-28">
        <section
          className="how-it-works"
          aria-labelledby="how-it-works-title"
          data-animate
          id="how-it-works"
        >
          <div className="how-it-works__container">
            <div className="how-it-works__header">
              <h2 id="how-it-works-title">How to create a wallet?</h2>
              <p>
                It&apos;s easy to get started. Follow our simple three-step
                guide to set up your account and dive into the world of crypto.
              </p>
            </div>

            <div
              className="how-it-works__tabs"
              role="tablist"
              aria-label="Finux onboarding steps"
            >
              {howItWorksSteps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  className={`how-it-works__tab ${step.id === activeHowItWorksStep ? "is-active" : ""}`}
                  aria-selected={step.id === activeHowItWorksStep}
                  onClick={() => setActiveHowItWorksStep(step.id)}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className="how-it-works__surface"
            data-active-step={activeHowItWorksStep}
          >
            <div className="how-it-works__panel" role="tabpanel">
              {howItWorksSteps.map((step) => (
                <div
                  key={step.id}
                  className={`how-it-works__panel-inner ${step.id === activeHowItWorksStep ? "is-active" : ""}`}
                  aria-hidden={step.id !== activeHowItWorksStep}
                >
                  <div className="how-it-works__panel-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <button
                      className="pill-button how-it-works__cta"
                      type="button"
                      onClick={scrollToAppPromo}
                    >
                      Download app
                    </button>
                  </div>
                  <div className="how-it-works__panel-visual">
                    <img src={step.image} alt={step.imageAlt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div id="resources" className="scroll-mt-28">
        <section
          className="crypto-access"
          id="crypto-access"
          aria-labelledby="crypto-access-title"
          data-animate
        >
          <div className="crypto-access__surface">
            <div className="crypto-access__visual" role="presentation">
              <img src={cryptoAccessImage} alt="Floating crypto coins" />
            </div>
            <div className="crypto-access__content">
              <span className="crypto-access__eyebrow">
                Global asset coverage
              </span>
              <h2 id="crypto-access-title">Access 1,000+ cryptocurrencies</h2>
              <p>
                Explore a wide range of digital currencies and expand your
                portfolio with access to over a thousand cryptocurrencies.
              </p>
              <button className="crypto-access__cta" type="button">
                Browse all crypto
              </button>
            </div>
          </div>
        </section>
      </div>

      <section
        className="invest-banner"
        aria-labelledby="invest-banner-title"
        data-animate
      >
        <div className="invest-banner__surface" style={investBannerStyle}>
          <div className="invest-banner__content">
            <h2 id="invest-banner-title">
              Start earning passive income on FINUX
            </h2>
            <p>
              Seize the opportunity to enter the digital finance arena. Get our
              application and start your investment journey now.
            </p>
            <a
              className="pill-button"
              href="#app-promo"
              onClick={scrollToAppPromo}
              style={{
                width: "fit-content !important",
                alignSelf: "flex-start !important",
                display: "inline-flex !important",
              }}
            >
              Download app
            </a>
          </div>
          <div className="invest-banner__visual" role="presentation">
            <img src={investShape} alt="" />
          </div>
        </div>
      </section>

      <section
        id="app-promo"
        className="app-promo"
        aria-labelledby="app-promo-title"
        data-animate
      >
        <div className="app-promo__inner">
          <div className="app-promo__content">
            <p className="app-promo__eyebrow">Mobile first</p>
            <h2 id="app-promo-title">Get our iOS and Android app</h2>
            <p>
              Take Finux wherever you go. Track markets, move funds, and receive
              realtime alerts with a beautifully crafted experience that mirrors
              our desktop dashboard.
            </p>

            <div className="app-promo__badges" aria-label="App download badges">
              {/*
              <a
                className="store-badge store-badge--apple"
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="store-badge__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M16.365 1.43c0 1.14-.424 2.215-1.232 3.133-.894 1.01-2.354 1.791-3.616 1.69-.16-1.24.458-2.33 1.226-3.205.85-.984 2.336-1.72 3.622-1.618z" />
                    <path d="M20.7 17.07c-.44 1.01-.65 1.46-1.21 2.36-.78 1.25-1.88 2.8-3.27 2.81-1.24.01-1.56-.81-3.24-.8-1.68.01-2.04.82-3.28.81-1.39-.01-2.45-1.41-3.23-2.66-2.24-3.57-2.48-7.76-1.09-9.92.99-1.54 2.57-2.44 4.05-2.44 1.5 0 2.45.83 3.69.83 1.21 0 1.95-.83 3.68-.83 1.31 0 2.71.71 3.7 1.93-3.25 1.78-2.72 6.42.4 7.91z" />
                  </svg>
                </span>
                <span className="store-badge__label">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </span>
              </a>

              <a
                className="store-badge store-badge--google"
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="store-badge__icon" aria-hidden="true">
                  <svg
                    className="store-badge__google-icon"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      fill="#34A853"
                      d="M1.8 2.1 13.6 12 1.8 21.9c-.5-.5-.8-1.2-.8-2V4.1c0-.8.3-1.5.8-2z"
                    />
                    <path
                      fill="#4285F4"
                      d="M22 12c0 .6-.3 1.2-.9 1.6l-3.6 2.1L13.6 12l3.9-3.7 3.6 2.1c.6.4.9 1 .9 1.6z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M1.8 2.1 17.5 8.3 13.6 12 1.8 2.1z"
                    />
                    <path
                      fill="#EA4335"
                      d="M1.8 21.9 13.6 12l3.9 3.7L1.8 21.9z"
                    />
                  </svg>
                </span>
                <span className="store-badge__label">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
              */}

              <a
                className="store-badge store-badge--apk"
                href="https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="store-badge__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path
                      fill="#3DDC84"
                      d="M7.2 8.1 5.6 5.2a.6.6 0 1 1 1-.6l1.7 3h7.4l1.7-3a.6.6 0 1 1 1 .6l-1.6 2.9c.7.5 1.2 1.3 1.2 2.2V18c0 .8-.6 1.4-1.4 1.4h-.7v2.2a.9.9 0 0 1-1.8 0v-2.2H9.8v2.2a.9.9 0 0 1-1.8 0v-2.2h-.6C6.6 19.4 6 18.8 6 18v-7.7c0-.9.5-1.7 1.2-2.2Zm3.1-1.3a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm3.4 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
                    />
                  </svg>
                </span>
                <span className="store-badge__label">
                  <span>Download</span>
                  <strong>APK</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="app-promo__visual" role="presentation">
            <div className="app-promo__phone">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
                alt="Hand holding smartphone"
                loading="lazy"
              />
              <ul className="app-promo__orbit" aria-hidden="true">
                {orbitIcons.map((icon, index) => (
                  <li
                    key={icon.name}
                    style={{
                      "--angle": `${(index / orbitIcons.length) * 360}deg`,
                    }}
                  >
                    <img src={icon.src} alt={icon.name} loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingMain;
