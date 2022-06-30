import React from "react";
import "../register/Register.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/services";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    username: name,
    password: password,
  };

  const register = async () => {
    await registerUser(body)
      .then((response) => {
        //Cuando se registra exitosamente como le puedo informar al usuario que se
        //registro de manera exitosa, aquí solamente me reenvía al login, pero no me muetra
        //que fue exitosa.
        if (response.status === 200) {
          navigate({
            pathname: "/",
          });
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
    <div className="registerUser">
      <div className="container">
        <div className="formLogin">
          <form className="form-log">
            <h2 className="login"> SIGN UP </h2>
            <div className="sectionName">
              <span className="tittle">Username</span>

              <input
                type="text"
                id="username"
                placeholder="Write your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sectionPassword">
              <div className="tittle">Password</div>

              <input
                type="password"
                id="password"
                placeholder="Write your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="section-buttons mt-5">
            <div className="button-log">
              <div className="login-class"></div>
              <button
                className="btn-login"
                type="submit"
                onClick={() => register()}
              >
                {" "}
                Sign up
              </button>
            </div>
            <div className="button mt-3">
              <Link to="/" className="btn btn-outline-secondary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
