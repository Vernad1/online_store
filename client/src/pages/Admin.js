import React, { useState } from "react";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

export default function Admin() {
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisivle, setProductVisible] = useState(false);

  function hideTypeModal(e) {
    e.preventDefault();
    setTypeVisible(false);
  }

  function hideProductModal(e) {
    e.preventDefault();
    setProductVisible(false);
  }

  return (
    <div className="admin container">
      <button onClick={() => setTypeVisible(true)} className="admin__button">
        Добавить тип
      </button>
      <button onClick={() => setProductVisible(true)} className="admin__button">
        Добавить товар
      </button>

      {productVisivle && (
        <CreateProduct onHide={hideProductModal}></CreateProduct>
      )}
      {typeVisible && <CreateType onHide={hideTypeModal}></CreateType>}
    </div>
  );
}
