import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";
import loginImage from "../../assets/icons/loginpage.png";
import {useAuth} from '../../utils/AuthContext';

// Dummy data
/*const dummyUsers = [
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
];*/

const LoginPage = () => {
  const { currentUser, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      if (email.includes('admin')) {
        navigate('/admindash');
      } else if (email.includes('lec')) {
        navigate('/lecturerdash');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError("Invalid email or password");
      console.error("Login error:", err);
    }
  };

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
