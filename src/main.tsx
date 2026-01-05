import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen";
import "./global.css";
import './i18n.js';
import backgroundImage from "./assets/images/5652242.jpg";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // Appliquer l'image de fond au body
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <Home />}
    </>
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