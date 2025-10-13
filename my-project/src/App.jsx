import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SplashScreen from "./components/SplashScreen";

const MainApp = () => {
  return (
    <>
      <Home />
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <MainApp />
  );
};

export default App;
