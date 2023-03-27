import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../utils/consts";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  //console.log(navigate)

  return (
    <div className="card container">
      <div className="card__image">
        <img
          onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}
          src={process.env.REACT_APP_API_URL + product.img}
        ></img>
      </div>

      <div className="product__name">{product.name}</div>
      <div className="product__price">{product.price} р.</div>
    </div>
  );
}
