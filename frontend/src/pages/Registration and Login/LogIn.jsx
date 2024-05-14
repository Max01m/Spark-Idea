import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div>
      <Header />
      <div className="wrapperForLogIn">
        <div className="leftSideLogIn">
          <h2>
            Воплоти свои идеи в <br /> реальность
          </h2>
        </div>
        <div className="rightSideLogIn">
          <div className="ContentLogIn">
            <h1 >Добро пожаловать!</h1>
            <span>Рады вас видеть!</span>
            <p>Войти с помощь Google</p>
            <span>или</span>
            <form action="">
              <input placeholder='Почта' className='inputStyle' type="email" /> <br />
              <input type="password" placeholder='Пароль' className='inputStyle' />
              <div className='wrapToLine' >
                <input type="checkbox" />
                <span>Запомнить на 30 дней</span>
                <span>Забыли пароль?</span>
              </div>
              <button className='btnLogIn' > Войти </button>
            </form>
            <div className='wrapToLine' >
              <span>Новый пользователь?</span>
              <span>
                <Link to="/regis">Зарегистрироваться</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
