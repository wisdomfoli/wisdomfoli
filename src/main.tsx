import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen";
import LanguageRouter from "./components/LanguageRouter";
import { ProgressProvider } from "./contexts/ProgressContext";
import "./global.css";
import './i18n';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // Appliquer l'image de fond au body
    // document.body.style.backgroundImage = `url(${backgroundImage})`;
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundPosition = 'center';
    // document.body.style.backgroundRepeat = 'no-repeat';
    // document.body.style.backgroundAttachment = 'fixed';
  }, []);

  return (
    <ProgressProvider>
      <LanguageRouter>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        {!showSplash && <Home />}
      </LanguageRouter>
    </ProgressProvider>
  );
}

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}