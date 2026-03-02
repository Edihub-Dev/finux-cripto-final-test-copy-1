import LandingHeaderContent from "./LandingHeaderContent.jsx";

const LandingHeader = ({ stats, avatars }) => {
  return (
    <header className="hero-surface" id="hero" data-animate>
      <LandingHeaderContent stats={stats} avatars={avatars} />
    </header>
  );
};

export default LandingHeader;
