import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Bell,
  BookOpen,
  HandCoins,
  HelpCircle,
  Info,
  Leaf,
  Library,
  ScrollText,
  Shield,
  Share2,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

import Dock from "./Dock.jsx";

export default function AppDock() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  const isLanding = location.pathname === "/";
  const path = location.pathname;

  const getTextDockWidth = (text) => {
    const estimated = text.length * 10 + 56;
    return Math.max(150, Math.min(220, estimated));
  };

  const hoverWidthDelta = 10;

  useEffect(() => {
    const mq = window.matchMedia?.("(max-width: 520px)");
    if (!mq) return;

    const onChange = () => setIsMobile(Boolean(mq.matches));
    onChange();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (isLanding) {
      document.body.classList.remove("has-dock");
      return;
    }

    document.body.classList.add("has-dock");
    return () => {
      document.body.classList.remove("has-dock");
    };
  }, [isLanding]);

  const items = useMemo(() => {
    const ecosystemNavLinks = [
      { label: "Ecosystem", target: "top" },
      { label: "Network", target: "network" },
      { label: "Security", target: "security" },
      { label: "Economics", target: "economics" },
    ];

    const resourcesNavLinks = [
      { label: "Documentation", target: "documentation" },
      { label: "Security", target: "security" },
      { label: "Updates", target: "updates" },
      { label: "FAQ", target: "faq" },
    ];

    const earnNavLinks = [
      { label: "Earn", target: "top", Icon: HandCoins },
      { label: "Community", target: "community", Icon: Users },
      { label: "Audits", target: "audits" },
    ];

    const communityNavLinks = [
      { label: "Referral", target: "referral" },
      { label: "Community", target: "top" },
      { label: "Guidelines", target: "guidelines" },
      { label: "About", target: "about" },
    ];

    const finuxWalletLinks = [
      { label: "Home", target: "home" },
      { label: "Ecosystem", target: "/ecosystem" },
      { label: "Community", target: "/community" },
      { label: "Earn", target: "/earn" },
    ];

    const routeNavLinks = {
      "/ecosystem": ecosystemNavLinks,
      "/resources": resourcesNavLinks,
      "/earn": earnNavLinks,
      "/community": communityNavLinks,
      "/finux-wallet": finuxWalletLinks,
    };

    const navLinks = routeNavLinks[path];

    const resolveIcon = (link) => {
      if (link?.Icon) {
        const IconComp = link.Icon;
        return <IconComp size={18} />;
      }

      const key = String(link?.label ?? "").toLowerCase();
      if (key.includes("wallet")) return <Wallet size={18} />;
      if (key.includes("resource")) return <Library size={18} />;
      if (key.includes("ecosystem")) return <Leaf size={18} />;
      if (key.includes("network")) return <Share2 size={18} />;
      if (key.includes("security")) return <Shield size={18} />;
      if (key.includes("econom")) return <BarChart3 size={18} />;
      if (key.includes("documentation")) return <BookOpen size={18} />;
      if (key.includes("updates")) return <Bell size={18} />;
      if (key === "faq") return <HelpCircle size={18} />;
      if (key.includes("referral")) return <UserPlus size={18} />;
      if (key.includes("guideline")) return <ScrollText size={18} />;
      if (key === "about") return <Info size={18} />;
      if (key === "earn") return <HandCoins size={18} />;
      if (key === "community") return <Users size={18} />;
      if (key === "home") return <Leaf size={18} />;
      return <Leaf size={18} />;
    };

    const handleTarget = (target) => {
      if (typeof target === "string" && target.startsWith("/")) {
        navigate(target);
        return;
      }

      if (target === "home") {
        navigate("/");
        return;
      }

      if (target === "download-app") {
        const el = document.getElementById("download-app");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      scrollToId(target);
    };

    if (!navLinks) {
      return [
        {
          icon: <Wallet size={18} />,
          label: "Wallet",
          onClick: () => navigate("/finux-wallet"),
        },
        {
          icon: <Library size={18} />,
          label: "Resources",
          onClick: () => navigate("/resources"),
        },
        {
          icon: <Leaf size={18} />,
          label: "Ecosystem",
          onClick: () => navigate("/ecosystem"),
        },
        {
          icon: <Users size={18} />,
          label: "Community",
          onClick: () => navigate("/community"),
        },
      ];
    }

    return navLinks.slice(0, 4).map((link) => {
      const label = link.label;
      const target = link.target;

      if (isMobile) {
        return {
          icon: resolveIcon(link),
          label,
          className: "dock-item--ecosystem",
          onClick: () => handleTarget(target),
        };
      }

      return {
        icon: <span className="dock-text">{label}</span>,
        label,
        className: "dock-item--text",
        baseWidth: getTextDockWidth(label),
        hoverWidth: getTextDockWidth(label) + hoverWidthDelta,
        onClick: () => handleTarget(target),
      };
    });
  }, [isMobile, navigate, path]);

  const isSectionRoute =
    path === "/ecosystem" ||
    path === "/resources" ||
    path === "/earn" ||
    path === "/community" ||
    path === "/finux-wallet";

  if (isLanding) return null;

  return (
    <Dock
      items={items}
      className={isSectionRoute ? "dock-panel--ecosystem" : ""}
      panelHeight={isSectionRoute ? (isMobile ? 68 : 78) : 68}
      baseItemSize={isSectionRoute ? (isMobile ? 50 : 54) : 50}
      baseItemWidth={isSectionRoute && !isMobile ? 170 : undefined}
      autoHide={isSectionRoute}
      autoHideDelayMs={1600}
      routeKey={path}
    />
  );
}
