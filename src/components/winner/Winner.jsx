import React from "react";
import champion from "./../../assets/images/Winner.png";
import "../winner/Winner.css";
import { useNavigate } from "react-router-dom";
import { deleteUsersGame, deleteWinner } from "../../api/services";
import Footer from "../footer/Footer";

/**
 * Componente que verá el ganador del juego.
 * @returns
 */
function Winner() {
  const navigate = useNavigate();

  const comeback = () => {
    deleteUsersGame();
    deleteWinner();
    navigate({
      pathname: "/",
    });
  };

  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="button mt-4">
            <button className="btn-volver" onClick={comeback}>
              Volver al login
            </button>
          </div>
          <div className="col-md-12 mb-5">
            <img src={champion} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text"> ¡¡GANASTE!!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Winner;
