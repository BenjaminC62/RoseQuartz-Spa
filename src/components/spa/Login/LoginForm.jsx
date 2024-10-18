import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../../styles/LoginForm.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>

        <Link to="login-form-sign-in"><span className="login-sign-in-text">Not a member sign in here !</span></Link>
      </form>
    </div>
  );
}

export default LoginForm;
