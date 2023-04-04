import "../Menu.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="Menu">
      <div className="Logo"></div>
      <ul className="Menu-b">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Perso">Characters</Link>
        </li>
        <li>
          <Link to="">Chapter</Link>
        </li>
      </ul>
    </div>
  );
};
