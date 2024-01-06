import "./App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/home";
import HomeUser from "./pages/homeuser";
import Menu from "./pages/Menu";
import About from "./pages/Article";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import NavbarLoggedIn from "./components/navbarmoderator";
import NavbarLoggedOut from "./components/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/login"; // Import your LoginForm component
import EventForm from "./EventForm";
import EventPage from "./EventPage";
import Approval from "./Approval";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import ImageSlider from './components/ImageSlider';
import EventListTable from "./pages/EventListTable";
import EventCardList from "./components/EventCardList";
import EventCard from "./components/EventCardIcon";
import SliderData from './components/SliderData';
import EventCardIcon from "./components/EventCardIcon";
import Newsletter from "./components/newsletter";
// import { useLocation } from "react-router-dom";

function App() {
  // State to track the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const savedAuthStatus = localStorage.getItem("isAuthenticated");
    if (savedAuthStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isAuthenticated");
  };
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const location = useLocation(); // Get the current location
  return (
    <div className="App">

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
        <Route path="/home" element={isLoggedIn ? <HomeUser /> : <Home />} />
        <Route path="/menu" element={<EventPage />} />
        <Route path="/Form" element={<EventForm />} />
        <Route path="/Approval" element={<Approval />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event-table" element={<EventListTable />} />
        <Route path="/event-cards" element={<EventCardList />} />
        <Route path="/newsletter" element = {<Newsletter/>}/>
        <Route path="/OurTeam" element={<OurTeam />} />

        <Route
          path="/login"
          element={<LoginForm
            onLogin={handleLogin}
            onLogout={handleLogout}
            isAuthenticated={isLoggedIn}
          />} // Pass handleLogin as a prop
        />
      </Routes>


      {/* <ImageSlider slides={SliderData} />
      <Banner />
      
      <div className="all-blogs">
        <Blog />
        <Blog />
        <Blog />
      </div> */}
      {location.pathname === "/" ? (
        <>

          <ImageSlider slides={SliderData} />
          <Banner />
          <div className="all-blogs">
            <Blog />
            <Blog />
            <Blog />
          </div>
        </>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;


