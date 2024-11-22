import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import FacebookFriendRequestPage from "./pages/FacebookFriendRequestPage/FacebookFriendRequestPage.jsx";
import FacebookPostPage from "./pages/FacebookPostPage/FacebookPostPage.jsx";
import WhatsAppPage from "./pages/WhatsappPage/WhatsappPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<FacebookPostPage />} />
        <Route path="/facebook-friend-request" element={<FacebookFriendRequestPage />} />
        <Route path="/whatsapp" element={<WhatsAppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
