import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Select from "react-select";

const CreateProduct = observer(({ onHide }) => {
  const { product } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [size, setSize] = useState("");
  const [options, setOptions] = useState([]);

  console.log(product.selectedType.name);
  useEffect(() => {
    setOptions(
      product.types.map((item) => {
        item.value = item.name;
        item.label = item.name;
        return item;
      })
    );
  }, []);

  const addInfo = (e) => {
    e.preventDefault();
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div onClick={onHide} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__window">
        <h1>Добавить товар</h1>
        <form className="modal__form">
          <Select
            onChange={(e) => console.log(e.target.value)}
            options={options}
          >
            {product.types.map((type) => {
              return (
                <option
                  onChange={() => product.setSelectedType(type)}
                  key={type.id}
                  value={type.id}
                >
                  {type.name}
                </option>
              );
            })}
          </Select>
          <select label="Single select">
            {product.types.map((type) => {
              return (
                <option
                  onClick={() => product.setSelectedType(type)}
                  key={type.id}
                  value={type.id}
                >
                  {type.name}
                </option>
              );
            })}
          </select>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название товара"
          ></input>
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            placeholder="Введите цену товара"
          ></input>
          <input onChange={selectFile} type="file"></input>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Введите размеры через запятую"
          ></input>
          <hr></hr>
          <button onClick={(e) => addInfo(e)} className="modal__button">
            Добавить новое свойство
          </button>
          {info.map((i) => (
            <div>
              <input placeholder="Введите название"></input>
              <input placeholder="Введите описание"></input>
            </div>
          ))}
        </form>
        <div className="modal__buttons">
          <button onClick={onHide} className="modal__button">
            Закрыть
          </button>
          <button className="modal__button">Добавить</button>
        </div>
      </div>
    </div>
  );
});

export default CreateProduct;
