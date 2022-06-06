import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/services";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let gamer = 0;

  const body = {
    username: name,
    password: password,
  };

  const consume = async () => {
    await loginUser(body)
      .then((response) => {
        if (response.status === 200) {
            gamer++;
          if (gamer >= 2) {
            navigate({
                pathname: "/game",
              });
          }
        } else {
          navigate({
            pathname: "/error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginUser">
      <form>
        <h2> Login </h2>
        <div className="section">
          <div className="tittle">Username</div>
          <div className="field">
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="tittle">Password</div>
          <div className="field">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="section mt-3">
        <div className="button">
          <button className="btn btn-primary" onClick={() => consume()}>
            Login
          </button>
        </div>
        <div className="button mt-3 ">
          <Link to="/signup" className="btn btn-outline-secondary">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
