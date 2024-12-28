import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generator/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scanner/QrCodeScanner";
import { History } from "./components/History/History";
import './Layout.css';

export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Navigation />

        <Routes>
          <Route path="/" element={<QrCodeGenerator />} />
          <Route path="/scan" element={<QrCodeScanner />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}