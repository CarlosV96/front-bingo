import React from "react";
import deleted from "./../../assets/images/eliminado.png";
import "./Deleted.css";

function Deleted() {
  


  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <img src={deleted} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bingo-table">
              <p className="text"> ELIMINADO POR PIROBO </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deleted;
