import "./index.css";
import "./App.css";

import FinuxWalletPage from "./pages/finux-wallet-page.jsx";
import { CssVarsProvider } from "@mui/joy/styles";
import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage.jsx";
import Resources from "./pages/Resources.jsx";
import Ecosystem from "./pages/Ecosystem.jsx";
import Earn from "./pages/Earn.jsx";
import Community from "./pages/Community.jsx";
import AppDock from "./components/Dock/AppDock.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/finux-wallet" element={<FinuxWalletPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        <AppDock />
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
