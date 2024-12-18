import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage";
import FacebookPostPage from "./pages/FacebookPostPage/FacebookPostPage.jsx";
import FacebookFriendRequestPage from "./pages/FacebookFriendRequestPage/FacebookFriendRequestPage.jsx";
import WhatsAppPage from "./pages/WhatsappPage/WhatsappPage.jsx";
import SpeechToTextPage from "./pages/SpeechToTextPage/SpeechToTextPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facebook-post" element={<FacebookPostPage />} />
        <Route path="/facebook-friend-request" element={<FacebookFriendRequestPage />} />
        <Route path="/whatsapp" element={<WhatsAppPage />} />
        <Route path="/speech" element={<SpeechToTextPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
