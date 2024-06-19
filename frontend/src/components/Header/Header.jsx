import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import logo from "../../Images/Logo-transformed.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/store";
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false); 
  };

  const handleClickOutside = (event) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerStyle">
      <ul className="linkForHeader">
        <li className="logoStyle">
          <Link to="/">
            <img className="logoCompany" src={logo} alt="Logo" />
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

      <div className="authSection">
        {isAuth ? (
          <div className="avatarContainer" ref={avatarRef}>
           <Avatar 
              src={user.user.avatar || "/broken-image.jpg"}
              alt="User Avatar"
              className="avatar"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <div className="dropdownMenu">
                <button onClick={() => navigate("/profile")}>Мой профиль</button>
                <button onClick={handleLogout}>Выйти</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="loginLink">Войти</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
