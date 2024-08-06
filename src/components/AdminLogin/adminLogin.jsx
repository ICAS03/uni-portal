import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";
import loginImage from "../../assets/icons/loginpage.png";

// Dummy data
const dummyUsers = [
  {
    email: "admin@gmail.com",
    password: "123",
    role: "admin",
  },
  {
    email: "lecturer@gmail.com",
    password: "123",
    role: "lecturer",
  },
  {
    email: "student@gmail.com",
    password: "123",
    role: "student",
  },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setRole(user.role);
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      if (role === "admin") {
        navigate("/adminDash");
      } else if (role === "lecturer") {
        navigate("#");
      } else if (role === "student") {
        navigate("/mycourses");
      }
      setLoggedIn(false);
    }
  }, [loggedIn, navigate, role]);

  return (
    <div className="container">
      <div className="login-box">
        <div className="image-section">
          <img className="image" src={loginImage} alt="Illustration" />
        </div>
        <div className="form-section">
          <h2 className="admin-title">Welcome Back</h2>
          <form className="form" onSubmit={handleLogin}>
            <label className="label" htmlFor="email">
              Username
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p className="signup-link">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
