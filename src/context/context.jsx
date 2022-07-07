import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [respuestaErr, setRespuestaErr] = useState("");
  const [player, setPlayer] = useState("");
  const [fecha, setFecha] = useState("");
  const [thereIsPlayer, setThereIsPlayer] = useState("");

  return (
    <Context.Provider
      value={{
        thereIsPlayer,
        setThereIsPlayer,
        fecha,
        setFecha,
        player,
        setPlayer,
        respuestaErr,
        setRespuestaErr,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
