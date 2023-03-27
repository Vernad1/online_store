import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import styles from "./Navbar.module.css";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";

export default function Navbar({ handleMouseOut, handleMouseOver }) {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  function logOut() {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav className={styles.nav}>
      <NavLink
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        to={SHOP_ROUTE}
        className={styles.nav__item}
      >
        Магазин
      </NavLink>

      <NavLink to={BASKET_ROUTE} className={styles.nav__item}>
        Корзина
      </NavLink>
      {user.isAuth ? (
        <>
          <NavLink className={styles.nav__item} to={ADMIN_ROUTE}>
            Админ панель
          </NavLink>
          <button className={styles.nav__button} onClick={logOut}>
            Выйти
          </button>
        </>
      ) : (
        <button
          className={styles.nav__button}
          onClick={() => navigate(LOGIN_ROUTE)}
        >
          Войти
        </button>
      )}
    </nav>
  );
}
