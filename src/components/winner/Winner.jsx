import React from "react";
import champion from "./../../assets/images/champion.png";
import "../winner/Winner.css";

function Winner() {
  


  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <img src={champion} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text"> THE CHAMPIOOOOOOONS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winner;
