import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import AddContact from "./pages/AddContact";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import WrongPage from "./pages/WrongPage";
function App() {
  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:userId" element={<UserDetails />} />
        <Route path="/contact/add-contact" element={<AddContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </div>
  );
}

export default App;
