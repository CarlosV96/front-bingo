import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registerUser">
      <form>
        <h2> Registro </h2>
        <div className="section">
          <div className="tittle">Username</div>
          <div className="field">
            <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="section">
          <div className="tittle">Password</div>
          <div className="field">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
      </form>
      <div className="section">
        <div className="button">
          <input type="submit" value="Registrar usuario" />
        </div>
        <div className="button">
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
