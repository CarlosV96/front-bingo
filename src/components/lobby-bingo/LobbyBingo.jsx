import "./LobbyBingo.css";
import bingo from "./../../assets/images/bingo.png";
import CounterTime from "../counter-time/CounterTime";
import { getUsersLobby } from "../../api/services";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";

/**
 * Componente Lobby, donde todos los jugadores registrados aparecerán
 * y esperarán el terminar un contador para empezar el juego.
 * @returns
 */
const LobbyBingo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      callGetUsers();
    }, 1000);
  }, [users]);

  const callGetUsers = async () => {
    await getUsersLobby()
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lobby-bingo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={bingo} className="img-bingo mt-5" alt="Bingo" />
            <CounterTime />
            <p className="note">
              Estos son los jugadores que se han anexado al juego:
            </p>
            <ol className="gradient-list">
              {users.map((user, index) => (
                <li key={index}>{user.jugadorLobby}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LobbyBingo;
