import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
import styles from "./Header.module.css";
import { observer } from "mobx-react-lite";
import { ReactComponent as AtmoicLogo } from "../assets/atomicLogo.svg";
import DownFallMenu from "./DownFallMenu";
import Navbar from "./Navbar";
import { SHOP_ROUTE } from "../utils/consts";

const Header = observer(() => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  function handleMouseOver() {
    setIsHovering(true);
    clearTimeout(timeoutRef.current);
  }
  function handleMouseOut() {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 3000);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className={styles.header}>
      <AtmoicLogo
        onClick={() => navigate(SHOP_ROUTE)}
        className={styles.logo}
      ></AtmoicLogo>
      <Navbar
        handleMouseOut={handleMouseOut}
        handleMouseOver={handleMouseOver}
      ></Navbar>
      {isHovering && (
        <DownFallMenu
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></DownFallMenu>
      )}
    </header>
  );
});

export default Header;
