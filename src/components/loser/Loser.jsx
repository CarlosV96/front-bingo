import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import loser from "./../../assets/images/game-over-png.png";
import "../loser/Loser.css";
import { deleteUsersGame, deleteWinner } from "../../api/services";
import Footer from "../footer/Footer";

/**
 * Componente que se presenta para los jugadores que perdieron.
 * @returns
 */
function Loser() {
  const { player } = useContext(Context);
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
            <img src={loser} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text">PERDISTE, GANÓ EL JUGADOR {player}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Loser;
