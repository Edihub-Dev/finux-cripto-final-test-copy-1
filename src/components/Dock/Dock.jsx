"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  onClick,
  baseItemSize,
  baseItemWidth,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{ width: baseItemWidth, height: baseItemSize }}
      onPointerDown={(e) => {
        if (e.pointerType === "touch") {
          setIsHovered(true);
        }
      }}
      onPointerUp={(e) => {
        if (e.pointerType === "touch") {
          setIsHovered(false);
        }
      }}
      onPointerCancel={(e) => {
        if (e.pointerType === "touch") {
          setIsHovered(false);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        onClick?.(e);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(e);
        }
      }}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { isHovered }) : child,
      )}
    </div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;

  if (!isHovered) return null;

  return (
    <div className={`dock-label ${className}`} role="tooltip">
      {children}
    </div>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  panelHeight = 68,
  baseItemSize = 50,
  baseItemWidth,
  autoHide = false,
  autoHideDelayMs = 1600,
  routeKey,
}) {
  const resolvedBaseItemWidth = baseItemWidth ?? baseItemSize;
  const height = useMemo(() => panelHeight, [panelHeight]);
  const resolvedPanelHeight = typeof height === "string" ? undefined : height;

  const [isVisible, setIsVisible] = useState(!autoHide);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const hideTimerRef = useRef(null);
  const dockOuterRef = useRef(null);
  const isVisibleRef = useRef(isVisible);
  const isFooterVisibleRef = useRef(isFooterVisible);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    isFooterVisibleRef.current = isFooterVisible;
  }, [isFooterVisible]);

  // Footer detection effect: hide dock when it touches/overlaps the footer
  useEffect(() => {
    let rafId = null;
    let postRenderTimer = null;

    const resolveFooterEl = () => {
      const siteFooter = document.querySelector(".site-footer");
      if (siteFooter) return siteFooter;

      const footers = Array.from(document.querySelectorAll("footer"));
      return footers.length ? footers[footers.length - 1] : null;
    };

    const checkDockOverlapsFooter = () => {
      const footer = resolveFooterEl();
      const dockEl = dockOuterRef.current;

      if (!footer || !dockEl) {
        setIsFooterVisible(false);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const dockRect = dockEl.getBoundingClientRect();

      // When dock bottom reaches footer top (with small buffer), hide dock.
      const bufferPx = 8;
      const overlaps = dockRect.bottom >= footerRect.top - bufferPx;

      // Only consider footer if it's actually near/in viewport.
      const footerInViewport =
        footerRect.top < window.innerHeight && footerRect.bottom > 0;

      const next = Boolean(overlaps && footerInViewport);
      if (next !== isFooterVisibleRef.current) {
        setIsFooterVisible(next);
      }
    };

    const scheduleCheck = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        checkDockOverlapsFooter();
      });
    };

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    document.addEventListener("scroll", scheduleCheck, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", scheduleCheck, { passive: true });
    scheduleCheck();

    postRenderTimer = window.setTimeout(() => {
      scheduleCheck();
    }, 0);

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      document.removeEventListener("scroll", scheduleCheck, true);
      window.removeEventListener("resize", scheduleCheck);
      if (rafId) window.cancelAnimationFrame(rafId);
      if (postRenderTimer) window.clearTimeout(postRenderTimer);
    };
  }, [routeKey]);

  useEffect(() => {
    if (isFooterVisible) {
      setIsVisible(false);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
      return;
    }

    if (!autoHide) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 8;

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }

      if (!scrolled) {
        setIsVisible(true);
        return;
      }

      if (!isVisibleRef.current) {
        setIsVisible(true);
      }

      hideTimerRef.current = window.setTimeout(() => {
        if (window.scrollY > 8) {
          setIsVisible(false);
        }
      }, autoHideDelayMs);
    };

    const handleMouseMove = () => {
      if (window.scrollY <= 8) return;
      setIsVisible(true);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [autoHide, autoHideDelayMs, isFooterVisible]);

  return (
    <div
      ref={dockOuterRef}
      className={`dock-outer ${!isVisible ? "dock-outer--hidden" : ""}`}
      style={{ height: resolvedPanelHeight }}
    >
      <div
        className={`dock-panel ${className}`}
        style={{ height: resolvedPanelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          const resolvedItemBaseWidth = item.baseWidth ?? resolvedBaseItemWidth;
          const isTextItem = String(item.className ?? "").includes(
            "dock-item--text",
          );
          const isEcosystemIconItem = String(item.className ?? "").includes(
            "dock-item--ecosystem",
          );
          const shouldShowLabel = !isTextItem && !isEcosystemIconItem;

          return (
            <DockItem
              key={index}
              onClick={item.onClick}
              className={item.className}
              baseItemSize={baseItemSize}
              baseItemWidth={resolvedItemBaseWidth}
            >
              <DockIcon>{item.icon}</DockIcon>
              {shouldShowLabel ? <DockLabel>{item.label}</DockLabel> : null}
            </DockItem>
          );
        })}
      </div>
    </div>
  );
}
