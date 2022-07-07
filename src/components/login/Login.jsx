import "../login/Login.css";
import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUser,
  insertPlayersLobby,
  insertPlayersGame,
  getUsersLobby,
} from "../../api/services";
import Footer from "../footer/Footer";

/**
 * Componente de inicio donde cada jugador se registrará
 * o se logueará.
 * @returns
 */
const Login = () => {
  const { respuestaErr, setRespuestaErr, setFecha } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    username: name,
    password: password,
  };

  const insertPlayerLobby = {
    jugadorLobby: name,
  };

  const insertPlayerGame = {
    jugadorGame: name,
  };

  const login = async () => {
    await getUsersLobby()
      .then((response) => {
        if (response.data.data.length === 0) {
          setFecha(new Date().getTime());
        } else {
          setFecha(response.data.data[0].createdAt);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    await loginUser(body)
      .then((response) => {
        setRespuestaErr(response);
        if (response.status === 200) {
          insertPlayersLobby(insertPlayerLobby);
          insertPlayersGame(insertPlayerGame);
          navigate({
            pathname: "/lobby",
          });
        } else {
          setRespuestaErr(response);
          console.log("ERRORRRRR", respuestaErr);
          navigate({
            pathname: "/error",
          });
        }
      })
      .catch((error) => {
        setRespuestaErr(error);
        console.log(error);
      });
  };

  return (
    <div className="loginUser">
      <div className="container-login">
        <div className="formLogin">
          <form className="form-log">
            <h2 className="login"> LOGIN </h2>
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
              <span className="tittle">Password</span>
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
              <button className="btn-login" onClick={login}>
                Log in
              </button>
            </div>
            <div className="button mt-3 ">
              <Link to="/signup" className="btn btn-outline-secondary">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
