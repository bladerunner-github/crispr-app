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
      navigate("/home"); // Use navigate to redirect to the home page
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
          <div className="logout_page">
          <p className="confirmation">Confirm Logout ? {username}</p>
          <div className="logout-btn">
          <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <div class="login_page">
            <span class="fas fa-sign-in-alt" aria-hidden="true"></span>
            <strong className="welcome">Welcome!</strong>
            <span>Sign in to your account</span>

            <form action="#" method="post" class="login-form">
              <fieldset>
                <div class="form">
                  <div class="form-row">
                    <span class="fas fa-user" aria-hidden="true"></span>
                    <label class="form-label" for="input">UserName</label>
                    <input type="text"
                      placeholder="=>"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} class="form-text"></input>
                  </div>
                  <div class="form-row">
                    <span class="fas fa-eye" aria-hidden="true"></span>
                    <label class="form-label" for="input">Password</label>
                    <input type="password"
                      placeholder="=>"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} class="form-text"></input>
                  </div>
                  {/* <div class="form-row bottom">
                    <div class="form-check">
                      <input type="checkbox" id="remember" name="remember" value="remember"></input>
                      <label for="remember"> remember me</label>
                    </div>
                    <a href="#url" class="forgot">forgot password?</a>
                  </div> */}
                  <div class="form-row button-login">
                    <button class="button btn-login" onClick={handleLogin}>Login </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
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



