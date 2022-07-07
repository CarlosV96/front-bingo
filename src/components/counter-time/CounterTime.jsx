import React, { useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
import "./CounterTime.css";
import { deleteUsersLobby } from "../../api/services";

/**
 * Componente contador, que inicia en el lobby cuando alguien se registra
 * @returns
 */
const CounterTime = () => {
  const { fecha } = useContext(Context);
  const navigate = useNavigate();

  const fechaNew = new Date(fecha);

  const AddMinutesToDate = (minutes) => {
    return new Date(fechaNew.getTime() + minutes * 60000);
  };

  //Tiempo para configurar el temporizador
  let next = AddMinutesToDate(5);

  useEffect(() => {

    let id = setInterval(() => {
      const countdown = document.getElementById("countdown");
      const launchDate = next;
      const now = new Date().getTime();
      const distance = launchDate - now;

      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //Mostrar respuesta
      countdown.innerHTML = `
      <div>${mins}<span>Minutos</span></div>
      <div>${seconds}<span>Segundos</span></div>    
      `;
    
      if (distance < 0) {
        clearInterval(id);
        deleteUsersLobby();
        navigate({
          pathname: "/game",
        });
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="waiting-time-container">
      <div className="waiting-time">
        <h1>
          Tiempo de espera para empezar el juego: <br />
        </h1>
        <p id="countdown"> </p>
      </div>
    </div>
  );
};

export default CounterTime;

