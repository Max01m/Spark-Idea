import { useState, } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./LogIn.css";
import InputForAuth from "../../components/Input/InputForAuth";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";




const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


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
            <h1>Добро пожаловать!</h1>
            <span>Рады вас видеть!</span>
            <p>Войти с помощь Google</p>
            <span>или</span>
            <form >
              <InputForAuth
                value={email}
                setValue={setEmail}
                placeholder="Почта"
                type="email"
              />{" "}
              <br />
              <InputForAuth
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Пароль"
              />
              <div className="wrapToLine">
                <input type="checkbox" />
                <span>Запомнить на 30 дней</span>
                <span>Забыли пароль?</span>
              </div>
              <button
              onClick={()=>{ dispatch(login(email,password))
              }}
              className="btnLogIn"> Войти </button>
            </form>
            <div className="wrapToLine">
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
