import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Get the navigation function

  const handleLogin = () => {
    // You can add your authentication logic here
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      navigate("/home"); // Use navigate to redirect to the home page
      props.onLogin(); // Call the onLogin function provided as a prop
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;



