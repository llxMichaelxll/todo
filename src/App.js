import { React } from "react";
import { Link, BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "./Menu.css";

import { Abajo } from "./componentes/abajo";
import { Perso } from "./hooks/person";
import {Rperso} from './hooks/rPerson'
import {Capitulos} from './hooks/capitulos'

export const Home = () => {
  return (
    <>
    <Rperso/>
      <Abajo />
    </>
  );
};
export const Characters = () => {
  return (
    <>
      <Perso />
      <Abajo />
    </>
  );
};
export const Chapter = () => {
  return(
  <>
  <Capitulos/>
  <Abajo/>
  </>
  );
}
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Menu">
          <div className="Logo"></div>
          <ul className="Menu-b">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Perso">Characters</Link>
            </li>
            <li>
              <Link to="/Capi">Chapter</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perso" element={<Characters />} />
          <Route path="/Capi" element={<Chapter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
