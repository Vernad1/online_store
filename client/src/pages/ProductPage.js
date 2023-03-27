import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "..";
import Sizes from "../components/Sizes";
import { createBasket } from "../http/basketAPI";
import { fetchOneProduct } from "../http/productAPI";

export default function ProductPage() {
  const { user } = useContext(Context);
  const [size, setSize] = useState(null);
  const { id } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetchOneProduct(id).then((data) => setproduct(data));
  }, []);

  function selectSize(size) {
    setSize(size);
    console.log(size);
  }

  function addToBag() {
    if (user._isAuth && size) {
      createBasket(user._user.id, id, size).then((data) => console.log(data));
    } else {
      alert("вы не авторизованы");
    }
    if (!size) {
      alert("выберете размер");
    }
  }

  return (
    <div className="product__page container">
      <div className="product__image">
        <img src={process.env.REACT_APP_API_URL + product.img}></img>
      </div>
      <div className="product__info">
        <div className="info__title">{product.name}</div>
        <div className="info__price">{product.price + " p."}</div>
        <Sizes selectedSize={size} selectSize={selectSize}></Sizes>
        <button onClick={() => addToBag()} className="product__button">
          add to bag
        </button>
      </div>
    </div>
  );
}
