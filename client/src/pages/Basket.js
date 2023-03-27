import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { createBasket, fetchBasket } from "../http/basketAPI";
import { $authHost } from "../http";

export default function Basket() {
  const { user } = useContext(Context);
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    if (user.isAuth) {
      fetchBasket(user._user.id).then((data) => console.log(data));
    }
    console.log(user);
  }, []);

  return (
    <>
      {user.isAuth ? <div>Basket</div> : <div>Вы не авторизованы!</div>}
      <button>CLICK</button>
    </>
  );
}
