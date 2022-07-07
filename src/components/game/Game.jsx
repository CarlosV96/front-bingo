import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/context";
import bingo from "./../../assets/images/bingo.png";
import "./Game.css";
import { getUsersGame, registerWinner, getWinner } from "../../api/services";
import { newCard } from "./logicCard";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

/**
 * Componente donde se desarrolla el juego.
 * @returns
 */
function Game() {
  const { setPlayer } = useContext(Context);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [ball, setBall] = useState();
  const [selected] = useState([]);
  const [usedBallNums] = useState([]);
  const [thereIsWinner, setThereIsWinner] = useState([]);
  const finalBall = 76;

  useEffect(() => {
    callGetUsers();
    newCard();
  }, []);

  const callGetUsers = async () => {
    await getUsersGame()
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let id = setInterval(() => {
      generateNumber(finalBall);
      winner();
      if (thereIsWinner.length > 0) {
        navigate({
          pathname: "/loser",
        });
      }
    }, 4000);
    return () => clearInterval(id);
  }, [thereIsWinner]);

  const winner = async () => {
    await getWinner()
      .then((response) => {
        setThereIsWinner(response.data.data);
        setPlayer(response.data.data[0].winner);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateNumber = (maxNumber) => {
    //Generar numero aleatorio
    let random = (Math.random() * parseInt(maxNumber + 1)).toFixed();
    random = Number(random);
    setBall(random);
    if (!usedBallNums.includes(random)) {
      usedBallNums.push(random);
      return random;
    } else {
      if (usedBallNums.length <= maxNumber + 1) {
        return generateNumber(maxNumber);
      } else {
        console.log("Se acabaron los números por mostrar");
        return false;
      }
    }
  };

  const getValueId = (event) => {
    const valor = Number(event.target.innerText);
    let thisSquare = event.target;
    if (thisSquare.className === "" && usedBallNums.includes(valor)) {
      thisSquare.className = "bgSelected";
      selected.push(thisSquare.id);
    }
  };

  const declareWinner = () => {
    if (selected.length === 24) {
      const body = {
        winner: users[0].jugadorGame,
      };
      registerWinner(body);
      navigate({
        pathname: "/winner",
      });
    } else {
      navigate({
        pathname: "/deleted",
      });
    }
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
                    <td onClick={getValueId} id="square0">
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square5">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square10">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square14">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square19">
                      {" "}
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td onClick={getValueId} id="square1">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square6">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square11">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square15">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square20">
                      {" "}
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td onClick={getValueId} id="square2">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square7">
                      {" "}
                      &nbsp;
                    </td>
                    <td id="rectangleFree"> FREE</td>
                    <td onClick={getValueId} id="square16">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square21">
                      {" "}
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td onClick={getValueId} id="square3">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square8">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square12">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square17">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square22">
                      {" "}
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td onClick={getValueId} id="square4">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square9">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square13">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square18">
                      {" "}
                      &nbsp;
                    </td>
                    <td onClick={getValueId} id="square23">
                      {" "}
                      &nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="general-table-bingo">
              <div className="general-table-bingo">
                <p className="title-balls-out">BALOTAS QUE YA SALIERON</p>
                {usedBallNums.map((element, index) => {
                  return (
                    <div className="ball-out" key={index}>
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 button-bingo-finish">
            <p className="note-players">PRESIONE AL GANAR</p>
            <button
              //disabled={!disableBingo}
              onClick={declareWinner}
              className="button-bingo-winner"
            >
              Bingo
            </button>
          </div>
          <div className="col-md-4 show-ball-bingo">
            <p className="note-players">BALOTA EN JUEGO</p>
            <div className="show-ball">{ball}</div>
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
      <Footer />
    </div>
  );
}

export default Game;
