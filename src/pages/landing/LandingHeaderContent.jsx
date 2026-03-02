import heroCoins from "../../assets/bitcoin copy 1.svg";

const LandingHeaderContent = ({ stats, avatars }) => {
  return (
    <div className="hero-surface__content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <span className="hero__eyebrow">Introducing Finux</span>
          <h1 id="hero-title">Buy &amp; trade crypto securely</h1>
          <p>
            Start your crypto journey on our trusted platform with a simple,
            secure way to buy, trade, and manage digital assets.
          </p>

          <div className="hero__actions">
            <button
              className="pill-button"
              type="button"
              onClick={() =>
                document.getElementById("app-promo")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Download
            </button>
            <a className="ghost-link" href="#security">
              View security proof
            </a>
          </div>

          <div className="hero__social">
            <div className="avatar-group" aria-hidden="true">
              {avatars.map((avatar) => (
                <span
                  key={avatar.initials}
                  className="avatar"
                  style={{ background: avatar.color }}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <p>
              <strong>150k+ people</strong> already joined
            </p>
          </div>
        </div>

        <div className="hero__visual" role="presentation">
          <div className="glow" />
          <img
            src={heroCoins}
            alt="Floating crypto coins"
            className="coin-cloud"
          />
        </div>
      </section>

      <div id="download-app" className="scroll-mt-28" />
      <section
        className="trust-card"
        id="security"
        aria-label="Security highlights"
      >
        {stats.map((item) => (
          <article key={item.value} className="trust-card__item">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default LandingHeaderContent;
