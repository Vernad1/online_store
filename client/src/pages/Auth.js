import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import styles from "./Auth.module.css";
import AuthForm from "../components/UI/AuthForm";
import AuthInput from "../components/UI/AuthInput";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRTION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async (e) => {
    try {
      let data;
      e.preventDefault();
      console.log("click");
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div style={{ height: window.innerHeight - 71 }} className={styles.auth}>
      <div className={styles.auth__inner}>
        <AuthForm>
          <h3 className={styles.auth__title}>
            {isLogin ? "Авторизация" : "Регистрация"}
          </h3>

          <AuthInput
            text="email"
            type="text"
            placeholder="Введите email"
            onChange={(e) => setEmail(e.target.value)}
          ></AuthInput>
          <AuthInput
            text="Пароль"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          ></AuthInput>

          <button onClick={(e) => click(e)} className={styles.auth__button}>
            {isLogin ? "Войти" : "Регистрация"}
          </button>

          {isLogin ? (
            <div className={styles.auth__text}>
              Нет аккаунта?{" "}
              <NavLink to={REGISTRTION_ROUTE}>зарегестрируйтесь!</NavLink>
            </div>
          ) : (
            <div sName={styles.auth__text}>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
          )}
        </AuthForm>
      </div>
    </div>
  );
});

export default Auth;
