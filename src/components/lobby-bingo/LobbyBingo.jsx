//import React, { useEffect, useState } from "react";
import "./LobbyBingo.css";
import bingo from "./../../assets/images/bingo.png";
import CounterTime from "../counter-time/CounterTime";
import { getUsersLobby } from "../../api/services";
import React, { useEffect, useState, useContext } from "react";
//import { Context } from "../../context/context";

const LobbyBingo = () => {
  //const { respuestaErr } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    callGetUsers();
  }, []);

  //console.log(respuestaErr);

  const callGetUsers = async () => {
    await getUsersLobby()
      .then((response) => {
        console.log("DATA JUGADORES--",response.data.data);
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
    </div>
  );
};

export default LobbyBingo;
