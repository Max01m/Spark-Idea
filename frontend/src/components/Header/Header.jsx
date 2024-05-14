import React from "react";
import "./Header.css";
import logo from "../../Images/Logo-transformed.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="headerStyle">
      <ul className="linkForHeader">
        <li className="logoStyle">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </li>
        <li style={{ marginLeft: "8%" }}>
          <Link to="/aboutus" className="noStyle">
            О нас
          </Link>
        </li>
        <li>
          <Link to="/projects" className="noStyle">
            Проекты
          </Link>
        </li>
      </ul>
      
      <p><Link to='/logIn'>Войти</Link> </p>
    </div>
  );
};

export default Header;
