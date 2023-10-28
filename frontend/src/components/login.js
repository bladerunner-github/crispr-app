import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Get the navigation function

  useEffect(() => {
    const savedAuthStatus = localStorage.getItem("isAuthenticated");
    if (savedAuthStatus === "true") {
      // setIsAuthenticated(true);
      props.onLogin();
    }
  }, [props]);

  const handleLogin = () => {
    // You can add your authentication logic here


    if (username === "admin" && password === "1234") {
      // alert("Login successful!");
      // setIsAuthenticated(true);
      props.onLogin();
      navigate("/"); // Use navigate to redirect to the home page
      // Call the onLogin function provided as a prop
      localStorage.setItem("isAuthenticated", "true");

    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 10000);
    }
  };
  const handleLogout = () => {
    // setIsAuthenticated(false);
    props.onLogout();
    // Remove the authentication status from localStorage
    // props.onLogin();
    localStorage.removeItem("isAuthenticated");
  };
  return (
    <div className="cover">

      {props.isAuthenticated ? (
        <div className="logout-container">
          <p>Do you want to Logout, {username}</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <form className="login-form">
          <h1>Login</h1>

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
      )}

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

// import React, { useState, useEffect } from "react";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check for saved authentication status in localStorage
//   useEffect(() => {
//     const savedAuthStatus = localStorage.getItem("isAuthenticated");
//     if (savedAuthStatus === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     if (username === "admin" && password === "1234") {
//       // Authentication successful
//       setIsAuthenticated(true);
//       // Save the authentication status in localStorage
//       localStorage.setItem("isAuthenticated", "true");
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     // Remove the authentication status from localStorage
//     localStorage.removeItem("isAuthenticated");
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <div>
//           <p>Welcome, {username}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Login</h2>
//           <form>
//             <div>
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="button" onClick={handleLogin}>
//               Login
//             </button>
//           </form>
//           {error && <p>{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginForm;



