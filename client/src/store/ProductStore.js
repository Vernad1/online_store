import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [];
    this._products = [];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setProducts(products) {
    this._products = products;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get products() {
    return this._products;
  }

  get selectedType() {
    return this._selectedType;
  }
}
