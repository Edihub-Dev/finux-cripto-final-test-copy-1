import { useEffect, useState } from "react";
import cardAccent from "../../assets/B0uUXSq0m868oLBfPN2rG3lJCho copy 1.svg";
import transferIcon from "../../assets/kK10BYW7A0IyokkZjS6BKJ8VE copy 1.svg";
import analyticsIcon from "../../assets/z95dq6ks9unrjAjIFNFdd0B3BOE copy 1.svg";
import lockIcon from "../../assets/0dMWvmHmtJtNLyahKB5B0HErpIE copy 1.svg";
import goldIcon from "../../assets/3lQ7907y7C6l2ACYCAQKDOQVYg copy 1.svg";
import stackIcon from "../../assets/kFW9oB0lpLbUlaE5PRMjFjfn0Qc copy 1.svg";
import realtimeIcon from "../../assets/uDGuWbZP77iu7pgjp04gtfeUY copy 1.svg";
import bitcoinImage from "../../assets/bitcoin copy 1.svg";
import cryptoAccessImage from "../../assets/Screenshot 2026-01-27 at 3.41.16\u202FPM copy 1.svg";
import investBackground from "../../assets/124 2.svg";
import investShape from "../../assets/1.svg";
import LandingFooter from "./LandingFooter.jsx";
import LandingHeader from "./LandingHeader.jsx";
import LandingMain from "./LandingMain.jsx";
import LandingNavbar from "./LandingNavbar.jsx";

import { navLinks } from "./landingData.js";

const stats = [
  { value: "256bits", label: "AES Encryption" },
  { value: "0.", label: "Security incidents" },
  { value: "CISA+", label: "Security certification" },
];

const avatars = [
  { initials: "AL", color: "var(--avatar-1)" },
  { initials: "MJ", color: "var(--avatar-2)" },
  { initials: "RK", color: "var(--avatar-3)" },
];

const featureRows = [
  {
    id: "wallet",
    title: "Built-in wallet",
    description:
      "Your all-in-one crypto tool. Securely store, send, and receive digital assets with our fully integrated wallet.",
    panel: "balance",
    icon: cardAccent,
  },
  {
    id: "transfer",
    title: "Instant crypto transfers",
    description:
      "Move funds between accounts in seconds. Enjoy fast, reliable transactions so you never miss a great opportunity.",
    panel: "transfer",
    icon: transferIcon,
  },
  {
    id: "analytics",
    title: "Visualize your performance",
    description:
      "Track your portfolio with simple charts and analytics. Gain insights to make smarter, well-informed investment decisions.",
    panel: "analytics",
    icon: analyticsIcon,
  },
];

const howItWorksSteps = [
  {
    id: "create",
    label: "Create an account",
    title: "Create account",
    description:
      "Begin your journey into cryptocurrency by creating a secure account with us. The process is quick, simple, and straightforward.",
    image: bitcoinImage,
    imageAlt: "Finux account creation screen on mobile",
  },
  {
    id: "transferFunds",
    label: "Transfer your funds",
    title: "Transfer your funds",
    description:
      "Connect your preferred funding methods and move money between wallets in seconds. Track every transfer with real-time status updates.",
    image: bitcoinImage,
    imageAlt: "Finux transfer funds interface on mobile",
  },
  {
    id: "earn",
    label: "Earn passive interest",
    title: "Earn passive interest",
    description:
      "Activate staking and yield strategies with a tap. Watch your assets grow safely while keeping full control of your portfolio.",
    image: bitcoinImage,
    imageAlt: "Finux portfolio analytics on mobile",
  },
];

const appRatings = [
  { score: 4.8, label: "Trustpilot" },
  { score: 4.7, label: "Google" },
];

const orbitIcons = [
  {
    name: "Bitcoin",
    src: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032",
  },
  {
    name: "Ethereum",
    src: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032",
  },
  {
    name: "Solana",
    src: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032",
  },
  {
    name: "Tether",
    src: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032",
  },
  {
    name: "Litecoin",
    src: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032",
  },
  {
    name: "Ripple",
    src: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032",
  },
  {
    name: "Cardano",
    src: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=032",
  },
  {
    name: "Polkadot",
    src: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=032",
  },
];

const LandingPage = () => {
  const [activeHowItWorksStep, setActiveHowItWorksStep] = useState("create");
  const investBannerStyle = {
    "--invest-bg-image": `url(${investBackground})`,
  };

  const renderFeaturePanel = (type) => {
    const analyticsPanel = (
      <div className="panel-analytics">
        <div className="panel-balance__header">
          <div>
            <span>Bitcoin</span>
            <span className="panel-tag">USDT</span>
          </div>
          <span className="panel-change positive">+8.74%</span>
        </div>
        <p className="panel-amount">$98,418.05</p>
        <div className="panel-tabs">
          {["1W", "6M", "1Y", "YTD"].map((label) => (
            <span key={label} className={label === "6M" ? "active" : ""}>
              {label}
            </span>
          ))}
        </div>
        <div className="panel-chart">
          {[60, 45, 75, 50, 85, 40].map((value, index) => (
            <span key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
      </div>
    );

    switch (type) {
      case "balance":
        return (
          <div className="panel-balance">
            <div className="panel-balance__header">
              <span>Balance</span>
              <span className="panel-change">+4.6%</span>
            </div>
            <p className="panel-amount">
              $48,296.24 <span>USD</span>
            </p>
            <ul className="asset-list">
              <li>
                <span>Bitcoin</span>
                <span>$2,950.75</span>
              </li>
              <li>
                <span>Litecoin</span>
                <span>$1,984.02</span>
              </li>
              <li>
                <span>Ethereum</span>
                <span>$2,724.16</span>
              </li>
            </ul>
          </div>
        );
      case "transfer":
        return (
          <div className="panel-transfer">
            <div className="panel-field">
              <label>From</label>
              <div className="panel-select">
                <span>Ethereum</span>
              </div>
              <strong>24.32</strong>
            </div>
            <div className="panel-field">
              <label>To</label>
              <div className="panel-select">
                <span>Bitcoin</span>
              </div>
              <strong>0.594</strong>
            </div>
            <button className="pill-button pill-button--soft">Send</button>
          </div>
        );
      case "analytics":
      default:
        return analyticsPanel;
    }
  };

  const toolkitCards = [
    {
      id: "encryption",
      title: "Secure wallet encryption",
      description:
        "Advanced encryption safeguards your digital assets with hardware-backed protection.",
      icon: realtimeIcon,
      featured: true,
    },
    {
      id: "payments",
      title: "Easy payments",
      icon: lockIcon,
    },
    {
      id: "visualization",
      title: "Data visualization",
      icon: goldIcon,
    },
    {
      id: "realtime",
      title: "Real-time transaction engine",
      icon: stackIcon,
    },
  ];

  const toolkitCardMap = Object.fromEntries(
    toolkitCards.map((card) => [card.id, card]),
  );

  const ToolkitFeatureCard = ({ cardId }) => {
    const card = toolkitCardMap[cardId];
    if (!card) return null;
    const hasDescription = Boolean(card.description);

    return (
      <article
        className={`toolkit-card toolkit-card--${card.id}${hasDescription ? "" : " toolkit-card--no-description"}`}
      >
        <div className="toolkit-card__body">
          <h3>{card.title}</h3>
          {hasDescription ? <p>{card.description}</p> : null}
        </div>
        <div className="toolkit-card__visual">
          <img src={card.icon} alt={card.title} />
        </div>
      </article>
    );
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("landing-page");
    document.body.classList.add("landing-page");
    return () => {
      document.documentElement.classList.remove("landing-page");
      document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <div className="page-shell">
      <LandingNavbar navLinks={navLinks} variant="light" />
      <LandingHeader stats={stats} avatars={avatars} />
      <LandingMain
        activeHowItWorksStep={activeHowItWorksStep}
        appRatings={appRatings}
        cryptoAccessImage={cryptoAccessImage}
        featureRows={featureRows}
        howItWorksSteps={howItWorksSteps}
        investBannerStyle={investBannerStyle}
        investShape={investShape}
        orbitIcons={orbitIcons}
        renderFeaturePanel={renderFeaturePanel}
        setActiveHowItWorksStep={setActiveHowItWorksStep}
        ToolkitFeatureCard={ToolkitFeatureCard}
      />
      <div id="legal" className="scroll-mt-28">
        <LandingFooter />
      </div>
    </div>
  );
};
export default LandingPage;
