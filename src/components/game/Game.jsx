import React, { useState, useEffect } from "react";
import bingo from "./../../assets/images/bingo.png";
import "./Game.css";
import { getUsersGame } from "../../api/services";
import { newCard, generateBall } from './logicCard'

function Game() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    callGetUsers();
    newCard();
  }, []);

  const generateBallGame = () => {
    generateBall();
  };

  const getValueId = () => {
    const valueInTable = document.getElementById("square0").innerText;
    console.log("valueInTable", valueInTable);
  };

  const callGetUsers = async () => {
    await getUsersGame()
      .then((response) => {
        console.log("SHASHAHAGAYYEUEIW",response.data.data)
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="game-bingo-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <img src={bingo} className="img-bingo mt-5" alt="Bingo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bingo-table">
              <table id="bingo-table-game">
                <thead>
                  <tr>
                    <th className="bingoHeader">B</th>
                    <th className="bingoHeader">I</th>
                    <th className="bingoHeader">N</th>
                    <th className="bingoHeader">G</th>
                    <th className="bingoHeader">O</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td onClick={() => getValueId()} id="square0">
                      {" "}
                      &nbsp;
                    </td>
                    <td id="square5"> &nbsp;</td>
                    <td id="square10"> &nbsp;</td>
                    <td id="square14"> &nbsp;</td>
                    <td id="square19"> &nbsp;</td>
                  </tr>
                  <tr>
                    <td id="square1"> &nbsp;</td>
                    <td id="square6"> &nbsp;</td>
                    <td id="square11"> &nbsp;</td>
                    <td id="square15"> &nbsp;</td>
                    <td id="square20"> &nbsp;</td>
                  </tr>
                  <tr>
                    <td id="square2"> &nbsp;</td>
                    <td id="square7"> &nbsp;</td>
                    <td id="rectangleFree"> FREE</td>
                    <td id="square16"> &nbsp;</td>
                    <td id="square21"> &nbsp;</td>
                  </tr>
                  <tr>
                    <td id="square3"> &nbsp;</td>
                    <td id="square8"> &nbsp;</td>
                    <td id="square12"> &nbsp;</td>
                    <td id="square17"> &nbsp;</td>
                    <td id="square22"> &nbsp;</td>
                  </tr>
                  <tr>
                    <td id="square4"> &nbsp;</td>
                    <td id="square9"> &nbsp;</td>
                    <td id="square13"> &nbsp;</td>
                    <td id="square18"> &nbsp;</td>
                    <td id="square23"> &nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="general-table-bingo">
              Aquí va la tabla con el resultado mostrándose
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 button-bingo-finish">
            <p className="note-players">PRESIONE AL GANAR</p>
            <button className="button-bingo-winner" onClick={generateBallGame}>
              Bingo
            </button>
          </div>
          <div className="col-md-4 show-ball-bingo">
            <p className="note-players">BALOTA EN JUEGO</p>
            <div className="show-ball">10</div>
          </div>
          <div className="col-md-4 list-players-bingo">
            <p className="note-players">LISTA DE JUGADORES EN CURSO</p>
            <ol className="gradient-list">
              {users.map((user, index) => (
                <li key={index}>{user.jugadorGame}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
