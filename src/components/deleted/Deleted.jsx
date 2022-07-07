import React from "react";
import deleted from "./../../assets/images/eliminado.png";
import "./Deleted.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

/**
 * Componente que verá el jugador que intente oprimir el botón bingo sin
 * haber ganado realmente.
 * @returns
 */
function Deleted() {
  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="button mt-4">
            <Link to="/" className="btn-volver">
              Volver al login
            </Link>
          </div>
          <div className="col-md-12 mb-5">
            <img src={deleted} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text"> ELIMINADO </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Deleted;
