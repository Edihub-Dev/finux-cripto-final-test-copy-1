import { FaAndroid, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import heroCoins from "../../assets/hero image.webp";

const LandingHeaderContent = ({ stats, avatars }) => {
  return (
    <div className="hero-surface__content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <span className="hero__eyebrow">Introducing Finux</span>
          {/* <h1 id="hero-title">Buy &amp; trade crypto securely</h1> */}
          <h1 id="hero-title">
            <span style={{ whiteSpace: "nowrap" }}>Future Internet</span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>Network for</span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>Universal Assets.</span>
          </h1>
          <p>
            A secure crypto wallet and reward ecosystem-earn daily, stake smart,
            and grow with liquidity.
          </p>

          <div className="hero__actions">
            <button
              className="pill-button"
              type="button"
              style={{ display: "inline-flex", alignItems: "center", gap: 12 }}
              onClick={() =>
                document.getElementById("app-promo")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <FaAndroid size={28} aria-hidden="true" focusable="false" />
              Download Apk
            </button>
            <a
              className="ghost-link"
              href="https://finux-online.s3.ap-south-1.amazonaws.com/pdf/finuxpdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download pdf
            </a>
          </div>

          {/* <div className="hero__social">
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
          </div> */}
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
      {/*
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
      */}

      <div
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          zIndex: 50,
        }}
        aria-label="Quick contact"
      >
        <a
          href="https://whatsapp.com/channel/0029Vb7UDolKWEKzlCe5dF30"
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 56,
            height: 56,
            borderRadius: "9999px",
            background: "#22c55e",
            color: "#ffffff",
            display: "grid",
            placeItems: "center",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="https://t.me/Finuxofficiallive"
          aria-label="Message on Telegram"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 56,
            height: 56,
            borderRadius: "9999px",
            background: "#0ea5e9",
            color: "#ffffff",
            display: "grid",
            placeItems: "center",
            textDecoration: "none",
          }}
        >
          <FaTelegramPlane size={26} />
        </a>
      </div>
    </div>
  );
};

export default LandingHeaderContent;
