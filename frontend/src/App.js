import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/home";
import HomeUser from "./pages/homeuser";
import Menu from "./pages/Menu";
import About from "./pages/Article";
import Contact from "./pages/Contact";
import NavbarLoggedIn from "./components/navbarmoderator";
import NavbarLoggedOut from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login"; // Import your LoginForm component
import EventForm from "./EventForm";
import EventPage from "./EventPage";
import Approval from "./Approval";

function App() {
  // State to track the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        {/* Conditionally render the Navbar based on authentication */}
        {isLoggedIn ? (
          // Render Navbar for logged-in users
          <NavbarLoggedIn onLogout={handleLogout} />
        ) : (
          // Render Navbar for logged-out users
          <NavbarLoggedOut />
        )}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/home" element={<HomeUser />} /> */}
          <Route path="/menu" element={<EventPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Form" element={<EventForm/>} />
          <Route path="/Approval" element={<Approval/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<LoginForm onLogin={handleLogin} />} // Pass handleLogin as a prop
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;


