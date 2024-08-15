import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png"
const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your own authentication logic
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
      navigate("/JobList");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container w-25 card p-5">
      <div className="text-center mb-3 mt-3  ">
        <img src={logo} alt="logo" className="login-logo"></img>
      </div>
      <h2 className="mb-3 mt-3">Login</h2>
      <form onSubmit={handleLogin} className="mb-3 mt-3">
        <div className="form-group mb-2">
          <label mb-2className="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-danger">{error}</p>}
        <div className="col-sm-12 text-center">
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
