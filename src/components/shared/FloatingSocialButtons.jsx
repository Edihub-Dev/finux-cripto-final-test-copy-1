import { useEffect, useRef, useState } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const FloatingSocialButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = setTimeout(() => {
        setIsVisible(false);
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
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: isVisible ? "auto" : "none",
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
  );
};

export default FloatingSocialButtons;
