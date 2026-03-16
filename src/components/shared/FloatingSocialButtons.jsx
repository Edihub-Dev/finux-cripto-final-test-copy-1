import { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaShareAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const XIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FloatingSocialButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const scrollTimerRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = setTimeout(() => {
        if (!isOpen) {
          setIsVisible(false);
        }
      }, 800);
    };

    const handleMouseMove = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const update = () => setIsCompact(mediaQuery.matches);
    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!rootRef.current) return;
      if (rootRef.current.contains(event.target)) return;
      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const actions = [
    {
      key: "whatsapp",
      href: "https://whatsapp.com/channel/0029Vb7UDolKWEKzlCe5dF30",
      label: "Chat on WhatsApp",
      background: "#22c55e",
      Icon: FaWhatsapp,
      iconSize: 22,
    },
    {
      key: "telegram",
      href: "https://t.me/Finuxofficiallive",
      label: "Message on Telegram",
      background: "#0ea5e9",
      Icon: FaTelegramPlane,
      iconSize: 21,
    },
    {
      key: "instagram",
      href: "https://www.instagram.com/finuxtech",
      label: "Visit Instagram",
      background: "#E1306C",
      Icon: FaInstagram,
      iconSize: 21,
    },
    {
      key: "twitter",
      href: "https://x.com/finuxtech",
      label: "Visit X",
      background: "#111827",
      Icon: XIcon,
      iconSize: 20,
    },
  ];

  const baseButtonStyle = {
    width: 48,
    height: 48,
    borderRadius: "9999px",
    color: "#ffffff",
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 18px 32px rgba(0,0,0,0.35)",
  };

  const arcRadius = isCompact ? 88 : 112;
  const arcStartAngle = isCompact ? 82 : 96;
  const arcEndAngle = isCompact ? 188 : 178;

  return (
    <div
      ref={rootRef}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      aria-label="Quick contact"
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 48,
            height: 48,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          aria-hidden={!isOpen}
        >
          {actions.map(({ key, href, label, background, Icon, iconSize }, i) => {
            const count = actions.length;
            const t = count <= 1 ? 0 : i / (count - 1);
            const angle = arcStartAngle + (arcEndAngle - arcStartAngle) * t;
            const radians = (angle * Math.PI) / 180;
            const x = Math.cos(radians) * arcRadius;
            const y = -Math.sin(radians) * arcRadius;

            return (
              <a
                key={key}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  ...baseButtonStyle,
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  background,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? `translate(${x}px, ${y}px)`
                    : "translate(0px, 0px) scale(0.85)",
                  transition:
                    "opacity 200ms ease, transform 260ms ease",
                  transitionDelay: isOpen ? `${i * 55}ms` : "0ms",
                }}
              >
                <Icon size={iconSize} />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close social links" : "Open social links"}
          aria-expanded={isOpen}
          onClick={() => {
            setIsVisible(true);
            setIsOpen((v) => !v);
          }}
          style={{
            ...baseButtonStyle,
            background: "linear-gradient(180deg, #FF9A1F, #E67A00)",
            transform: isOpen ? "scale(0.98)" : "scale(1)",
            transition: "transform 160ms ease",
          }}
        >
          <FaShareAlt size={18} />
        </button>
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
