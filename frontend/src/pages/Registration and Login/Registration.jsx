import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Registration.css";
import "./LogIn.css";
import { Link } from "react-router-dom";
import InputForAuth from "../../components/Input/InputForAuth";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

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
              <InputForAuth
                value={userName}
                setValue={setUserName}
                type="text"
                placeholder="Имя"
              />
              <br />
              <InputForAuth
                value={email}
                setValue={setEmail}
                placeholder="Почта"
                type="email"
              />
              <br />
              <InputForAuth
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Пароль"
              />
              <button  
              onClick={()=>registration(userName,email,password)}
              
              className="btnRegistration"> Создать аккаунт </button>
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
