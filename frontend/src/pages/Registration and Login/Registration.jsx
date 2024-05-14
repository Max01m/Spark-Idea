import React from "react";
import Header from "../../components/Header/Header";
import "./Registration.css";
import "./LogIn.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <Header />
      <div className="wrapperForRegistration">
        <div className="leftSideRegistration">
          <h2>
            Воплоти свои идеи в <br /> реальность
          </h2>
        </div>
        <div className="rightSideRegistration">
          <div className="ContentRegistration">
            <h1>Создать аккаунт</h1>
            <span>Рады вас видеть! Введите данные</span>
            <p>Регистрация с Google</p>
            <span>или</span>
            <form action="">
              <input type="text" placeholder="Имя" className="inputStyle" />
              <input placeholder="Почта" className="inputStyle" type="email" />
              <input
                type="password"
                placeholder="Пароль"
                className="inputStyle"
              />
              <button className="btnRegistration"> Создать аккаунт </button>
            </form>
            <div className="wrapToLine">
              <span>Уже есть аккаунт?</span>
              <span>
                <Link to="/login">Войти</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
