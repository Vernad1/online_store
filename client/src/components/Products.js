import { observer } from "mobx-react-lite";
import React from "react";
import ProductCard from "./UI/ProductCard";

const Products = observer(({ product }) => {
  return (
    <div className="catalog">
      {product.products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
});

export default Products;
