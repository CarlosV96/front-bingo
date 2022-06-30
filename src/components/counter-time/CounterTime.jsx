import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CounterTime.css";
import { deleteUsersLobby } from "../../api/services";

const CounterTime = () => {
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    let id = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          //deleteUsersLobby();
          clearInterval(id);
          navigate({
            pathname: "/game"
          });
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="waiting-time-container">
        <div className="waiting-time">
          <h1>
            Tiempo de espera para empezar el juego: <br />
            <span className="timer">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </h1>
        </div>
    </div>
  );
};

export default CounterTime;