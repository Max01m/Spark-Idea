import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import InputForAuth from '../../components/Input/InputForAuth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './../../reducers/store';
import './LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, isAuth, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth && !error) {
      Swal.fire({
        icon: 'success',
        title: 'Успешная авторизация!',
      });
    }
  }, [isAuth, error]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка!',
          text: err || 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
        });
      });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <p>Войти с помощью Google</p>
            <span>или</span>
            <form onSubmit={handleLogin}>
              <InputForAuth
                value={email}
                setValue={setEmail}
                placeholder="Почта"
                type="email"
              />{' '}
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
             
              {error && <p>{error}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btnLogIn"
              >
                Войти
              </button>
            </form>
            <div className="wrapToLine">
              <span>Новый пользователь?</span>
              <span>
                <Link to="/registration">Зарегистрироваться</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
