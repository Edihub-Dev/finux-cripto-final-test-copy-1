import { useEffect, useState } from "react";
import cardAccent from "../../assets/B0uUXSq0m868oLBfPN2rG3lJCho copy 1.svg";
import transferIcon from "../../assets/kK10BYW7A0IyokkZjS6BKJ8VE copy 1.svg";
import analyticsIcon from "../../assets/z95dq6ks9unrjAjIFNFdd0B3BOE copy 1.svg";
import lockIcon from "../../assets/0dMWvmHmtJtNLyahKB5B0HErpIE copy 1.svg";
import goldIcon from "../../assets/3lQ7907y7C6l2ACYCAQKDOQVYg copy 1.svg";
import stackIcon from "../../assets/kFW9oB0lpLbUlaE5PRMjFjfn0Qc copy 1.svg";
import realtimeIcon from "../../assets/uDGuWbZP77iu7pgjp04gtfeUY copy 1.svg";
import bitcoinImage from "../../assets/bitcoin copy 1.svg";
import importWalletImage from "../../assets/Import Wallet.png";
import step1Image from "../../assets/step1.png";
import step2Image from "../../assets/step2.png";
import step3Image from "../../assets/step3.png";
import phraseGenerationImage from "../../assets/Phrase Generation.svg";
import dappFinuxHomeImage from "../../assets/DApp_ Finux- Home.svg";
import cryptoAccessImage from "../../assets/Screenshot 2026-01-27 at 3.41.16\u202FPM copy 1.svg";
import investBackground from "../../assets/124 2.svg";
import investShape from "../../assets/1.svg";
import homePanelImage from "../../assets/Home.svg";
import explorePanelImage from "../../assets/Explore.svg";
import analyticsPanelImage from "../../assets/Explore_ detail Green.svg";
import walletPanelImage from "../../assets/Explore_ detail Green-M-O57FaH.png";
import transferCombinedImage from "../../assets/Explore-CvK2qfYC.png";
import analyticsCombinedImage from "../../assets/Home-BifaxK7T.png";
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
    title: "Non-Custodial Architecture",
    description:
      "FINUX wallets are non-custodial, meaning users maintain full control of their funds and private keys.",
    panel: "wallet-balance",
    icon: cardAccent,
  },
  {
    id: "transfer",
    title: "Instant Swapping",
    description:
      "Move funds between accounts in seconds. Enjoy fast, reliable transactions so you never miss a great opportunity.",
    panel: "transfer-combined",
    icon: transferIcon,
  },
  {
    id: "analytics",
    title: "Visualize your performance",
    description:
      "Track your portfolio with simple charts and analytics. Gain insights to make smarter, well-informed investment decisions.",
    panel: "analytics-combined",
    icon: analyticsIcon,
  },
];

const howItWorksSteps = [
  {
    id: "create",
    label: "Create/import wallet",
    title: "Create account",
    description:
      "Begin your journey into cryptocurrency by creating a secure account with us. The process is quick, simple, and straightforward.",
    image: step1Image,
    imageAlt: "Finux account creation screen on mobile",
  },
  {
    id: "transferFunds",
    label: "Save recovery key",
    title: "Transfer your funds",
    description:
      "Connect your preferred funding methods and move money between wallets in seconds. Track every transfer with real-time status updates.",
    image: step2Image,
    imageAlt: "Finux transfer funds interface on mobile",
  },
  {
    id: "earn",
    label: "Register Finux Dex",
    title: "Earn passive interest",
    description:
      "Activate staking and yield strategies with a tap. Watch your assets grow safely while keeping full control of your portfolio.",
    image: step3Image,
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
      <div
        className="panel-analytics panel-analytics--image"
        aria-label="Analytics illustration"
      >
        <img
          src={analyticsPanelImage}
          alt="Analytics"
          className="panel-analytics__image"
          loading="lazy"
          decoding="async"
        />
      </div>
    );

    switch (type) {
      case "wallet-balance":
        return (
          <div
            className="panel-balance panel-balance--image"
            aria-label="Wallet illustration"
          >
            <img
              src={walletPanelImage}
              alt="Wallet"
              className="panel-balance__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      case "balance":
        return (
          <div
            className="panel-balance panel-balance--image"
            aria-label="Home illustration"
          >
            <img
              src={homePanelImage}
              alt="Home"
              className="panel-balance__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      case "transfer-combined":
        return (
          <div
            className="panel-transfer panel-transfer--image"
            aria-label="Explore illustration"
          >
            <img
              src={transferCombinedImage}
              alt="Explore"
              className="panel-transfer__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      case "transfer":
        return (
          <div
            className="panel-transfer panel-transfer--image"
            aria-label="Explore illustration"
          >
            <img
              src={explorePanelImage}
              alt="Explore"
              className="panel-transfer__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      case "analytics-combined":
        return (
          <div
            className="panel-analytics panel-analytics--image"
            aria-label="Analytics illustration"
          >
            <img
              src={analyticsCombinedImage}
              alt="Analytics"
              className="panel-analytics__image"
              loading="lazy"
              decoding="async"
            />
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
      title: "Triple Income Model",
      icon: lockIcon,
    },
    {
      id: "visualization",
      title: "Community Powered Growth",
      icon: goldIcon,
    },
    {
      id: "realtime",
      title: "Automated Token Minting",
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
