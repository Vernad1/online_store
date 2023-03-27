import React, { useState } from "react";
import { createType } from "../../http/productAPI";

export default function CreateType({ show, onHide }) {
  const [value, setValue] = useState("");

  function addType(e) {
    e.preventDefault();
    createType({ name: value }).then((data) => setValue(""));
    onHide();
  }

  return (
    <div onClick={onHide} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__window">
        <h1>Добавить тип</h1>
        <form className="modal__form">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <div className="modal__buttons">
            <button onClick={onHide} className="modal__button">
              Закрыть
            </button>
            <button className="modal__button" onClick={(e) => addType(e)}>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
