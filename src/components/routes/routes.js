import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import Error from "../error/Error";
import LobbyBingo from "../lobby-bingo/LobbyBingo";
import Game from "../game/Game";
import Provider from "../../context/context";
import Deleted from "../deleted/Deleted";
import Winner from "../winner/Winner";
import Loser from "../loser/Loser";

/**
 * Rutas de componentes.
 * @returns 
 */
export default function RoutesApp() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/lobby" element={<LobbyBingo />} />
          <Route path="/game" element={<Game />} />
          <Route path="/deleted" element={<Deleted />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/loser" element={<Loser/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
