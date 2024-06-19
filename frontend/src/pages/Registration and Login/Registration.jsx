import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from "../../components/Header/Header";
import InputForAuth from "../../components/Input/InputForAuth";
import { registration } from './../../reducers/store';
import "./Registration.css";
import "./LogIn.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (status === 'succeeded') {
      Swal.fire({
        icon: 'success',
        title: 'Успешная регистрация!',
        text: 'Вы успешно зарегистрированы. Теперь войдите в свой аккаунт!',
        confirmButtonText: 'ОК'
      }).then(() => {
        navigate('/login'); 
      });
    } else if (status === 'failed') {
      Swal.fire({
        icon: 'error',
        title: 'Ошибка регистрации!',
        text: error,
      });
    }
  }, [status, error, navigate]);

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(registration({ userName, email, password }))
      .unwrap()
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка!',
          text: err.message || 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
        });
      });
  };

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
            <form onSubmit={handleRegistration}>
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
                type="submit" 
                className="btnRegistration"
                disabled={status === 'loading'}
              >
                Создать аккаунт
              </button>
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
