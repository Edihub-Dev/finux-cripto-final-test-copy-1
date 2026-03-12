import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const FloatingSocialButtons = () => {
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
