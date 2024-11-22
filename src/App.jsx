import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage";
import FacebookMessagePage from "./pages/FacebookMessagePage/FacebookMessagePage.jsx";
import FacebookPostPage from "./pages/FacebookPostPage/FacebookPostPage.jsx";
import WhatsAppPage from "./pages/WhatsappPage/WhatsappPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facebook-post" element={<FacebookPostPage />} />
        <Route path="/facebook-message" element={<FacebookMessagePage />} />
        <Route path="/whatsapp" element={<WhatsAppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
