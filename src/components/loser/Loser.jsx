import React from "react";
import loser from "./../../assets/images/game-over-png.png";
import "../loser/Loser.css";

function Winner() {
  
  

  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <img src={loser} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text">PERDISTE, GANÓ EL JUGADOR TAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winner;
