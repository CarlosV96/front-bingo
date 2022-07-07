import React, { useContext } from "react";
import { Context } from "../../context/context";
import "../error/Error.css";
import error from "../../assets/images/error.webp";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

/**
 * Componente que presentará el error sucedido
 * al momento de loguearse.
 * @returns
 */
const Error = () => {
  const { respuestaErr } = useContext(Context);
  const errorText = respuestaErr.response.data;

  return (
    <div className="error-page">
      <div className="err-img">
        <img src={error} alt="error" />
        <div className="error-msj"></div>
        <form className="form-err">
          <p>{errorText}</p>
        </form>
        <div className="button-err">
          <div className="login-class"></div>
          <button className="btn-login">
            <Link to="/">Volver al Login</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
