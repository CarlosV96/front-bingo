import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  //const [contact, setContact] = useState({});
  const [startGame, setStartGame] = useState(false);
  const [respuestaErr, setRespuestaErr] = useState("");

    return (
        <Context.Provider
          value={{
 //           contact,
   //         setContact,
            startGame,
            setStartGame,
            respuestaErr,
            setRespuestaErr
          }}
        >
          {children}
        </Context.Provider>
      );
};

export default Provider;

