import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import Products from "../components/Products";
import { fetchProducts, fetchTypes } from "../http/productAPI";

const Shop = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchProducts().then((data) => product.setProducts(data.rows));
  }, [product]);

  return (
    <div className="shop container">
      <h1 className="shop-title">Одежда</h1>
      <Products product={product}></Products>
    </div>
  );
});

export default Shop;

{
  /* <div className="catalog">

        {product.products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div> */
}
