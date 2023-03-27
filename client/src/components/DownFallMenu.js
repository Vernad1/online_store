import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import styles from "./DownFallMenu.module.css";
import { SHOP_ROUTE } from "../utils/consts";

export default function DownFallMenu({ onMouseOver, onMouseOut }) {
  const { product } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={styles.dropdown__menu}
    >
      {product.types.map((type) => {
        return (
          <div onClick={() => navigate(SHOP_ROUTE + type.name)} key={type.id}>
            {type.name}
          </div>
        );
      })}
    </div>
  );
}
