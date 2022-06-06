import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import Error from "../error/Error";
import StartGame from "../start-game/StartGame";

export default function RoutesApp() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Login />} />
            <Route path="/signup" element= {<Register />} />
            <Route path="/error" element= {<Error />} />
            <Route path="/game" element= {<StartGame />} />
            </Routes>
        </BrowserRouter>
      );
}