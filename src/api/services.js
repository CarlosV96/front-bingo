import axios from "axios";
const url_auth = "http://localhost:4200/authenticate";
const url_register = "http://localhost:4200/register";

const url_postLobby = "http://localhost:8080/api/v1/player";
const url_getUsersLobby = "http://localhost:8080/api/v1/index";
const url_deleteLobby = "http://localhost:8080/api/v1/index/delete"

const url_postGame = "http://localhost:8080/api/v1/game";
const url_getUsersGame = "http://localhost:8080/api/v1/index/game";
const url_deleteGame = "http://localhost:8080/api/v1/game/delete"

const url_winner = "http://localhost:8080/api/v1/winner";
const url_getWinner = "http://localhost:8080/api/v1/index/winner";
const url_deleteWinner = "http://localhost:8080/api/v1/winner/delete"



/**
 * Para autenticar un usuario.
 * @param {*} body 
 * @returns 
 */
export const loginUser = async (body) => {
  try {
    const response = await axios.post(url_auth, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    
    return response;
  } catch (error) {
    return error;
  }
};


/* 

---------------------------------

*/ 

/**
 * Para registrar un usuario.
 * @param {*} body 
 * @returns 
 */
export const registerUser = async (body) => {
  try {
    const response = await axios.post(url_register, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    
    return response;
  } catch (error) {
    return error;
  }
};

/*
------------------------------------------------
*/

/**
 * Inserta los jugadores logueados, en la tabla lobby
 * @param {} body 
 * @returns 
 */
 export const insertPlayersLobby = async (body) => {
  try {
    const response = await axios.post(url_postLobby, body, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Obtiene todos los jugadores ya logueados en el lobby.
 * @returns 
 */
 export const getUsersLobby = async () => {
  try {
    const response = await axios.get(url_getUsersLobby, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Elimina todos los jugadores del lobby
 */
 export const deleteUsersLobby = async () => {
  try {
    const response = await axios.delete(url_deleteLobby, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/*
---------------------------------------------------
*/

/**
 * Inserta los jugadores logueados en la tabla game
 * @param {} body 
 * @returns 
 */
 export const insertPlayersGame = async (body) => {
  try {
    const response = await axios.post(url_postGame, body, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Obtiene todos los jugadores ya logueados.
 * @returns 
 */
export const getUsersGame = async () => {
  try {
    const response = await axios.get(url_getUsersGame, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Elimina todos los jugadores del game
 */
 export const deleteUsersGame = async () => {
  try {
    const response = await axios.delete(url_deleteGame, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/* 
---------------------------------------------------------------- 
*/

/**
 * Inserta al ganador en la tabla winner
 * @param {} body 
 * @returns 
 */
 export const registerWinner = async (body) => {
  try {
    const response = await axios.post(url_winner, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};


/**
 * Obtiene el ganador
 * @returns 
 */
 export const getWinner = async () => {
  try {
    const response = await axios.get(url_getWinner, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Elimina el jugador ganador para reiniciar el juego en 0
 */
 export const deleteWinner = async () => {
  try {
    const response = await axios.delete(url_deleteWinner, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};